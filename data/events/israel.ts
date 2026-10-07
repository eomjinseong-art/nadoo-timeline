import type { HistEvent, SisterLink } from "@/data/types";
import { CHOSEN_BIBLE_BOOKS } from "@/lib/site";

const books = CHOSEN_BIBLE_BOOKS.href;

function book(slug: string, name: string): SisterLink {
  return { href: `${books}/${slug}`, label: `더 초즌의 ${name}` };
}

const overview: SisterLink = { href: books, label: CHOSEN_BIBLE_BOOKS.label };

export const israelEvents: HistEvent[] = [
  {
    slug: "abraham-tradition",
    lane: "israel",
    row: 0,
    title: "아브라함 전승",
    titleEn: "Abraham tradition",
    year: -1900,
    circa: true,
    tradition: true,
    traditionNote:
      "아브라함을 기원전 2000–1800년에 두는 것은 후대의 연대 전통입니다. 그 사람을 적은 당대 기록은 없고, 창세기의 이야기를 역사 연표로 확정할 수 없습니다.",
    summary:
      "창세기는 아브라함이 메소포타미아를 떠나 가나안에 머물렀다고 적습니다. 그 이야기를 기원전 2000년에서 1800년 사이에 놓아 온 전통이 있습니다. 점은 그 폭의 한가운데인 1900년경입니다. 그를 가리키는 당대 비문은 없습니다.",
    peninsula:
      "한반도는 신석기 말이거나 청동기 직전입니다. 단군 기원전 2333년은 후대 전승이라, 이 해에 그 나라가 있었다는 증거가 아닙니다.",
    source: "근거: 창세기의 족장 이야기. 연대는 전승이며 학설마다 다릅니다.",
    sister: book("genesis", "창세기"),
  },
  {
    slug: "exodus-tradition",
    lane: "israel",
    row: 0,
    title: "출애굽 전승",
    titleEn: "Exodus tradition",
    year: -1446,
    tradition: true,
    traditionNote:
      "기원전 1446년은 열왕기상 6장 1절의 480년을 성전 연대에서 되돌린 계산입니다. 람세스 2세 시대인 1250년 안팎을 말하는 학설이 있고, 그 규모의 탈출을 적은 이집트 기록은 없습니다.",
    summary:
      "출애굽기는 이스라엘 사람들이 이집트를 떠났다고 적습니다. 성전 착공을 960년대로 두고 480년을 되돌리면 1446년 안팎이 되어, 이 점의 해로 삼았습니다. 본문의 ‘라암셋’ 도시 이름을 근거로 1250년 안팎, 람세스 2세 때를 말하는 학설도 큽니다. 카데시 전투는 그 늦은 학설의 이집트 배경이지, 출애굽을 적은 기록은 아닙니다.",
    peninsula:
      "청동기 시대입니다. 고조선의 경계는 아직 흐리고, 건국 전승의 2333년과는 별개의 이야기입니다.",
    source: "근거: 출애굽기, 열왕기상 6장 1절의 계산. 1250년 안팎은 후대 학설입니다. 이집트 쪽 대응 기록은 없습니다.",
    sister: book("exodus", "출애굽기"),
    related: ["battle-of-kadesh"],
  },
  {
    slug: "canaan-judges",
    lane: "israel",
    row: 0,
    title: "가나안 정착과 사사 시대",
    titleEn: "Settlement and Judges",
    year: -1200,
    circa: true,
    tradition: true,
    traditionNote:
      "가나안 정착과 사사 시대의 절대 연대는 합의되어 있지 않습니다. 메르넵타 비문(기원전 1208년경)이 가나안의 ‘이스라엘’을 적은 가장 이른 바깥 기록입니다.",
    summary:
      "여호수아와 사사기는 가나안 정착과, 왕이 생기기 전의 사사 시대를 적습니다. 출애굽을 1446년으로 두면 정착은 1400년 안팎이고, 늦은 학설은 13–12세기를 말합니다. 점은 그 늦은 폭의 대표로 1200년경입니다. 파라오 메르넵타의 비문(1208년경)은 이미 가나안에 ‘이스라엘’이라는 무리가 있었다고 적습니다.",
    peninsula:
      "청동기에서 철기로 넘어가는 길입니다. 고조선으로 부를 정치체의 앞쪽 경계는 기원전 700년 안팎으로 흐립니다.",
    source: "근거: 여호수아·사사기의 서술, 메르넵타 비문(기원전 1208년경). 정착의 해는 전승입니다.",
    sister: book("joshua", "여호수아"),
  },
  {
    slug: "saul-tradition",
    lane: "israel",
    row: 0,
    title: "사울",
    titleEn: "Saul",
    year: -1020,
    circa: true,
    tradition: true,
    traditionNote:
      "사울의 재위를 기원전 11세기 말로 두는 것은 성경 연대의 전통입니다. 재위 연수를 적은 사무엘상 13장 1절은 본문이 손상되어 있습니다.",
    summary:
      "사무엘상은 사울을 이스라엘의 첫 왕으로 적습니다. 재위를 1020년 안팎, 11세기 말에 놓는 전통이 있습니다. 히브리어 본문의 재위 연수 구절은 손상되어 있어 40년인지 그보다 짧은지 확정되지 않습니다. 그를 적은 당대 바깥 비문은 없습니다.",
    peninsula:
      "청동기 사회입니다. 고조선의 앞쪽 경계는 기원전 700년 안팎으로 흐리고, 건국 전승의 2333년은 이 해의 증거가 아닙니다.",
    source: "근거: 사무엘상. 연대는 전승이고, 13장 1절은 본문이 온전하지 않습니다.",
    sister: book("1-samuel", "사무엘상"),
  },
  {
    slug: "david-tradition",
    lane: "israel",
    row: 0,
    title: "다윗",
    titleEn: "David",
    year: -1000,
    circa: true,
    tradition: true,
    traditionNote:
      "다윗을 기원전 1000년 안팎에 두는 것은 성경 연대의 전통입니다. 텔 단 비문(9세기 중엽)의 ‘다윗의 집’은 왕조 이름이지, 다윗 당대의 기록은 아닙니다.",
    summary:
      "사무엘하와 열왕기는 다윗이 예루살렘을 도읍으로 삼았다고 적습니다. 그 재위를 1000년 안팎에 놓는 것이 통용되는 전승 연대입니다. 당대에 다윗 자신을 적은 비문은 없습니다. 텔 단의 아람어 비문은 대개 ‘다윗의 집’으로 읽히며, 연대는 9세기 중엽(840년대)이라 다윗 당대의 기록이 아닙니다.",
    peninsula:
      "민무늬 토기와 청동기가 퍼지던 때입니다. 나라의 이름은 아직 유물만으로 확정되지 않습니다.",
    source: "근거: 사무엘하·열왕기의 서술. 텔 단 비문은 9세기 중엽의 ‘다윗의 집’입니다.",
    sister: book("2-samuel", "사무엘하"),
  },
  {
    slug: "solomon-first-temple",
    lane: "israel",
    row: 0,
    title: "솔로몬과 제1성전",
    titleEn: "Solomon and the First Temple",
    year: -966,
    circa: true,
    tradition: true,
    traditionNote:
      "제1성전 착공을 기원전 960년대(흔히 966년)로 두는 것은 열왕기의 계산입니다. 그 해의 성전을 확인해 주는 당대 바깥 기록은 없습니다.",
    summary:
      "열왕기상은 솔로몬 제4년에 예루살렘 성전 공사를 시작했다고 적습니다. 그 해를 960년대, 흔히 966년으로 환산하고 957년이나 959년으로 잡는 계산도 있습니다. 점은 966년경입니다. 솔로몬과 이 성전을 적은 당대 바깥 기록은 없고, 뒤의 왕 연대가 아시리아 연대기와 맞물리며 이 계산의 뼈대가 됩니다.",
    peninsula:
      "여전히 청동기 사회입니다. 고조선이라는 이름은 뒤의 기록이고, 이 해의 한반도 기록은 없습니다.",
    source: "근거: 열왕기상 6장. 960년대는 성경 연대의 환산이고 학설마다 몇 년씩 다릅니다.",
    sister: book("1-kings", "열왕기상"),
  },
  {
    slug: "kingdom-divided",
    lane: "israel",
    row: 0,
    title: "왕국이 갈라지다",
    titleEn: "Kingdom divided",
    year: -930,
    circa: true,
    summary:
      "열왕기는 솔로몬 뒤 나라가 남쪽 유다와 북쪽 이스라엘로 갈라졌다고 적습니다. 르호보암과 여로보암이 각기 왕이 됩니다. 해는 930년 안팎이고, 연표에 따라 931년 또는 928년으로도 적습니다. 뒤의 왕들이 아시리아 연대와 맞물려, 앞선 족장 시대보다 뼈대는 단단합니다.",
    peninsula:
      "청동기에서 철기로 넘어가던 때입니다. 고조선의 정치적 경계는 아직 흐립니다.",
    source: "근거: 열왕기상 12장. 930년은 통용 근사치이고 931·928년 설이 있습니다.",
    sister: book("1-kings", "열왕기상"),
  },
  {
    slug: "fall-of-samaria",
    lane: "israel",
    row: 0,
    title: "사마리아 함락",
    titleEn: "Fall of Samaria",
    year: -722,
    summary:
      "아시리아가 북왕국 이스라엘의 수도 사마리아를 함락합니다. 살만에셀 5세 때의 포위로 보고, 성은 722년 또는 721년에 무너진 것으로 적힙니다. 사르곤 2세는 자신이 사마리아를 점령하고 사람들을 옮겼다고 비문에 남깁니다. 북왕국은 여기서 끝납니다.",
    peninsula:
      "고조선으로 보는 시기의 초입입니다. 막대의 시작은 흐리고, 단군 연대와는 다른 이야기입니다.",
    source: "근거: 열왕기하 17장, 바빌론 연대기, 사르곤 2세 비문. 함락은 722년 또는 721년입니다.",
    sister: book("2-kings", "열왕기하"),
  },
  {
    slug: "sennacherib-jerusalem",
    lane: "israel",
    row: 0,
    title: "산헤립, 예루살렘을 에워싸다",
    titleEn: "Sennacherib besieges Jerusalem",
    year: -701,
    summary:
      "아시리아 왕 산헤립이 유다를 치고 예루살렘을 에워쌉니다. 히스기야는 조공을 바치고, 산헤립은 왕을 ‘새장 안의 새’처럼 가두었다고 적습니다. 성은 함락되지 않았습니다. 701년은 산헤립의 세 번째 원정으로, 그의 연대기와 열왕기·이사야가 같이 가리킵니다.",
    peninsula:
      "고조선입니다. 다만 앞쪽 경계는 불확실하고, 이 해에 남은 한반도 기록은 없습니다.",
    source: "근거: 산헤립 연대기(테일러 프리즘 등), 열왕기하 18–19장, 이사야 36–37장. 701년은 확실합니다.",
    sister: book("isaiah", "이사야"),
  },
  {
    slug: "babylon-destroys-jerusalem",
    lane: "israel",
    row: 0,
    title: "바빌론, 예루살렘과 성전을 불태우다",
    titleEn: "Babylon destroys Jerusalem",
    year: -586,
    circa: true,
    summary:
      "바빌론의 느부갓네살이 유다 왕 시드키야 때 예루살렘을 함락하고 솔로몬의 성전을 불태웁니다. 열왕기와 예레미야가 그 파괴를 적습니다. 해는 587년 또는 586년으로 갈립니다. 점은 흔히 쓰는 586년경이고, 예루살렘의 불탄 층은 고고학으로도 이 무렵과 맞습니다.",
    peninsula:
      "고조선입니다. 철기가 퍼지던 사회이고, 한의 군현은 아직 먼 뒤입니다.",
    source: "근거: 열왕기하 25장, 예레미야 52장, 예루살렘 파괴층. 587년과 586년 설이 있습니다.",
    sister: book("jeremiah", "예레미야"),
    related: ["babylonian-exile", "cyrus-takes-babylon"],
  },
  {
    slug: "babylonian-exile",
    lane: "israel",
    row: 0,
    title: "바빌론 유배",
    titleEn: "Babylonian exile",
    year: -597,
    summary:
      "느부갓네살 7년, 바빌론 군대가 예루살렘을 점령하고 여호야긴과 함께 사람들을 바빌론으로 옮깁니다. 바빌론 연대기는 이 해를 597년으로 고정합니다. 더 큰 파괴와 이주는 587년 또는 586년입니다. 유배는 키루스의 칙령(538년)까지 이어집니다.",
    peninsula:
      "고조선 시대입니다. 철기가 자리 잡아가고, 남쪽의 이름은 아직 흐립니다.",
    source: "근거: 바빌론 연대기(기원전 597년), 열왕기하 24장. 586년의 추가 이주는 열왕기와 예레미야입니다.",
    sister: book("ezekiel", "에스겔"),
    related: ["babylon-destroys-jerusalem", "cyrus-takes-babylon"],
  },
  {
    slug: "cyrus-decree",
    lane: "israel",
    row: 0,
    title: "키루스의 칙령과 귀환",
    titleEn: "Cyrus's decree",
    year: -538,
    summary:
      "키루스가 바빌론을 차지한 이듬해로, 에스라는 유다 사람들이 예루살렘으로 돌아가도 된다는 칙령을 적습니다. 538년이 그 칙령과 귀환의 통용 연대입니다. 키루스 원통(539년)은 여러 신전을 회복한다는 일반 선언이고, 유다 사람을 이름으로 적지는 않습니다. 귀환의 인도자로 스룹바벨과 세스바살이 전합니다.",
    peninsula:
      "고조선 후기입니다. 철기 문화가 자리 잡고, 남쪽의 이름은 아직 흐립니다.",
    source: "근거: 에스라 1장(538년 통용). 키루스 원통은 539년의 일반 선언입니다.",
    sister: book("ezra", "에스라"),
    related: ["cyrus-takes-babylon", "babylonian-exile"],
  },
  {
    slug: "second-temple-completed",
    lane: "israel",
    row: 0,
    title: "제2성전이 완성되다",
    titleEn: "Second Temple completed",
    year: -515,
    circa: true,
    summary:
      "다리우스 1세 6년에 예루살렘 성전이 다시 완공되었다고 에스라는 적습니다. 그 해의 아달월은 기원전 515년 이른 봄에 해당하고, 516년으로 세는 환산도 있습니다. 학개와 스가랴는 이 재건을 재촉한 예언자로 전합니다. 이 건물이 제2성전이고, 기원후 70년에 무너집니다.",
    peninsula:
      "고조선 후기입니다. 전국시대의 변화가 요동 쪽에 닿기 시작하는 세기입니다.",
    source: "근거: 에스라 6장 15절, 학개·스가랴. 완공은 515년 또는 516년입니다.",
    sister: book("haggai", "학개"),
  },
  {
    slug: "ezra-nehemiah",
    lane: "israel",
    row: 0,
    title: "에스라와 느헤미야",
    titleEn: "Ezra and Nehemiah",
    year: -445,
    circa: true,
    summary:
      "느헤미야는 아르타크세르크스 20년에 예루살렘 성벽을 다시 쌓으러 왔다고 적습니다. 그 왕을 1세로 보면 445년입니다. 에스라의 등장은 같은 왕의 7년, 곧 458년으로 보통 읽고, 2세라면 398년이라는 학설이 있습니다. 둘의 선후는 본문만으로 닫히지 않습니다. 점은 흔히 쓰는 445년경입니다.",
    peninsula:
      "고조선 말입니다. 연나라가 요동으로 손을 뻗던 때와 겹치고, 남쪽 진국은 기록이 옅습니다.",
    source: "근거: 느헤미야 2장(445년, 아르타크세르크스 1세 설). 에스라는 458년 또는 398년 설이 있습니다.",
    sister: book("nehemiah", "느헤미야"),
  },
  {
    slug: "septuagint",
    lane: "israel",
    row: 0,
    title: "칠십인역",
    titleEn: "Septuagint",
    year: -250,
    circa: true,
    summary:
      "알렉산드리아에서 히브리어 율법(토라)을 그리스어로 옮긴 것이 기원전 3세기입니다. 프톨레마이오스 2세 때(283–246년)로 보는 견해가 많습니다. 72명이 72일 만에 번역했다는 『아리스테아스 편지』는 후대 이야기입니다. 나머지 책들은 2세기와 1세기에 더 옮겨집니다.",
    peninsula:
      "고조선 남쪽에 진국이 있었다는 기록이 같은 세기입니다. 진의 범위는 흐립니다.",
    source: "근거: 알렉산드리아의 그리스어 토라(기원전 3세기). 『아리스테아스 편지』의 72인 이야기는 후대입니다.",
    sister: overview,
    related: ["founding-of-alexandria"],
  },
  {
    slug: "maccabean-revolt",
    lane: "israel",
    row: 0,
    title: "마카베오 반란과 하누카",
    titleEn: "Maccabean revolt",
    year: -164,
    summary:
      "셀레우코스 왕 안티오코스 4세가 167년 예루살렘 성전 제사를 막았다고 마카베오상은 적습니다. 유다 마카베오가 이끈 반란 끝에 164년 성전이 다시 봉헌됩니다. 이 봉헌이 하누카입니다. 마카베오서는 가톨릭·정교회의 경전에 들고, 개신교가 세는 66권에는 없습니다.",
    peninsula:
      "고조선 말입니다. 위만이 들어오기 전이고, 남쪽은 진으로 흐리게 적힙니다.",
    source: "근거: 마카베오상, 요세푸스. 167년의 박해와 164년의 봉헌은 셀레우코스 연대로 맞습니다.",
    sister: overview,
  },
  {
    slug: "pompey-jerusalem",
    lane: "israel",
    row: 0,
    title: "폼페이우스, 예루살렘에 들어오다",
    titleEn: "Pompey takes Jerusalem",
    year: -63,
    summary:
      "로마의 폼페이우스가 하스몬 왕가의 내전을 빌미로 예루살렘에 들어옵니다. 그는 성전의 안쪽까지 들여다보았다고 요세푸스는 적습니다. 유다는 사실상 로마의 그늘로 들어가고, 히르카누스 2세가 클라이언트 지배자로 남습니다. 63년은 로마와 유대 기록이 같이 가리킵니다.",
    peninsula:
      "고조선은 기원전 108년에 이미 끝났습니다. 서북에는 한의 군현이 있고, 신라 건국 전승은 조금 뒤인 기원전 57년입니다. 그 57년은 전승입니다.",
    source: "근거: 요세푸스 『유대 고대사』 14권, 로마 사료. 기원전 63년입니다.",
    sister: overview,
    related: ["crossing-the-rubicon"],
  },
  {
    slug: "herod-the-great",
    lane: "israel",
    row: 0,
    title: "헤롯 대왕",
    titleEn: "Herod the Great",
    year: -37,
    summary:
      "로마 원로원이 헤롯을 유다의 왕으로 이름을 올린 것은 40년이고, 그가 예루살렘을 점령해 실제로 다스리기 시작한 것은 37년입니다. 성전을 크게 다시 짓기 시작합니다. 죽음은 보통 4년 봄의 월식 뒤로 보고, 1년 월식을 드는 소수 의견이 있습니다. 점은 통치의 시작인 37년입니다.",
    peninsula:
      "고구려 건국 전승과 같은 해입니다. 『삼국사기』의 기원전 37년은 전승이고, 서북의 실체는 낙랑입니다.",
    source: "근거: 요세푸스. 예루살렘 점령은 37년, 죽음은 대개 4년(소수 설은 1년)입니다.",
    sister: overview,
    related: ["battle-of-actium", "birth-of-jesus"],
  },
  {
    slug: "birth-of-jesus",
    lane: "israel",
    row: 1,
    title: "예수의 출생",
    titleEn: "Birth of Jesus",
    year: -4,
    circa: true,
    summary:
      "마태복음은 헤롯 대왕 때에, 누가복음은 퀴리니우스의 호적 때에 예수가 태어났다고 적습니다. 헤롯의 죽음을 4년으로 보면 출생은 그 앞, 대략 6년에서 4년 사이라는 견해가 많습니다. 퀴리니우스의 호적은 요세푸스가 기원후 6년에 둡니다. 두 본문이 같은 해를 가리키지 않아 점은 4년경입니다.",
    peninsula:
      "삼국 건국 전승이 적힌 기원전 1세기 말입니다. 그 연대는 전승이고, 낙랑은 서북에 남아 있습니다.",
    source: "근거: 마태복음 2장, 누가복음 2장, 요세푸스의 헤롯·퀴리니우스 연대. 6–4년은 추정입니다.",
    sister: book("luke", "누가복음"),
    related: ["herod-the-great", "augustus-principate"],
  },
  {
    slug: "crucifixion-of-jesus",
    lane: "israel",
    row: 1,
    title: "예수의 십자가 처형",
    titleEn: "Crucifixion of Jesus",
    year: 30,
    circa: true,
    summary:
      "네 복음서는 로마 총독 빌라도 아래 예수가 십자가에 처형되었다고 적습니다. 빌라도의 재임은 26년에서 36년입니다. 유월절 날짜와 요일을 맞추면 30년 4월 7일 또는 33년 4월 3일이 가장 자주 거론됩니다. 점은 30년경입니다. 처형 뒤의 부활 서사는 이 연표가 연도를 매기는 사건이 아닙니다.",
    peninsula:
      "1세기입니다. 서북은 낙랑, 북쪽은 고구려가 커지고, 남쪽 삼한의 경계는 흐립니다. 백제·신라의 건국 연도는 전승입니다.",
    source: "근거: 복음서의 빌라도 기사, 빌라도 재임 26–36년. 30년과 33년 설이 있습니다.",
    sister: book("mark", "마가복음"),
  },
  {
    slug: "paul-journeys",
    lane: "israel",
    row: 1,
    title: "바울의 전도 여행",
    titleEn: "Paul's journeys",
    year: 51,
    circa: true,
    summary:
      "바울의 편지가 1차 자료이고, 사도행전의 여행 일정은 후대 서사입니다. 둘을 맞추면 여행은 대략 46년에서 58년 사이입니다. 가장 단단한 바깥 고정점은 델포이의 갈리오 비문으로, 고린도 체류가 51년 또는 52년입니다. 점은 그 해입니다. 64년 로마 대화재 뒤 네로가 그리스도인을 벌했다는 기록은 타키투스의 것이고, 바울이 그 화재로 죽었다는 뜻은 아닙니다.",
    peninsula:
      "낙랑과 삼한이 함께 있는 1세기 중엽입니다. 고구려는 북쪽에서 틀을 키우고 있습니다.",
    source: "근거: 바울 서신, 사도행전, 델포이 갈리오 비문(51–52년). 여행 전체는 46–58년경입니다.",
    sister: book("acts", "사도행전"),
    related: ["great-fire-of-rome"],
  },
  {
    slug: "second-temple-destroyed",
    lane: "israel",
    row: 1,
    title: "로마, 제2성전을 불태우다",
    titleEn: "Second Temple destroyed",
    year: 70,
    summary:
      "유대 전쟁이 예루살렘 포위로 끝납니다. 황제 베스파시아누스의 아들 티투스가 군대를 이끌고, 여름에 제2성전이 불에 탑니다. 요세푸스는 아브월 10일로 적고, 해는 70년입니다. 이 연표의 로마 갈래에서 가장 가까운 점은 6년 앞의 대화재이고, 그 불이 성전 파괴의 원인은 아닙니다.",
    peninsula:
      "1세기 후반입니다. 낙랑은 아직 서북에 있고, 남쪽은 삼한의 읍락 사회입니다.",
    source: "근거: 요세푸스 『유대 전쟁기』 6권. 70년 여름은 확실합니다.",
    sister: overview,
    related: ["great-fire-of-rome", "fall-of-masada"],
  },
  {
    slug: "fall-of-masada",
    lane: "israel",
    row: 1,
    title: "마사다",
    titleEn: "Masada",
    year: 73,
    circa: true,
    summary:
      "사해 서쪽 절벽의 마사다를 로마군이 포위해 함락합니다. 요세푸스는 남은 사람들이 로마의 포로가 되기 전에 스스로 죽었다고 적고, 그 이야기는 살아남은 두 여인과 아이들의 전언이라고 밝힙니다. 포위 진지와 경사로는 고고학으로 확인됩니다. 함락은 73년 또는 74년입니다.",
    peninsula:
      "한반도는 낙랑과 삼한의 시대입니다. 예루살렘의 전쟁과 이어지는 기록은 없습니다.",
    source: "근거: 요세푸스 『유대 전쟁기』 7권, 마사다 포위 유적. 73년과 74년 설이 있습니다.",
    sister: overview,
    related: ["second-temple-destroyed", "great-fire-of-rome"],
  },
  {
    slug: "bar-kokhba",
    lane: "israel",
    row: 1,
    title: "바르 코크바의 반란",
    titleEn: "Bar Kokhba revolt",
    year: 132,
    summary:
      "하드리아누스 때 유대에서 다시 큰 반란이 납니다. 지도자는 편지에서 시몬 벤 코시바로 나타나고, 나중에 바르 코크바(별의 아들)로 불립니다. 반란은 132년에 일어나 135년 베타르 함락으로 끝납니다. 예루살렘을 로마 식민 도시 아일리아 카피톨리나로 만든 일은 반란의 배경으로도 거론되고, 진압 뒤 로마는 이 지역을 시리아 팔라이스티나로 부릅니다.",
    peninsula:
      "고구려와 삼한의 시대입니다. 낙랑은 서북에 남아 있고, 백제와 신라는 남쪽에서 모습을 갖춰 갑니다. 건국 연도 자체는 전승입니다.",
    source: "근거: 카시우스 디오(시피리아누스 발췌), 반란 주화, 동굴 편지. 132–135년입니다.",
    sister: overview,
  },
  {
    slug: "edict-of-milan",
    lane: "israel",
    row: 1,
    title: "밀라노 합의",
    titleEn: "Edict of Milan",
    year: 313,
    summary:
      "콘스탄티누스와 리키니우스가 313년 밀라노에서 만나, 그리스도교를 포함한 예배를 허용하기로 합니다. 남아 있는 문서는 밀라노에서 새긴 비석이 아니라, 그해 리키니우스가 니코메디아에서 낸 편지입니다. 몰수되었던 교회의 재산을 돌려주라는 내용이 들어 있습니다. ‘밀라노 칙령’은 후대가 붙인 이름입니다.",
    peninsula:
      "고구려가 낙랑을 차지한 해와 같습니다. 두 사건은 원인으로 연결되어 있지 않습니다. 남쪽에는 백제와 신라가 있습니다.",
    source: "근거: 락탄티우스 『박해자의 최후』 48장, 에우세비오스 『교회사』 10권. 313년입니다.",
    sister: overview,
    related: ["constantinople-dedicated", "council-of-nicaea"],
  },
  {
    slug: "council-of-nicaea",
    lane: "israel",
    row: 1,
    title: "니케아 공의회",
    titleEn: "Council of Nicaea",
    year: 325,
    summary:
      "콘스탄티누스가 감독들을 니케아에 모읍니다. 회의는 325년에 열려, 성자가 성부와 ‘동일 본질’이라는 문구가 들어간 신경을 채택합니다. 동의하지 않은 쪽도 있었습니다. 이 연표는 그 문구의 옳고 그름을 판정하지 않습니다. 성경 목록이 이 회의에서 한 권으로 닫힌 것은 아닙니다.",
    peninsula:
      "낙랑을 고구려가 차지한 직후입니다. 백제와 신라가 남쪽에서 커지던 4세기 초입니다.",
    source: "근거: 니케아 회의 기록과 후대 교회사. 325년은 확실합니다. 정경 목록의 고정은 이 해가 아닙니다.",
    sister: overview,
    related: ["edict-of-milan", "constantinople-dedicated"],
  },
  {
    slug: "theodosius-christianity",
    lane: "israel",
    row: 1,
    title: "테오도시우스, 니케아 신앙을 제국의 종교로",
    titleEn: "Theodosius",
    year: 380,
    summary:
      "380년 테살로니카에서 나온 법은 니케아 신앙을 제국의 신민이 따를 종교로 선언합니다. 테오도시우스, 그라티아누스, 발렌티니아누스 2세의 이름으로 되어 있습니다. 이 한 장이 이교 제사를 모두 막은 것은 아니고, 희생제는 391년과 392년 법에 더 제한됩니다. 신약 27권 목록이 온 세상에서 이 해에 닫힌 것도 아닙니다.",
    peninsula:
      "백제 근초고왕이 세력을 넓히던 4세기 후반과 겹칩니다. 고구려도 북쪽의 큰 나라입니다. 서로 원인으로 닿아 있지는 않습니다.",
    source:
      "근거: 테오도시우스 법전 16.1.2 (380년). 희생제 제한은 391–392년. 27권 목록의 이정표로는 아타나시우스의 367년 서신, 히포 393년, 카르타고 397년이 자주 인용되며 한 해의 전 세계 확정은 아닙니다.",
    sister: overview,
    related: ["council-of-nicaea"],
  },
];
