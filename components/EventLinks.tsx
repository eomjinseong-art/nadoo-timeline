"use client";

import Link from "next/link";
import { linkedEvents } from "@/data/events";
import { lanes } from "@/data/lanes";
import type { HistEvent } from "@/data/types";
import { CHOSEN_BIBLE_BOOKS } from "@/lib/site";
import { formatYear } from "@/lib/years";

const external = "noopener noreferrer";

export function EventLinks({ event, onNavigate }: { event: HistEvent; onNavigate?: () => void }) {
  const related = linkedEvents(event);
  const showOverview = event.lane === "israel" && event.sister.href !== CHOSEN_BIBLE_BOOKS.href;
  return (
    <div className="mt-4 flex flex-col gap-3 text-sm">
      <a href={event.sister.href} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" rel={external}>
        {event.sister.label} →
      </a>
      {showOverview ? (
        <a href={CHOSEN_BIBLE_BOOKS.href} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" rel={external}>
          {CHOSEN_BIBLE_BOOKS.label} →
        </a>
      ) : null}
      {related.length ? (
        <section aria-label="다른 갈래와 잇다">
          <p className="font-serif text-lg text-ink">다른 갈래와 잇다</p>
          <ul className="mt-2 space-y-2">
            {related.map((other) => {
              const lane = lanes.find((item) => item.id === other.lane)!;
              return (
                <li key={other.slug}>
                  <Link
                    href={`/events/${other.slug}`}
                    className="text-laurel underline decoration-line underline-offset-4 hover:text-terra"
                    onClick={onNavigate}
                  >
                    {formatYear(other.year, other.circa)} · {lane.short} · {other.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
