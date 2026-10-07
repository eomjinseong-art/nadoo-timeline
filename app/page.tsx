import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SisterSites } from "@/components/SisterSites";
import { TimelineExplorer } from "@/components/TimelineExplorer";
import { countByLane } from "@/data/events";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { BRAND_LINE, SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "홈",
  description: `${SITE_TAGLINE}. ${SITE_SUB}`,
  path: "/",
});

const counts = countByLane();

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <section className="py-8 text-center sm:py-10">
        <p className="text-xs tracking-[0.3em] text-terra">NADOO TIMELINE</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">나두연표</h1>
        <p className="mt-3 text-lg text-muted">{SITE_TAGLINE}</p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <p className="mt-2 text-xs text-terra">{BRAND_LINE}</p>
        <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-muted">
          한반도 {counts.korea} · 그리스 {counts.greece} · 로마 {counts.rome} · 이집트 {counts.egypt} · 페르시아 {counts.persia}
        </p>
      </section>
      <TimelineExplorer />
      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">이렇게 읽습니다</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            <li>막대는 시대입니다. 끝이 흐리면 시작이나 경계가 불확실합니다.</li>
            <li>점은 사건입니다. 누르면 무슨 일이었는지, 그리고 그때 한반도는 어땠는지를 봅니다.</li>
            <li>
              <span className="rounded-full bg-terra/10 px-2 py-0.5 text-xs font-semibold text-terra">전승</span> 은 옛 기록이 전하는 연대입니다. 그 해에 나라가 생겼다는 뜻이 아닙니다.
            </li>
            <li>이 사이트는 대한민국에서 한반도의 과거를 보는 연표입니다. 현대의 분단은 다루지 않습니다.</li>
          </ul>
          <p className="mt-4 text-sm">
            <Link href="/sources" className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
              연대와 출처를 정한 방법
            </Link>
          </p>
        </div>
        <SisterSites variant="home" />
      </section>
    </div>
  );
}
