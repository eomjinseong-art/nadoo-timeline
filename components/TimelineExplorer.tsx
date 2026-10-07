"use client";

import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { EventArticle } from "@/components/EventArticle";
import { eras, lanes } from "@/data/lanes";
import { periods } from "@/data/periods";
import type { HistEvent, LaneId } from "@/data/types";
import { chronological } from "@/data/events";
import { cursorDetail, cursorLabel, cursorLine, eraForYear, nearestEventYear, pxPerYear, tickStep } from "@/lib/timeline";
import { formatSpan, formatYear, parseError, parseYear } from "@/lib/years";

const ROW_H = 32;
const LANE_PAD = 8;
const AXIS_H = 42;

const INITIAL_YEAR = -331;

function laneHeight(rows: number) {
  return rows * ROW_H + LANE_PAD * 2;
}

function edgeMask(softStart?: boolean, softEnd?: boolean) {
  if (softStart && softEnd) return "linear-gradient(90deg, transparent, #000 22px, #000 calc(100% - 22px), transparent)";
  if (softStart) return "linear-gradient(90deg, transparent, #000 22px)";
  if (softEnd) return "linear-gradient(90deg, #000 calc(100% - 22px), transparent)";
  return undefined;
}

function tickLabel(year: number) {
  if (year < 0) return `−${Math.abs(year)}`;
  return String(year);
}

