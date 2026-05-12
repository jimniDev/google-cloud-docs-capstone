#!/usr/bin/env node
import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const entries = ["index.html", "404.html", "favicon.svg", "icons.svg", "pages"];

for (const name of entries) {
  await cp(join(root, name), join(dist, name), { recursive: true });
}

console.log(`Built static site at ${dist}`);
