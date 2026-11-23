// One-line pitch entry for make.fun's "A Day of One-Line Pitches".
// Program/v1: writes the pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PITCH =
  "Just describe the app idea you've been sitting on in plain words to an AI agent on make.fun, and it'll build your first app for you — no coding, no fuss.";

// The house gate only accepts 1–240 characters of non-blank UTF-8 text,
// and the judge brief asks for a single sentence, so refuse to write
// anything that does not meet both bars instead of shipping it quietly.
const MAX_CHARS = 240;
if (PITCH.length === 0 || PITCH.length > MAX_CHARS || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-${MAX_CHARS} chars, got ${PITCH.length}`);
}
if (PITCH.includes("\n")) {
  throw new Error("pitch must be a single line");
}

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, PITCH, "utf8");
console.log(`wrote ${PITCH.length} chars to ${OUT_PATH}`);
