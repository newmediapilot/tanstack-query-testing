import fs from "fs";
import http from "http";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";

const mongod = await MongoMemoryServer.create();
const client = new MongoClient(mongod.getUri());
await client.connect();
const db = client.db("mockdb");

const fixtures = JSON.parse(fs.readFileSync("./.mongo/mongo.fixtures.json", "utf-8"));

for (const [collection, docs] of Object.entries(fixtures)) {
    await db.collection(collection).insertMany(docs.data);
}

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const url = req.url || "/";
    const collection = url.replace("/", "");

    if (url === "/api/getcustom") {
        const c1 = await db.collection("document-data").find({}).toArray();
        const c2 = await db.collection("document-name").find({}).toArray();
        return res.end(
            JSON.stringify(
                {
                    "document-data": c1,
                    "document-name": c2
                },
                null,
                2
            )
        );
    }

    if (!collection || !fixtures[collection]) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: "not found" }));
    }

    const data = await db.collection(collection).find({}).toArray();

    return res.end(JSON.stringify(data, null, 2));
});

server.listen(4000, () => {
    console.log("API server running on http://localhost:4000");
});