import { laneIds, type HistEvent, type LaneId } from "@/data/types";
import { laneIndex, lanes } from "@/data/lanes";
import { periods } from "@/data/periods";
import { egyptEvents } from "@/data/events/egypt";
import { greeceEvents } from "@/data/events/greece";
import { israelEvents } from "@/data/events/israel";
import { koreaEvents } from "@/data/events/korea";
import { medievalEvents } from "@/data/events/medieval";
import { persiaEvents } from "@/data/events/persia";
import { romeEvents } from "@/data/events/rome";
import { films, filmTypes } from "@/data/films";
import { RANGE_END, RANGE_START } from "@/lib/site";

/** Origin allow-list only. Do not fetch these at build time: iliad-stories may still 404, and philosophy /people/homer is landing in parallel. */
const ALLOWED_ORIGINS = new Set([
  "https://nadoo-myth.vercel.app",
  "https://iliad-stories.vercel.app",
  "https://greece-stories.vercel.app",
  "https://rome-stories.vercel.app",
  "https://egypt-stories.vercel.app",
  "https://persia-stories.vercel.app",
  "https://the-chosen-korean.vercel.app",
  "https://philosophy-stories.vercel.app",
  "https://korea-stories.vercel.app",
]);

export const events: HistEvent[] = [
  ...koreaEvents,
  ...greeceEvents,
  ...romeEvents,
  ...egyptEvents,
  ...israelEvents,
  ...persiaEvents,
  ...medievalEvents,
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
    assertSisterLink(event.sister, event.slug);
    const seen = new Set<string>([event.sister.href]);
    for (const link of event.more ?? []) {
      if (!link.label.trim()) throw new Error(`링크 이름이 없습니다: ${event.slug}`);
      assertSisterLink(link, event.slug);
      if (seen.has(link.href)) throw new Error(`자매 링크 중복: ${event.slug} ${link.href}`);
      seen.add(link.href);
    }
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

function assertSisterLink(link: { href: string }, slug: string) {
  let origin: string;
  try {
    origin = new URL(link.href).origin;
  } catch {
    throw new Error(`자매 링크 주소가 잘못되었습니다: ${slug} ${link.href}`);
  }
  if (!ALLOWED_ORIGINS.has(origin)) throw new Error(`확인되지 않은 자매 사이트: ${slug} ${link.href}`);
}

assertEvents(events);
assertFilms(events);

function assertFilms(list: HistEvent[]) {
  const slugs = new Set(list.map((event) => event.slug));
  const ids = new Set<string>();
  for (const film of films) {
    if (ids.has(film.id)) throw new Error(`영화 아이디 중복: ${film.id}`);
    ids.add(film.id);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(film.id)) throw new Error(`영화 아이디 형식: ${film.id}`);
    if (!film.koTitle.trim() || !film.originalTitle.trim() || !film.synopsis.trim() || !film.historyNote.trim()) {
      throw new Error(`영화 문장이 비었습니다: ${film.id}`);
    }
    if (!(filmTypes as readonly string[]).includes(film.type)) throw new Error(`영화 종류: ${film.id}`);
    if (film.periodStart > film.periodEnd || film.periodStart === 0 || film.periodEnd === 0) {
      throw new Error(`영화 시대 순서: ${film.id}`);
    }
    if (film.periodStart < RANGE_START || film.periodEnd > RANGE_END) throw new Error(`영화 시대 범위: ${film.id}`);
    if (film.lanes.length === 0) throw new Error(`영화 갈래 없음: ${film.id}`);
    for (const lane of film.lanes) {
      if (!laneIds.includes(lane)) throw new Error(`영화 갈래: ${film.id} ${lane}`);
    }
    if (film.eventIds.length === 0) throw new Error(`영화 사건 없음: ${film.id}`);
    const seenEvents = new Set<string>();
    for (const slug of film.eventIds) {
      if (seenEvents.has(slug)) throw new Error(`영화 사건 중복: ${film.id} ${slug}`);
      seenEvents.add(slug);
      if (!slugs.has(slug)) throw new Error(`영화가 가리키는 사건 없음: ${film.id} → ${slug}`);
    }
    if (film.netflixKr && film.checkedAt !== "2026-10-08") throw new Error(`넷플릭스 확인일: ${film.id}`);
    if (!film.netflixKr && film.checkedAt) throw new Error(`확인일만 있습니다: ${film.id}`);
    const seenLinks = new Set<string>();
    for (const link of film.sisters ?? []) {
      if (!link.label.trim()) throw new Error(`영화 링크 이름 없음: ${film.id}`);
      assertSisterLink(link, film.id);
      if (seenLinks.has(link.href)) throw new Error(`영화 링크 중복: ${film.id} ${link.href}`);
      seenLinks.add(link.href);
    }
  }
}

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
