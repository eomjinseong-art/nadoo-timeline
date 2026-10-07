import type { EraZoom, Lane } from "@/data/types";
import { RANGE_END, RANGE_START } from "@/lib/site";

/** Lane colours echo the sister sites: pine for Korea, Aegean, Roman terra, Nile, Persian dusk. */
export const lanes: Lane[] = [
  {
    id: "korea",
    label: "대한민국(한반도)",
    short: "한반도",
    en: "Korea",
    color: "#1d4f3a",
    rows: 5,
    emphasis: true,
  },
  {
    id: "greece",
    label: "그리스",
    short: "그리스",
    en: "Greece",
    color: "#1a5278",
    rows: 2,
    emphasis: false,
  },
  {
    id: "rome",
    label: "로마",
    short: "로마",
    en: "Rome",
    color: "#a34732",
    rows: 2,
    emphasis: false,
  },
  {
    id: "egypt",
    label: "이집트",
    short: "이집트",
    en: "Egypt",
    color: "#0f5e5c",
    rows: 1,
    emphasis: false,
  },
  {
    id: "persia",
    label: "페르시아",
    short: "페르시아",
    en: "Persia",
    color: "#6b3a5d",
    rows: 1,
    emphasis: false,
  },
];

export const eras: EraZoom[] = [
  { id: "all", label: "전체", start: RANGE_START, end: RANGE_END },
  { id: "bronze", label: "청동기·고조선", start: -2000, end: -300 },
  { id: "greco-persia", label: "고대 그리스·페르시아", start: -800, end: -330 },
  { id: "hellenistic", label: "헬레니즘·로마 공화정", start: -336, end: -27 },
  { id: "empire", label: "로마 제국·삼국", start: -57, end: 676 },
  { id: "medieval", label: "중세(동로마·고려)", start: 476, end: RANGE_END },
];

export function laneById(id: string) {
  return lanes.find((lane) => lane.id === id);
}

export function laneIndex(id: string) {
  return lanes.findIndex((lane) => lane.id === id);
}
