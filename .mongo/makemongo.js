import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const OUTPUT = path.join(ROOT, "./.mongo/mongo.fixtures.json");

function toTableKey(key) {
    return key
        .replace(/\.json$/, "")
        .replace(/\./g, "-")
        .toLowerCase();
}

function findFixtures(dir, results = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const full = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            findFixtures(full, results);
        } else if (entry.name.endsWith(".fixture.json")) {
            results.push(full);
        }
    }

    return results;
}

const files = findFixtures(ROOT);

const out = {};

for (const file of files) {
    const raw = fs.readFileSync(file, "utf-8");
    const json = JSON.parse(raw);

    const sourceKey = json.key;
    if (!sourceKey) continue;

    const tableKey = toTableKey(sourceKey);
    const data = json[sourceKey];

    if (!data) continue;

    out[tableKey] = data;
}

fs.writeFileSync(OUTPUT, JSON.stringify(out, null, 2));

console.log(`Wrote ${Object.keys(out).length} tables to ${OUTPUT}`);