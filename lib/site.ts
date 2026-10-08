export const SITE_NAME = "나두연표";
export const SITE_NAME_EN = "Nadoo Timeline";
export const SITE_TAGLINE = "세계에서 무슨 일이 날 때, 한반도는 어땠을까";
export const SITE_SUB =
  "그리스·로마·이집트·이스라엘·페르시아·중세 유럽과 한반도를 같은 해에 나란히 봅니다. 전승은 전승이라고 적고, 모르는 해는 경이라고 적습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-timeline.vercel.app";

export const SISTER_SITES_LABEL = "나두 역사·신화";

export const SISTER_SITES = [
  { href: "https://nadoo-myth.vercel.app", label: "나두신화", en: "Myth" },
  { href: "https://iliad-stories.vercel.app", label: "일리아스이야기", en: "Iliad" },
  { href: "https://greece-stories.vercel.app", label: "그리스이야기", en: "Greece" },
  { href: "https://rome-stories.vercel.app", label: "로마이야기", en: "Rome" },
  { href: "https://egypt-stories.vercel.app", label: "이집트이야기", en: "Egypt" },
  { href: "https://persia-stories.vercel.app", label: "페르시아이야기", en: "Persia" },
  { href: "https://the-chosen-korean.vercel.app", label: "더 초즌 · 성경", en: "The Chosen · Bible" },
  { href: "https://philosophy-stories.vercel.app", label: "철학이야기", en: "Philosophy" },
  { href: "https://korea-stories.vercel.app", label: "대한민국이야기", en: "Korea" },
  { href: "https://tinalinkeom.vercel.app", label: "나두 허브", en: "Nadoo Hub" },
] as const;

export const FAMILY_TREES_LABEL = "다른 가족관계도";
export const FAMILY_TREES_EN = "Other family trees";

export const FAMILY_TREE_LINKS = [
  { href: "https://nadoo-myth.vercel.app/family-tree", label: "나두신화" },
  { href: "https://greece-stories.vercel.app/family-tree", label: "그리스이야기" },
  { href: "https://rome-stories.vercel.app/family-tree", label: "로마이야기" },
  { href: "https://egypt-stories.vercel.app/family-tree", label: "이집트이야기" },
  { href: "https://persia-stories.vercel.app/family-tree", label: "페르시아이야기" },
  { href: "https://the-chosen-korean.vercel.app/family-tree", label: "더 초즌 · 성경" },
  { href: "https://korea-stories.vercel.app/family-tree", label: "대한민국이야기" },
] as const;

export const SISTER_FILMS_LABEL = "다른 사이트의 영화";
export const SISTER_FILMS_EN = "Films on sister sites";

export const SISTER_FILM_LINKS = [
  { href: "https://nadoo-myth.vercel.app/in-media", label: "나두신화" },
  { href: "https://iliad-stories.vercel.app/movies", label: "일리아스이야기" },
  { href: "https://greece-stories.vercel.app/movies", label: "그리스이야기" },
  { href: "https://rome-stories.vercel.app/movies", label: "로마이야기" },
  { href: "https://egypt-stories.vercel.app/movies", label: "이집트이야기" },
  { href: "https://persia-stories.vercel.app/movies", label: "페르시아이야기" },
  { href: "https://the-chosen-korean.vercel.app/together", label: "더 초즌 · 성경" },
  { href: "https://philosophy-stories.vercel.app/films", label: "철학이야기" },
  { href: "https://korea-stories.vercel.app/films", label: "대한민국이야기" },
] as const;

/** 더 초즌 한국어 가이드의 ‘성경 66권 한눈에’. 성경 갈래와 사건 페이지에서만 잇습니다. */
export const CHOSEN_BIBLE_BOOKS = {
  href: "https://the-chosen-korean.vercel.app/bible-books",
  label: "더 초즌 · 성경 66권 한눈에",
} as const;

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";
export const COUPANG_LINE = "기원전부터 오던 택배는 없습니다. 로켓배송은 예외입니다 · 쿠팡 둘러보기";

export const NAV = [
  { href: "/", label: "연표" },
  { href: "/movies", label: "영화" },
  { href: "/events", label: "사건" },
  { href: "/sources", label: "읽는 법" },
] as const;

/** 영화 체크리스트. 이 사이트의 영화 id와 맞추는 목록이 그쪽에 붙습니다. */
export const MOVIE_CHECKLIST_URL = "https://movie-checklist-sigma.vercel.app";
export const MOVIE_CHECKLIST_LABEL = "영화체크리스트";

export const RANGE_START = -3150;
export const RANGE_END = 1453;
