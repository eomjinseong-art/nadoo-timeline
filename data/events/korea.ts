import type { HistEvent } from "@/data/types";

const korea = "https://korea-stories.vercel.app";

function era(hash: "three-kingdoms" | "unified-silla" | "goryeo" | "joseon", name: string) {
  return { href: `${korea}/eras#${hash}`, label: `대한민국이야기의 ${name}` };
}

function tree(query: string, name: string) {
  return { href: `${korea}/family-tree?${query}`, label: `대한민국이야기의 ${name}` };
}

export const koreaEvents: HistEvent[] = [
  {
    slug: "neolithic-villages",
    lane: "korea",
    row: 0,
    title: "빗살무늬 토기 마을",
    titleEn: "Jeulmun villages",
    year: -3000,
    circa: true,
    summary:
      "한반도에는 이미 신석기 마을이 있었습니다. 사람들은 빗처럼 선을 넣은 토기를 쓰고, 물고기와 조개, 기장 같은 작물을 먹었습니다. 청동 무기나 왕국의 이름은 아직 없습니다. 이 해는 대표로 고른 근사치입니다.",
    peninsula:
      "강가와 바닷가에 작은 마을이 흩어져 있었습니다. 뒤에 고조선이라 불릴 정치체는 이 시점의 유물만으로 확인되지 않습니다.",
    source: "근거: 한반도 신석기 고고학(빗살무늬 토기). 정확한 해는 없습니다.",
    sister: { href: `${korea}/eras`, label: "대한민국이야기의 시대" },
  },
  {
    slug: "dangun-gojoseon",
    lane: "korea",
    row: 0,
    title: "고조선 건국 전승",
    titleEn: "Dangun tradition",
    year: -2333,
    tradition: true,
    traditionNote: "『삼국유사』가 전하는 단군 연대를 후대에 기원전 2333년으로 환산한 것입니다. 그 해에 나라가 세워졌다는 뜻은 아닙니다.",
    summary:
      "『삼국유사』는 단군왕검이 고조선을 열었다고 적습니다. 도읍을 아사달이라 하고, 중국 전설의 요 임금 때와 겹쳐 놓습니다. 기원전 2333년이라는 숫자는 그 이야기를 후대에 서력으로 바꾼 것입니다. 청동기 국가의 실체는 이보다 훨씬 뒤 유물과 맞닿아 있습니다.",
    peninsula:
      "이 무렵 한반도는 신석기에서 청동기로 넘어가는 길 위입니다. 건국 전승은 나중에 나라의 시작을 설명하려고 만든 이야기입니다.",
    source: "근거: 『삼국유사』 기이·고조선. 2333년 환산은 후대 연표의 관습입니다.",
    sister: tree("dynasty=gojoseon&focus=gj-dangun", "단군"),
  },
  {
    slug: "bronze-age-korea",
    lane: "korea",
    row: 0,
    title: "청동기와 민무늬 토기",
    titleEn: "Bronze Age",
    year: -1000,
    circa: true,
    summary:
      "한반도에 청동기와 민무늬 토기가 퍼집니다. 고인돌도 이 시대의 풍경입니다. 농사와 청동 무기를 가진 집단이 커졌다는 뜻입니다. 그러나 국경을 그린 나라는 아직 기록에 없습니다.",
    peninsula:
      "북쪽과 남쪽 모두 청동기 사회입니다. 고조선이라는 이름은 이 유물 위에 후대 기록이 겹쳐진 것입니다.",
    source: "근거: 고고학(민무늬 토기, 청동기, 고인돌). 해는 폭이 넓어 경으로 적습니다.",
    sister: { href: `${korea}/eras`, label: "대한민국이야기의 시대" },
  },
  {
    slug: "jin-state",
    lane: "korea",
    row: 2,
    title: "진국이 기록에 스치다",
    titleEn: "State of Jin",
    year: -250,
    circa: true,
    summary:
      "중국 쪽 기록은 고조선 남쪽에 진이라는 세력이 있었다고 전합니다. 한의 사람이 진과 통하려 하자 고조선이 길을 막았다는 이야기입니다. 진의 땅과 백성이 어디까지인지는 흐립니다. 점 하나로 못 박지 않는 이유입니다.",
    peninsula:
      "북쪽에 고조선, 남쪽에 진이 있었다는 그림입니다. 남쪽은 곧 삼한이라는 이름으로 다시 적힙니다.",
    source: "근거: 『삼국지』 위서 동이전에 인용된 『위략』. 연대는 기원전 3세기 안팎입니다.",
    sister: { href: `${korea}/eras`, label: "대한민국이야기의 시대" },
  },
  {
    slug: "wiman-joseon",
    lane: "korea",
    row: 0,
    title: "위만조선",
    titleEn: "Wiman Joseon",
    year: -194,
    summary:
      "연나라 사람 위만이 무리를 이끌고 고조선으로 들어옵니다. 그는 조선왕 준을 몰아내고 왕이 됩니다. 한나라는 위만을 바깥 신하로 대하며 주변을 막게 합니다. 한국사 수업에서 쓰는 기원전 194년은 한의 연표에 맞춘 통설입니다.",
    peninsula:
      "고조선의 왕은 바뀌었지만 나라는 이어집니다. 준왕이 남쪽으로 달아났다는 이야기는 『위략』 계열 기록에 있고, 그 뒤를 삼한과 곧장 잇는 것은 단순합니다.",
    source: "근거: 『사기』 조선열전. 준왕의 남천은 『위략』(『삼국지』 배송지 주).",
    sister: tree("dynasty=gojoseon&focus=gj-wiman", "위만"),
  },
  {
    slug: "fall-of-gojoseon",
    lane: "korea",
    row: 0,
    title: "고조선의 멸망",
    titleEn: "Fall of Gojoseon",
    year: -108,
    summary:
      "한 무제가 위만의 손자 우거왕을 공격합니다. 고조선은 내부가 갈라진 끝에 무너집니다. 한은 낙랑을 비롯한 군현을 둡니다. 그중 낙랑은 서북 지역에 오래 남습니다.",
    peninsula:
      "한반도 서북은 한의 군현이 됩니다. 남쪽의 삼한 사회는 이 군현과 이웃하며 자랍니다. 나라 전체가 한에 편입된 것은 아닙니다.",
    source: "근거: 『사기』 조선열전, 『한서』 조선전.",
    sister: { href: `${korea}/eras`, label: "대한민국이야기의 시대" },
  },
  {
    slug: "samhan-recorded",
    lane: "korea",
    row: 3,
    title: "삼한의 모습",
    titleEn: "Samhan",
    year: 250,
    circa: true,
    summary:
      "마한, 진한, 변한을 삼한이라 부릅니다. 3세기 중국 기록은 남쪽에 작은 나라들이 여럿 있었다고 적습니다. 철과 베, 읍락의 우두머리가 보입니다. 경계선은 지도에 긋기 어렵습니다.",
    peninsula:
      "서북의 낙랑, 북쪽의 고구려, 남쪽의 삼한이 함께 있는 그림입니다. 백제와 신라는 이 읍락들 사이에서 커집니다.",
    source: "근거: 『삼국지』 위서 동이전. 편찬은 3세기 말이고, 사회 자체는 더 이릅니다.",
    sister: era("three-kingdoms", "삼국"),
  },
  {
    slug: "founding-silla",
    lane: "korea",
    row: 4,
    title: "신라 건국 전승",
    titleEn: "Founding of Silla",
    year: -57,
    tradition: true,
    traditionNote: "『삼국사기』가 혁거세 즉위를 기원전 57년으로 적습니다. 1145년에 엮은 책의 연대이고, 당대의 나라는 아닙니다.",
    summary:
      "『삼국사기』는 박혁거세가 사로에서 임금이 되었다고 적습니다. 여섯 마을이 그를 높였다는 이야기입니다. 경주 일대의 정치체가 이 해에 완성됐다는 증거는 없습니다. 신라는 진한의 한 세력으로 천천히 커집니다.",
    peninsula:
      "북쪽에는 아직 고조선의 기억이 가깝고, 기원전 108년 이후로는 낙랑이 있습니다. 남쪽은 삼한의 읍락들입니다.",
    source: "근거: 『삼국사기』 신라본기. 건국 연도는 전승입니다.",
    sister: tree("dynasty=silla&focus=sl-hyeokgeose", "혁거세"),
  },
  {
    slug: "founding-goguryeo",
    lane: "korea",
    row: 1,
    title: "고구려 건국 전승",
    titleEn: "Founding of Goguryeo",
    year: -37,
    tradition: true,
    traditionNote: "주몽(추모)이 졸본에서 나라를 열었다는 기원전 37년은 『삼국사기』의 전승입니다. 국가의 윤곽은 1세기 이후에 더 분명합니다.",
    summary:
      "『삼국사기』는 주몽이 부여를 떠나 졸본에서 고구려를 세웠다고 적습니다. 시조 설화에는 알에서 태어났다는 이야기가 들어 있습니다. 부여·옥저와 이웃한 북방의 세력이 나라로 자라는 과정은 이 한 해보다 깁니다.",
    peninsula:
      "서북에는 낙랑이 있고, 남쪽은 삼한입니다. 고구려는 압록강 중류에서 시작해 나중에 남쪽으로 내려옵니다.",
    source: "근거: 『삼국사기』 고구려본기, 『삼국유사』. 건국 연도는 전승입니다.",
    sister: tree("dynasty=goguryeo&focus=gg-jumong", "주몽"),
  },
  {
    slug: "founding-baekje",
    lane: "korea",
    row: 2,
    title: "백제 건국 전승",
    titleEn: "Founding of Baekje",
    year: -18,
    tradition: true,
    traditionNote: "온조가 하남 위례성에서 즉위했다는 기원전 18년은 『삼국사기』의 전승입니다. 한성 백제의 실체는 3–4세기 고고학에서 더 분명합니다.",
    summary:
      "『삼국사기』는 온조가 고구려 쪽에서 내려와 백제를 열었다고 적습니다. 형 비류의 이야기도 함께 전합니다. 한강 유역의 백제가 중국 기록에 선명해지는 것은 그보다 뒤입니다.",
    peninsula:
      "마한의 여러 소국 사이에 한강 유역 세력이 커지던 때입니다. 낙랑은 아직 북쪽에 있습니다.",
    source: "근거: 『삼국사기』 백제본기. 건국 연도는 전승입니다.",
    sister: tree("dynasty=baekje&focus=bj-onjo", "온조"),
  },
  {
    slug: "goguryeo-takes-lelang",
    lane: "korea",
    row: 0,
    title: "고구려, 낙랑을 차지하다",
    titleEn: "Goguryeo takes Lelang",
    year: 313,
    summary:
      "고구려 미천왕이 낙랑군을 무너뜨립니다. 대방군도 곧 고구려와 백제의 압박 속에 사라집니다. 한 무제 이후 서북에 남아 있던 중국 군현의 시대가 끝납니다. 이 해는 한국 고대사에서 드물게 또렷한 이정표입니다.",
    peninsula:
      "한반도 서북의 중심이 군현에서 고구려로 옮겨 갑니다. 백제와 신라는 남쪽에서 나라의 틀을 키우고 있습니다.",
    source: "근거: 『삼국사기』 고구려본기 미천왕.",
    sister: era("three-kingdoms", "삼국"),
  },
  {
    slug: "geunchogo-expansion",
    lane: "korea",
    row: 2,
    title: "근초고왕의 팽창",
    titleEn: "King Geunchogo",
    year: 371,
    summary:
      "백제 근초고왕이 북쪽으로 올라가 고구려의 평양성을 칩니다. 고구려 고국원왕이 이 싸움에서 죽습니다. 백제는 한강에 도읍을 둔 채 황해 교역로를 넓힙니다. 마한의 남은 세력을 아우르던 때이기도 합니다.",
    peninsula:
      "백제와 고구려가 한반도 중북부에서 맞붙습니다. 신라는 아직 두 나라보다 작지만, 이 구도가 삼국의 경쟁입니다.",
    source: "근거: 『삼국사기』 백제본기·고구려본기.",
    sister: { href: `${korea}/rulers/geunchogo`, label: "대한민국이야기의 근초고왕" },
  },
  {
    slug: "gwanggaeto",
    lane: "korea",
    row: 1,
    title: "광개토대왕",
    titleEn: "Gwanggaeto",
    year: 391,
    summary:
      "고구려 광개토왕이 즉위합니다. 재위는 413년까지이고, 집안의 릉비는 그 사이 원정을 기립니다. 백제를 압박하고 북방과 요동에서 영토를 넓혔다고 전합니다. 비문의 일부 글자, 특히 왜와의 관계는 읽는 사람이 갈립니다.",
    peninsula:
      "고구려가 삼국 가운데 가장 큰 나라입니다. 백제와 신라는 남에서 버팁니다. 왜의 개입은 비문 해석에 따라 그림이 달라지니 한 줄로 단정하지 않습니다.",
    source: "근거: 광개토대왕릉비, 『삼국사기』 고구려본기. 비문의 쟁점 구절은 해석이 갈립니다.",
    sister: tree("dynasty=goguryeo&focus=gg-gwanggaeto", "광개토왕"),
  },
  {
    slug: "silla-buddhism",
    lane: "korea",
    row: 4,
    title: "신라, 불교를 공인하다",
    titleEn: "Silla adopts Buddhism",
    year: 527,
    summary:
      "법흥왕 때 신라가 불교를 나라의 신앙으로 받습니다. 이차돈이 죽어 기적을 보였다는 이야기는 후대에 꾸며진 부분이 있습니다. 공인 자체는 『삼국사기』가 이 무렵으로 적습니다. 고구려와 백제는 이미 불교를 받아들인 뒤입니다.",
    peninsula:
      "삼국이 모두 불교 왕국이 되어 갑니다. 율령과 왕호를 정비하던 6세기 신라의 한 장면입니다.",
    source: "근거: 『삼국사기』 신라본기 법흥왕. 이차돈의 기적은 후대 전승이 섞입니다.",
    sister: tree("dynasty=silla&focus=sl-beopheung", "법흥왕"),
  },
  {
    slug: "silla-han-river",
    lane: "korea",
    row: 4,
    title: "신라가 한강 유역을 차지하다",
    titleEn: "Silla takes the Han",
    year: 553,
    summary:
      "진흥왕 때 신라는 고구려에게서 빼앗은 한강 유역을 백제와 나누지 않고 독차지합니다. 551년의 공동 작전 뒤의 배신으로 백제는 받습니다. 신라는 서해 길을 얻어 중국과 직접 통합니다. 삼국의 균형이 신라 쪽으로 기웁니다.",
    peninsula:
      "한강은 한반도의 가운데 길입니다. 이 강을 가진 신라가 나중에 당과 손을 잡을 발판을 얻습니다.",
    source: "근거: 『삼국사기』 신라본기 진흥왕, 백제본기.",
    sister: { href: `${korea}/rulers/jinheung`, label: "대한민국이야기의 진흥왕" },
  },
  {
    slug: "battle-of-salsu",
    lane: "korea",
    row: 1,
    title: "살수대첩",
    titleEn: "Battle of Salsu",
    year: 612,
    summary:
      "수 양제가 고구려를 치려고 큰 군대를 보냅니다. 을지문덕은 살수에서 수군을 무너뜨립니다. 살수는 보통 청천강으로 봅니다. 수의 원정은 실패하고, 나라는 곧 흔들립니다.",
    peninsula:
      "고구려가 대륙의 통일 제국을 막아 섭니다. 남쪽의 백제는 고구려와 신라 사이에서 줄타기를 합니다.",
    source: "근거: 『삼국사기』 고구려본기 영양왕, 『수서』.",
    sister: era("three-kingdoms", "삼국"),
  },
  {
    slug: "ansi-fortress",
    lane: "korea",
    row: 1,
    title: "안시성 전투",
    titleEn: "Siege of Ansi",
    year: 645,
    summary:
      "당 태종이 직접 고구려를 치러 옵니다. 안시성이 오랫동안 버텨 당군은 물러납니다. 성주를 양만춘이라 부르는 것은 후대 기록이고, 『삼국사기』와 중국 정사에는 그 이름이 없습니다. 전투 자체는 645년의 일입니다.",
    peninsula:
      "고구려는 아직 버티지만 소모가 큽니다. 신라는 당과 가까워지고, 백제는 고립 쪽으로 갑니다.",
    source: "근거: 『삼국사기』, 『구당서』, 『자치통감』. 양만춘이라는 이름은 후대입니다.",
    sister: era("three-kingdoms", "삼국"),
  },
  {
    slug: "fall-of-baekje",
    lane: "korea",
    row: 2,
    title: "백제의 멸망",
    titleEn: "Fall of Baekje",
    year: 660,
    summary:
      "나당 연합군이 백제를 칩니다. 계백이 황산에서 막고, 의자왕은 웅진에서 항복합니다. 백제의 부흥 운동이 한동안 이어지다 스러집니다. 삼국 가운데 백제가 먼저 사라집니다.",
    peninsula:
      "한반도 서남부가 신라와 당의 손이 됩니다. 고구려는 북쪽과 요동에서 아직 남아 있습니다.",
    source: "근거: 『삼국사기』 백제본기 의자왕, 신라본기 태종무열왕.",
    sister: { href: `${korea}/rulers/uija`, label: "대한민국이야기의 의자왕" },
  },
  {
    slug: "fall-of-goguryeo",
    lane: "korea",
    row: 1,
    title: "고구려의 멸망",
    titleEn: "Fall of Goguryeo",
    year: 668,
    summary:
      "연개소문의 아들들이 갈라진 뒤 나당 연합군이 평양을 함락합니다. 보장왕이 항복하고 고구려는 무너집니다. 유민은 신라, 당, 그리고 곧 발해로 흩어집니다. 멸망이 북쪽 땅 전체의 즉시 점령을 뜻하지는 않습니다.",
    peninsula:
      "당은 평양에 안동도호부를 두고 옛 고구려 땅을 맡기려 합니다. 신라는 그 구도를 받아들이지 않습니다.",
    source: "근거: 『삼국사기』 고구려본기 보장왕, 『구당서』.",
    sister: era("three-kingdoms", "삼국"),
  },
  {
    slug: "silla-unification",
    lane: "korea",
    row: 4,
    title: "신라의 삼국통일",
    titleEn: "Silla unification",
    year: 676,
    summary:
      "신라는 옛 동맹 당과 싸워 한반도 안의 당군을 밀어냅니다. 기벌포와 매소성 싸움이 그 끝자락입니다. 신라는 대동강과 원산만 이남을 다스렸다고 보통 설명합니다. 북쪽 옛 고구려 땅 전체가 신라가 된 것은 아닙니다.",
    peninsula:
      "남부는 신라, 북쪽은 곧 발해가 채웁니다. 그래서 ‘통일’은 삼국의 남부를 아우른 일이고, 한반도 단일 국가는 아닙니다.",
    source: "근거: 『삼국사기』 신라본기 문무왕.",
    sister: { href: `${korea}/rulers/munmu`, label: "대한민국이야기의 문무왕" },
  },
  {
    slug: "founding-balhae",
    lane: "korea",
    row: 1,
    title: "발해 건국",
    titleEn: "Founding of Balhae",
    year: 698,
    summary:
      "대조영이 동모산에서 발해를 세웁니다. 고구려 유민과 말갈이 함께한 나라입니다. 한국사에서는 고구려를 이은 나라로 봅니다. 중국 기록은 발해를 말갈의 나라로 적기도 해서, 구성은 한쪽만으로 줄이지 않는 편이 맞습니다.",
    peninsula:
      "남쪽의 통일신라와 북쪽의 발해가 나란히 있습니다. 두 나라는 때로 사신을 주고받습니다.",
    source: "근거: 『구당서』 발해말갈전, 『삼국사기』.",
    sister: era("unified-silla", "통일신라"),
  },
  {
    slug: "later-three-kingdoms",
    lane: "korea",
    row: 4,
    title: "후삼국",
    titleEn: "Later Three Kingdoms",
    year: 892,
    circa: true,
    summary:
      "신라 말의 세금과 귀족 다툼 속에 지방이 일어납니다. 견훤은 서남에서 세력을 모아 900년 후백제를 선포합니다. 궁예는 북쪽에서 후고구려를 열었다가 918년 왕건에게 밀립니다. 892년은 그 분열이 뚜렷해진 무렵입니다.",
    peninsula:
      "통일신라는 이름만 남고, 후백제와 후고구려가 땅을 나눕니다. 발해는 926년 거란에 무너지기 직전입니다.",
    source: "근거: 『삼국사기』 신라본기 진성왕, 『삼국유사』. 후백제 선포는 900년입니다.",
    sister: era("unified-silla", "통일신라"),
  },
  {
    slug: "founding-goryeo",
    lane: "korea",
    row: 2,
    title: "고려 건국",
    titleEn: "Founding of Goryeo",
    year: 918,
    summary:
      "왕건이 궁예를 몰아내고 고려를 엽니다. 도읍은 개경입니다. 고구려를 잇는다는 뜻을 나라 이름에 담습니다. 신라와 후백제는 아직 남아 있습니다.",
    peninsula:
      "후삼국의 한 축이 고려로 바뀝니다. 왕건은 호족과 혼인하고 신라를 끌어안는 쪽으로 갑니다.",
    source: "근거: 『고려사』 태조 세가.",
    sister: { href: `${korea}/rulers/wanggeon`, label: "대한민국이야기의 왕건" },
  },
  {
    slug: "goryeo-unification",
    lane: "korea",
    row: 2,
    title: "고려, 후삼국을 마치다",
    titleEn: "Goryeo unifies the later kingdoms",
    year: 936,
    summary:
      "신라는 935년 경순왕이 고려에 나라를 넘깁니다. 이듬해 왕건이 후백제 신검의 군대를 일리천에서 이깁니다. 후삼국이 끝나고 고려가 한반도 대부분을 다스립니다. 발해 유민도 이 무렵 고려로 들어옵니다.",
    peninsula:
      "개경의 고려가 삼국의 뒤를 한 조정으로 묶습니다. 북방 경계는 여전히 거란·여진과 맞닿아 있습니다.",
    source: "근거: 『고려사』 태조 세가, 『삼국사기』 신라본기 경순왕.",
    sister: { href: `${korea}/rulers/wanggeon`, label: "대한민국이야기의 왕건" },
  },
  {
    slug: "battle-of-guju",
    lane: "korea",
    row: 2,
    title: "귀주대첩",
    titleEn: "Battle of Guju",
    year: 1019,
    summary:
      "거란(요)이 고려를 세 번째로 칩니다. 강감찬이 귀주에서 물러가는 거란군을 무너뜨립니다. 소배압이 이끈 군대는 살아 돌아간 수가 적었다고 전합니다. 그 뒤 고려와 요는 국경을 정하고 사신을 주고받습니다.",
    peninsula:
      "고려는 개경과 서경을 지킨 나라로 북방 제국과 맞섭니다. 남쪽 바다는 아직 큰 전장의 중심이 아닙니다.",
    source: "근거: 『고려사』 현종 세가, 강감찬 열전.",
    sister: era("goryeo", "고려"),
  },
  {
    slug: "mongol-invasions",
    lane: "korea",
    row: 2,
    title: "몽골의 침입",
    titleEn: "Mongol invasions",
    year: 1231,
    summary:
      "몽골이 고려를 치기 시작합니다. 조정은 1232년 강화도로 들어가 버팁니다. 육지는 약탈과 항복, 반격을 오갑니다. 1259년 강화가 성립할 때까지 여러 차례 쳐들어옵니다.",
    peninsula:
      "왕은 섬에 있고 백성은 육지에 있습니다. 부처의 힘으로 막으려 만든 팔만대장경 재간도 이 전쟁의 산물입니다.",
    source: "근거: 『고려사』 고종 세가.",
    sister: era("goryeo", "고려"),
  },
  {
    slug: "sambyeolcho",
    lane: "korea",
    row: 2,
    title: "삼별초의 항쟁",
    titleEn: "Sambyeolcho resistance",
    year: 1270,
    summary:
      "고려 정부가 개경으로 돌아가 몽골과 화의하자, 삼별초가 배중손을 따라 반기를 듭니다. 진도, 그다음 제주까지 이어집니다. 1273년 여몽 연합군에 진압됩니다. 항쟁의 성격은 대몽 저항이자 고려 정부와의 내전이기도 합니다.",
    peninsula:
      "강화도 정부의 시대가 끝나고, 고려는 몽골 제국의 부마 나라가 되어 갑니다. 공녀와 전쟁 동원이 뒤따릅니다.",
    source: "근거: 『고려사』 원종 세가.",
    sister: era("goryeo", "고려"),
  },
  {
    slug: "founding-joseon",
    lane: "korea",
    row: 2,
    title: "조선 건국",
    titleEn: "Founding of Joseon",
    year: 1392,
    summary:
      "이성계가 위화도에서 군대를 돌린 뒤 정권을 잡고, 1392년 새 왕조를 엽니다. 나라 이름을 조선으로 정한 것은 이듬해, 명에 물은 뒤입니다. 도읍은 곧 한양으로 옮겨 갑니다. 고려의 왕씨는 밀려납니다.",
    peninsula:
      "개경의 고려가 끝나고 한양의 왕조가 시작됩니다. 북방의 여진과 남쪽의 왜구는 여전히 경계의 일입니다.",
    source: "근거: 『조선왕조실록』 태조, 『고려사』 공양왕.",
    sister: { href: `${korea}/rulers/taejo`, label: "대한민국이야기의 태조" },
  },
  {
    slug: "hunminjeongeum-created",
    lane: "korea",
    row: 2,
    title: "훈민정음을 만들다",
    titleEn: "Hunminjeongeum created",
    year: 1443,
    summary:
      "세종 25년, 계해년에 새 글자가 만들어집니다. 한자를 모르는 백성이 말하고자 하는 바를 적게 하려는 글자입니다. 자음과 모음을 모아 쓰는 방식입니다. 세상에 반포한 것은 3년 뒤입니다.",
    peninsula:
      "조선은 세종 때의 제도와 학문이 무르익은 나라입니다. 글자는 궁중의 프로젝트였고, 바로 온 백성의 일상이 되지는 않았습니다.",
    source: "근거: 『훈민정음』 해례본 정인지 서, 『조선왕조실록』 세종 25년.",
    sister: { href: `${korea}/rulers/sejong`, label: "대한민국이야기의 세종" },
  },
  {
    slug: "hunminjeongeum-promulgated",
    lane: "korea",
    row: 2,
    title: "훈민정음을 반포하다",
    titleEn: "Hunminjeongeum promulgated",
    year: 1446,
    summary:
      "세종 28년에 『훈민정음』이 반포됩니다. 해례본은 글자를 만든 원리와 용례를 한문으로 설명합니다. 28자였고, 지금은 24자가 쓰입니다. 창제는 1443년, 반포는 1446년으로 나누어 적는 것이 기록에 맞습니다.",
    peninsula:
      "조선 전기의 한양입니다. 같은 세기 말, 지중해 반대편에서는 동로마의 수도가 무너집니다. 두 일은 원인으로 연결되어 있지 않습니다.",
    source: "근거: 『훈민정음』 해례본, 『조선왕조실록』 세종 28년.",
    sister: { href: `${korea}/rulers/sejong`, label: "대한민국이야기의 세종" },
  },
  {
    slug: "gyeyu-jeongnan",
    lane: "korea",
    row: 2,
    title: "계유정난",
    titleEn: "Gyeyu coup",
    year: 1453,
    summary:
      "수양대군이 김종서와 황보인 등을 제거하고 정권을 잡습니다. 어린 단종은 왕으로 남아 있지만 실권은 넘어갑니다. 수양은 뒤에 세조가 됩니다. 같은 해 콘스탄티노폴리스가 함락된 것과는 별개의 일입니다.",
    peninsula:
      "조선은 건국 60년째의 왕실 권력 다툼 한가운데입니다. 훈민정음은 이미 반포되어 있습니다.",
    source: "근거: 『조선왕조실록』 단종 원년.",
    sister: era("joseon", "조선"),
  },
];
