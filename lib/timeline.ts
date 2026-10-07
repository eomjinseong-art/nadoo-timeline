import { eras, laneIndex, lanes } from "@/data/lanes";
import { periods } from "@/data/periods";
import type { EraZoom, LaneId } from "@/data/types";
import { chronological } from "@/data/events";

export function periodsAt(lane: LaneId, year: number) {
  return periods
    .filter((period) => period.lane === lane && year >= period.start && year <= period.end)
    .sort((a, b) => a.end - a.start - (b.end - b.start));
}

export function cursorLabel(lane: LaneId, year: number) {
  const active = periodsAt(lane, year);
  if (active.length === 0) return fallback(lane, year);
  return active.map((period) => period.title).join(" · ");
}

export function cursorDetail(lane: LaneId, year: number) {
  const active = periodsAt(lane, year);
  if (active.length === 0) return fallback(lane, year);
  return active.map((period) => period.state).join(" ");
}

function fallback(lane: LaneId, year: number) {
  if (lane === "korea" && year < -1500) return "신석기 마을. 나라 이름은 없습니다.";
  if (lane === "greece" && year < -2000) return "궁전 국가 이전의 에게 해.";
  if (lane === "rome" && year < -753) return "로마 시 이전의 이탈리아.";
  if (lane === "persia" && year < -670) return "이란 고원의 여러 세력. 왕조 막대 이전입니다.";
  return "이 무렵은 시대 막대 사이입니다.";
}

export function cursorLine(year: number) {
  return lanes.map((lane) => `${lane.short} ${cursorLabel(lane.id, year)}`).join(" / ");
}

export function eraForYear(year: number): EraZoom {
  const containing = eras.filter((era) => era.id !== "all" && year >= era.start && year <= era.end);
  if (containing.length === 0) return eras[0];
  return containing.sort((a, b) => a.end - a.start - (b.end - b.start))[0];
}

export function eventsInRange(start: number, end: number) {
  return chronological.filter((event) => event.year >= start && event.year <= end);
}

export function nearestEventYear(year: number, start: number, end: number) {
  const inRange = eventsInRange(start, end);
  if (inRange.length === 0) return year;
  return inRange.reduce((best, event) => (Math.abs(event.year - year) < Math.abs(best - year) ? event.year : best), inRange[0].year);
}

export function pxPerYear(span: number) {
  if (span > 3000) return 1.55;
  if (span > 800) return 3.1;
  if (span > 450) return 4.6;
  return 6.4;
}

export function tickStep(span: number) {
  if (span > 3000) return 500;
  if (span > 1000) return 200;
  if (span > 500) return 100;
  return 50;
}

export { laneIndex };
