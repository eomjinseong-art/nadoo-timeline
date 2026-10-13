import { BadgeChip } from "@/components/hub/Badge";
import { HubNav } from "@/components/hub/HubNav";
import { ProtagonistsHub } from "@/components/hub/ProtagonistsHub";
import { badgeCounts, hubFilms } from "@/lib/hub/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "영화 주인공은 실존 인물일까",
  description: "역사 영화 주인공마다 실존 인물, 실존 인물 각색, 가상 인물을 표시하고 실제로 누구였는지 한 줄로 적었습니다.",
  path: "/protagonists",
});

export default function ProtagonistsPage() {
  const c = badgeCounts();
  const unsure = hubFilms.reduce((n, f) => n + f.prots.filter((p) => p.unsure).length, 0);
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-terra">PROTAGONISTS</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">영화 주인공은 실존 인물일까</h1>
      <p className="mt-1 text-sm text-muted">Was the hero real? A badge for every main character.</p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
        <span className="flex items-center gap-1"><BadgeChip badge="R" /> {c.R}명</span>
        <span className="flex items-center gap-1"><BadgeChip badge="B" /> {c.B}명</span>
        <span className="flex items-center gap-1"><BadgeChip badge="F" /> {c.F}명</span>
        <span>확인 필요 {unsure}명</span>
      </div>
      <p className="mt-3 text-sm leading-7 text-muted">
        <b>실존 인물</b>은 기록으로 확인되는 사람을 큰 줄기대로 그린 경우, <b>실존 인물 각색</b>은 실제 사람이지만 영화가 삶이나 성격을 크게 바꾼 경우, <b>가상 인물</b>은 소설·영화·신화가 만든 인물입니다. 신화·전설 속 인물과 학계에서 의견이 갈리는 경우에는 ‘확인 필요’를 붙이고 전해지는 이야기라고 적었습니다. 한 사람에 한 줄 메모만 붙입니다.
      </p>
      <HubNav current="/protagonists" />
      <ProtagonistsHub />
    </div>
  );
}
