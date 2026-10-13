import { FilmsHub } from "@/components/hub/FilmsHub";
import { HubNav } from "@/components/hub/HubNav";
import { hubFilms } from "@/lib/hub/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "이야기 순서로 보는 역사 영화",
  description: "나두 역사 사이트들에 나온 영화·시리즈·다큐를 개봉년이 아니라 이야기 속 해 순서로 놓았습니다. 시대 막대와 나라 필터.",
  path: "/films",
});

export default function FilmsPage() {
  const dated = hubFilms.filter((f) => f.start !== null).length;
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-terra">FILMS IN STORY ORDER</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">이야기 순서로 보는 역사 영화</h1>
      <p className="mt-1 text-sm text-muted">Every film from the sister sites, sorted by when the story happens.</p>
      <p className="mt-3 text-sm leading-7 text-muted">
        자매 사이트와 영화체크리스트에 나온 {hubFilms.length}편을 모았습니다. 순서는 개봉년이 아니라 이야기가 놓인 해입니다. 해를 정할 수 있는 작품이 {dated}편이고, 신화·전설·판타지처럼 해를 정할 수 없는 작품은 맨 뒤 ‘연대 없음’에 둡니다. 전승 연대는 전해지는 이야기라고 적습니다.
      </p>
      <HubNav current="/films" />
      <FilmsHub />
    </div>
  );
}
