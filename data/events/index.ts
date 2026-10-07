import { laneIds, type HistEvent, type LaneId } from "@/data/types";
import { laneIndex, lanes } from "@/data/lanes";
import { periods } from "@/data/periods";
import { egyptEvents } from "@/data/events/egypt";
import { greeceEvents } from "@/data/events/greece";
import { israelEvents } from "@/data/events/israel";
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
  "https://the-chosen-korean.vercel.app",
]);

export const events: HistEvent[] = [
  ...koreaEvents,
  ...greeceEvents,
  ...romeEvents,
  ...egyptEvents,
  ...israelEvents,
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
    const lane = lanes.find((item) => item.id === event.lane);
    if (!lane) throw new Error(`없는 갈래: ${event.slug}`);
    if (event.row < 0 || event.row >= lane.rows) throw new Error(`사건 줄이 갈래 밖입니다: ${event.slug}`);
    if (event.tradition && !event.traditionNote) throw new Error(`전승 설명이 없습니다: ${event.slug}`);
    const origin = new URL(event.sister.href).origin;
    if (!ALLOWED_ORIGINS.has(origin)) throw new Error(`확인되지 않은 자매 사이트: ${event.sister.href}`);
  }
  for (const event of list) {
    const seen = new Set<string>();
    for (const slug of event.related ?? []) {
      if (slug === event.slug) throw new Error(`자기 자신을 관련 사건으로 가리킵니다: ${event.slug}`);
      if (seen.has(slug)) throw new Error(`관련 사건 중복: ${event.slug} ${slug}`);
      seen.add(slug);
      if (!slugs.has(slug)) throw new Error(`관련 사건이 없습니다: ${event.slug} → ${slug}`);
    }
  }
  for (const period of periods) {
    const lane = lanes.find((item) => item.id === period.lane);
    if (!lane) throw new Error(`없는 갈래의 시대: ${period.id}`);
    if (period.row < 0 || period.row >= lane.rows) throw new Error(`시대 줄이 갈래 밖입니다: ${period.id}`);
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

export function linkedEvents(event: HistEvent) {
  return (event.related ?? []).flatMap((slug) => {
    const other = eventBySlug(slug);
    return other ? [other] : [];
  });
}

export function countByLane() {
  const counts = Object.fromEntries(laneIds.map((id) => [id, 0])) as Record<LaneId, number>;
  for (const event of events) counts[event.lane] += 1;
  return counts;
}
