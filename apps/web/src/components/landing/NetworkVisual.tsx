const nodes = [
  { cx: 80, cy: 120 },
  { cx: 200, cy: 60 },
  { cx: 320, cy: 100 },
  { cx: 420, cy: 180 },
  { cx: 300, cy: 220 },
  { cx: 160, cy: 200 },
  { cx: 250, cy: 150 },
];

const edges: [number, number][] = [
  [0, 6],
  [1, 6],
  [2, 6],
  [3, 4],
  [4, 6],
  [5, 6],
  [2, 3],
  [1, 2],
  [0, 5],
];

export function NetworkVisual() {
  return (
    <div
      className="relative flex h-full min-h-[220px] items-center justify-center bg-gradient-to-br from-zinc-50 to-indigo-50/30 p-6 sm:min-h-[280px]"
      aria-hidden
    >
      <svg
        viewBox="0 0 500 280"
        className="h-full w-full max-w-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            className="stroke-indigo-200"
            strokeWidth="1.5"
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={i === 6 ? 10 : 6}
            className={i === 6 ? "fill-indigo-600" : "fill-indigo-400"}
          />
        ))}
      </svg>
    </div>
  );
}
