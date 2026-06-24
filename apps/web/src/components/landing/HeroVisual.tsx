export function HeroVisual() {
  return (
    <div
      className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-indigo-50 via-white to-zinc-50"
      aria-hidden
    >
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="200" r="120" className="fill-indigo-100/40" />
        <circle cx="250" cy="200" r="80" className="fill-indigo-50/60" />

        <line x1="250" y1="200" x2="120" y2="100" className="stroke-indigo-200" strokeWidth="1.5" />
        <line x1="250" y1="200" x2="380" y2="90" className="stroke-indigo-200" strokeWidth="1.5" />
        <line x1="250" y1="200" x2="400" y2="260" className="stroke-indigo-200" strokeWidth="1.5" />
        <line x1="250" y1="200" x2="110" y2="290" className="stroke-indigo-200" strokeWidth="1.5" />

        <circle cx="250" cy="200" r="28" className="fill-indigo-600" />
        <circle cx="250" cy="200" r="10" className="fill-white" />

        <circle cx="120" cy="100" r="18" className="fill-white stroke-indigo-300" strokeWidth="2" />
        <circle cx="380" cy="90" r="18" className="fill-white stroke-indigo-300" strokeWidth="2" />
        <circle cx="400" cy="260" r="18" className="fill-white stroke-indigo-300" strokeWidth="2" />
        <circle cx="110" cy="290" r="18" className="fill-white stroke-indigo-300" strokeWidth="2" />

        <rect x="170" y="320" width="48" height="48" rx="12" className="fill-white stroke-indigo-200" strokeWidth="1.5" />
        <rect x="230" y="320" width="48" height="48" rx="12" className="fill-indigo-100 stroke-indigo-200" strokeWidth="1.5" />
        <rect x="290" y="320" width="48" height="48" rx="12" className="fill-white stroke-indigo-200" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
