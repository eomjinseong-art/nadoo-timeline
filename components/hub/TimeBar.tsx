import { pos, TICKS } from "@/components/hub/scale";
import { yrShort } from "@/lib/hub/data";

export function TimeAxis() {
  return (
    <div className="relative h-5 text-[10px] text-muted" aria-hidden>
      {TICKS.map((t) => (
        <span key={t} className="absolute -translate-x-1/2" style={{ left: `${pos(t)}%` }}>
          {yrShort(t)}
        </span>
      ))}
    </div>
  );
}

export function TimeBar({ start, end, loose = false }: { start: number | null; end: number | null; loose?: boolean }) {
  return (
    <div className="relative h-2.5 rounded-full bg-stone" aria-hidden>
      {TICKS.map((t) => (
        <span key={t} className="absolute top-0 h-full w-px bg-line" style={{ left: `${pos(t)}%` }} />
      ))}
      {start !== null ? (
        <span
          className={`absolute top-0 h-full rounded-full ${loose ? "bg-terra/40" : "bg-terra"}`}
          style={{ left: `${pos(start)}%`, width: `max(4px, ${pos(end ?? start) - pos(start)}%)` }}
        />
      ) : null}
    </div>
  );
}
