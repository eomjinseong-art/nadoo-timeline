import Link from "next/link";
import { IsraelLegend, TrackBadge } from "@/components/IsraelLegend";
import { JsonLd } from "@/components/JsonLd";
import { lanes } from "@/data/lanes";
import { chronological, eventsByLane } from "@/data/events";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { formatYear } from "@/lib/years";

export const metadata = pageMetadata({
  title: "사건",
  description: "기원전 3150년경부터 1453년까지, 한반도·그리스·로마·이집트·이스라엘·페르시아의 사건을 갈래별로 모았습니다.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            "나두연표 사건",
            "/events",
            chronological.map((event) => ({ name: event.title, path: `/events/${event.slug}` })),
          ),
        ])}
      />
      <p className="text-xs tracking-[0.2em] text-terra">EVENTS</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">사건</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
        모두 {chronological.length}개입니다. 전승 연대에는 배지를 붙였습니다. 각 글은 그 해의 한반도를 따로 적습니다.
      </p>
      <div className="mt-8 space-y-10">
        {lanes.map((lane) => (
          <section key={lane.id} aria-labelledby={`lane-${lane.id}`}>
            <h2 id={`lane-${lane.id}`} className="font-serif text-2xl" style={{ color: lane.color }}>
              {lane.label}
              <span className="ml-2 text-sm font-normal text-muted">{eventsByLane(lane.id).length}</span>
            </h2>
            {lane.id === "israel" ? (
              <div className="mt-2">
                <IsraelLegend />
              </div>
            ) : null}
            <ul className="mt-3 divide-y divide-line rounded-lg border border-line bg-card">
              {eventsByLane(lane.id).map((event) => (
                <li key={event.slug}>
                  <Link href={`/events/${event.slug}`} className="flex flex-col gap-1 px-4 py-3 hover:bg-stone sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="w-40 shrink-0 text-xs text-muted tabular-nums">{formatYear(event.year, event.circa)}</span>
                    <span className="min-w-0">
                      <span className="text-sm text-ink">{event.title}</span>
                      {lane.tracks ? (
                        <span className="ml-2">
                          <TrackBadge laneId={event.lane} row={event.row} />
                        </span>
                      ) : null}
                      {event.tradition ? <span className="ml-2 rounded-full bg-terra/10 px-2 py-0.5 text-[11px] font-semibold text-terra">전승</span> : null}
                      <span className="ml-2 text-[11px] tracking-wide text-muted">{event.titleEn}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
