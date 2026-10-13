import { ContemporariesHub } from "@/components/hub/ContemporariesHub";
import { HubNav } from "@/components/hub/HubNav";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "동시대 인물 — 그때 누가 살았나",
  description: "해나 시대를 고르면 로마, 그리스, 이집트, 페르시아, 게르만, 바이킹, 한국, 중국에서 그때 다스리던 사람과 살아 있던 사람, 전쟁, 영화를 나란히 보여 줍니다.",
  path: "/contemporaries",
});

export default function ContemporariesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-terra">CONTEMPORARIES</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">동시대 인물 — 그때 누가 살았나</h1>
      <p className="mt-1 text-sm text-muted">Pick a year or an era and see who was alive at the same time.</p>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        해를 고르거나 시대 버튼을 누르면 나라별로 그때 다스리던 사람, 살아 있던 사람, 벌어지던 전쟁, 그 시대를 다룬 영화가 나란히 나옵니다. 생몰년이 대략인 사람은 ‘경’을 붙였고, 생몰년을 모르는 사람은 기록에 나오는 활동 기간으로 넣었습니다.
      </p>
      <HubNav current="/contemporaries" />
      <ContemporariesHub />
    </div>
  );
}
