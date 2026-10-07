import type { HistEvent } from "@/data/types";

const persia = "https://persia-stories.vercel.app";

export const persiaEvents: HistEvent[] = [
  {
    slug: "cyrus-takes-babylon",
    lane: "persia",
    row: 0,
    title: "키루스, 바빌론을 차지하다",
    titleEn: "Cyrus takes Babylon",
    year: -539,
    summary:
      "키루스 2세가 신바빌로니아를 무너뜨리고 바빌론에 들어갑니다. 메디아와 리디아에 이어 서아시아의 큰 왕국이 아케메네스 아래로 옵니다. 키루스 원통은 왕이 마르두크 신의 선택을 받았다고 적습니다. 제국의 뼈대가 여기서 넓어집니다.",
    peninsula:
      "고조선 후기입니다. 청동기에서 철기로 넘어가던 사회이고, 한의 군현은 아직 먼 뒤입니다.",
    source: "근거: 나보니두스 연대기, 키루스 원통.",
    sister: { href: `${persia}/rulers/cyrus`, label: "페르시아이야기의 키루스" },
    related: ["babylonian-exile", "cyrus-decree"],
  },
  {
    slug: "behistun",
    lane: "persia",
    row: 0,
    title: "베히스툰 비문",
    titleEn: "Behistun inscription",
    year: -520,
    circa: true,
    summary:
      "다리우스 1세가 반란을 진압한 뒤 절벽에 업적을 새깁니다. 고대 페르시아어, 엘람어, 아카드어 세 글자입니다. 왕위의 정통을 스스로 설명한 선전입니다. 새긴 해는 기원전 520년 안팎으로 봅니다.",
    peninsula:
      "고조선 말입니다. 전국시대 연나라가 요동으로 손을 뻗던 세기와 겹칩니다.",
    source: "근거: 베히스툰 비문. 제작 해는 다리우스 즉위 직후로 보아 경입니다.",
    sister: { href: `${persia}/places/behistun`, label: "페르시아이야기의 베히스툰" },
  },
  {
    slug: "persepolis",
    lane: "persia",
    row: 0,
    title: "페르세폴리스",
    titleEn: "Persepolis",
    year: -518,
    circa: true,
    summary:
      "다리우스 1세가 페르세폴리스를 의례의 수도로 짓기 시작합니다. 계단과 열주 홀, 조공 행렬 부조가 남습니다. 행정 수도는 수사와 다른 도시들도 함께 쓰입니다. 착공 해는 기원전 510년대의 근사치입니다.",
    peninsula:
      "여전히 고조선입니다. 남쪽 진국은 아직 기록이 옅고, 철기 문화가 퍼지던 때입니다.",
    source: "근거: 페르세폴리스 기초 금판과 궁전 고고학. 해는 경입니다.",
    sister: { href: `${persia}/places/persepolis`, label: "페르시아이야기의 페르세폴리스" },
  },
  {
    slug: "ionian-revolt",
    lane: "persia",
    row: 0,
    title: "이오니아 반란",
    titleEn: "Ionian Revolt",
    year: -499,
    summary:
      "페르시아 치하의 이오니아 그리스 도시들이 반란을 일으킵니다. 아테네와 에레트리아가 잠시 돕습니다. 기원전 494년 라데 해전으로 반란은 진압됩니다. 다리우스가 그리스 본토를 친 직접 구실이 됩니다.",
    peninsula:
      "고조선 후기입니다. 위만이 들어오기 약 삼백 년 전이고, 나라는 연·진의 변경과 닿아 있습니다.",
    source: "근거: 헤로도토스 『역사』 5–6권.",
    sister: { href: `${persia}/eras`, label: "페르시아이야기의 시대" },
  },
  {
    slug: "xerxes-invasion",
    lane: "persia",
    row: 0,
    title: "크세르크세스의 원정",
    titleEn: "Xerxes' invasion",
    year: -480,
    summary:
      "크세르크세스 1세가 헬레스폰토스에 다리를 놓고 그리스를 칩니다. 테르모필레를 돌파하지만 살라미스에서 함대를 잃습니다. 이듬해 플라타이아와 미칼레에서 육군도 밀립니다. 제국은 무너지지 않았고, 그리스 서부 원정이 실패한 것입니다.",
    peninsula:
      "고조선의 철기 시대입니다. 지중해 전쟁과 맞먹는 한반도 기록은 이 해에 없습니다.",
    source: "근거: 헤로도토스 『역사』 7–9권.",
    sister: { href: `${persia}/wars/xerxes-invasion`, label: "페르시아이야기의 크세르크세스 원정" },
  },
  {
    slug: "fall-of-persepolis",
    lane: "persia",
    row: 0,
    title: "페르세폴리스 함락",
    titleEn: "Fall of Persepolis",
    year: -330,
    summary:
      "가우가멜라에서 진 다리우스 3세가 동쪽으로 달아납니다. 알렉산드로스가 페르세폴리스를 차지하고 궁전에 불이 납니다. 다리우스는 부하에게 죽임을 당합니다. 아케메네스 왕조는 여기서 끝납니다.",
    peninsula:
      "고조선 말입니다. 진국이 남쪽에 있었다는 소문이 같은 세기에 있고, 한의 공격은 아직 이백 년 뒤입니다.",
    source: "근거: 아리아노스 『알렉산드로스 원정기』, 디오도로스.",
    sister: { href: `${persia}/wars/alexander`, label: "페르시아이야기의 알렉산드로스" },
  },
  {
    slug: "parthian-empire",
    lane: "persia",
    row: 0,
    title: "파르티아의 시작",
    titleEn: "Parthian Empire",
    year: -247,
    circa: true,
    summary:
      "아르사케스가 셀레우코스 왕조의 동쪽, 파르티아에서 독립합니다. 이란계 왕조가 헬레니즘 왕을 밀어내며 자랍니다. 수도는 나중에 크테시폰 쪽으로 옮겨 갑니다. 기원전 247년은 개국의 통용 연대이고 약간 흔들립니다.",
    peninsula:
      "진이 중국을 통일하기 직전입니다. 고조선은 그 통일 전쟁의 영향을 요동 쪽에서 받게 됩니다.",
    source: "근거: 파르티아 초기 연대기 연구. 아르사케스의 해는 경으로 적는 편이 맞습니다.",
    sister: { href: `${persia}/eras`, label: "페르시아이야기의 시대" },
  },
  {
    slug: "battle-of-carrhae",
    lane: "persia",
    row: 0,
    title: "카르헤 전투",
    titleEn: "Carrhae",
    year: -53,
    summary:
      "로마의 크라수스가 파르티아를 치러 왔다가 카르헤에서 무너집니다. 파르티아 기마궁수가 중장보병을 흩습니다. 크라수스는 죽고, 군단기 독수리는 빼앗깁니다. 유프라테스 동쪽은 로마가 쉽게 못 넘는 선이 됩니다.",
    peninsula:
      "신라 건국 전승과 같은 기원전 1세기 중엽입니다. 그 연대는 전승이고, 서북의 실체는 낙랑입니다.",
    source: "근거: 플루타르코스 『크라수스』.",
    sister: { href: `${persia}/wars/carrhae`, label: "페르시아이야기의 카르헤" },
  },
  {
    slug: "founding-of-sasanian",
    lane: "persia",
    row: 0,
    title: "사산 왕조의 시작",
    titleEn: "Rise of the Sasanians",
    year: 224,
    summary:
      "아르다시르 1세가 호르모즈드간에서 파르티아의 마지막 왕을 이깁니다. 사산 왕조가 이란을 차지합니다. 조로아스터교 제사를 나라의 중심에 두고, 아케메네스의 후예임을 내세웁니다. 로마와의 긴 전쟁이 다시 시작됩니다.",
    peninsula:
      "삼한이 중국 기록에 선명한 3세기입니다. 고구려는 낙랑을 넘보기 시작하고, 백제·신라는 남쪽에서 커집니다.",
    source: "근거: 사산 초기 비문과 아랍·페르시아 후대 사서의 224년 통설.",
    sister: { href: `${persia}/rulers/ardashir-i`, label: "페르시아이야기의 아르다시르 1세" },
  },
  {
    slug: "battle-of-edessa",
    lane: "persia",
    row: 0,
    title: "에데사 전투",
    titleEn: "Edessa",
    year: 260,
    summary:
      "샤푸르 1세가 에데사에서 로마 황제 발레리아누스를 사로잡습니다. 로마 황제가 적에게 산 채로 잡힌 드문 일입니다. 샤푸르는 카바예 조로아스터 신전 벽에 이 승리를 새깁니다. 사산 왕조의 군사적 정점 가운데 하나입니다.",
    peninsula:
      "삼한과 고구려, 그리고 커지는 백제·신라가 함께 있는 3세기입니다. 낙랑은 아직 서북에 남아 있습니다.",
    source: "근거: 샤푸르 1세의 비문(카바예 조로아스터), 로마 사료.",
    sister: { href: `${persia}/wars/edessa`, label: "페르시아이야기의 에데사" },
  },
  {
    slug: "khosrow-i",
    lane: "persia",
    row: 0,
    title: "호스로 1세",
    titleEn: "Khosrow I",
    year: 531,
    summary:
      "호스로 1세, 아누시르완이라 불리는 왕이 즉위합니다. 세금을 토지에 매기고 귀족의 사병을 줄이며 관료를 키웁니다. 동로마의 유스티니아누스와 오래 싸우고, 540년 안티오키아를 칩니다. 사산의 제도가 가장 정돈된 치세로 기억됩니다.",
    peninsula:
      "신라 법흥왕·진흥왕 사이입니다. 불교 공인과 한강 진출로 신라가 삼국의 판을 바꾸기 직전입니다.",
    source: "근거: 사산·동로마 사료와 『샤나메』 이전의 왕정 전통. 531년 즉위가 통설입니다.",
    sister: { href: `${persia}/rulers/khosrow-i`, label: "페르시아이야기의 호스로 1세" },
  },
  {
    slug: "fall-of-sasanian",
    lane: "persia",
    row: 0,
    title: "사산 왕조의 멸망",
    titleEn: "Fall of the Sasanians",
    year: 651,
    summary:
      "이슬람 공동체의 군대가 사산을 무너뜨립니다. 카디시야는 636년 또는 637년, 니하반드는 642년으로 적힙니다. 마지막 왕 야즈데게르드 3세는 651년 메르브에서 죽습니다. 조로아스터교 공동체는 남지만, 이란의 나라는 이슬람 세계 안으로 들어갑니다.",
    peninsula:
      "백제가 무너지기 직전입니다. 신라는 당과 손을 잡아 가고, 고구려는 아직 평양을 지키고 있습니다.",
    source: "근거: 초기 이슬람 정복 사료, 페르시아 왕통 기록. 카디시야의 해는 636·637로 갈려 본문은 경으로 적었습니다.",
    sister: { href: `${persia}/wars/fall-of-sasanians`, label: "페르시아이야기의 사산 멸망" },
  },
  {
    slug: "shahnameh",
    lane: "persia",
    row: 0,
    title: "『샤나메』",
    titleEn: "Shahnameh",
    year: 1010,
    circa: true,
    summary:
      "페르도우시가 이란의 왕과 영웅 이야기를 페르시아어 운문으로 엮어 마칩니다. 가즈니의 마흐무드에게 바쳤다고 전합니다. 신화와 사산 왕들의 기억이 섞여 있어 연대기로 읽으면 안 됩니다. 완성 해는 1010년 안팎입니다.",
    peninsula:
      "고려 현종 때, 귀주대첩(1019) 직전입니다. 거란의 침입이 이어지던 해입니다.",
    source: "근거: 페르도우시 『샤나메』의 완성 연대 연구. 해는 경입니다. 작품 안 문장은 옮기지 않습니다.",
    sister: { href: `${persia}/eras`, label: "페르시아이야기의 시대" },
  },
  {
    slug: "mongol-iran",
    lane: "persia",
    row: 0,
    title: "몽골, 이란을 치다",
    titleEn: "Mongol invasion of Iran",
    year: 1219,
    summary:
      "칭기즈 칸의 군대가 호라즘 샤 왕국을 칩니다. 부하라, 사마르칸트, 니샤푸르 등 이란 동쪽 도시가 무너집니다. 파괴의 규모는 도시마다 기록이 다르니 한 숫자로 줄이지 않습니다. 뒤이어 일 칸국이 이란을 다스립니다.",
    peninsula:
      "고려가 몽골의 침입을 받기 십여 년 전입니다. 무신정권의 최씨 정권이 개경을 쥐고 있습니다.",
    source: "근거: 주베이니 『세계정복자의 역사』, 라시드 앗 딘의 집사. 원정의 시작은 1219년입니다.",
    sister: { href: `${persia}/eras`, label: "페르시아이야기의 시대" },
  },
  {
    slug: "timur-iran",
    lane: "persia",
    row: 0,
    title: "티무르의 이란 원정",
    titleEn: "Timur in Iran",
    year: 1381,
    circa: true,
    summary:
      "티무르는 사마르칸트를 거점으로 한 투르크·몽골계 정복자입니다. 1370년 권력을 잡은 뒤 1380년대에 이란 고원의 왕조들을 무너뜨리기 시작합니다. 이스파한 등에서 학살이 뒤따릅니다. 이란은 그의 제국 일부가 되고, 그는 1405년에 죽습니다.",
    peninsula:
      "고려 말이고, 이성계가 위화도에서 회군한 1388년과 가깝습니다. 조선 건국은 1392년입니다.",
    source: "근거: 티무르 시대 페르시아어 연대기. 이란 진입은 1381년 안팎이라 경으로 적습니다.",
    sister: { href: `${persia}/eras`, label: "페르시아이야기의 시대" },
  },
];
