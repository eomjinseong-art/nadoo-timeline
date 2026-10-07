export const laneIds = ["korea", "greece", "rome", "egypt", "persia"] as const;
export type LaneId = (typeof laneIds)[number];

export type Lane = {
  id: LaneId;
  label: string;
  short: string;
  en: string;
  color: string;
  /** Stacked tracks inside the lane. Korea is taller on purpose. */
  rows: number;
  emphasis: boolean;
};

export type Period = {
  id: string;
  lane: LaneId;
  row: number;
  title: string;
  titleEn: string;
  start: number;
  end: number;
  softStart?: boolean;
  softEnd?: boolean;
  /** One short sentence for the year cursor. */
  state: string;
};

export type SisterLink = {
  href: string;
  label: string;
};

export type HistEvent = {
  slug: string;
  lane: LaneId;
  /** Track inside the lane, aligned with a period bar. */
  row: number;
  title: string;
  titleEn: string;
  year: number;
  /** Same-year ordering. Thermopylae before Salamis. */
  seq?: number;
  circa?: boolean;
  tradition?: boolean;
  traditionNote?: string;
  /** What happened, 2–4 short sentences. */
  summary: string;
  /** 그때 한반도는? */
  peninsula: string;
  source: string;
  sister: SisterLink;
};

export type EraZoom = {
  id: string;
  label: string;
  start: number;
  end: number;
};
