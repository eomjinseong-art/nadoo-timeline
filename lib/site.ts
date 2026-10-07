export const SITE_NAME = "나두연표";
export const SITE_NAME_EN = "Nadoo Timeline";
export const SITE_TAGLINE = "세계에서 무슨 일이 날 때, 한반도는 어땠을까";
export const SITE_SUB =
  "그리스·로마·이집트·이스라엘·페르시아와 한반도를 같은 해에 나란히 봅니다. 전승은 전승이라고 적고, 모르는 해는 경이라고 적습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-timeline.vercel.app";

export const SISTER_SITES_LABEL = "나두 역사·신화";

export const SISTER_SITES = [
  { href: "https://rome-stories.vercel.app", label: "로마이야기", en: "Rome Stories" },
  { href: "https://greece-stories.vercel.app", label: "그리스이야기", en: "Greece Stories" },
  { href: "https://egypt-stories.vercel.app", label: "이집트이야기", en: "Egypt Stories" },
  { href: "https://persia-stories.vercel.app", label: "페르시아이야기", en: "Persia Stories" },
  { href: "https://korea-stories.vercel.app", label: "대한민국이야기", en: "Korea Stories" },
  { href: "https://nadoo-myth.vercel.app", label: "나두신화", en: "Myth" },
  { href: "https://philosophy-stories.vercel.app", label: "철학이야기", en: "Philosophy Stories" },
  { href: "https://tinalinkeom.vercel.app", label: "나두 허브", en: "Nadoo hub" },
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
  { href: "/events", label: "사건" },
  { href: "/sources", label: "읽는 법" },
] as const;

export const RANGE_START = -3150;
export const RANGE_END = 1453;
