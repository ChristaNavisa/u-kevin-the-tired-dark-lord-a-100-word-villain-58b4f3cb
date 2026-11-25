import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const monologue = [
  "Three hundred years at this bridge, and still they come with swords. Pay the toll, little knight \u2014 one memory, one name, that's the price. I wrote it on the sign myself, before the river ate the paint.",
  "I meant to turn your bones to gravel. I did. Once. It took all afternoon, and the forms... look, cross or don't cross, but stop shouting.",
  "The geese have gone quiet, the lanterns are low, and I have stood here so long the stones know my weight.",
  "If you must die, die quietly. The bridge, like me, is done for the day.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, monologue + "\n", "utf8");
const words = countWords(monologue);
console.log(`wrote ${outFile}: ${words} words, ${monologue.length} chars`);

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}
