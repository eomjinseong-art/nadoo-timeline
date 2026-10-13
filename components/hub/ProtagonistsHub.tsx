"use client";

import { useState } from "react";
import Link from "next/link";
import { BadgeChip, Unsure } from "@/components/hub/Badge";
import { Ext } from "@/components/hub/HubNav";
import { BADGES, ERAS, filmsChrono, REGIONS, span, type Badge } from "@/lib/hub/data";

const films = filmsChrono().filter((f) => f.prots.length > 0);

export function ProtagonistsHub() {
  const [badge, setBadge] = useState<Badge | "all" | "unsure">("all");
  const [region, setRegion] = useState("all");
  const [era, setEra] = useState("all");
  const er = ERAS.find((e) => e.id === era);
  const chip = (on: boolean) =>
    `rounded-full border px-3 py-1 text-xs ${on ? "border-terra bg-terra/10 text-terra" : "border-line text-muted hover:text-ink"}`;
  const keep = (b: Badge, u: boolean) => badge === "all" || (badge === "unsure" ? u : b === badge);
  const list = films
    .filter((f) => region === "all" || f.regions.includes(region))
    .filter((f) => !er || (f.start !== null && f.start <= er.to && (f.end ?? f.start) >= er.from))
    .map((f) => ({ f, ps: f.prots.filter((p) => keep(p.badge, p.unsure)) }))
    .filter((x) => x.ps.length > 0);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="배지 Badge">
        <button type="button" className={chip(badge === "all")} onClick={() => setBadge("all")}>
          전체
        </button>
        {(Object.keys(BADGES) as Badge[]).map((b) => (
          <button key={b} type="button" className={chip(badge === b)} onClick={() => setBadge(b)}>
            {BADGES[b].ko}
          </button>
        ))}
        <button type="button" className={chip(badge === "unsure")} onClick={() => setBadge("unsure")}>
          확인 필요만
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="지역 Region">
        <button type="button" className={chip(region === "all")} onClick={() => setRegion("all")}>
          모든 지역
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
      <p className="mt-3 text-xs text-muted">{list.length}편</p>
      <ol className="mt-3 space-y-4">
        {list.map(({ f, ps }) => (
          <li key={f.id} id={f.id} className="scroll-mt-40 rounded-md border border-line bg-card p-4">
            <h2 className="font-serif text-lg text-ink">
              <Link href={`/films#${f.id}`} className="hover:text-terra">
                {f.ko}
              </Link>{" "}
              <span className="text-sm text-muted">
                {f.en} · {f.year} · 이야기 속 {span(f.start, f.end, f.loose)}
              </span>
            </h2>
            <ul className="mt-3 space-y-3">
              {ps.map((p) => (
                <li key={p.en} className="border-t border-line pt-3 first:border-0 first:pt-0">
                  <p className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-ink">{p.ko}</span>
                    <span className="text-xs text-muted">{p.en}</span>
                    <BadgeChip badge={p.badge} />
                    {p.unsure ? <Unsure /> : null}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">{p.note}</p>
                  {p.href ? (
                    <p className="mt-1 text-xs">
                      <Ext href={p.href}>{p.badge === "F" ? "관련 페이지 보기" : "실제 인물 페이지 보기"} →</Ext>
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
