import type { HistEvent } from "@/data/types";

const rome = "https://rome-stories.vercel.app";

export const romeEvents: HistEvent[] = [
  {
    slug: "founding-of-rome",
    lane: "rome",
    row: 0,
    title: "로마 건국 전승",
    titleEn: "Founding of Rome",
    year: -753,
    tradition: true,
    traditionNote: "기원전 753년은 바로가 정리한 연대입니다. 로물루스와 레무스, 늑대 젖은 건국 신화입니다.",
    summary:
      "로마는 로물루스와 레무스가 팔라티노 언덕에 도시를 세웠다고 전합니다. 늑대가 쌍둥이를 키웠다는 이야기는 신화입니다. 고고학은 그 언덕의 철기 취락을 더 이른 시기로 보고, 도시국가의 틀은 기원전 7–6세기에 가깝다고 봅니다. 753년은 로마가 스스로 센 생일입니다.",
    peninsula:
      "한반도는 청동기 시대입니다. 민무늬 토기와 고인돌의 사회이고, 고조선의 경계는 아직 흐립니다.",
    source: "근거: 리비우스 『로마 건국사』 1권, 바로의 연대. 건국 해는 전승입니다.",
    sister: { href: `${rome}/rulers/romulus`, label: "로마이야기의 로물루스" },
  },
  {
    slug: "roman-republic",
    lane: "rome",
    row: 0,
    title: "공화정 전승",
    titleEn: "Roman Republic",
    year: -509,
    tradition: true,
    traditionNote: "마지막 왕 타르퀴니우스를 쫓아냈다는 기원전 509년은 리비우스의 전승 연대입니다. 왕정에서 공화정으로 옮아간 큰 줄기는 역사로 봅니다.",
    summary:
      "로마는 왕을 몰아내고 집정관 둘이 나라를 이끌게 되었다고 전합니다. 원로원이 중심입니다. 정확한 해와 초기의 영웅담은 후대 이야기에 가깝습니다. 공화정의 뼈대 자체는 그 뒤로 오래 갑니다.",
    peninsula:
      "고조선으로 부르는 사회가 북쪽에 자리 잡아가던 무렵입니다. 남쪽 진국에 대한 기록은 아직 없습니다.",
    source: "근거: 리비우스 『로마 건국사』. 509년은 전승 연대입니다.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
  },
  {
    slug: "pyrrhic-war",
    lane: "rome",
    row: 0,
    title: "피로스 전쟁",
    titleEn: "Pyrrhic War",
    year: -280,
    summary:
      "에페이로스의 왕 피로스가 남이탈리아의 그리스 도시를 도우러 옵니다. 코끼리 부대를 앞세워 로마를 이기지만 손실이 큽니다. 여기서 ‘피로스의 승리’라는 말이 나옵니다. 기원전 275년 로마가 이탈리아 남부를 장악합니다.",
    peninsula:
      "고조선 후기, 진국이 남쪽에 희미한 때입니다. 중국은 전국시대의 끝자락입니다.",
    source: "근거: 플루타르코스 『피로스』, 폴리비오스.",
    sister: { href: `${rome}/wars/pyrrhic-war`, label: "로마이야기의 피로스 전쟁" },
  },
  {
    slug: "first-punic-war",
    lane: "rome",
    row: 0,
    title: "제1차 포에니 전쟁",
    titleEn: "First Punic War",
    year: -264,
    summary:
      "로마와 카르타고가 시칠리아를 두고 싸웁니다. 육지의 로마가 함대를 만들어 바다에서 버팁니다. 기원전 241년 카르타고가 시칠리아를 내놓습니다. 포에니는 로마가 페니키아계 카르타고를 부른 이름입니다.",
    peninsula:
      "고조선 말입니다. 진이 중국을 통일하기 전이고, 고조선은 아직 한의 공격을 받기 전입니다.",
    source: "근거: 폴리비오스 『역사』 1권.",
    sister: { href: `${rome}/wars/first-punic-war`, label: "로마이야기의 제1차 포에니 전쟁" },
  },
  {
    slug: "battle-of-cannae",
    lane: "rome",
    row: 0,
    title: "칸나이와 제2차 포에니 전쟁",
    titleEn: "Cannae",
    year: -216,
    summary:
      "한니발이 알프스를 넘어 이탈리아로 들어옵니다. 기원전 216년 칸나이에서 로마군을 포위해 무너뜨립니다. 로마는 이탈리아 동맹을 붙들고 스페인과 아프리카로 전쟁을 옮깁니다. 기원전 202년 자마에서 스키피오가 한니발을 이깁니다.",
    peninsula:
      "진이 중국을 통일한 직후입니다. 위만이 고조선으로 들어오는 것은 약 이십 년 뒤입니다.",
    source: "근거: 폴리비오스 『역사』, 리비우스 『로마 건국사』 22권.",
    sister: { href: `${rome}/wars/second-punic-war`, label: "로마이야기의 제2차 포에니 전쟁" },
  },
  {
    slug: "fall-of-carthage",
    lane: "rome",
    row: 0,
    title: "카르타고의 멸망",
    titleEn: "Fall of Carthage",
    year: -146,
    summary:
      "제3차 포에니 전쟁에서 로마가 카르타고를 포위해 허뭅니다. 도시에 소금을 뿌렸다는 이야기는 후대의 꾸밈에 가깝습니다. 같은 해 그리스의 코린토스도 파괴됩니다. 로마는 서부 지중해의 주인이 됩니다.",
    peninsula:
      "고조선이 멸망한 지 한 세대입니다. 낙랑군이 서북에 있고, 남쪽은 삼한의 읍락들로 이어집니다.",
    source: "근거: 폴리비오스, 아피아노스. 소금 이야기는 후대 전승으로 봅니다.",
    sister: { href: `${rome}/wars/third-punic-war`, label: "로마이야기의 제3차 포에니 전쟁" },
  },
  {
    slug: "crossing-the-rubicon",
    lane: "rome",
    row: 0,
    title: "루비콘을 건너다",
    titleEn: "The Rubicon",
    year: -49,
    summary:
      "카이사르가 갈리아 총독 임기를 마치고도 군대를 해산하지 않습니다. 이탈리아와 속주의 경계인 루비콘강을 군단과 함께 건넙니다. 원로원은 그를 적의 편으로 선언한 상태입니다. 폼페이우스와의 내전이 시작됩니다.",
    peninsula:
      "낙랑과 삼한, 그리고 전승상의 삼국이 겹치는 세기입니다. 고구려·백제·신라의 건국 연대는 이야기이고, 서북의 실체는 낙랑입니다.",
    source: "근거: 카이사르 『내란기』, 플루타르코스 『카이사르』.",
    sister: { href: `${rome}/wars/caesar-civil-war`, label: "로마이야기의 카이사르 내전" },
    related: ["pompey-jerusalem"],
  },
  {
    slug: "assassination-of-caesar",
    lane: "rome",
    row: 0,
    title: "카이사르 암살",
    titleEn: "Assassination of Caesar",
    year: -44,
    summary:
      "기원전 44년 3월 15일, 브루투스를 비롯한 원로원 의원들이 폼페이우스 극장 회랑에서 카이사르를 죽입니다. 왕관을 노린다는 두려움이 이유였습니다. 암살은 공화정을 되돌리지 못하고 새로운 내전을 엽니다.",
    peninsula:
      "낙랑이 한반도 서북을 다스리던 때입니다. 남쪽 삼한은 철을 다루는 읍락 사회입니다.",
    source: "근거: 플루타르코스 『카이사르』, 수에토니우스 『황제전』.",
    sister: { href: `${rome}/wars/caesar-civil-war`, label: "로마이야기의 카이사르 내전" },
  },
  {
    slug: "battle-of-actium",
    lane: "rome",
    row: 0,
    title: "악티움 해전",
    titleEn: "Actium",
    year: -31,
    summary:
      "옥타비아누스가 안토니우스와 클레오파트라의 함대를 그리스 악티움에서 이깁니다. 둘은 이집트로 물러나고, 이듬해 스스로 목숨을 끊습니다. 지중해의 로마 내전이 여기서 기웁니다. 옥타비아누스는 곧 아우구스투스가 됩니다.",
    peninsula:
      "전승으로는 신라가 생긴 직후, 고구려 건국 전승 직전입니다. 기록으로 분명한 것은 낙랑과 남쪽의 읍락입니다.",
    source: "근거: 플루타르코스 『안토니우스』, 카시우스 디오.",
    sister: { href: `${rome}/wars/actium`, label: "로마이야기의 악티움" },
    related: ["herod-the-great"],
  },
  {
    slug: "augustus-principate",
    lane: "rome",
    row: 0,
    title: "아우구스투스와 원수정",
    titleEn: "Augustus",
    year: -27,
    summary:
      "원로원이 옥타비아누스에게 아우구스투스라는 칭호를 올립니다. 그는 공화정의 직함을 모아 쥐고, 황제라 자처하지 않습니다. 이 체제를 원수정이라 부릅니다. 로마의 오랜 내전이 일단 멈춥니다.",
    peninsula:
      "한반도 서북은 낙랑, 남쪽은 삼한입니다. 삼국의 건국 전승이 이 세기 안에 놓이지만, 그 해들은 후대 연대기입니다.",
    source: "근거: 아우구스투스 『신과 아우구스투스의 업적』, 카시우스 디오.",
    sister: { href: `${rome}/rulers/augustus`, label: "로마이야기의 아우구스투스" },
    related: ["birth-of-jesus"],
  },
  {
    slug: "great-fire-of-rome",
    lane: "rome",
    row: 0,
    title: "로마 대화재",
    titleEn: "Great Fire of Rome",
    year: 64,
    summary:
      "네로 때 로마에 큰 불이 나 도심이 며칠을 탑니다. 타키투스는 황제가 불을 질렀다는 소문과, 황제가 그리스도인을 범인으로 몰았다는 이야기를 함께 전합니다. 네로가 리라를 켰다는 장면은 후대에 더 꾸며집니다. 화재 자체는 64년의 일입니다.",
    peninsula:
      "낙랑과 삼한이 공존합니다. 고구려는 북방에서 나라의 틀을 키우고, 남쪽 삼국의 윤곽은 아직 3세기 기록에서 더 선명합니다.",
    source: "근거: 타키투스 『연대기』 15권, 수에토니우스 『네로』.",
    sister: { href: `${rome}/rulers/nero`, label: "로마이야기의 네로" },
    related: ["paul-journeys", "second-temple-destroyed", "fall-of-masada"],
  },
  {
    slug: "diocletian",
    lane: "rome",
    row: 0,
    title: "디오클레티아누스의 정제",
    titleEn: "Diocletian",
    year: 284,
    summary:
      "군인 황제들의 혼란 끝에 디오클레티아누스가 즉위합니다. 제국을 둘이 아니라 넷이 나누어 다스리는 사두 정치를 시도합니다. 세금과 물가, 군대의 틀을 다시 짭니다. 황제를 신에 가깝게 높이는 의전도 이 무렵 굳습니다.",
    peninsula:
      "삼한의 기록이 선명한 3세기입니다. 고구려는 낙랑을 넘보기 직전이고, 백제와 신라는 남쪽에서 커지고 있습니다.",
    source: "근거: 락탄티우스, 후대 로마 황제 약전. 284년 즉위는 통설입니다.",
    sister: { href: `${rome}/rulers/diocletian`, label: "로마이야기의 디오클레티아누스" },
  },
  {
    slug: "constantinople-dedicated",
    lane: "rome",
    row: 1,
    title: "콘스탄티노폴리스 봉헌",
    titleEn: "Constantinople",
    year: 330,
    summary:
      "콘스탄티누스가 옛 비잔티온을 고쳐 콘스탄티노폴리스로 봉헌합니다. 로마 다음의 수도가 됩니다. 그는 이미 그리스도교를 박해의 대상에서 빼 두었습니다. 제국의 무게가 동쪽으로 옮겨 가는 이정표입니다.",
    peninsula:
      "고구려가 낙랑을 차지한 지 얼마 되지 않은 때입니다. 백제와 신라가 남한의 주도권을 두고 커집니다.",
    source: "근거: 후대 로마 연대기와 콘스탄티누스 연구의 통설. 봉헌일은 5월 11일로 전합니다.",
    sister: { href: `${rome}/rulers/constantine`, label: "로마이야기의 콘스탄티누스" },
    related: ["edict-of-milan", "council-of-nicaea"],
  },
  {
    slug: "sack-of-rome-410",
    lane: "rome",
    row: 0,
    title: "서고트족, 로마를 치다",
    titleEn: "Sack of Rome",
    year: 410,
    summary:
      "알라리크가 이끄는 서고트족이 로마 시를 사흘 동안 약탈합니다. 서로마가 바로 망한 것은 아닙니다. 그러나 천 년 가까이 함락되지 않았다던 도시가 깨진 충격은 큽니다. 아우구스티누스는 이 일을 두고 『신국』을 씁니다.",
    peninsula:
      "광개토왕 재위 말입니다. 고구려가 남쪽과 요동에서 압박을 더하던 때입니다.",
    source: "근거: 오로시우스, 조르다네스, 아우구스티누스 『신국』의 집필 배경.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
  },
  {
    slug: "fall-of-western-rome",
    lane: "rome",
    row: 0,
    title: "서로마의 멸망",
    titleEn: "Fall of the Western Roman Empire",
    year: 476,
    summary:
      "게르만 용병 대장 오도아케르가 서로마 황제 로물루스 아우구스툴루스를 폐위합니다. 황제의 표식을 콘스탄티노폴리스로 보냈다고 전합니다. 서로마 조정이 끝난 해로 통용됩니다. 동로마는 계속되고, 이탈리아는 오도아케르와 그다음 동고트 아래로 갑니다.",
    peninsula:
      "고구려·백제·신라가 맞선 삼국 시대입니다. 신라는 아직 한강 유역을 독차지하기 전입니다.",
    source: "근거: 마르켈리누스 코메스의 연대기 등. 476년은 서로마 조정의 끝으로 쓰는 통설입니다.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
  },
  {
    slug: "hagia-sophia",
    lane: "rome",
    row: 1,
    title: "성 소피아 성당",
    titleEn: "Hagia Sophia",
    year: 537,
    summary:
      "유스티니아누스 때 콘스탄티노폴리스의 성 소피아가 다시 봉헌됩니다. 니카 반란으로 전임 성당이 불탄 뒤입니다. 거대한 돔은 동로마 건축의 상징이 됩니다. 같은 치세에 북아프리카와 이탈리아를 잠시 되찾으려는 전쟁도 벌어집니다.",
    peninsula:
      "신라 진흥왕 초기입니다. 한강 유역을 독차지하기 직전이고, 고구려와 백제는 아직 강합니다.",
    source: "근거: 프로코피오스 『건축물에 대하여』.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
  },
  {
    slug: "siege-of-constantinople-717",
    lane: "rome",
    row: 1,
    title: "콘스탄티노폴리스 포위",
    titleEn: "Siege of 717",
    year: 717,
    summary:
      "우마이야 왕조의 아랍 군대와 함대가 콘스탄티노폴리스를 포위합니다. 레오 3세의 동로마가 성벽과 불로 버팁니다. 718년 포위가 풀립니다. 이 실패 뒤 아랍의 유럽 진격은 한풀 꺾입니다.",
    peninsula:
      "통일신라와 발해가 나란히 있는 시대입니다. 신라는 전성기를 지나 귀족 정치로 기웁니다.",
    source: "근거: 테오파네스 연대기 등 동로마 사료. 포위는 717–718년입니다.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
  },
  {
    slug: "first-crusade",
    lane: "rome",
    row: 1,
    title: "제1차 십자군",
    titleEn: "First Crusade",
    year: 1099,
    summary:
      "동로마 황제 알렉시오스 1세가 셀주크에 밀리자 서유럽에 용병을 청합니다. 교황 우르바누스 2세의 호소는 순례와 전쟁이 섞인 큰 움직임이 됩니다. 1099년 십자군이 예루살렘을 점령하고 왕국을 세웁니다. 동로마가 바란 단순한 용병과는 달랐습니다.",
    peninsula:
      "고려 숙종 무렵입니다. 거란과의 전쟁은 이미 귀주에서 끝났고, 개경은 북방과 사신을 주고받습니다.",
    source: "근거: 안나 콤네네 『알렉시아스』, 서유럽 십자군 연대기.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
  },
  {
    slug: "fourth-crusade",
    lane: "rome",
    row: 1,
    title: "제4차 십자군",
    titleEn: "Fourth Crusade",
    year: 1204,
    summary:
      "예루살렘으로 가려던 서유럽 군대가 베네치아의 배와 빚, 동로마 왕위 다툼에 휘말립니다. 1204년 그들은 콘스탄티노폴리스를 약탈하고 라틴 제국을 세웁니다. 동로마 황실은 니카이아로 피합니다. 1261년에야 도시를 되찾지만 나라는 이전 같지 않습니다.",
    peninsula:
      "고려가 몽골의 침입을 받기 직전입니다. 무신정권이 개경을 쥐고 있던 때입니다.",
    source: "근거: 빌아르두앵, 니키타스 코니아테스.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
  },
  {
    slug: "fall-of-constantinople",
    lane: "rome",
    row: 1,
    title: "콘스탄티노폴리스 함락",
    titleEn: "Fall of Constantinople",
    year: 1453,
    summary:
      "오스만의 메흐메트 2세가 콘스탄티노폴리스를 함락합니다. 마지막 동로마 황제 콘스탄티노스 11세는 전투 중에 죽습니다. 서로마가 끝난 지 천 년 가까이 남아 있던 로마 제국의 조정이 여기서 끊깁니다. 도시는 이스탄불로 이어집니다.",
    peninsula:
      "조선 단종 때입니다. 같은 해 수양대군이 계유정난으로 정권을 잡습니다. 두 사건은 서로를 원인으로 하지 않습니다.",
    source: "근거: 스프란체스 등 동시대 기록. 1453년 5월 29일 함락이 통설입니다.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
  },
];
