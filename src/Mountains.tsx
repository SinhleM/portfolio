import { useMemo } from "react";

/**
 * Hand-sketched mountain range, generated once from key points (deterministic).
 * Back ridge + front ridge, jagged outline, dense hatching on shadow slopes,
 * light ticks on lit slopes, creases from summits, grass along the base.
 * View box is 600 x 220. PEAKS are exported so cards can pin to the summits.
 */
export const W = 600;
export const H = 220;
export const PEAKS = [
  { x: 96, y: 34 },
  { x: 300, y: 18 },
  { x: 498, y: 52 },
];

type P = [number, number];

const FRONT: P[] = [
  [0, 168], [22, 150], [48, 128], [70, 96], [PEAKS[0].x, PEAKS[0].y], [118, 82], [140, 104], [166, 92], [194, 136],
  [222, 150], [246, 118], [270, 70], [PEAKS[1].x, PEAKS[1].y], [326, 74], [352, 98], [384, 84], [418, 132],
  [446, 120], [472, 90], [PEAKS[2].x, PEAKS[2].y], [524, 96], [552, 112], [578, 98], [600, 124],
];
const FORE: P[] = [
  [0, 196], [30, 178], [58, 190], [92, 160], [120, 176], [150, 150], [178, 172], [214, 188], [250, 164], [282, 182],
  [330, 170], [366, 150], [398, 176], [432, 186], [462, 160], [500, 178], [536, 156], [566, 174], [600, 166],
];
const BACK: P[] = [
  [0, 120], [40, 96], [72, 112], [130, 60], [176, 88], [210, 70], [244, 96], [360, 52], [404, 80], [440, 66],
  [470, 94], [560, 70], [600, 90],
];

function rng(seed: number) {
  return () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
}

function jagged(keys: P[], r: () => number, amp: number) {
  const pts: P[] = [];
  keys.forEach(([x, y], i) => {
    if (i === 0) { pts.push([x, y]); return; }
    const [px, py] = keys[i - 1];
    const steps = Math.max(2, Math.round(Math.hypot(x - px, y - py) / 7));
    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      const j = s === steps ? 0 : (r() - 0.5) * amp;
      pts.push([px + (x - px) * t + j * 0.4, py + (y - py) * t + j]);
    }
  });
  return pts;
}

const f = (n: number) => n.toFixed(1);
const toPath = (p: P[]) => p.map(([x, y], i) => `${i ? "L" : "M"}${f(x)} ${f(y)}`).join(" ");
const stroke = (x: number, y: number, dx: number, dy: number) => `M${f(x)} ${f(y)} l${f(dx)} ${f(dy)}`;

export function Mountains() {
  const art = useMemo(() => {
    const r = rng(7);
    const front = jagged(FRONT, r, 5);
    const back = jagged(BACK, r, 4);

    const fore = jagged(FORE, r, 4);
    const hatch: string[] = [];
    const light: string[] = [];
    const shade = (ridge: P[], dens: number) => {
    for (let i = 1; i < ridge.length; i++) {
      const [x0, y0] = ridge[i - 1];
      const [x1, y1] = ridge[i];
      const shadow = y1 > y0;
      const n = shadow ? dens + Math.floor(r() * 3) : r() < 0.45 ? 1 : 0;
      for (let k = 0; k < n; k++) {
        const t = r();
        const sx = x0 + (x1 - x0) * t;
        const sy = y0 + (y1 - y0) * t + 1.5;
        const len = (shadow ? 0.12 + r() * 0.22 : 0.05 + r() * 0.08) * (H - sy) + 4;
        const ang = 1.05 + r() * 0.45;
        (shadow ? hatch : light).push(stroke(sx, sy, -Math.cos(ang) * len, Math.sin(ang) * len));
      }
    }
    };
    shade(front, 4);
    shade(fore, 3);

    const backHatch: string[] = [];
    for (let i = 1; i < back.length; i++) {
      const [, y0] = back[i - 1];
      const [x1, y1] = back[i];
      if (y1 <= y0 || r() < 0.4) continue;
      const len = 6 + r() * 16;
      backHatch.push(stroke(x1, y1 + 1, -len * 0.35, len));
    }

    const creases: string[] = [];
    FRONT.forEach(([x, y], i) => {
      if (i === 0 || i === FRONT.length - 1) return;
      const isPeak = PEAKS.some((p) => p.x === x);
      const n = isPeak ? 4 : r() < 0.7 ? 2 : 1;
      for (let k = 0; k < n; k++) {
        let cx = x, cy = y + 2;
        let d = `M${f(cx)} ${f(cy)}`;
        const segs = 3 + Math.floor(r() * 3);
        const drift = (k - 1.5) * 5 + (r() - 0.5) * 6;
        for (let s = 0; s < segs; s++) {
          cx += drift * 0.5 + (r() - 0.5) * 5;
          cy += 9 + r() * 13;
          d += ` L${f(cx)} ${f(cy)}`;
        }
        creases.push(d);
      }
    });

    const grass: string[] = [];
    for (let x = 4; x < W; x += 7 + r() * 12) grass.push(stroke(x, H, (r() - 0.5) * 3, -(3 + r() * 6)));

    return { front, back, fore, hatch, light, backHatch, creases, grass };
  }, []);

  const frontArea = `${toPath(art.front)} L${W} ${H} L0 ${H} Z`;
  const backArea = `${toPath(art.back)} L${W} ${H} L0 ${H} Z`;
  const g = (paths: string[], color: string, w: number, o: number) => (
    <g stroke={color} strokeWidth={w} opacity={o}>{paths.map((d, i) => <path key={i} d={d} />)}</g>
  );

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-full w-full" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <defs>
        <linearGradient id="mfade-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset=".9" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="mfade"><rect width={W} height={H} fill="url(#mfade-g)" /></mask>
      </defs>
      <g mask="url(#mfade)">
        <path d={backArea} fill="var(--bg)" />
        <path d={toPath(art.back)} stroke="#a1a1aa" strokeWidth=".9" opacity=".7" />
        {g(art.backHatch, "#a1a1aa", 0.6, 0.6)}
        <path d={frontArea} fill="var(--bg)" />
        {g(art.hatch, "#71717a", 0.75, 0.75)}
        {g(art.light, "#a1a1aa", 0.6, 0.7)}
        {g(art.creases, "#52525b", 0.8, 0.75)}
        <path className="draw" d={toPath(art.front)} stroke="#3f3f46" strokeWidth="1.25" />
        <path d={`${toPath(art.fore)} L${W} ${H} L0 ${H} Z`} fill="var(--bg)" opacity=".92" />
        {g(art.hatch.slice(Math.floor(art.hatch.length * 0.62)), "#71717a", 0.7, 0.7)}
        <path d={toPath(art.fore)} stroke="#52525b" strokeWidth="1" />
        {g(art.grass, "#a1a1aa", 0.7, 1)}
      </g>
    </svg>
  );
}
