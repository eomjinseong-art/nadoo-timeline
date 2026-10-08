import type { HistEvent } from "@/data/types";

const greece = "https://greece-stories.vercel.app";
const myth = "https://nadoo-myth.vercel.app";
const philosophy = "https://philosophy-stories.vercel.app";
const persia = "https://persia-stories.vercel.app";
const egypt = "https://egypt-stories.vercel.app";
const iliad = "https://iliad-stories.vercel.app";

const persianWarMore = [
  { href: `${persia}/wars/marathon`, label: "페르시아이야기의 마라톤" },
  { href: `${persia}/wars/xerxes-invasion`, label: "페르시아이야기의 크세르크세스 원정" },
];

const alexanderMore = [
  { href: `${persia}/wars/alexander`, label: "페르시아이야기의 알렉산드로스" },
  { href: `${egypt}/wars/alexander`, label: "이집트이야기의 알렉산드로스" },
  { href: `${philosophy}/people/aristotle`, label: "철학이야기의 아리스토텔레스" },
];

export const greeceEvents: HistEvent[] = [
  {
    slug: "minoan-palaces",
    lane: "greece",
    row: 0,
    title: "미노아 궁전",
    titleEn: "Minoan palaces",
    year: -1900,
    circa: true,
    summary:
      "크레타에 크노소스 같은 궁전이 들어섭니다. 저장고와 벽화, 아직 완전히 읽히지 않은 선형문자 A가 남습니다. 미노스는 후대 그리스 신화의 왕 이름이고, 이 궁전들의 진짜 왕명은 모릅니다. 그리스 본토의 폴리스보다 훨씬 이릅니다.",
    peninsula:
      "한반도는 신석기 마을입니다. 빗살무늬 토기를 쓰는 공동체이지, 궁전 국가는 아닙니다.",
    source: "근거: 크레타 청동기 고고학. 궁전 시작은 기원전 1900년 안팎입니다.",
    sister: { href: `${greece}/origins`, label: "그리스이야기의 탄생·시대" },
  },
  {
    slug: "mycenaean-citadels",
    lane: "greece",
    row: 1,
    title: "미케네 성채",
    titleEn: "Mycenaean citadels",
    year: -1600,
    circa: true,
    summary:
      "그리스 본토에 미케네, 필로스 같은 성채가 섭니다. 선형문자 B는 그리스어로 읽힙니다. 궁정은 병사와 곡물, 향유를 장부에 적었습니다. 이 세계는 기원전 1200년 무렵 여러 궁전이 함께 무너집니다.",
    peninsula:
      "한반도는 청동기가 퍼지기 전후입니다. 민무늬 토기 사회로 들어가는 길이고, 성채 왕국은 아닙니다.",
    source: "근거: 미케네 고고학과 선형문자 B 판독. 시작 해는 경입니다.",
    sister: { href: `${greece}/origins`, label: "그리스이야기의 탄생·시대" },
  },
  {
    slug: "trojan-war",
    lane: "greece",
    row: 1,
    title: "트로이 전쟁 전승",
    titleEn: "Trojan War tradition",
    year: -1184,
    circa: true,
    tradition: true,
    traditionNote: "에라토스테네스가 정리한 기원전 1184년경은 후대의 계산입니다. 『일리아스』는 서사지 연대기가 아닙니다.",
    summary:
      "그리스 서사시는 헬레네를 두고 그리스 연합군이 트로이를 십 년 포위했다고 노래합니다. 히사를리크의 유적에는 청동기 말의 파괴층이 있지만, 그 층이 곧 시의 전쟁인지는 증명되지 않습니다. 목마 이야기는 더 나중 서사에 가깝습니다. 역사 사건으로 연도를 외우면 안 됩니다.",
    peninsula:
      "같은 무렵 한반도는 청동기 사회로 들어가는 초입입니다. 그리스 서사와 대응되는 한반도 기록은 없습니다.",
    source: "근거: 호메로스 『일리아스』는 서사. 1184년경은 에라토스테네스 계열의 전승 연대. 유적은 트로이 발굴.",
    sister: { href: `${myth}/stories/trojan-war`, label: "나두신화의 트로이 전쟁" },
    more: [
      { href: `${greece}/family-tree?tree=trojan&focus=achilles`, label: "그리스이야기의 아킬레우스" },
      { href: iliad, label: "일리아스이야기" },
    ],
  },
  {
    slug: "homeric-epics",
    lane: "greece",
    row: 0,
    title: "호메로스 서사시",
    titleEn: "Homeric epics",
    year: -750,
    circa: true,
    summary:
      "『일리아스』와 『오디세이아』가 지금 우리가 읽는 꼴에 가까워진 시기를 보통 기원전 8세기로 봅니다. 그 전에는 입으로 불리던 이야기입니다. 호메로스라는 한 사람이 다 썼는지도 확실하지 않습니다. 글이 된 시기와 이야기 속 전쟁의 전승 연대는 다릅니다.",
    peninsula:
      "한반도는 청동기 말에서 철기로 넘어가는 고조선의 앞자락입니다. 나라의 경계는 아직 흐립니다.",
    source: "근거: 그리스 서사시의 언어와 문자 도입 연구. 한 해로 못 박지 않습니다.",
    sister: { href: `${greece}/people/homer`, label: "그리스이야기의 호메로스" },
    more: [
      { href: iliad, label: "일리아스이야기" },
      { href: `${philosophy}/people/homer`, label: "철학이야기의 호메로스" },
    ],
  },
  {
    slug: "first-olympics",
    lane: "greece",
    row: 0,
    title: "올림피아 제전 전승",
    titleEn: "First Olympiad",
    year: -776,
    tradition: true,
    traditionNote: "기원전 776년은 후대에 정리된 우승자 명부의 첫 해입니다. 제단과 경기의 실제 시작이 그 해라는 뜻은 아닙니다.",
    summary:
      "고대 그리스는 올림피아 경기를 4년마다 열었고, 그 주기를 연대 계산에 썼습니다. 첫 우승자를 기원전 776년의 코로이보스로 적은 것은 후대 명부입니다. 올림피아 성역의 제사는 그보다 이릅니다. 근대 올림픽과는 다른 종교 축제입니다.",
    peninsula:
      "고조선으로 불리는 청동기 사회가 북쪽에 있었을 수 있는 때입니다. 경기 축제에 견줄 기록은 없습니다.",
    source: "근거: 후대 올림피아 우승자 명부. 파우사니아스가 성역을 전합니다.",
    sister: { href: `${greece}/origins`, label: "그리스이야기의 탄생·시대" },
  },
  {
    slug: "solon-reforms",
    lane: "greece",
    row: 0,
    title: "솔론의 개혁",
    titleEn: "Solon's reforms",
    year: -594,
    circa: true,
    summary:
      "아테네가 빚 때문에 갈라지자 솔론이 중재자로 나섭니다. 빚 때문에 몸이 묶이던 일을 풀고, 재산에 따라 정치 참여를 나눕니다. 민주정의 완성으로 부르면 이릅니다. 해는 기원전 594년 또는 그 근처로 전합니다.",
    peninsula:
      "고조선 후기입니다. 위만이 들어오기 전이고, 남쪽의 진에 대한 기록은 아직 희미합니다.",
    source: "근거: 아리스토텔레스 『아테나이 정체』, 플루타르코스 『솔론』. 집권 해는 약간 흔들립니다.",
    sister: { href: `${greece}/people/solon`, label: "그리스이야기의 솔론" },
  },
  {
    slug: "cleisthenes-democracy",
    lane: "greece",
    row: 0,
    title: "클레이스테네스의 개혁",
    titleEn: "Cleisthenes",
    year: -508,
    summary:
      "클레이스테네스가 아테네 사람을 혈족이 아니라 거주지 단위로 다시 묶습니다. 500인 평의회와 도편 추방의 틀이 이 개혁에 기대어 있습니다. 이를 아테네 민주정의 시작으로 많이 부릅니다. 여자와 노예, 외국인은 시민이 아니었습니다.",
    peninsula:
      "고조선 후기입니다. 남쪽 진국에 대한 기록은 아직 없고, 철기 문화가 퍼지던 때입니다.",
    source: "근거: 헤로도토스 『역사』, 아리스토텔레스 『아테나이 정체』.",
    sister: { href: `${greece}/people/cleisthenes`, label: "그리스이야기의 클레이스테네스" },
  },
  {
    slug: "battle-of-marathon",
    lane: "greece",
    row: 0,
    title: "마라톤 전투",
    titleEn: "Battle of Marathon",
    year: -490,
    summary:
      "페르시아의 다리우스 1세가 그리스를 칩니다. 아테네와 플라타이아가 마라톤 해변에서 페르시아군을 막습니다. 밀티아데스가 이끈 중장보병이 육박전으로 이깁니다. 전쟁이 끝난 것은 아니고, 열 년 뒤 크세르크세스가 다시 옵니다.",
    peninsula:
      "고조선 후기입니다. 위만이 들어오기까지 약 삼백 년이 남았고, 철기 문화가 퍼지던 때입니다.",
    source: "근거: 헤로도토스 『역사』 6권.",
    sister: { href: `${greece}/wars/persian-wars`, label: "그리스이야기의 페르시아 전쟁" },
    more: persianWarMore,
  },
  {
    slug: "thermopylae",
    lane: "greece",
    row: 0,
    title: "테르모필레",
    titleEn: "Thermopylae",
    year: -480,
    seq: 0,
    summary:
      "크세르크세스가 육군과 함대를 이끌고 그리스로 내려옵니다. 레오니다스의 스파르타군이 테르모필레 좁은 길에서 시간을 법니다. 길은 결국 열리고 수비군은 죽습니다. 그리스 전체가 거기서 이긴 전투는 아닙니다.",
    peninsula:
      "고조선 후기입니다. 위만이 왕위를 빼앗기까지 약 삼백 년이 남았고, 남쪽 경계는 여전히 흐립니다.",
    source: "근거: 헤로도토스 『역사』 7권.",
    sister: { href: `${greece}/people/leonidas`, label: "그리스이야기의 레오니다스" },
    more: persianWarMore,
  },
  {
    slug: "salamis",
    lane: "greece",
    row: 0,
    title: "살라미스 해전",
    titleEn: "Salamis",
    year: -480,
    seq: 1,
    summary:
      "아테네 사람들은 도시를 비우고 배 위로 올라갑니다. 테미스토클레스가 좁은 살라미스 해협으로 페르시아 함대를 끌어들입니다. 그리스 연합 함대가 이깁니다. 육지의 결정전은 이듬해 플라타이아입니다.",
    peninsula:
      "같은 기원전 480년, 한반도는 고조선의 영역으로 보는 청동기·철기 사회입니다. 해전을 전하는 기록은 없습니다.",
    source: "근거: 헤로도토스 『역사』 8권.",
    sister: { href: `${greece}/people/themistocles`, label: "그리스이야기의 테미스토클레스" },
    more: persianWarMore,
  },
  {
    slug: "peloponnesian-war",
    lane: "greece",
    row: 0,
    title: "펠로폰네소스 전쟁",
    titleEn: "Peloponnesian War",
    year: -431,
    summary:
      "아테네의 델로스 동맹과 스파르타의 펠로폰네소스 동맹이 싸웁니다. 투키디데스는 이 전쟁을 그리스 세계의 큰 내전으로 적습니다. 기원전 404년 아테네가 항복합니다. 페르시아는 양쪽을 오가며 돈을 댑니다.",
    peninsula:
      "고조선 후기입니다. 한나라는 아직 없고, 위만조선은 이백 년쯤 뒤의 일입니다.",
    source: "근거: 투키디데스 『펠로폰네소스 전쟁사』. 끝은 크세노폰이 잇습니다.",
    sister: { href: `${greece}/wars/peloponnesian-war`, label: "그리스이야기의 펠로폰네소스 전쟁" },
  },
  {
    slug: "trial-of-socrates",
    lane: "greece",
    row: 0,
    title: "소크라테스 재판",
    titleEn: "Trial of Socrates",
    year: -399,
    summary:
      "아테네가 전쟁에서 진 뒤, 소크라테스가 젊은이를 해치고 도시의 신들을 무시했다는 죄로 재판을 받습니다. 배심원이 사형을 택하고 그는 독당근을 마십니다. 법정에서의 말은 플라톤과 크세노폰의 글에 남아 있으며, 녹음은 아닙니다.",
    peninsula:
      "고조선 후기입니다. 한나라는 아직 없고, 위만이 고조선으로 들어오는 것은 이백 년쯤 뒤입니다.",
    source: "근거: 플라톤 『소크라테스의 변론』, 크세노폰. 법정 말의 그대로는 아닙니다.",
    sister: { href: `${greece}/people/socrates`, label: "그리스이야기의 소크라테스" },
    more: [{ href: `${philosophy}/people/socrates`, label: "철학이야기의 소크라테스" }],
  },
  {
    slug: "plato-academy",
    lane: "greece",
    row: 0,
    title: "플라톤의 아카데메이아",
    titleEn: "Plato's Academy",
    year: -387,
    circa: true,
    summary:
      "플라톤이 아테네 교외에 아카데메이아를 엽니다. 수학과 대화로 정치와 지식을 묻는 자리입니다. 아리스토텔레스도 여기 머물다 떠납니다. 정확한 개원 해는 기원전 380년대의 근사치입니다.",
    peninsula:
      "여전히 고조선입니다. 철기 문화가 퍼지고, 중국 전국시대의 혼란이 요동을 거쳐 전해지던 세기입니다.",
    source: "근거: 디오게네스 라에르티오스 등 후대 철학사. 해는 경입니다.",
    sister: { href: `${philosophy}/people/plato`, label: "철학이야기의 플라톤" },
    more: [{ href: `${greece}/people/plato`, label: "그리스이야기의 플라톤" }],
  },
  {
    slug: "chaeronea",
    lane: "greece",
    row: 0,
    title: "카이로네이아 전투",
    titleEn: "Chaeronea",
    year: -338,
    summary:
      "마케도니아의 필리포스 2세가 아테네와 테베 연합을 카이로네이아에서 이깁니다. 그리스 도시국가들은 코린토스 동맹 아래 묶입니다. 독립 폴리스가 큰 정치의 주인이던 시대가 기울어집니다. 필리포스의 아들 알렉산드로스가 이 전장에 있었습니다.",
    peninsula:
      "고조선 후기입니다. 진국에 대한 기록은 다음 세기에야 희미하고, 진의 중국 통일은 약 백 년 뒤입니다.",
    source: "근거: 디오도로스 시켈로스, 플루타르코스 『알렉산드로스』.",
    sister: { href: `${greece}/wars/chaeronea`, label: "그리스이야기의 카이로네이아" },
  },
  {
    slug: "alexander-campaign",
    lane: "greece",
    row: 0,
    title: "알렉산드로스 동방 원정",
    titleEn: "Alexander's campaign",
    year: -334,
    summary:
      "알렉산드로스가 헬레스폰토스를 건너 페르시아를 칩니다. 그라니코스, 이소스, 가우가멜라에서 이기고 기원전 330년 페르세폴리스가 불탑니다. 군대는 인도 서북까지 갔다가 바빌론으로 돌아옵니다. 그는 그리스인이자 마케도니아 왕이었고, 그리스 도시들은 동등한 동맹이 아니었습니다.",
    peninsula:
      "고조선은 아직 한에 무너지기 전입니다. 진이 중국을 통일한 기원전 221년보다 앞선 원정입니다.",
    source: "근거: 아리아노스 『알렉산드로스 원정기』.",
    sister: { href: `${greece}/wars/alexander-campaigns`, label: "그리스이야기의 알렉산드로스 원정" },
    more: alexanderMore,
  },
  {
    slug: "death-of-alexander",
    lane: "greece",
    row: 0,
    title: "알렉산드로스의 죽음",
    titleEn: "Death of Alexander",
    year: -323,
    summary:
      "알렉산드로스가 바빌론에서 열병 끝에 죽습니다. 서른두 살입니다. 제국은 한 후계자에게 넘어가지 않고 장군들의 전쟁이 됩니다. 이집트의 프톨레마이오스, 시리아·이란의 셀레우코스가 그 결과입니다.",
    peninsula:
      "고조선 말입니다. 중국은 진 말 초한의 전쟁으로 들어가고, 그 여파가 요동까지 내려오기 직전입니다.",
    source: "근거: 아리아노스 『알렉산드로스 원정기』, 플루타르코스.",
    sister: { href: `${greece}/people/alexander`, label: "그리스이야기의 알렉산드로스" },
    more: alexanderMore,
  },
  {
    slug: "corinth-destroyed",
    lane: "greece",
    row: 0,
    title: "코린토스의 파괴",
    titleEn: "Destruction of Corinth",
    year: -146,
    summary:
      "로마가 그리스의 아카이아 동맹을 꺾고 코린토스를 허뭅니다. 그리스는 로마의 속주 무대로 들어갑니다. 같은 해 카르타고도 무너집니다. 폴리스의 독립 정치는 여기서 사실상 끝납니다.",
    peninsula:
      "고조선이 무너진 지 약 사십 년입니다. 낙랑이 서북에 있고, 남쪽은 삼한으로 불리는 사회로 넘어가는 중입니다.",
    source: "근거: 폴리비오스, 파우사니아스. 기원전 146년은 로마 연대기와 맞습니다.",
    sister: { href: `${greece}/polis/corinth`, label: "그리스이야기의 코린토스" },
  },
];
