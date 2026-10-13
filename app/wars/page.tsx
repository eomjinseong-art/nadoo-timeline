import Link from "next/link";
import { Ext, HubNav } from "@/components/hub/HubNav";
import { filmById, regionKo, span, wars } from "@/lib/hub/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "주요 전쟁과 전투",
  description: "마라톤, 테르모필라이, 살라미스, 가우가멜라, 칸나이, 자마, 알레시아, 악티움, 토이토부르크, 카탈라우눔, 린디스판, 헤이스팅스까지. 양쪽 지휘관, 결과, 해, 관련 영화.",
  path: "/wars",
});

export default function WarsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-terra">WARS &amp; BATTLES</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">주요 전쟁과 전투</h1>
      <p className="mt-1 text-sm text-muted">Both sides&apos; commanders, the result, the year and the films.</p>
      <p className="mt-3 text-sm leading-7 text-muted">
        {wars.length}개를 해 순서로 놓았습니다. 지휘관은 기록에 남은 이름만 적고, 이름이 없으면 ‘미상’이라고 씁니다.
      </p>
      <HubNav current="/wars" />
      <ol className="mt-8 space-y-4">
        {wars.map((w) => {
          const mid = Math.round((w.start + w.end) / 2) || 1;
          return (
            <li key={w.id} id={w.id} className="scroll-mt-40 rounded-md border border-line bg-card p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-serif text-xl text-ink">
                  {w.ko} <span className="text-sm text-muted">{w.en}</span>
                </h2>
                <p className="text-sm font-semibold text-terra">{span(w.start, w.end, w.circa)}</p>
              </div>
              <p className="mt-1 text-xs text-muted">{regionKo(w.region)}</p>
              <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                <p className="rounded border border-line px-3 py-2">
                  <span className="text-xs text-muted">{w.sideA[0]}</span>
                  <br />
                  <span className="text-ink">{w.sideA[1]}</span>
                </p>
                <p className="rounded border border-line px-3 py-2">
                  <span className="text-xs text-muted">{w.sideB[0]}</span>
                  <br />
                  <span className="text-ink">{w.sideB[1]}</span>
                </p>
              </div>
              <p className="mt-2 text-sm text-ink">결과 · {w.result}</p>
              {w.note ? <p className="mt-1 text-sm text-muted">{w.note}</p> : null}
              <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                {w.films.map((id) => {
                  const f = filmById.get(id);
                  return f ? (
                    <Link key={id} href={`/films#${id}`} className="text-terra underline decoration-line underline-offset-4">
                      🎬 {f.ko}
                    </Link>
                  ) : null;
                })}
                {w.links.map(([label, href]) => (
                  <Ext key={href} href={href}>
                    {label}
                  </Ext>
                ))}
                <Link href={`/contemporaries?year=${mid}`} className="text-terra underline decoration-line underline-offset-4">
                  그때 살던 사람들
                </Link>
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
