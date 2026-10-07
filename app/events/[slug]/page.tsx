import Link from "next/link";
import { notFound } from "next/navigation";
import { EventArticle } from "@/components/EventArticle";
import { JsonLd } from "@/components/JsonLd";
import { lanes } from "@/data/lanes";
import { chronological, eventBySlug, neighbors, sameEra } from "@/data/events";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { formatYear } from "@/lib/years";

export function generateStaticParams() {
  return chronological.map((event) => ({ slug: event.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventBySlug(slug);
  if (!event) return {};
  return pageMetadata({
    title: event.title,
    description: `${formatYear(event.year, event.circa)} ${event.title}. ${event.summary}`,
    path: `/events/${event.slug}`,
    type: "article",
  });
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventBySlug(slug);
  if (!event) notFound();
  const lane = lanes.find((item) => item.id === event.lane)!;
  const { prev, next } = neighbors(event.slug);
  const nearby = sameEra(event);
  const description = `${formatYear(event.year, event.circa)}. ${event.summary}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "연표", path: "/" },
            { name: "사건", path: "/events" },
            { name: event.title, path: `/events/${event.slug}` },
          ]),
          articleLd({
            headline: event.title,
            description,
            path: `/events/${event.slug}`,
            about: [lane.label, event.titleEn],
          }),
        ])}
      />
      <p className="text-xs text-muted">
        <Link href="/" className="underline decoration-line underline-offset-4 hover:text-terra">
          연표
        </Link>
        <span aria-hidden> · </span>
        <Link href="/events" className="underline decoration-line underline-offset-4 hover:text-terra">
          사건
        </Link>
      </p>
      <p className="mt-4 text-[11px] font-semibold tracking-wide" style={{ color: lane.color }}>
        {lane.label}
        <span className="ml-2 font-normal tracking-[0.12em] text-muted">{event.titleEn}</span>
      </p>
      <h1 className="mt-1 font-serif text-4xl text-ink">{event.title}</h1>
      <p className="mt-2 text-sm text-muted">{formatYear(event.year, event.circa)}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {event.tradition ? <span className="rounded-full bg-terra/10 px-2 py-0.5 text-xs font-semibold text-terra">전승</span> : null}
        {event.circa ? <span className="rounded-full bg-stone px-2 py-0.5 text-xs text-muted">연대는 대략</span> : null}
      </div>
      {event.tradition && event.traditionNote ? <p className="mt-4 rounded-md bg-terra/5 px-3 py-2 text-sm leading-6">{event.traditionNote}</p> : null}
      <div className="mt-6">
        <EventArticle event={event} />
      </div>
      <p className="mt-6 text-xs leading-5 text-muted">{event.source}</p>
      <p className="mt-4 text-sm">
        <a href={event.sister.href} className="text-laurel underline decoration-line underline-offset-4" rel="noopener noreferrer">
          {event.sister.label} →
        </a>
      </p>

      <section className="mt-10" aria-labelledby="same-era-heading">
        <h2 id="same-era-heading" className="font-serif text-2xl text-ink">
          같은 무렵, 다른 곳
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          {nearby.map((other) => {
            const otherLane = lanes.find((item) => item.id === other.lane)!;
            return (
              <li key={other.slug}>
                <Link href={`/events/${other.slug}`} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
                  {formatYear(other.year, other.circa)} · {otherLane.short} · {other.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <nav className="mt-10 flex justify-between gap-4 border-t border-line pt-4 text-sm" aria-label="앞뒤 사건">
        {prev ? (
          <Link href={`/events/${prev.slug}`} className="text-terra underline decoration-line underline-offset-4">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/events/${next.slug}`} className="text-right text-terra underline decoration-line underline-offset-4">
            {next.title} →
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