export function TimelineExplorer() {
  const [eraId, setEraId] = useState("all");
  const [cursor, setCursor] = useState(INITIAL_YEAR);
  const [jumpText, setJumpText] = useState("");
  const [jumpError, setJumpError] = useState("");
  const [selected, setSelected] = useState<HistEvent | null>(null);
  const [scrollToken, setScrollToken] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const jumpId = useId();
  const errorId = useId();

  const era = eras.find((item) => item.id === eraId) ?? eras[0];
  const span = era.end - era.start;
  const px = pxPerYear(span);
  const width = Math.max(Math.round(span * px), 960);
  const visibleEvents = chronological.filter((event) => event.year >= era.start && event.year <= era.end);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const x = (cursor - era.start) * px;
    scroller.scrollLeft = Math.max(0, x - scroller.clientWidth * 0.32);
    // Hover updates `cursor` constantly. Scrolling only follows a jump or an era change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToken]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open) dialog.showModal();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);

  function moveCursor(clientX: number, track: HTMLElement) {
    const rect = track.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const year = Math.round(era.start + x / px);
    const next = Math.min(era.end, Math.max(era.start, year));
    setCursor((current) => (current === next ? current : next));
  }

  function chooseEra(id: string) {
    const next = eras.find((item) => item.id === id);
    if (!next) return;
    setEraId(id);
    setCursor((current) => {
      if (current >= next.start && current <= next.end) return current;
      return nearestEventYear(Math.round((next.start + next.end) / 2), next.start, next.end);
    });
    setScrollToken((token) => token + 1);
  }

  function jump(raw: string) {
    const parsed = parseYear(raw);
    if (!parsed.ok) {
      setJumpError(parseError(parsed.reason));
      return;
    }
    setJumpError("");
    const year = parsed.year;
    const current = eras.find((item) => item.id === eraId) ?? eras[0];
    const nextEra = year < current.start || year > current.end ? eraForYear(year) : current;
    if (nextEra.id !== eraId) setEraId(nextEra.id);
    setCursor(year);
    setScrollToken((token) => token + 1);
    if (window.innerWidth < 1024) {
      const target = nearestEventYear(year, nextEra.start, nextEra.end);
      window.setTimeout(() => {
        document.getElementById(`m-year-${target}`)?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 50);
    }
  }

  const step = tickStep(span);
  const ticks: number[] = [];
  for (let year = Math.ceil(era.start / step) * step; year <= era.end; year += step) ticks.push(year);

  const groups: { year: number; events: HistEvent[] }[] = [];
  for (const event of visibleEvents) {
    const last = groups[groups.length - 1];
    if (!last || last.year !== event.year) groups.push({ year: event.year, events: [event] });
    else last.events.push(event);
  }

  return (
    <section aria-labelledby="timeline-heading" className="mt-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="timeline-heading" className="font-serif text-2xl text-ink">
            나란히 보는 연표
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">
            세로선이 가리키는 해에, 다섯 갈래가 각자 어디쯤이었는지 같이 보입니다. 흐린 끝은 경계가 불확실하다는 뜻이고, 점은 사건입니다.
          </p>
        </div>
        <p className="text-xs text-muted">사건 {chronological.length}개 · 기원전 3150년경–1453년</p>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="시대 확대" data-testid="era-zoom">
        {eras.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === eraId}
            onClick={() => chooseEra(item.id)}
            className={`shrink-0 rounded-full border px-3 py-2 text-sm ${item.id === eraId ? "border-terra bg-terra text-white" : "border-line bg-card text-ink hover:border-terra"}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <form
        className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center"
        data-testid="jump-form"
        onSubmit={(event) => {
          event.preventDefault();
          jump(jumpText);
        }}
      >
        <label htmlFor={jumpId} className="text-sm text-ink">
          해로 이동
        </label>
        <input
          id={jumpId}
          value={jumpText}
          onChange={(event) => setJumpText(event.target.value)}
          placeholder="기원전 331, -331, BC 331, 1453"
          aria-invalid={jumpError ? true : undefined}
          aria-describedby={jumpError ? errorId : undefined}
          className="min-h-11 w-full rounded-md border border-line bg-card px-3 text-base text-ink sm:max-w-xs"
        />
        <button type="submit" className="min-h-11 rounded-md bg-ink px-4 text-sm text-white hover:bg-terra">
          이동
        </button>
      </form>
      {jumpError ? (
        <p id={errorId} role="alert" className="mt-2 text-sm text-terra">
          {jumpError}
        </p>
      ) : null}

      <div className="mt-4 rounded-lg border border-line bg-card p-3" data-testid="year-readout">
        <p className="text-xs tracking-[0.14em] text-terra">연도 커서</p>
        <p className="mt-1 font-serif text-xl text-ink">{formatYear(cursor)}</p>
        <p className="mt-1 text-sm leading-6 text-ink">{cursorLine(cursor)}</p>
        <dl className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {lanes.map((lane) => (
            <div key={lane.id} className={`rounded-md border px-2 py-2 ${lane.emphasis ? "border-korea/40 bg-korea/5" : "border-line"}`}>
              <dt className="text-[11px] font-semibold" style={{ color: lane.color }}>
                {lane.short}
              </dt>
              <dd className="mt-0.5 text-xs leading-5 text-muted">{cursorDetail(lane.id, cursor)}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-4 hidden lg:block" data-testid="timeline-desktop">
        <p className="mb-2 text-xs text-muted">가로로 밀거나, 막대 위에 마우스를 올리거나, 세로선의 손잡이를 끌어 해를 고르세요. 눈금의 −는 기원전입니다.</p>
        <div className="flex overflow-hidden rounded-lg border border-line bg-card">
          <div className="w-40 shrink-0 border-r border-line bg-bg">
            <div style={{ height: AXIS_H }} className="border-b border-line" />
            {lanes.map((lane) => (
              <div
                key={lane.id}
                style={{ height: laneHeight(lane.rows) }}
                className={`flex items-center border-b border-line px-3 text-sm last:border-b-0 ${lane.emphasis ? "bg-korea/10 font-semibold" : ""}`}
              >
                <span className="min-w-0">
                  <span className="block leading-tight" style={{ color: lane.color }}>
                    {lane.label}
                  </span>
                  <span className="mt-0.5 block text-[10px] font-normal tracking-[0.14em] text-muted">{lane.en}</span>
                </span>
              </div>
            ))}
          </div>
          <div ref={scrollerRef} className="relative min-w-0 flex-1 overflow-x-auto">
            <div
              className="relative select-none"
              style={{ width, height: AXIS_H + lanes.reduce((sum, lane) => sum + laneHeight(lane.rows), 0) }}
              onPointerMove={(event) => {
                if ((event.target as HTMLElement).closest("button")) return;
                moveCursor(event.clientX, event.currentTarget);
              }}
            >
              <div className="absolute inset-x-0 top-0 border-b border-line" style={{ height: AXIS_H }}>
                {ticks.map((year) => (
                  <span key={year} className="absolute top-3 -translate-x-1/2 text-[10px] text-muted tabular-nums" style={{ left: (year - era.start) * px }}>
                    {tickLabel(year)}
                  </span>
                ))}
              </div>
              {lanes.map((lane, index) => {
                const top = AXIS_H + lanes.slice(0, index).reduce((sum, item) => sum + laneHeight(item.rows), 0);
                const height = laneHeight(lane.rows);
                return (
                  <div key={lane.id} className={`absolute inset-x-0 border-b border-line/80 ${lane.emphasis ? "bg-korea/5" : ""}`} style={{ top, height }}>
                    {periods
                      .filter((period) => period.lane === lane.id && period.end >= era.start && period.start <= era.end)
                      .map((period) => {
                        const start = Math.max(period.start, era.start);
                        const end = Math.min(period.end, era.end);
                        const left = (start - era.start) * px;
                        const barWidth = Math.max((end - start) * px, 3);
                        return (
                          <div
                            key={period.id}
                            title={`${period.title} (${formatSpan(period.start, period.end, period.softStart, period.softEnd)})`}
                            className="absolute flex items-center overflow-hidden rounded-full text-[11px] text-white"
                            style={{
                              left,
                              width: barWidth,
                              top: LANE_PAD + period.row * ROW_H + 4,
                              height: ROW_H - 8,
                              background: lane.color,
                              opacity: lane.emphasis ? 0.95 : 0.82,
                              WebkitMaskImage: edgeMask(period.softStart, period.softEnd),
                              maskImage: edgeMask(period.softStart, period.softEnd),
                            }}
                          >
                            <span className="truncate px-2">{barWidth > 72 ? period.title : ""}</span>
                          </div>
                        );
                      })}
                    {visibleEvents
                      .filter((event) => event.lane === lane.id)
                      .map((event) => {
                        const left = (event.year - era.start) * px + (event.seq ?? 0) * 14;
                        return (
                          <button
                            key={event.slug}
                            type="button"
                            data-event-slug={event.slug}
                            title={event.title}
                            aria-label={`${formatYear(event.year, event.circa)} ${event.title}`}
                            onClick={() => setSelected(event)}
                            className={`absolute z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow ${event.tradition ? "outline outline-2 outline-dashed outline-offset-1" : ""}`}
                            style={{
                              left,
                              top: LANE_PAD + Math.min(event.row, lane.rows - 1) * ROW_H + ROW_H / 2,
                              background: lane.color,
                              outlineColor: lane.color,
                            }}
                          />
                        );
                      })}
                  </div>
                );
              })}
              <div className="pointer-events-none absolute bottom-0 z-20 w-px bg-ink/80" style={{ left: (cursor - era.start) * px, top: 0 }} />
              <button
                type="button"
                role="slider"
                aria-label="연도 커서"
                aria-valuemin={era.start}
                aria-valuemax={era.end}
                aria-valuenow={cursor}
                aria-valuetext={`${formatYear(cursor)}. ${cursorLine(cursor)}`}
                className="absolute z-30 h-5 w-5 -translate-x-1/2 cursor-ew-resize rounded-full border-2 border-white bg-ink shadow"
                style={{ left: (cursor - era.start) * px, top: 10 }}
                onPointerDown={(event) => {
                  event.currentTarget.setPointerCapture(event.pointerId);
                }}
                onPointerMove={(event) => {
                  if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
                  const track = event.currentTarget.parentElement;
                  if (track) moveCursor(event.clientX, track);
                }}
                onKeyDown={(event) => {
                  const delta = event.shiftKey ? 10 : 1;
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    setCursor((current) => Math.min(era.end, current + delta));
                  }
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    setCursor((current) => Math.max(era.start, current - delta));
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:hidden" data-testid="timeline-mobile">
        <p className="text-sm leading-6 text-muted">해 제목을 누르면 그 해의 다섯 갈래가 위의 커서에 나타납니다. 사건을 누르면 카드가 열립니다.</p>
        <ol className="mt-3 space-y-5">
          {groups.map((group) => (
            <li key={group.year} id={`m-year-${group.year}`} className="scroll-mt-36">
              <button
                type="button"
                onClick={() => setCursor(group.year)}
                aria-pressed={cursor === group.year}
                className={`flex min-h-11 w-full items-center justify-between rounded-md px-3 py-2 text-left ${cursor === group.year ? "bg-korea/10" : "bg-stone"}`}
              >
                <span className="font-serif text-lg text-ink">{formatYear(group.year)}</span>
                <span className="text-xs text-muted">{cursorLabel("korea" as LaneId, group.year)}</span>
              </button>
              <ul className="mt-2 space-y-2">
                {group.events.map((event) => {
                  const lane = lanes.find((item) => item.id === event.lane)!;
                  return (
                    <li key={event.slug}>
                      <button
                        type="button"
                        data-event-slug={event.slug}
                        onClick={() => {
                          setCursor(event.year);
                          setSelected(event);
                        }}
                        className="flex min-h-11 w-full items-start gap-2 rounded-md border border-line bg-card px-3 py-3 text-left"
                        style={{ borderLeftWidth: 4, borderLeftColor: lane.color }}
                      >
                        <span className="mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[11px] text-white" style={{ background: lane.color }}>
                          {lane.short}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-ink">{event.title}</span>
                          <span className="mt-0.5 block text-xs text-muted">
                            {formatYear(event.year, event.circa)}
                            {event.tradition ? " · 전승" : ""}
                            <span className="ml-1 tracking-wide">{event.titleEn}</span>
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <dialog
        ref={dialogRef}
        data-testid="event-dialog"
        aria-labelledby="event-dialog-title"
        className="w-[min(36rem,calc(100%-1.5rem))] rounded-lg border border-line bg-card p-0 text-ink shadow-xl backdrop:bg-ink/45"
        onClose={() => setSelected(null)}
      >
        {selected ? (
          <article className="max-h-[85vh] overflow-y-auto p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-wide" style={{ color: lanes.find((lane) => lane.id === selected.lane)?.color }}>
                  {lanes.find((lane) => lane.id === selected.lane)?.label}
                  <span className="ml-2 font-normal tracking-[0.12em] text-muted">{selected.titleEn}</span>
                </p>
                <h3 id="event-dialog-title" className="mt-1 font-serif text-2xl">
                  {selected.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{formatYear(selected.year, selected.circa)}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.tradition ? <span className="rounded-full bg-terra/10 px-2 py-0.5 text-xs font-semibold text-terra">전승</span> : null}
                  {selected.circa ? <span className="rounded-full bg-stone px-2 py-0.5 text-xs text-muted">연대는 대략</span> : null}
                </div>
              </div>
              <button type="button" className="min-h-11 shrink-0 rounded-md px-3 text-sm text-muted hover:text-ink" onClick={() => dialogRef.current?.close()}>
                닫기
              </button>
            </div>
            {selected.tradition && selected.traditionNote ? <p className="mt-3 rounded-md bg-terra/5 px-3 py-2 text-sm leading-6 text-ink">{selected.traditionNote}</p> : null}
            <div className="mt-4">
              <EventArticle event={selected} />
            </div>
            <p className="mt-4 text-xs leading-5 text-muted">{selected.source}</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href={selected.sister.href} className="text-laurel underline decoration-line underline-offset-4" rel="noopener noreferrer">
                {selected.sister.label} →
              </a>
              <Link href={`/events/${selected.slug}`} className="text-terra underline decoration-line underline-offset-4" onClick={() => dialogRef.current?.close()}>
                이 사건 페이지
              </Link>
            </div>
          </article>
        ) : null}
      </dialog>
    </section>
  );
}
