import Link from "next/link";
import { lanes } from "@/data/lanes";
import { eventBySlug } from "@/data/events";
import type { Film } from "@/data/films";
import { formatSpan, formatYear } from "@/lib/years";

const external = "noopener noreferrer";

export function NetflixBadge({ checkedAt }: { checkedAt: string }) {
  return (
    <p className="mt-2 flex flex-wrap items-center gap-2">
      <span className="rounded bg-[#e50914] px-1.5 py-0.5 text-[11px] font-bold tracking-wide text-white">N 넷플릭스</span>
      <span className="text-[11px] leading-5 text-muted">서비스 여부는 바뀔 수 있어요 (확인일 {checkedAt})</span>
    </p>
  );
}

function periodLabel(film: Film) {
  if (film.periodStart === film.periodEnd) return formatYear(film.periodStart);
  return formatSpan(film.periodStart, film.periodEnd);
}

export function FilmCard({ film, heading = "h3", showListLink = true }: { film: Film; heading?: "h2" | "h3"; showListLink?: boolean }) {
  const Title = heading;
  return (
    <article className="rounded-lg border border-line bg-card p-4">
      <p className="text-[11px] font-semibold tracking-wide text-terra">
        {film.type}
        <span className="ml-2 font-normal text-muted">{film.year}</span>
      </p>
      <Title className="mt-1 font-serif text-xl text-ink">{film.koTitle}</Title>
      <p className="text-xs text-muted">{film.originalTitle}</p>
      <p className="mt-1 text-xs text-muted">시대 · {periodLabel(film)}</p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {film.lanes.map((id) => {
          const lane = lanes.find((item) => item.id === id);
          if (!lane) return null;
          return (
            <li key={id} className="rounded-full px-2 py-0.5 text-[11px] text-white" style={{ background: lane.color }}>
              {lane.short}
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-sm leading-6 text-ink">{film.synopsis}</p>
      <p className="mt-2 text-sm leading-6 text-ink">
        <span className="font-semibold">역사 vs 영화. </span>
        {film.historyNote}
      </p>
      {film.netflixKr && film.checkedAt ? <NetflixBadge checkedAt={film.checkedAt} /> : null}
      <ul className="mt-3 space-y-1.5 text-sm">
        {film.eventIds.map((slug) => {
          const event = eventBySlug(slug);
          if (!event) return null;
          const lane = lanes.find((item) => item.id === event.lane);
          return (
            <li key={slug}>
              <Link href={`/events/${slug}`} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
                연표 · {formatYear(event.year, event.circa)} {lane ? `${lane.short} · ` : ""}
                {event.title}
              </Link>
            </li>
          );
        })}
        {showListLink ? (
          <li>
            <Link href={`/movies#${film.id}`} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
              영화로 보는 연표
            </Link>
          </li>
        ) : null}
        {(film.sisters ?? []).map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel={external} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
              {link.label} →
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function FilmStack({ films }: { films: Film[] }) {
  if (films.length === 0) return null;
  return (
    <section aria-label="이 사건을 다룬 영화" className="mt-4 space-y-3">
      <h3 className="font-serif text-lg text-ink">영화</h3>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </section>
  );
}
