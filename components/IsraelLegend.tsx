import { lanes, trackFor } from "@/data/lanes";
import type { LaneId } from "@/data/types";
import { CHOSEN_BIBLE_BOOKS } from "@/lib/site";

const external = "noopener noreferrer";

export function IsraelLegend() {
  const lane = lanes.find((item) => item.id === "israel");
  if (!lane?.tracks?.length) return null;
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
      <ul className="flex flex-wrap items-center gap-x-3 gap-y-1" aria-label="이스라엘·성경 색">
        {lane.tracks.map((track) => (
          <li key={track.id} className="inline-flex items-center gap-1.5 text-xs text-ink">
            <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: track.color }} />
            <span className="font-semibold" style={{ color: track.color }}>
              {track.label}
            </span>
            <span className="tracking-[0.08em] text-muted">{track.en}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs leading-5 text-muted">구약 색은 예수 이전(족장 전승부터 헤롯까지), 신약 색은 예수 이후입니다.</p>
      <a href={CHOSEN_BIBLE_BOOKS.href} className="text-xs text-laurel underline decoration-line underline-offset-4 hover:text-terra" rel={external}>
        {CHOSEN_BIBLE_BOOKS.label} →
      </a>
    </div>
  );
}

export function TrackBadge({ laneId, row }: { laneId: LaneId; row: number }) {
  const track = trackFor(laneId, row);
  if (!track) return null;
  return (
    <span className="rounded-full px-2 py-0.5 text-xs font-semibold text-white" style={{ background: track.color }}>
      {track.label}
    </span>
  );
}
