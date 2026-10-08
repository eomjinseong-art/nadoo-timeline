"use client";

import { useMemo, useState } from "react";
import { FilmCard } from "@/components/FilmCard";
import { lanes } from "@/data/lanes";
import { chronologicalFilms, type Film } from "@/data/films";
import type { LaneId } from "@/data/types";

const eras: { id: string; label: string; match: (year: number) => boolean }[] = [
  { id: "bronze", label: "청동기·서사", match: (year) => year < -800 },
  { id: "classical", label: "그리스·페르시아", match: (year) => year < -323 },
  { id: "rome", label: "로마", match: (year) => year < 476 },
  { id: "medieval", label: "중세", match: () => true },
];

function eraOf(film: Film) {
  return eras.find((era) => era.match(film.periodStart)) ?? eras[eras.length - 1];
}

export function MoviesExplorer() {
  const [laneId, setLaneId] = useState<LaneId | "all">("all");
  const [netflixOnly, setNetflixOnly] = useState(false);
  const ordered = useMemo(() => chronologicalFilms(), []);

  const visible = ordered.filter((film) => {
    if (laneId !== "all" && !film.lanes.includes(laneId)) return false;
    if (netflixOnly && !film.netflixKr) return false;
    return true;
  });

  const groups = eras
    .map((era) => ({ era, films: visible.filter((film) => eraOf(film).id === era.id) }))
    .filter((group) => group.films.length > 0);

  return (
    <div className="mt-6">
      <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="갈래로 거르기">
        <button
          type="button"
          aria-pressed={laneId === "all"}
          onClick={() => setLaneId("all")}
          className={`shrink-0 rounded-full border px-3 py-2 text-sm ${laneId === "all" ? "border-terra bg-terra text-white" : "border-line bg-card text-ink hover:border-terra"}`}
        >
          전체
        </button>
        {lanes.map((lane) => (
          <button
            key={lane.id}
            type="button"
            aria-pressed={laneId === lane.id}
            onClick={() => setLaneId(lane.id)}
            className={`shrink-0 rounded-full border px-3 py-2 text-sm ${laneId === lane.id ? "border-terra bg-terra text-white" : "border-line bg-card text-ink hover:border-terra"}`}
          >
            {lane.short}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <button
          type="button"
          aria-pressed={netflixOnly}
          onClick={() => setNetflixOnly((current) => !current)}
          className={`rounded-full border px-3 py-2 text-sm ${netflixOnly ? "border-[#e50914] bg-[#e50914] text-white" : "border-line bg-card text-ink hover:border-terra"}`}
        >
          넷플릭스 한국에서 확인된 작품
        </button>
      </div>
      {groups.length === 0 ? (
        <p className="mt-6 text-sm text-muted">이 조건에 맞는 영화가 없습니다.</p>
      ) : (
        <div className="mt-8 space-y-10">
          {groups.map((group) => (
            <section key={group.era.id} aria-labelledby={`film-era-${group.era.id}`}>
              <h2 id={`film-era-${group.era.id}`} className="font-serif text-2xl text-ink">
                {group.era.label}
                <span className="ml-2 text-sm font-normal text-muted">{group.films.length}</span>
              </h2>
              <ul className="mt-3 space-y-3">
                {group.films.map((film) => (
                  <li key={film.id} id={film.id} className="scroll-mt-40">
                    <FilmCard film={film} heading="h3" showListLink={false} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
