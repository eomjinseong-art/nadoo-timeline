import { readFileSync } from "node:fs";
import path from "node:path";
import { toCatalog } from "@/data/films";

const disk = JSON.parse(readFileSync(path.join(process.cwd(), "public/films.json"), "utf8"));
const live = toCatalog();
if (JSON.stringify(disk) !== JSON.stringify(live)) {
  throw new Error("public/films.json이 data/films.ts와 다릅니다. 목록을 다시 내보내 주세요.");
}

export const filmCatalogMatches = true;
