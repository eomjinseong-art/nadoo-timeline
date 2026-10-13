"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Ext } from "@/components/hub/HubNav";
import { hubFilms, people, rulers, span, wars, yr } from "@/lib/hub/data";

const COLS = [
  { id: "rome", ko: "로마", en: "Rome" },
  { id: "greece", ko: "그리스", en: "Greece" },
  { id: "egypt", ko: "이집트", en: "Egypt" },
  { id: "persia", ko: "페르시아", en: "Persia" },
  { id: "israel", ko: "이스라엘", en: "Israel" },
  { id: "germanic", ko: "게르만", en: "Germanic" },
  { id: "viking", ko: "바이킹·잉글랜드", en: "Vikings" },
  { id: "byzantium", ko: "비잔티움·오스만", en: "Byzantium/Ottoman" },
  { id: "france", ko: "프랑스", en: "France" },
  { id: "england", ko: "영국", en: "England/UK" },
  { id: "germany", ko: "독일·신성로마", en: "Germany/HRE" },
  { id: "spain", ko: "스페인", en: "Spain" },
  { id: "italy", ko: "이탈리아", en: "Italy" },
  { id: "russia", ko: "러시아", en: "Russia" },
  { id: "medieval", ko: "중세 유럽·십자군", en: "Medieval" },
  { id: "china", ko: "중국", en: "China" },
  { id: "korea", ko: "한국", en: "Korea" },
  { id: "arts", ko: "예술가", en: "Artists" },
];
const CORE = new Set(["korea"]);

const PRESETS: { ko: string; from: number; to: number }[] = [
  { ko: "람세스 2세 시대", from: -1279, to: -1213 },
  { ko: "페르시아 전쟁", from: -490, to: -479 },
  { ko: "펠로폰네소스 전쟁", from: -431, to: -404 },
  { ko: "알렉산드로스", from: -336, to: -323 },
  { ko: "한니발 전쟁", from: -218, to: -201 },
  { ko: "카이사르 시대", from: -60, to: -44 },
  { ko: "예수 시대", from: -4, to: 33 },
  { ko: "토이토부르크", from: 9, to: 9 },
  { ko: "마르쿠스 아우렐리우스", from: 161, to: 180 },
  { ko: "삼국지 적벽", from: 208, to: 208 },
  { ko: "아틸라", from: 434, to: 453 },
  { ko: "서로마의 끝", from: 476, to: 476 },
  { ko: "고구려·수·당 전쟁", from: 612, to: 668 },
  { ko: "알프레드와 데인", from: 865, to: 899 },
  { ko: "1066년", from: 1066, to: 1066 },
  { ko: "세종 시대", from: 1418, to: 1450 },
  { ko: "카롤루스 대관", from: 800, to: 800 },
  { ko: "살라딘과 십자군", from: 1187, to: 1192 },
  { ko: "백년전쟁 아쟁쿠르", from: 1415, to: 1415 },
  { ko: "1453 콘스탄티노폴리스", from: 1453, to: 1453 },
  { ko: "1492 그라나다", from: 1492, to: 1492 },
  { ko: "임진왜란", from: 1592, to: 1598 },
  { ko: "무적함대 1588", from: 1588, to: 1588 },
  { ko: "30년 전쟁", from: 1618, to: 1648 },
  { ko: "잉글랜드 내전", from: 1642, to: 1651 },
  { ko: "나폴레옹 전쟁", from: 1805, to: 1815 },
  { ko: "1차 대전", from: 1914, to: 1918 },
  { ko: "2차 대전", from: 1939, to: 1945 },
];

const overlap = (a: number, b: number, from: number, to: number) => a <= to && b >= from;

function clampYear(n: number) {
  if (!Number.isFinite(n) || n === 0) return 1;
  return Math.max(-3200, Math.min(2030, Math.round(n)));
}

