import type { HistEvent } from "@/data/types";

const rome = "https://rome-stories.vercel.app";
const egypt = "https://egypt-stories.vercel.app";

export const medievalEvents: HistEvent[] = [
  {
    slug: "arthur-tradition",
    lane: "medieval",
    row: 0,
    title: "아더 왕 전승",
    titleEn: "Arthurian tradition",
    year: 500,
    circa: true,
    tradition: true,
    traditionNote:
      "아더라는 한 왕의 전기로 확정된 5세기 기록은 없습니다. 배든 언덕 같은 전투의 해도 후대 계산이고, 검과 원탁은 더 나중 문학입니다.",
    summary:
      "로마군이 브리튼에서 물러난 뒤, 그곳의 전쟁이 후대에 아더 왕의 이야기로 묶입니다. 초기 시는 짧고, 몬머스의 제프리와 기사 로맨스가 왕과 검을 크게 만들었습니다. 한 사람의 재위 연표를 이 점에서 읽으면 안 됩니다.",
    peninsula:
      "고구려·백제·신라가 맞선 삼국 시대입니다. 신라는 아직 한강 유역을 독차지하기 전입니다.",
    source: "근거: 초기 웨일스 시, 몬머스의 제프리 『브리타니아 열왕사』. 5–6세기를 한 왕의 연보로 확정할 수 없습니다.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
    related: ["fall-of-western-rome"],
    more: [
      { href: "https://germanic-stories.vercel.app/kingdoms/anglo-saxons", label: "게르만이야기의 앵글로색슨 왕국" },
    ],
  },
  {
    slug: "charlemagne-crowned",
    lane: "medieval",
    row: 0,
    title: "카롤루스 대제의 대관",
    titleEn: "Coronation of Charlemagne",
    year: 800,
    summary:
      "800년 12월 25일, 교황 레오 3세가 로마의 성 베드로 대성당에서 프랑크 왕 카롤루스에게 황제 관을 씌웁니다. 서유럽에 다시 ‘황제’가 섭니다. 동로마는 이를 곧바로 인정하지 않았습니다.",
    peninsula:
      "통일신라에서 애장왕이 즉위한 해로 전합니다. 북쪽에는 발해가 있습니다.",
    source: "근거: 『프랑크 왕국 연대기』, 아인하르드 『카롤루스 대제의 생애』.",
    sister: { href: "https://germanic-stories.vercel.app/people/charlemagne", label: "게르만이야기의 카롤루스 대제" },
    more: [
      { href: "https://germanic-stories.vercel.app/kingdoms/franks", label: "게르만이야기의 프랑크 왕국" },
      { href: "https://viking-stories.vercel.app/chronicle/frankish-raids", label: "바이킹이야기의 프랑크 왕국 습격" },
    ],
    related: ["lindisfarne"],
  },
  {
    slug: "lindisfarne",
    lane: "medieval",
    row: 0,
    title: "린디스판 습격",
    titleEn: "Raid on Lindisfarne",
    year: 793,
    summary:
      "바이킹 선단이 노섬브리아의 린디스판 수도원을 칩니다. 앵글로색슨 연대기는 이 해를 큰 충격으로 적습니다. 북해 연안의 약탈이 이때 처음 시작된 것은 아니고, 기록에 또렷이 남은 이정표입니다.",
    peninsula:
      "통일신라와 발해가 나란히 있습니다. 신라는 전성기를 지나 귀족이 커지던 때입니다.",
    source: "근거: 앵글로색슨 연대기. 793년의 린디스판 습격이 통설입니다.",
    sister: { href: "https://viking-stories.vercel.app/chronicle/lindisfarne", label: "바이킹이야기의 린디스판" },
    more: [
      { href: "https://germanic-stories.vercel.app/kingdoms/anglo-saxons", label: "게르만이야기의 앵글로색슨 왕국" },
    ],
    related: ["alfred-edington", "charlemagne-crowned"],
  },
  {
    slug: "alfred-edington",
    lane: "medieval",
    row: 0,
    title: "에딩턴과 앨프리드",
    titleEn: "Edington and Alfred",
    year: 878,
    summary:
      "웨식스의 앨프리드가 에딩턴에서 데인 군을 이깁니다. 구스룸이 세례를 받고 경계가 그어집니다. 잉글랜드 전체가 하루아침에 하나가 된 전투는 아닙니다. 앨프리드의 법과 성은 그 뒤의 일입니다.",
    peninsula:
      "통일신라 후기입니다. 귀족과 호족이 커지고, 북쪽에는 발해가 있습니다.",
    source: "근거: 앵글로색슨 연대기 878년, 아세르의 앨프리드 전기.",
    sister: { href: "https://viking-stories.vercel.app/chronicle/alfred-edington", label: "바이킹이야기의 앨프리드와 에딩턴" },
    more: [
      { href: "https://viking-stories.vercel.app/people/alfred", label: "바이킹이야기의 앨프리드" },
      { href: "https://viking-stories.vercel.app/people/guthrum", label: "바이킹이야기의 구스럼" },
    ],
    related: ["lindisfarne", "normandy-911"],
  },
  {
    slug: "normandy-911",
    lane: "medieval",
    row: 0,
    title: "노르망디의 시작",
    titleEn: "Rollo and Normandy",
    year: 911,
    summary:
      "서프랑크의 단순왕 샤를이 바이킹 지도자 롤로에게 루앙 일대를 맡깁니다. 생클레르쉬레프트에서 맺었다고 전하지만 조약문은 남아 있지 않습니다. 이 땅이 뒤에 노르망디가 됩니다.",
    peninsula:
      "후삼국 시대입니다. 궁예가 이해 나라 이름을 태봉으로 바꿨다고 전하고, 견훤의 후백제가 맞섭니다.",
    source: "근거: 생캉탱의 두도 『노르망디 공들의 관습과 행적』. 911년은 통설이고, 조약문은 전하지 않습니다.",
    sister: { href: "https://viking-stories.vercel.app/chronicle/normandy", label: "바이킹이야기의 노르망디" },
    more: [
      { href: "https://viking-stories.vercel.app/people/rollo", label: "바이킹이야기의 롤로" },
    ],
    related: ["alfred-edington", "stamford-bridge-hastings-1066"],
  },
  {
    slug: "ibn-fadlan-volga",
    lane: "medieval",
    row: 0,
    title: "이븐 파들란과 볼가의 루스",
    titleEn: "Ibn Fadlan on the Volga",
    year: 922,
    summary:
      "아바스 칼리프의 사절 이븐 파들란이 볼가 강가에서 루스라 불린 북쪽 상인들을 만나 그 차림과 배 장례를 적습니다. 바이킹 시대의 동쪽 강길을 바깥 사람이 본 드문 기록입니다.",
    peninsula:
      "고려 태조 왕건이 나라를 세운 지 몇 해 안 된 때입니다. 후백제와 신라가 아직 남아 있습니다.",
    source: "근거: 이븐 파들란의 여행기(리살라). 루스가 누구였는지는 학계에서 다툽니다.",
    sister: { href: "https://viking-stories.vercel.app/chronicle/rus-kyiv", label: "바이킹이야기의 루스와 키이우" },
    more: [
      { href: "https://viking-stories.vercel.app/chronicle/varangian-guard", label: "바이킹이야기의 바랑기아 친위대" },
    ],
    related: ["normandy-911"],
  },
  {
    slug: "vinland",
    lane: "medieval",
    row: 0,
    title: "빈란드, 북아메리카에 닿다",
    titleEn: "Norse in Vinland",
    year: 1000,
    circa: true,
    summary:
      "그린란드의 레이프 에이릭손이 서쪽 해안에 닿았다고 아이슬란드 사가가 전합니다. 뉴펀들랜드의 랑스 오 메도즈 유적은 노르드인이 그곳에 잠시 머물렀음을 보여 줍니다. 오래 남은 정착지는 아니었습니다.",
    peninsula:
      "고려 목종 무렵입니다. 몇 해 전 서희가 거란과 담판해 강동 6주를 얻었습니다.",
    source: "근거: 『그린란드 사람들의 사가』, 『붉은 에이리크의 사가』, 랑스 오 메도즈 발굴. 나무 연륜으로 1021년에 그곳에서 벌목한 흔적이 확인됩니다.",
    sister: { href: "https://viking-stories.vercel.app/chronicle/vinland", label: "바이킹이야기의 빈란드" },
    more: [
      { href: "https://viking-stories.vercel.app/people/leif", label: "바이킹이야기의 레이프" },
      { href: "https://viking-stories.vercel.app/chronicle/iceland-greenland", label: "바이킹이야기의 아이슬란드와 그린란드" },
    ],
    related: ["stamford-bridge-hastings-1066"],
  },
  {
    slug: "stamford-bridge-hastings-1066",
    lane: "medieval",
    row: 0,
    title: "스탬퍼드 브리지와 헤이스팅스",
    titleEn: "Stamford Bridge and Hastings",
    year: 1066,
    summary:
      "9월 스탬퍼드 브리지에서 잉글랜드 왕 해럴드 고드윈슨이 노르웨이 왕 하랄 하르드라다를 물리칩니다. 3주쯤 뒤 10월 14일, 헤이스팅스에서 노르망디 공 윌리엄에게 지고 전사합니다. 흔히 바이킹 시대의 끝으로 잡는 해입니다.",
    peninsula:
      "고려 문종 때입니다. 고려 전기의 제도가 자리 잡은 시기로 꼽힙니다.",
    source: "근거: 『앵글로색슨 연대기』, 바이외 태피스트리, 스노리 『헤임스크링글라』.",
    sister: { href: "https://viking-stories.vercel.app/chronicle/stamford-bridge", label: "바이킹이야기의 1066년" },
    more: [
      { href: "https://viking-stories.vercel.app/people/harald-hardrada", label: "바이킹이야기의 하랄 하르드라다" },
      { href: "https://viking-stories.vercel.app/people/harold-godwinson", label: "바이킹이야기의 해럴드 고드윈슨" },
      { href: "https://viking-stories.vercel.app/people/william", label: "바이킹이야기의 정복왕 윌리엄" },
    ],
    related: ["normandy-911"],
  },
  {
    slug: "hattin",
    lane: "medieval",
    row: 0,
    title: "하틴 전투",
    titleEn: "Battle of Hattin",
    year: 1187,
    summary:
      "살라흐 앗 딘이 하틴에서 예루살렘 왕국의 군대를 이깁니다. 성십자가를 빼앗고, 곧 예루살렘을 되찾습니다. 유럽의 제3차 십자군은 이 패배 뒤에 움직입니다. 왕국의 내분과 물의 부족이 패인의 큰 축으로 전해집니다.",
    peninsula:
      "고려는 무신정권 아래입니다. 몽골이 쳐들어오기 약 사십 년 전입니다.",
    source: "근거: 이븐 알 아시르 등 동시대 연대기. 1187년 7월 4일 하틴이 통설입니다.",
    sister: { href: egypt, label: "이집트이야기" },
    related: ["saladin", "first-crusade", "third-crusade"],
  },
  {
    slug: "third-crusade",
    lane: "medieval",
    row: 0,
    title: "제3차 십자군",
    titleEn: "Third Crusade",
    year: 1189,
    summary:
      "하틴과 예루살렘 함락 뒤, 잉글랜드의 리처드 1세와 프랑스의 필리프 2세, 신성 로마의 프리드리히 1세가 동쪽으로 움직입니다. 아크라를 되찾지만 예루살렘은 되찾지 못합니다. 리처드와 살라흐 앗 딘의 휴전으로 일단 멈춥니다.",
    peninsula:
      "고려 무신정권 시대입니다. 명종이 왕으로 남아 있던 때입니다.",
    source: "근거: 서유럽 십자군 연대기. 본대는 1189–1192년입니다.",
    sister: { href: `${rome}/origins`, label: "로마이야기의 탄생·시대" },
    related: ["hattin", "saladin", "first-crusade"],
  },
  {
    slug: "stirling-bridge",
    lane: "medieval",
    row: 0,
    title: "스털링 다리 전투",
    titleEn: "Stirling Bridge",
    year: 1297,
    summary:
      "윌리엄 월리스와 앤드루 머리가 스털링 다리에서 잉글랜드군을 이깁니다. 좁은 다리를 건너오던 부대를 친 싸움입니다. 이듬해 팰커크에서는 지고, 월리스는 1305년에 처형됩니다. 스코틀랜드가 이 다리에서 독립한 것은 아닙니다.",
    peninsula:
      "고려는 몽골과 강화한 지 오래이고, 왕실이 원의 부마로 묶여 있던 때입니다.",
    source: "근거: 스코틀랜드·잉글랜드 연대기. 1297년 9월 11일이 통설입니다.",
    sister: { href: rome, label: "로마이야기" },
    related: ["bannockburn"],
  },
  {
    slug: "avignon-papacy",
    lane: "medieval",
    row: 0,
    title: "아비뇽 교황청",
    titleEn: "Avignon papacy",
    year: 1309,
    summary:
      "교황 클레멘스 5세가 아비뇽에 머뭅니다. 이후 수십 년 동안 교황이 로마가 아닌 아비뇽에서 다스립니다. 1377년에야 그레고리우스 11세가 로마로 돌아갑니다. 교황과 세속 군주, 수도회 사이의 다툼이 이 시대의 배경입니다.",
    peninsula:
      "고려 원 간섭기입니다. 강화도 정부는 이미 끝났습니다.",
    source: "근거: 교황청 연대기. 1309년 아비뇽 체류, 1377년 로마 귀환이 통설입니다.",
    sister: { href: rome, label: "로마이야기" },
  },
  {
    slug: "bannockburn",
    lane: "medieval",
    row: 0,
    title: "배넉번 전투",
    titleEn: "Bannockburn",
    year: 1314,
    summary:
      "로버트 1세가 배넉번에서 에드워드 2세의 잉글랜드군을 이깁니다. 스코틀랜드 왕위는 1306년 대관 뒤에도 전쟁 중이었습니다. 이 승리가 잉글랜드의 인정을 바로 가져온 것은 아니고, 전쟁은 그 뒤로도 이어집니다.",
    peninsula:
      "고려는 원 간섭기입니다. 왕은 원의 부마로 세워지던 때입니다.",
    source: "근거: 스코틀랜드·잉글랜드 연대기. 1314년 6월 23–24일이 통설입니다.",
    sister: { href: rome, label: "로마이야기" },
    related: ["stirling-bridge"],
  },
  {
    slug: "judicial-duel-1386",
    lane: "medieval",
    row: 0,
    title: "파리의 사법 결투",
    titleEn: "Last duel of Paris",
    year: 1386,
    summary:
      "1386년 12월 29일, 파리에서 장 드 카루주와 자크 르 그리의 사법 결투가 열립니다. 카루주의 아내가 르 그리를 강간범으로 고발한 재판입니다. 샤를 6세가 지켜보는 앞에서 결투가 유죄를 대신했습니다. 어느 쪽 말이 사실인지는 창의 승부가 증명하지 않습니다.",
    peninsula:
      "고려 우왕 때입니다. 이성계가 위화도에서 회군하기 두 해 전입니다.",
    source: "근거: 프루아사르 연대기. 1386년 12월 29일 파리가 통설입니다.",
    sister: { href: rome, label: "로마이야기" },
  },
  {
    slug: "agincourt",
    lane: "medieval",
    row: 0,
    title: "아쟁쿠르 전투",
    titleEn: "Agincourt",
    year: 1415,
    summary:
      "잉글랜드의 헨리 5세가 아쟁쿠르에서 프랑스군을 이깁니다. 진흙과 장궁이 좁은 전장에서 기마대를 무너뜨렸다고 전합니다. 백년전쟁의 한 전투이고, 프랑스 왕위가 이 하루로 끝난 것은 아닙니다. 헨리는 뒤에 트루아 조약으로 계승을 요구합니다.",
    peninsula:
      "조선 태종 말입니다. 세종 즉위와 훈민정음은 아직 뒤의 일입니다.",
    source: "근거: 동시대 연대기. 1415년 10월 25일 아쟁쿠르가 통설입니다.",
    sister: { href: rome, label: "로마이야기" },
  },
  {
    slug: "joan-of-arc",
    lane: "medieval",
    row: 0,
    title: "잔 다르크의 처형",
    titleEn: "Execution of Joan of Arc",
    year: 1431,
    summary:
      "잔 다르크는 1429년 오를레앙 포위를 푸는 전투에 섭니다. 샤를 7세의 대관이 그 뒤를 잇습니다. 1430년에 붙잡히고, 1431년 5월 30일 루앙에서 화형에 처해집니다. 목소리와 신앙의 세부는 재판 기록과 후대 전기가 다르게 강조합니다.",
    peninsula:
      "조선 세종 때입니다. 훈민정음이 만들어지기 12년 전입니다.",
    source: "근거: 루앙 재판 기록. 1431년 5월 30일 처형이 통설입니다.",
    sister: { href: rome, label: "로마이야기" },
  },
];
