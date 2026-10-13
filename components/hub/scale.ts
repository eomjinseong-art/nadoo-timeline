/** 기원전 3200년부터 2030년까지를 한 줄에. 옛날일수록 압축합니다. */
const SEG: [number, number, number, number][] = [
  [-3200, -1300, 0, 12],
  [-1300, -500, 12, 26],
  [-500, 0, 26, 44],
  [0, 500, 44, 62],
  [500, 1100, 62, 78],
  [1100, 1600, 78, 87],
  [1600, 2030, 87, 100],
];
export function pos(y: number): number {
  for (const [a, b, x, z] of SEG) if (y <= b) return x + ((Math.max(y, a) - a) / (b - a)) * (z - x);
  return 100;
}
export const TICKS = [-3000, -1300, -500, 0, 500, 1100, 1600, 2000];
