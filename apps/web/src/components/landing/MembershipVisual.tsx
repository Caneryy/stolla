const tokens = [
  { fill: "from-indigo-500 to-indigo-600", accent: "bg-indigo-400" },
  { fill: "from-indigo-400 to-indigo-500", accent: "bg-indigo-300" },
  { fill: "from-indigo-300 to-indigo-400", accent: "bg-indigo-200" },
  { fill: "from-indigo-200 to-indigo-300", accent: "bg-indigo-100" },
];

export function MembershipVisual() {
  return (
    <div
      className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:gap-4 sm:p-6"
      aria-hidden
    >
      {tokens.map((token, i) => (
        <div
          key={i}
          className="aspect-[3/4] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
        >
          <div className={`h-2/5 bg-gradient-to-br ${token.fill}`} />
          <div className="flex flex-col gap-2 p-3">
            <div className={`h-2 w-8 rounded-full ${token.accent}`} />
            <div className="h-1.5 w-full rounded-full bg-zinc-100" />
            <div className="h-1.5 w-4/5 rounded-full bg-zinc-100" />
            <div className="mt-auto flex justify-center">
              <div className="h-8 w-8 rounded-lg border border-zinc-200 bg-zinc-50" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
