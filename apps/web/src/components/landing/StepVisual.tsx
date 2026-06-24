const stepVisuals = [
  {
    gradient: "from-violet-100 to-indigo-50",
    accent: "#8B5CF6",
    paths: (
      <>
        <rect x="20" y="30" width="120" height="80" rx="12" fill="white" stroke="#DDD6FE" strokeWidth="2" />
        <circle cx="50" cy="55" r="14" fill="#EDE9FE" />
        <rect x="72" y="48" width="52" height="8" rx="4" fill="#E4E4E7" />
        <rect x="72" y="64" width="36" height="6" rx="3" fill="#E4E4E7" />
        <rect x="30" y="90" width="100" height="10" rx="5" fill="#8B5CF6" opacity="0.8" />
      </>
    ),
  },
  {
    gradient: "from-amber-50 to-orange-50",
    accent: "#F59E0B",
    paths: (
      <>
        <rect x="35" y="25" width="90" height="90" rx="14" fill="white" stroke="#FDE68A" strokeWidth="2" />
        <rect x="50" y="40" width="60" height="45" rx="8" fill="#FEF3C7" />
        <text x="80" y="70" textAnchor="middle" fill="#D97706" fontSize="20" fontWeight="bold">
          #
        </text>
        <circle cx="110" cy="35" r="12" fill="#F59E0B" />
        <path d="M105 35 L109 39 L116 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    gradient: "from-sky-50 to-blue-50",
    accent: "#0EA5E9",
    paths: (
      <>
        <circle cx="80" cy="70" r="35" fill="white" stroke="#BAE6FD" strokeWidth="2" />
        <circle cx="80" cy="70" r="18" fill="#E0F2FE" />
        <path d="M62 70 L76 70" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
        <path d="M80 52 L80 66" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
        <polygon points="84,66 96,70 84,74" fill="#0EA5E9" />
      </>
    ),
  },
  {
    gradient: "from-emerald-50 to-green-50",
    accent: "#10B981",
    paths: (
      <>
        <rect x="25" y="35" width="110" height="70" rx="10" fill="white" stroke="#A7F3D0" strokeWidth="2" />
        <rect x="35" y="48" width="90" height="12" rx="6" fill="#D1FAE5" />
        <rect x="35" y="68" width="60" height="8" rx="4" fill="#10B981" opacity="0.6" />
        <rect x="35" y="82" width="45" height="8" rx="4" fill="#E4E4E7" />
        <circle cx="115" cy="52" r="10" fill="#10B981" />
        <path d="M111 52 L114 55 L120 49" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
];

export function StepVisual({ index }: { index: number }) {
  const visual = stepVisuals[index];
  if (!visual) return null;

  return (
    <div
      className={`mb-4 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br ${visual.gradient}`}
    >
      <svg viewBox="0 0 160 120" className="h-28 w-full max-w-[160px]" aria-hidden>
        {visual.paths}
      </svg>
    </div>
  );
}
