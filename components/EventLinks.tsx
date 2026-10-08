"use client";

import Link from "next/link";
import { linkedEvents } from "@/data/events";
import { lanes } from "@/data/lanes";
import type { HistEvent, SisterLink } from "@/data/types";
import { CHOSEN_BIBLE_BOOKS } from "@/lib/site";
import { formatYear } from "@/lib/years";

const external = "noopener noreferrer";
const linkClass = "text-laurel underline decoration-line underline-offset-4 hover:text-terra";

function ExternalAnchor({ href, label }: SisterLink) {
  return (
    <a href={href} className={linkClass} target="_blank" rel={external}>
      {label} →
    </a>
  );
}

export function EventLinks({ event, onNavigate }: { event: HistEvent; onNavigate?: () => void }) {
  const related = linkedEvents(event);
  const showOverview = event.lane === "israel" && event.sister.href !== CHOSEN_BIBLE_BOOKS.href;
  return (
    <div className="mt-4 flex flex-col gap-3 text-sm">
      <ExternalAnchor href={event.sister.href} label={event.sister.label} />
      {(event.more ?? []).map((link) => (
        <ExternalAnchor key={link.href} href={link.href} label={link.label} />
      ))}
      {showOverview ? <ExternalAnchor href={CHOSEN_BIBLE_BOOKS.href} label={CHOSEN_BIBLE_BOOKS.label} /> : null}
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
                    className={linkClass}
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
