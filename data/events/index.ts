import type { HistEvent, LaneId } from "@/data/types";
import { laneIndex } from "@/data/lanes";
import { egyptEvents } from "@/data/events/egypt";
import { greeceEvents } from "@/data/events/greece";
import { koreaEvents } from "@/data/events/korea";
import { persiaEvents } from "@/data/events/persia";
import { romeEvents } from "@/data/events/rome";
import { RANGE_END, RANGE_START } from "@/lib/site";

const ALLOWED_ORIGINS = new Set([
  "https://rome-stories.vercel.app",
  "https://greece-stories.vercel.app",
  "https://egypt-stories.vercel.app",
  "https://persia-stories.vercel.app",
  "https://korea-stories.vercel.app",
  "https://nadoo-myth.vercel.app",
  "https://philosophy-stories.vercel.app",
]);

export const events: HistEvent[] = [
  ...koreaEvents,
  ...greeceEvents,
  ...romeEvents,
  ...egyptEvents,
  ...persiaEvents,
];

function assertEvents(list: HistEvent[]) {
  const slugs = new Set<string>();
  for (const event of list) {
    if (slugs.has(event.slug)) throw new Error(`중복 슬러그: ${event.slug}`);
    slugs.add(event.slug);
    if (event.year === 0 || event.year < RANGE_START || event.year > RANGE_END) {
      throw new Error(`연도 범위 밖: ${event.slug} ${event.year}`);
    }
    if (event.tradition && !event.traditionNote) throw new Error(`전승 설명이 없습니다: ${event.slug}`);
    const origin = new URL(event.sister.href).origin;
    if (!ALLOWED_ORIGINS.has(origin)) throw new Error(`확인되지 않은 자매 사이트: ${event.sister.href}`);
  }
}

assertEvents(events);

export const chronological: HistEvent[] = [...events].sort((a, b) => {
  if (a.year !== b.year) return a.year - b.year;
  const seq = (a.seq ?? 0) - (b.seq ?? 0);
  if (seq !== 0) return seq;
  return laneIndex(a.lane) - laneIndex(b.lane);
});

export function eventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function eventsByLane(lane: LaneId) {
  return chronological.filter((event) => event.lane === lane);
}

export function neighbors(slug: string) {
  const index = chronological.findIndex((event) => event.slug === slug);
  return {
    prev: index > 0 ? chronological[index - 1] : undefined,
    next: index >= 0 && index < chronological.length - 1 ? chronological[index + 1] : undefined,
  };
}

export function sameEra(event: HistEvent, limit = 6) {
  return chronological
    .filter((other) => other.slug !== event.slug && Math.abs(other.year - event.year) <= 60)
    .sort((a, b) => Math.abs(a.year - event.year) - Math.abs(b.year - event.year) || laneIndex(a.lane) - laneIndex(b.lane))
    .slice(0, limit);
}

export function countByLane() {
  const counts = { korea: 0, greece: 0, rome: 0, egypt: 0, persia: 0 };
  for (const event of events) counts[event.lane] += 1;
  return counts;
}
