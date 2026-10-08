import Link from "next/link";
import { MoviesExplorer } from "@/components/MoviesExplorer";
import { JsonLd } from "@/components/JsonLd";
import { chronologicalFilms, films } from "@/data/films";
import { filmCatalogMatches } from "@/lib/films-catalog";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { MOVIE_CHECKLIST_LABEL, MOVIE_CHECKLIST_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "영화로 보는 연표",
  description: "고대와 중세 영화를 이야기가 놓인 시대 순으로 모았습니다. 연표의 사건과 잇고, 어디가 사실이고 어디가 극인지 한 줄로 적습니다.",
  path: "/movies",
});

const netflixCount = films.filter((film) => film.netflixKr).length;

export default function MoviesPage() {
  if (!filmCatalogMatches) return null;
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            "영화로 보는 연표",
            "/movies",
            chronologicalFilms().map((film) => ({ name: `${film.koTitle} (${film.year})`, path: `/movies#${film.id}` })),
          ),
        ])}
      />
      <p className="text-xs tracking-[0.2em] text-terra">FILMS</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">영화로 보는 연표</h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        {films.length}편입니다. 순서는 개봉년이 아니라 이야기가 놓인 해입니다. 전승 연대 위의 작품은 그 전승을 따라가고, 한 줄은 어디가 극인지를 적습니다.
      </p>
      <p className="mt-2 text-sm leading-7 text-muted">
        빨간 배지는 넷플릭스 한국 제목 페이지에서 그 작품을 볼 수 있다고 확인한 경우만 붙입니다. 확인일은 2026-10-08이고, 서비스 여부는 바뀔 수 있어요. 지금 {netflixCount}편입니다.
      </p>
      <p className="mt-4 text-sm">
        <a href={MOVIE_CHECKLIST_URL} target="_blank" rel="noopener noreferrer" className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
          본 영화 체크하기 → {MOVIE_CHECKLIST_LABEL}
        </a>
      </p>
      <p className="mt-2 text-sm">
        <Link href="/" className="text-terra underline decoration-line underline-offset-4">
          연표로 돌아가기
        </Link>
      </p>
      <MoviesExplorer />
    </div>
  );
}
