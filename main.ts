import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY: string =
  "ERROR 404: Bread not found. It was here a minute ago. We are both confused.";

// The gate only accepts 1–120 characters, so refuse to write an entry
// that could never be judged instead of silently emitting it.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${ENTRY.length}`);
}

const outDir: string = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY);