export function ContemporariesHub() {
  const [from, setFrom] = useState(-50);
  const [to, setTo] = useState(-44);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const y = q.get("year");
    const f = q.get("from");
    const t = q.get("to");
    if (y) {
      const v = clampYear(Number(y));
      setFrom(v);
      setTo(v);
    } else if (f && t) {
      setFrom(clampYear(Number(f)));
      setTo(clampYear(Number(t)));
    }
  }, []);

  useEffect(() => {
    const q = from === to ? `?year=${from}` : `?from=${from}&to=${to}`;
    window.history.replaceState(null, "", `/contemporaries${q}`);
  }, [from, to]);

  const lo = Math.min(from, to);
  const hi = Math.max(from, to);
  const cols = COLS.map((c) => {
    const rs = rulers.filter((r) => r.country === c.id && overlap(r.start, r.end, lo, hi));
    const ps = people.filter((p) => {
      if (p.country !== c.id) return false;
      if (p.born !== null && p.died !== null) return overlap(p.born, p.died, lo, hi);
      if (p.active) return overlap(p.active[0], p.active[1], lo, hi);
      return false;
    });
    const ws = wars.filter((w) => w.region === c.id && overlap(w.start, w.end, lo, hi));
    const fs = hubFilms.filter((f) => f.start !== null && f.regions.includes(c.id) && overlap(f.start, f.end ?? f.start, lo, hi));
    return { ...c, rs, ps, ws, fs };
  }).filter((c) => CORE.has(c.id) || c.rs.length + c.ps.length + c.ws.length + c.fs.length > 0);

  const setYear = (v: number) => {
    const y = clampYear(v);
    setFrom(y);
    setTo(y);
  };

  return (
    <div className="mt-8">
      <div className="rounded-md border border-line bg-card p-4">
        <label className="block text-sm text-ink" htmlFor="year-range">
          해 고르기 · Pick a year: <b className="text-terra">{lo === hi ? yr(lo) : `${yr(lo)} – ${yr(hi)}`}</b>
        </label>
        <input
          id="year-range"
          type="range"
          min={-1500}
          max={2000}
          value={lo}
          onChange={(e) => setYear(Number(e.target.value))}
          className="mt-3 w-full accent-[#a34732]"
        />
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-muted">직접 입력 (기원전은 음수)</span>
          <input
            aria-label="시작 해"
            type="number"
            value={from}
            onChange={(e) => setFrom(clampYear(Number(e.target.value)))}
            className="w-24 rounded border border-line bg-bg px-2 py-1"
          />
          <span>–</span>
          <input
            aria-label="끝 해"
            type="number"
            value={to}
            onChange={(e) => setTo(clampYear(Number(e.target.value)))}
            className="w-24 rounded border border-line bg-bg px-2 py-1"
          />
          <button type="button" onClick={() => setYear(lo - 10)} className="rounded border border-line px-2 py-1 text-xs">
            −10년
          </button>
          <button type="button" onClick={() => setYear(lo + 10)} className="rounded border border-line px-2 py-1 text-xs">
            +10년
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.ko}
              type="button"
              onClick={() => {
                setFrom(p.from);
                setTo(p.to);
              }}
              className={`rounded-full border px-3 py-1 text-xs ${lo === p.from && hi === p.to ? "border-terra bg-terra/10 text-terra" : "border-line text-muted hover:text-ink"}`}
            >
              {p.ko}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cols.map((c) => (
          <section key={c.id} className="rounded-md border border-line bg-card p-4">
            <h2 className="font-serif text-xl text-ink">
              {c.ko} <span className="text-xs text-muted">{c.en}</span>
            </h2>
            {c.rs.length + c.ps.length + c.ws.length + c.fs.length === 0 ? (
              <p className="mt-2 text-xs text-muted">이 시기에 이 사이트가 적어 둔 인물이 없습니다.</p>
            ) : null}
            {c.rs.length ? (
              <div className="mt-2">
                <h3 className="text-xs font-semibold text-terra">다스리던 사람 · Rulers</h3>
                <ul className="mt-1 space-y-1 text-sm">
                  {c.rs.map((r) => (
                    <li key={r.en + r.start}>
                      {r.href ? <Ext href={r.href}>{r.ko}</Ext> : <span className="text-ink">{r.ko}</span>}{" "}
                      <span className="text-xs text-muted">
                        {r.group} · {span(r.start, r.end, r.circa)}
                        {r.legend ? " · 전해지는 이야기" : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {c.ps.length ? (
              <div className="mt-3">
                <h3 className="text-xs font-semibold text-terra">살아 있던 사람 · Alive</h3>
                <ul className="mt-1 space-y-1 text-sm">
                  {c.ps.map((p) => (
                    <li key={p.en}>
                      {p.href ? <Ext href={p.href}>{p.ko}</Ext> : <span className="text-ink">{p.ko}</span>}{" "}
                      <span className="text-xs text-muted">
                        {p.role} ·{" "}
                        {p.born !== null && p.died !== null
                          ? span(p.born, p.died, p.circa)
                          : p.active
                            ? `활동 ${span(p.active[0], p.active[1], p.circa)} (생몰년 미상)`
                            : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {c.ws.length ? (
              <div className="mt-3">
                <h3 className="text-xs font-semibold text-terra">전쟁 · Wars</h3>
                <ul className="mt-1 space-y-1 text-sm">
                  {c.ws.map((w) => (
                    <li key={w.id}>
                      <Link href={`/wars#${w.id}`} className="text-laurel underline decoration-line underline-offset-4">
                        {w.ko}
                      </Link>{" "}
                      <span className="text-xs text-muted">{span(w.start, w.end, w.circa)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {c.fs.length ? (
              <div className="mt-3">
                <h3 className="text-xs font-semibold text-terra">이 시대 영화 · Films</h3>
                <ul className="mt-1 space-y-1 text-sm">
                  {c.fs.map((f) => (
                    <li key={f.id}>
                      <Link href={`/films#${f.id}`} className="text-laurel underline decoration-line underline-offset-4">
                        {f.ko}
                      </Link>{" "}
                      <span className="text-xs text-muted">({f.year})</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
