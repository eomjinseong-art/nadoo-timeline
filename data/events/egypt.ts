import type { HistEvent } from "@/data/types";

const egypt = "https://egypt-stories.vercel.app";

export const egyptEvents: HistEvent[] = [
  {
    slug: "unification-of-egypt",
    lane: "egypt",
    row: 0,
    title: "이집트 통일",
    titleEn: "Unification of Egypt",
    year: -3100,
    circa: true,
    summary:
      "나일강 상류와 하류가 한 왕권 아래 묶입니다. 나르메르 팔레트는 왕이 두 땅을 아우르는 장면을 새겼습니다. 그가 곧 전설의 메네스인지는 단정하기 어렵습니다. 기원전 3100년은 이 통일의 대표 연대입니다.",
    peninsula:
      "한반도는 신석기입니다. 빗살무늬 토기 마을이 강과 바닷가에 있고, 왕국은 없습니다.",
    source: "근거: 나르메르 팔레트 등 초기 왕조 고고학. 해는 경입니다.",
    sister: { href: `${egypt}/rulers/narmer`, label: "이집트이야기의 나르메르" },
  },
  {
    slug: "step-pyramid",
    lane: "egypt",
    row: 0,
    title: "계단 피라미드",
    titleEn: "Step Pyramid",
    year: -2670,
    circa: true,
    summary:
      "고왕국 초, 조세르의 재상 임호테프가 사카라에 계단식 돌을 쌓습니다. 마스타바 무덤을 여러 층으로 올린 첫 대형 석조 피라미드입니다. 왕만 이런 무덤을 가집니다. 정확한 해는 왕조 연표에 따라 수십 년 달라집니다.",
    peninsula:
      "한반도는 아직 신석기이거나 청동기 직전입니다. 돌무덤의 전통은 나중에 고인돌로 나타나며, 피라미드와는 다른 사회입니다.",
    source: "근거: 사카라 조세르 피라미드와 고왕국 연표. 해는 경입니다.",
    sister: { href: `${egypt}/rulers/djoser`, label: "이집트이야기의 조세르" },
  },
  {
    slug: "great-pyramid",
    lane: "egypt",
    row: 0,
    title: "대피라미드",
    titleEn: "Great Pyramid",
    year: -2560,
    circa: true,
    summary:
      "쿠푸의 피라미드가 기자의 사막에 섭니다. 돌로 쌓은 왕의 무덤이고, 옆에는 신전과 배가 묻힙니다. 노예 떼가 채찍질 속에 쌓았다는 그림은 그리스 후대 이야기에 가깝고, 유적은 조직된 노동과 마을을 보여 줍니다. 해는 제4왕조 연대의 근사치입니다.",
    peninsula:
      "한반도는 신석기 말에서 청동기로 넘어가는 길입니다. 이 무렵을 고조선 건국 전승(기원전 2333년)과 겹쳐 외우면, 피라미드는 그 전승보다 앞섭니다.",
    source: "근거: 기자 피라미드군 고고학과 이집트 연대기. 해는 경입니다. 마네토의 왕 목록은 후대 정리입니다.",
    sister: { href: `${egypt}/rulers/khufu`, label: "이집트이야기의 쿠푸" },
  },
  {
    slug: "hyksos",
    lane: "egypt",
    row: 0,
    title: "힉소스",
    titleEn: "Hyksos",
    year: -1650,
    circa: true,
    summary:
      "델타 지방에 힉소스라 불리는 서아시아계 왕들이 자리 잡습니다. 말과 전차, 활이 이집트 전쟁 방식에 들어옵니다. 남쪽 테베의 이집트 왕조는 따로 남습니다. 기원전 1650년은 제2중간기의 대표 연대입니다.",
    peninsula:
      "청동기 시대입니다. 민무늬 토기와 고인돌이 퍼지고, 고조선의 정치적 경계는 아직 흐립니다.",
    source: "근거: 이집트 제2중간기 고고학과 왕명표. 해는 경입니다.",
    sister: { href: `${egypt}/wars/hyksos`, label: "이집트이야기의 힉소스" },
  },
  {
    slug: "ahmose-expels-hyksos",
    lane: "egypt",
    row: 0,
    title: "아흐모세, 힉소스를 몰아내다",
    titleEn: "Ahmose",
    year: -1550,
    circa: true,
    summary:
      "테베의 아흐모세가 힉소스의 거점 아바리스를 무너뜨립니다. 이집트가 다시 한 왕조로 묶이며 신왕국이 시작됩니다. 이후 파라오들은 레반트까지 군대를 보냅니다. 해는 기원전 1550년 안팎입니다.",
    peninsula:
      "청동기 사회입니다. 북쪽에 고조선으로 이어질 집단이 있었을 수 있으나, 이 해의 기록은 없습니다.",
    source: "근거: 아흐모세 시대 비문과 신왕국 시작 연표. 해는 경입니다.",
    sister: { href: `${egypt}/wars/hyksos`, label: "이집트이야기의 힉소스" },
  },
  {
    slug: "akhenaten",
    lane: "egypt",
    row: 0,
    title: "아케나텐",
    titleEn: "Akhenaten",
    year: -1350,
    circa: true,
    summary:
      "아멘호테프 4세가 이름을 아케나텐으로 바꾸고 태양 원반 아텐을 유일신처럼 높입니다. 새 수도 아마르나를 엽니다. 그의 뒤를 이은 투탕카멘 때 옛 신들이 돌아옵니다. 재위는 기원전 14세기 중엽입니다.",
    peninsula:
      "청동기 후기, 고조선의 앞 시기입니다. 한반도에 이 종교 개혁과 대응되는 기록은 없습니다.",
    source: "근거: 아마르나 서한과 유적. 즉위 해는 연표에 따라 조금 달라 경으로 적습니다.",
    sister: { href: `${egypt}/rulers/akhenaten`, label: "이집트이야기의 아케나텐" },
  },
  {
    slug: "battle-of-kadesh",
    lane: "egypt",
    row: 0,
    title: "카데시 전투",
    titleEn: "Battle of Kadesh",
    year: -1274,
    summary:
      "람세스 2세와 히타이트의 무와탈리가 시리아의 카데시에서 맞붙습니다. 이집트 부조는 파라오의 단독 승리처럼 새겼지만, 전투는 승패가 갈리지 않은 대접전에 가깝습니다. 뒤에 두 나라는 평화 조약을 맺습니다. 기원전 1274년이 가장 널리 쓰이는 해입니다.",
    peninsula:
      "고조선으로 보는 청동기·초기 철기 사회입니다. 건국 전승의 2333년과는 천 년 넘게 떨어져, 유물로 말하는 시대입니다.",
    source: "근거: 카데시 비문, 이집트-히타이트 조약. 해는 통설입니다.",
    sister: { href: `${egypt}/wars/kadesh`, label: "이집트이야기의 카데시" },
  },
  {
    slug: "sea-peoples",
    lane: "egypt",
    row: 0,
    title: "바다 민족",
    titleEn: "Sea Peoples",
    year: -1177,
    circa: true,
    summary:
      "람세스 3세 때 이집트가 ‘바다의 민족’이라 부른 무리의 침입을 막았다고 메디네트 하부에 새깁니다. 같은 무렵 히타이트를 비롯한 동지중해 궁전들이 무너집니다. 그들이 한 민족인지는 모르고, 이집트가 적은 승리도 선전입니다. 해는 람세스 3세 재위 연대에 기대므로 경입니다.",
    peninsula:
      "청동기에서 철기로 넘어가는 고조선의 초기입니다. 지중해의 붕괴와 직접 연결된 증거는 없습니다.",
    source: "근거: 메디네트 하부 부조. 기원전 1177년은 람세스 3세 8년의 통용 환산입니다.",
    sister: { href: `${egypt}/wars/sea-peoples`, label: "이집트이야기의 바다 민족" },
  },
  {
    slug: "persian-conquest-of-egypt",
    lane: "egypt",
    row: 0,
    title: "페르시아, 이집트를 차지하다",
    titleEn: "Persian conquest",
    year: -525,
    summary:
      "아케메네스 왕 캄비세스 2세가 이집트를 정복합니다. 이집트는 페르시아의 한 주가 됩니다. 기원전 404년부터 약 육십 년은 다시 이집트 왕조가 서고, 기원전 343년 페르시아가 되찾습니다. 알렉산드로스가 오기 전까지의 큰 그림입니다.",
    peninsula:
      "고조선 후기입니다. 솔론의 아테네와 같은 세기이고, 위만은 아직 오지 않았습니다.",
    source: "근거: 헤로도토스 『역사』 3권, 이집트 말기 연표.",
    sister: { href: `${egypt}/wars/persia`, label: "이집트이야기의 페르시아" },
  },
  {
    slug: "alexander-in-egypt",
    lane: "egypt",
    row: 0,
    title: "알렉산드로스, 이집트에 들어오다",
    titleEn: "Alexander in Egypt",
    year: -332,
    summary:
      "알렉산드로스가 페르시아 총독을 몰아내고 이집트에 들어옵니다. 멤피스에서 파라오로 대접받고, 시와 오아시스의 아몬 신탁을 찾습니다. 이집트인에게는 페르시아를 몰아낸 왕이었습니다. 그는 오래 머물지 않고 동쪽으로 떠납니다.",
    peninsula:
      "고조선 말입니다. 남쪽 진국에 대한 기록이 희미하고, 한의 군현은 아직 이백 년 뒤입니다.",
    source: "근거: 아리아노스 『알렉산드로스 원정기』.",
    sister: { href: `${egypt}/wars/alexander`, label: "이집트이야기의 알렉산드로스" },
  },
  {
    slug: "founding-of-alexandria",
    lane: "egypt",
    row: 0,
    title: "알렉산드리아 건설",
    titleEn: "Founding of Alexandria",
    year: -331,
    summary:
      "알렉산드로스가 나일 델타 서쪽 해안에 도시를 세웁니다. 그리스식 격자 거리와 항구를 갖춘 도시로 설계됩니다. 그가 죽은 뒤 프톨레마이오스 왕조의 수도가 되고, 도서관과 파로스 등대가 유명해집니다. 기원전 331년이 건설의 해로 통합니다.",
    peninsula:
      "위만조선 이전의 고조선입니다. 철기가 퍼지던 때이고, 나라는 아직 한 무제의 공격을 받기 전입니다.",
    source: "근거: 아리아노스 『알렉산드로스 원정기』.",
    sister: { href: `${egypt}/wars/alexander`, label: "이집트이야기의 알렉산드로스" },
  },
  {
    slug: "memphis-decree",
    lane: "egypt",
    row: 0,
    title: "멤피스 포고령",
    titleEn: "Memphis decree",
    year: -196,
    summary:
      "프톨레마이오스 5세를 기리는 신관들의 포고령이 멤피스에서 나옵니다. 같은 내용을 신성문자, 민용문자, 그리스어로 새겼습니다. 1799년에 발견된 로제타석이 그 사본 가운데 하나입니다. 이 해의 사건은 돌의 발견이 아니라 포고령입니다.",
    peninsula:
      "위만이 고조선 왕이 되기 직전입니다. 고조선은 아직 한의 군현이 되기 전입니다.",
    source: "근거: 로제타석에 새긴 기원전 196년 멤피스 포고령.",
    sister: { href: `${egypt}/monuments`, label: "이집트이야기의 기념물" },
  },
  {
    slug: "end-of-cleopatra",
    lane: "egypt",
    row: 0,
    title: "클레오파트라의 죽음",
    titleEn: "Death of Cleopatra",
    year: -30,
    summary:
      "악티움에서 진 클레오파트라 7세와 안토니우스가 알렉산드리아에서 죽습니다. 프톨레마이오스 왕조가 끝납니다. 이집트는 로마 황제의 개인 속주처럼 총독이 다스리게 됩니다. 곡물이 로마로 실려 가는 창고가 됩니다.",
    peninsula:
      "신라 건국 전승(기원전 57년)과 고구려 건국 전승(기원전 37년) 사이입니다. 두 연대는 전승이고, 당시 분명한 세력은 낙랑과 삼한에 가깝습니다.",
    source: "근거: 플루타르코스 『안토니우스』, 카시우스 디오.",
    sister: { href: `${egypt}/cleopatra`, label: "이집트이야기의 클레오파트라" },
  },
  {
    slug: "arab-conquest-of-egypt",
    lane: "egypt",
    row: 0,
    title: "이슬람 세력, 이집트를 차지하다",
    titleEn: "Arab conquest of Egypt",
    year: 642,
    summary:
      "아미르 이븐 알 아스가 이끄는 군대가 동로마의 이집트를 점령합니다. 알렉산드리아는 641년 항복하고 642년 비워집니다. 행정 중심은 나중에 푸스타트, 그 옆의 카이로로 옮겨 갑니다. 콥트 교회는 남지만 나라의 주인은 바뀝니다.",
    peninsula:
      "고구려가 수의 침입을 막은 뒤, 당 태종의 공격(645년) 직전입니다. 신라와 백제는 남쪽에서 맞섭니다.",
    source: "근거: 초기 이슬람 정복 사료와 동로마 기록. 알렉산드리아 입성은 642년으로 많이 적습니다.",
    sister: { href: `${egypt}/origins`, label: "이집트이야기의 탄생·시대" },
  },
  {
    slug: "founding-of-cairo",
    lane: "egypt",
    row: 0,
    title: "카이로 건설",
    titleEn: "Founding of Cairo",
    year: 969,
    summary:
      "파티마 왕조가 이집트를 차지하고 알 카히라, 오늘의 카이로를 세웁니다. 아즈하르 모스크가 이 도시의 중심이 됩니다. 수도가 바그다드가 아닌 이집트에 선 시아파 왕조입니다. 나일 하류의 옛 도시들 옆에 붙은 계획도시입니다.",
    peninsula:
      "고려 광종·경종 무렵입니다. 과거제가 자리를 잡고, 거란의 침입은 아직 다음 세기입니다.",
    source: "근거: 파티마 시대 이집트 연대기. 969년 카이로 건설이 통설입니다.",
    sister: { href: egypt, label: "이집트이야기" },
  },
  {
    slug: "saladin",
    lane: "egypt",
    row: 0,
    title: "살라흐 앗 딘",
    titleEn: "Saladin",
    year: 1171,
    summary:
      "살라흐 앗 딘이 파티마 왕조를 끝내고 이집트의 주인이 됩니다. 아이유브 왕조의 시작입니다. 그는 시리아를 아우르고, 1187년 하틴에서 이겨 예루살렘을 되찾습니다. 유럽의 제3차 십자군은 그 뒤를 이은 전쟁입니다.",
    peninsula:
      "고려 명종 때, 무신들이 왕을 쥐고 있던 시대입니다. 몽골이 쳐들어오기 약 육십 년 전입니다.",
    source: "근거: 이븐 알 아시르 등 동시대 아랍 연대기.",
    sister: { href: egypt, label: "이집트이야기" },
  },
  {
    slug: "ain-jalut",
    lane: "egypt",
    row: 0,
    title: "아인잘루트 전투",
    titleEn: "Ayn Jalut",
    year: 1260,
    summary:
      "맘루크 술탄국의 군대가 팔레스타인의 아인잘루트에서 몽골군을 이깁니다. 이집트에 도읍을 둔 맘루크가 이 승리의 주인입니다. 몽골의 서남 진격이 여기서 막힙니다. 같은 세기 고려는 이미 몽골과 강화한 뒤입니다.",
    peninsula:
      "고려는 1259년 몽골과 화의하고, 1270년 삼별초가 일어납니다. 강화도 정부가 끝나 가던 때입니다.",
    source: "근거: 맘루크 시대 아랍 연대기. 1260년 아인잘루트가 통설입니다.",
    sister: { href: egypt, label: "이집트이야기" },
  },
];
