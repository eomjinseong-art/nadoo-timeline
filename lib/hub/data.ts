import filmsJson from "@/data/hub/films.json";
import rulersJson from "@/data/hub/rulers.json";
import warsJson from "@/data/hub/wars.json";
import peopleJson from "@/data/hub/people.json";

/** R = 실존 인물, B = 실존 인물 각색, F = 가상 인물 */
export type Badge = "R" | "B" | "F";

export type Protagonist = {
  ko: string;
  en: string;
  badge: Badge;
  note: string;
  href: string | null;
  unsure: boolean;
};

export type HubFilm = {
  id: string;
  ko: string;
  en: string;
  year: number;
  kind: string;
  /** 이야기 속 해. 기원전은 음수. null은 신화·판타지·해 미상. */
  start: number | null;
  end: number | null;
  regions: string[];
  prots: Protagonist[];
  loose: boolean;
  note: string;
  sisters: { label: string; href: string }[];
  checklist: string | null;
  inTimeline: boolean;
};

export type Ruler = {
  country: string;
  group: string;
  ko: string;
  en: string;
  start: number;
  end: number;
  href: string | null;
  circa: boolean;
  legend: boolean;
  note: string;
};

export type War = {
  id: string;
  ko: string;
  en: string;
  start: number;
  end: number;
  region: string;
  sideA: [string, string];
  sideB: [string, string];
  result: string;
  films: string[];
  links: [string, string][];
  note: string;
  circa: boolean;
};

export type Person = {
  country: string;
  ko: string;
  en: string;
  born: number | null;
  died: number | null;
  role: string;
  href: string | null;
  circa: boolean;
  legend: boolean;
  active: [number, number] | null;
};

export const hubFilms = filmsJson as HubFilm[];
export const rulers = rulersJson as Ruler[];
export const wars = (warsJson as War[]).slice().sort((a, b) => a.start - b.start || a.end - b.end);
export const people = peopleJson as Person[];

export const BADGES: Record<Badge, { ko: string; en: string; cls: string }> = {
  R: { ko: "실존 인물", en: "Real", cls: "border-laurel text-laurel bg-laurel/5" },
  B: { ko: "실존 인물 각색", en: "Based on real", cls: "border-dusk text-dusk bg-dusk/5" },
  F: { ko: "가상 인물", en: "Fictional", cls: "border-line text-muted bg-stone" },
};

export const REGIONS: { id: string; ko: string; en: string }[] = [
  { id: "egypt", ko: "이집트", en: "Egypt" },
  { id: "israel", ko: "이스라엘·성경", en: "Israel" },
  { id: "greece", ko: "그리스", en: "Greece" },
  { id: "persia", ko: "페르시아", en: "Persia" },
  { id: "rome", ko: "로마·비잔티움", en: "Rome/Byzantium" },
  { id: "byzantium", ko: "동로마만", en: "Byzantium" },
  { id: "germanic", ko: "게르만", en: "Germanic" },
  { id: "china", ko: "중국·삼국지", en: "China" },
  { id: "viking", ko: "바이킹", en: "Vikings" },
  { id: "medieval", ko: "중세 유럽", en: "Medieval" },
  { id: "korea", ko: "한국", en: "Korea" },
  { id: "arts", ko: "예술가", en: "Artists" },
  { id: "modern", ko: "근현대", en: "Modern" },
];
export const regionKo = (id: string) => REGIONS.find((r) => r.id === id)?.ko ?? id;

export const RULER_COUNTRIES = [
  { id: "rome", ko: "로마·동로마", en: "Rome/Byzantium" },
  { id: "greece", ko: "그리스 (아테네·스파르타·마케도니아)", en: "Greece" },
  { id: "egypt", ko: "이집트", en: "Egypt" },
  { id: "persia", ko: "페르시아", en: "Persia" },
  { id: "germanic", ko: "게르만", en: "Germanic" },
  { id: "viking", ko: "바이킹·북유럽", en: "Vikings" },
  { id: "korea", ko: "한국", en: "Korea" },
  { id: "china", ko: "중국 (삼국)", en: "China" },
];

/** 서력에 0년은 없습니다. */
export function yr(y: number): string {
  return y < 0 ? `기원전 ${-y}년` : `${y}년`;
}
export function yrShort(y: number): string {
  return y < 0 ? `BC ${-y}` : `${y}`;
}
export function span(s: number | null, e: number | null, circa = false): string {
  if (s === null) return "연대 없음 (신화·전설·해 미상)";
  const c = circa ? "경" : "";
  if (e === null || e === s) return `${yr(s)}${c}`;
  if (s < 0 && e < 0) return `기원전 ${-s}–${-e}년${c}`;
  if (s > 0) return `${s}–${e}년${c}`;
  return `${yr(s)} – ${yr(e)}${c}`;
}

export function filmsChrono(): HubFilm[] {
  return hubFilms
    .slice()
    .sort((a, b) => {
      if (a.start === null && b.start === null) return a.year - b.year;
      if (a.start === null) return 1;
      if (b.start === null) return -1;
      return a.start - b.start || (a.end ?? a.start) - (b.end ?? b.start) || a.year - b.year;
    });
}

export const filmById = new Map(hubFilms.map((f) => [f.id, f]));

export function badgeCounts() {
  const c = { R: 0, B: 0, F: 0 } as Record<Badge, number>;
  for (const f of hubFilms) for (const p of f.prots) c[p.badge] += 1;
  return c;
}
