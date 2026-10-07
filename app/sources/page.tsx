import { JsonLd } from "@/components/JsonLd";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "읽는 법",
  description: "나두연표가 연대를 고른 방법, 전승 배지의 뜻, 흐린 막대와 출처 한 줄의 기준.",
  path: "/sources",
});

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <p className="text-xs tracking-[0.2em] text-terra">HOW TO READ</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">읽는 법</h1>
      <div className="mt-6 space-y-4 text-sm leading-7 text-ink">
        <p>
          나두연표는 기원전 3150년경부터 기원후 1453년, 콘스탄티노폴리스가 함락된 해까지를 다룹니다. 다섯 갈래는 한반도, 그리스, 로마, 이집트, 페르시아입니다. 한반도 갈래를 키운 것은, 이 사이트가 대한민국의 자리에서 그 과거의 반도를 보기 때문입니다.
        </p>
        <p>연대는 교과와 개설서에서 통용되는 학설을 따릅니다. 이집트 고왕국처럼 학설마다 수십 년이 갈리는 해는 ‘경’을 붙입니다. 서력에 0년은 없어서, 기원전 1년 다음은 기원후 1년입니다.</p>
        <h2 className="pt-2 font-serif text-2xl">전승</h2>
        <p>
          고조선 건국, 삼국의 건국 연도, 로마 건국, 트로이 전쟁, 올림피아 제전의 첫 해처럼 후대 기록이 만들어 낸 숫자는 전승 배지를 답니다. 『삼국사기』의 기원전 57·37·18년은 1145년에 엮인 연대기입니다. 로마의 기원전 753년은 바로의 계산이고, 늑대 젖은 신화입니다. 배지가 붙은 해를 그 나라의 출발 증명으로 읽지 말아 주세요.
        </p>
        <h2 className="pt-2 font-serif text-2xl">흐린 막대</h2>
        <p>
          진국, 삼한, 고조선의 앞쪽, 메디아, 미노아의 끝처럼 경계가 흐린 시대는 막대 끝을 흐리게 그렸습니다. 점은 한 해에 가깝게 말할 수 있는 사건입니다. 막대를 자로 재어 정확한 국경이라고 보면 안 됩니다.
        </p>
        <h2 className="pt-2 font-serif text-2xl">출처 한 줄</h2>
        <p>
          사건마다 근거를 한 줄 적었습니다. 헤로도토스 『역사』, 『삼국사기』, 『사기』 조선열전, 『위략』, 비문, 고고학처럼 무엇을 보고 썼는지입니다. 옛 문장을 따옴표로 지어 넣지 않았습니다. 플라톤이 전하는 소크라테스의 법정은 녹음이 아니라고 적었습니다.
        </p>
        <h2 className="pt-2 font-serif text-2xl">일부러 단정하지 않은 것</h2>
        <p>
          안시성 성주를 양만춘이라 부르는 이름은 후대 기록입니다. 신라의 삼국통일은 한반도 남부이지, 발해가 있던 북쪽까지 한 나라가 된 일이 아닙니다. 살라미스와 살수, 1453년의 콘스탄티노폴리스와 계유정난은 같은 해의 일일 뿐 원인으로 연결되어 있지 않습니다.
        </p>
        <p>현대의 분단과 북한 체제는 이 연표의 범위 밖입니다. 고구려의 평양, 발해의 북쪽은 그 시대의 역사로 적습니다.</p>
        <h2 className="pt-2 font-serif text-2xl">자매 사이트</h2>
        <p>
          사건 카드의 링크는 로마이야기, 그리스이야기, 이집트이야기, 페르시아이야기, 대한민국이야기, 나두신화, 철학이야기의 홈이거나, 그 저장소에 실제로 있는 글입니다. 없는 주소는 만들지 않았습니다.
        </p>
      </div>
    </div>
  );
}
