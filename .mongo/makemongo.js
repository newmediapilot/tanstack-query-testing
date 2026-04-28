import fs from "fs";
import { globSync } from "glob";

const files = globSync("**/*.fixture.json", {
    absolute: true,
    ignore: ["node_modules/**", ".mongo/**"],
});

const out = {};

for (const file of files) {
    const json = JSON.parse(fs.readFileSync(file, "utf-8"));
    const key = json.key;
    out[key] = json[key];
}

fs.mkdirSync("./.mongo", { recursive: true });
fs.writeFileSync("./.mongo/mongo.fixtures.json", JSON.stringify(out, null, 2));

console.log(`Makemongo wrote ${Object.keys(out).length} tables`);