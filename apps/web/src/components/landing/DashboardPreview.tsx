export function DashboardPreview({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 shadow-2xl shadow-indigo-200/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs text-zinc-400">stolla.app — Community</span>
      </div>
      <svg viewBox="0 0 600 340" className="w-full" aria-hidden>
        <rect width="600" height="340" fill="#18181B" />
        <rect x="0" y="0" width="600" height="48" fill="#27272A" />
        <text x="24" y="30" fill="white" fontSize="14" fontWeight="600">
          Stolla
        </text>
        <text x="90" y="30" fill="#A1A1AA" fontSize="12">
          Community
        </text>
        <text x="180" y="30" fill="#A1A1AA" fontSize="12">
          Proposals
        </text>
        <rect x="480" y="14" width="100" height="24" rx="6" fill="#4F46E5" />
        <text x="530" y="30" fill="white" fontSize="11" textAnchor="middle">
          Connected
        </text>

        <rect x="24" y="72" width="552" height="120" rx="12" fill="#27272A" />
        <text x="44" y="100" fill="#A5B4FC" fontSize="11" fontWeight="600">
          STOLLA COMMUNITY
        </text>
        <text x="44" y="128" fill="white" fontSize="18" fontWeight="bold">
          Membership NFT Collection
        </text>
        <text x="44" y="152" fill="#A1A1AA" fontSize="12">
          Balance: 1 · Votes: 1 · Network: Testnet
        </text>
        <rect x="44" y="164" width="100" height="28" rx="6" fill="#4F46E5" />
        <text x="94" y="182" fill="white" fontSize="11" textAnchor="middle">
          Mint NFT
        </text>
        <rect x="154" y="164" width="110" height="28" rx="6" fill="#3F3F46" stroke="#52525B" />
        <text x="209" y="182" fill="#E4E4E7" fontSize="11" textAnchor="middle">
          Delegate
        </text>

        <rect x="24" y="210" width="265" height="110" rx="12" fill="#27272A" />
        <text x="44" y="238" fill="white" fontSize="13" fontWeight="600">
          Active Proposal
        </text>
        <text x="44" y="260" fill="#A1A1AA" fontSize="11">
          Welcome new community members
        </text>
        <rect x="44" y="276" width="56" height="22" rx="4" fill="#166534" />
        <text x="72" y="291" fill="#86EFAC" fontSize="10" textAnchor="middle">
          Active
        </text>

        <rect x="311" y="210" width="265" height="110" rx="12" fill="#27272A" />
        <rect x="331" y="230" width="80" height="70" rx="8" fill="#3F3F46" />
        <rect x="341" y="242" width="60" height="40" rx="4" fill="#6366F1" opacity="0.4" />
        <text x="371" y="268" fill="white" fontSize="16" textAnchor="middle">
          NFT
        </text>
        <text x="431" y="250" fill="white" fontSize="12" fontWeight="600">
          Member #0
        </text>
        <text x="431" y="270" fill="#71717A" fontSize="10">
          ipfs://Qm.../metadata.json
        </text>
        <text x="431" y="290" fill="#A5B4FC" fontSize="10">
          1 voting power
        </text>
      </svg>
    </div>
  );
}
