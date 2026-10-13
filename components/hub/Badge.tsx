import { BADGES, type Badge } from "@/lib/hub/data";

export function BadgeChip({ badge }: { badge: Badge }) {
  const b = BADGES[badge];
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[11px] ${b.cls}`}>
      {b.ko}
      <span className="ml-1 opacity-70">{b.en}</span>
    </span>
  );
}

export function Unsure() {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-terra/60 px-2 py-0.5 text-[11px] text-terra" title="불확실하거나 전해지는 이야기">
      확인 필요 · uncertain
    </span>
  );
}
