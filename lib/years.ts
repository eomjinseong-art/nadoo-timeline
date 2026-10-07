import { RANGE_END, RANGE_START } from "@/lib/site";

/** 서력에는 0년이 없습니다. 음수는 기원전, 양수는 기원후입니다. */
export function formatYear(year: number, circa = false): string {
  const core = year < 0 ? `기원전 ${Math.abs(year)}년` : `기원후 ${year}년`;
  return circa ? `${core}경` : core;
}

export function formatSpan(start: number, end: number, softStart = false, softEnd = false): string {
  const left = formatYear(start, softStart);
  const right = end >= RANGE_END && softEnd ? `${formatYear(end)} 이후에도` : formatYear(end, softEnd);
  return `${left} – ${right}`;
}

export type ParseResult =
  | { ok: true; year: number }
  | { ok: false; reason: "bad" | "zero" | "range" };

export function parseYear(raw: string): ParseResult {
  const trimmed = raw.trim();
  if (!trimmed) return { ok: false, reason: "bad" };
  const s = trimmed.replace(/년/g, "").replace(/경/g, "").replace(/,/g, "").replace(/\s+/g, " ").trim();
  if (s === "0" || s === "-0" || s === "+0") return { ok: false, reason: "zero" };

  let year: number | null = null;
  const bc =
    /^(?:기원전|bc|bce)\s*(-?\d+)$/i.exec(s) ||
    /^(-?\d+)\s*(?:bc|bce)$/i.exec(s);
  const ad =
    /^(?:기원후|ad|ce)\s*(\d+)$/i.exec(s) ||
    /^(\d+)\s*(?:ad|ce)$/i.exec(s);

  if (bc) {
    const n = Math.abs(Number.parseInt(bc[1], 10));
    year = n === 0 ? 0 : -n;
  } else if (ad) {
    year = Number.parseInt(ad[1], 10);
  } else if (/^[+-]?\d+$/.test(s)) {
    year = Number.parseInt(s, 10);
  }

  if (year === null || Number.isNaN(year)) return { ok: false, reason: "bad" };
  if (year === 0) return { ok: false, reason: "zero" };
  if (year < RANGE_START || year > RANGE_END) return { ok: false, reason: "range" };
  return { ok: true, year };
}

export function parseError(reason: "bad" | "zero" | "range"): string {
  if (reason === "zero") return "서력에는 0년이 없습니다. 기원전 1년 다음은 기원후 1년입니다.";
  if (reason === "range") return "이 연표는 기원전 3150년경부터 기원후 1453년까지입니다.";
  return "연도를 읽지 못했습니다. 기원전 331, -331, BC 331, 1453처럼 적어 주세요.";
}
