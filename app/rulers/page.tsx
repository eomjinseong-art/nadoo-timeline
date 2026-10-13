import Link from "next/link";
import { Ext, HubNav } from "@/components/hub/HubNav";
import { RULER_COUNTRIES, rulers, span } from "@/lib/hub/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "나라별 통치자와 재위 연도",
  description: "로마, 그리스(아테네·스파르타·마케도니아), 이집트, 페르시아, 게르만, 바이킹, 한국, 삼국시대 중국의 통치자와 재위 연도.",
  path: "/rulers",
});

export default function RulersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-terra">RULERS</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">나라별 통치자</h1>
      <p className="mt-1 text-sm text-muted">Key rulers and reign years, country by country.</p>
      <p className="mt-3 text-sm leading-7 text-muted">
        전부가 아니라 영화와 자매 사이트에 자주 나오는 사람 중심으로 {rulers.length}명입니다. 옛 이집트·페르시아의 연도는 학자마다 몇 해씩 다르므로 ‘경’을 붙였고, 로마 왕정처럼 전승 연대는 전해지는 이야기라고 표시합니다.
      </p>
      <HubNav current="/rulers" />
      <nav className="mt-6 flex flex-wrap gap-2 text-xs" aria-label="나라">
        {RULER_COUNTRIES.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="rounded-full border border-line px-3 py-1 text-muted hover:text-ink">
            {c.ko}
          </a>
        ))}
      </nav>
      {RULER_COUNTRIES.map((c) => {
        const list = rulers.filter((r) => r.country === c.id);
        const groups = [...new Set(list.map((r) => r.group))];
        return (
          <section key={c.id} id={c.id} className="mt-10 scroll-mt-40">
            <h2 className="font-serif text-2xl text-ink">
              {c.ko} <span className="text-sm text-muted">{c.en}</span>
            </h2>
            {groups.map((g) => (
              <div key={g} className="mt-4">
                <h3 className="text-sm font-semibold text-terra">{g}</h3>
                <ul className="mt-2 divide-y divide-line rounded-md border border-line bg-card">
                  {list
                    .filter((r) => r.group === g)
                    .map((r) => {
                      const mid = Math.round((r.start + r.end) / 2) || 1;
                      return (
                        <li key={r.en + r.start} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 px-4 py-2 text-sm">
                          <span className="min-w-[10rem] font-semibold text-ink">{r.ko}</span>
                          <span className="text-xs text-muted">{r.en}</span>
                          <span className="text-terra">{span(r.start, r.end, r.circa)}</span>
                          {r.legend ? <span className="text-xs text-dusk">전해지는 이야기</span> : null}
                          {r.note ? <span className="text-xs text-muted">· {r.note}</span> : null}
                          <span className="ml-auto flex gap-3 text-xs">
                            {r.href ? <Ext href={r.href}>인물 페이지</Ext> : null}
                            <Link href={`/contemporaries?year=${mid}`} className="text-terra underline decoration-line underline-offset-4">
                              동시대 인물
                            </Link>
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}
