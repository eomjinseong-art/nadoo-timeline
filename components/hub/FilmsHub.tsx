"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BadgeChip } from "@/components/hub/Badge";
import { Ext } from "@/components/hub/HubNav";
import { TimeAxis, TimeBar } from "@/components/hub/TimeBar";
import { ERAS, filmsChrono, REGIONS, regionKo, span, type HubFilm } from "@/lib/hub/data";
import { MOVIE_CHECKLIST_URL } from "@/lib/site";

const KINDS = ["영화", "시리즈", "다큐"];

function mid(f: HubFilm) {
  if (f.start === null) return null;
  return Math.round((f.start + (f.end ?? f.start)) / 2) || 1;
}

export function FilmsHub() {
  const all = useMemo(() => filmsChrono(), []);
  const [region, setRegion] = useState<string>("all");
  const [kind, setKind] = useState<string>("all");
  const [dated, setDated] = useState(false);
  const [era, setEra] = useState<string>("all");
  const er = ERAS.find((e) => e.id === era);
  const list = all.filter(
    (f) => (region === "all" || f.regions.includes(region)) && (kind === "all" || f.kind === kind) && (!dated || f.start !== null) &&
      (!er || (f.start !== null && f.start <= er.to && (f.end ?? f.start) >= er.from)),
  );
  const chip = (on: boolean) =>
    `rounded-full border px-3 py-1 text-xs ${on ? "border-terra bg-terra/10 text-terra" : "border-line text-muted hover:text-ink"}`;

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="나라·지역 Region">
        <button type="button" className={chip(region === "all")} onClick={() => setRegion("all")}>
          전체 All
        </button>
        {REGIONS.map((r) => (
          <button key={r.id} type="button" className={chip(region === r.id)} onClick={() => setRegion(r.id)}>
            {r.ko}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="시대 Era">
        <button type="button" className={chip(era === "all")} onClick={() => setEra("all")}>
          모든 시대
        </button>
        {ERAS.map((e) => (
          <button key={e.id} type="button" className={chip(era === e.id)} onClick={() => setEra(e.id)}>
            {e.ko}
          </button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2" role="group" aria-label="종류 Type">
        {["all", ...KINDS].map((k) => (
          <button key={k} type="button" className={chip(kind === k)} onClick={() => setKind(k)}>
            {k === "all" ? "모든 종류" : k}
          </button>
        ))}
        <label className="ml-2 flex items-center gap-1 text-xs text-muted">
          <input type="checkbox" checked={dated} onChange={(e) => setDated(e.target.checked)} /> 연대 있는 작품만
        </label>
      </div>
      <p className="mt-4 text-xs text-muted">
        {list.length}편 · 막대는 이야기 속 시대입니다(옛날일수록 압축). 옅은 막대는 영화가 해를 밝히지 않아 대략으로 놓은 것입니다.
      </p>
      <div className="sticky top-[118px] z-10 mt-2 bg-bg/95 py-1">
        <TimeAxis />
      </div>
      <ol className="mt-2 space-y-3">
        {list.map((f) => {
          const m = mid(f);
          return (
            <li key={f.id} id={f.id} className="scroll-mt-40 rounded-md border border-line bg-card p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-serif text-lg text-ink">
                  {f.ko} <span className="text-sm text-muted">{f.en} · {f.year} · {f.kind}</span>
                </h2>
                <p className="text-sm font-semibold text-terra">{span(f.start, f.end, f.loose)}</p>
              </div>
              <div className="mt-2">
                <TimeBar start={f.start} end={f.end} loose={f.loose} />
              </div>
              <p className="mt-2 text-xs text-muted">{f.regions.map(regionKo).join(" · ")}</p>
              {f.note ? <p className="mt-1 text-sm leading-6 text-muted">{f.note}</p> : null}
              {f.prots.length ? (
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {f.prots.map((p) => (
                    <li key={p.en} className="flex items-center gap-1.5">
                      <span className="text-ink">{p.ko}</span>
                      <BadgeChip badge={p.badge} />
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                <Link href={`/protagonists#${f.id}`} className="text-terra underline decoration-line underline-offset-4">
                  주인공 실존 여부
                </Link>
                {m !== null ? (
                  <Link href={`/contemporaries?year=${m}`} className="text-terra underline decoration-line underline-offset-4">
                    이 시대의 동시대 인물
                  </Link>
                ) : null}
                {f.inTimeline ? <Ext href={`/movies#${f.id}`}>연표 영화 카드</Ext> : null}
                {f.sisters.map((s) => (
                  <Ext key={s.href} href={s.href}>
                    {s.label}
                  </Ext>
                ))}
                {f.checklist ? <Ext href={`${MOVIE_CHECKLIST_URL}/?list=${f.checklist}`}>영화체크리스트</Ext> : null}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
