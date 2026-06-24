export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="40" y="280" width="400" height="8" rx="4" fill="#E4E4E7" />
      <rect x="80" y="288" width="60" height="72" rx="8" fill="#E0E7FF" />
      <rect x="160" y="288" width="60" height="96" rx="8" fill="#C7D2FE" />
      <rect x="240" y="288" width="60" height="60" rx="8" fill="#E0E7FF" />
      <rect x="320" y="288" width="60" height="84" rx="8" fill="#A5B4FC" />

      <circle cx="240" cy="160" r="100" fill="url(#heroGlow)" />
      <rect
        x="170"
        y="100"
        width="140"
        height="160"
        rx="16"
        fill="white"
        stroke="#C7D2FE"
        strokeWidth="2"
      />
      <rect x="185" y="120" width="110" height="70" rx="10" fill="#EEF2FF" />
      <circle cx="240" cy="155" r="22" fill="#6366F1" opacity="0.2" />
      <path
        d="M228 155 L236 163 L252 147"
        stroke="#4F46E5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="185" y="200" width="50" height="8" rx="4" fill="#E4E4E7" />
      <rect x="185" y="218" width="80" height="8" rx="4" fill="#E4E4E7" />
      <rect x="185" y="236" width="65" height="8" rx="4" fill="#E4E4E7" />

      <g transform="translate(60, 60)">
        <rect width="72" height="88" rx="12" fill="white" stroke="#E4E4E7" strokeWidth="2" />
        <rect x="10" y="12" width="52" height="40" rx="6" fill="#FEF3C7" />
        <circle cx="36" cy="32" r="12" fill="#F59E0B" opacity="0.3" />
        <rect x="10" y="60" width="36" height="6" rx="3" fill="#E4E4E7" />
        <rect x="10" y="72" width="52" height="6" rx="3" fill="#E4E4E7" />
      </g>

      <g transform="translate(348, 48)">
        <rect width="72" height="88" rx="12" fill="white" stroke="#E4E4E7" strokeWidth="2" />
        <rect x="10" y="12" width="52" height="40" rx="6" fill="#DCFCE7" />
        <circle cx="36" cy="32" r="12" fill="#22C55E" opacity="0.3" />
        <rect x="10" y="60" width="36" height="6" rx="3" fill="#E4E4E7" />
        <rect x="10" y="72" width="52" height="6" rx="3" fill="#E4E4E7" />
      </g>

      <path
        d="M132 104 C160 120, 180 130, 170 150"
        stroke="#A5B4FC"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <path
        d="M348 104 C320 120, 300 130, 310 150"
        stroke="#A5B4FC"
        strokeWidth="2"
        strokeDasharray="6 4"
      />

      <circle cx="120" cy="200" r="28" fill="#4F46E5" />
      <path
        d="M112 200 L118 206 L128 194"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="360" cy="200" r="28" fill="#818CF8" />
      <rect x="348" y="192" width="24" height="16" rx="3" fill="white" />
      <rect x="352" y="196" width="6" height="8" rx="1" fill="#4F46E5" />
      <rect x="360" y="196" width="6" height="8" rx="1" fill="#C7D2FE" />

      <defs>
        <radialGradient id="heroGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
