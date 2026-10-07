import type { HistEvent } from "@/data/types";

export function EventArticle({ event }: { event: HistEvent }) {
  return (
    <div className="space-y-4 text-sm leading-7 text-ink">
      <p>{event.summary}</p>
      <section aria-labelledby={`peninsula-${event.slug}`}>
        <h3 id={`peninsula-${event.slug}`} className="font-serif text-lg text-korea">
          그때 한반도는?
        </h3>
        <p className="mt-1">{event.peninsula}</p>
      </section>
    </div>
  );
}
