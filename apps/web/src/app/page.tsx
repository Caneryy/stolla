import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Launch collection",
    body: "Deploy a community NFT contract with name, symbol, and IPFS metadata base.",
  },
  {
    step: "02",
    title: "Mint members",
    body: "Issue membership NFTs to contributors. Each token carries a unique metadata URI.",
  },
  {
    step: "03",
    title: "Delegate power",
    body: "Holders activate voting rights by delegating to themselves on-chain.",
  },
  {
    step: "04",
    title: "Govern together",
    body: "Create proposals, cast votes, and track outcomes transparently on Stellar.",
  },
];

const features = [
  {
    title: "NFT-gated voting",
    body: "One membership NFT equals one voting unit. Power follows ownership, not capital.",
    icon: "◆",
  },
  {
    title: "On-chain proposals",
    body: "Governor contract manages proposal lifecycle with snapshot-based vote counting.",
    icon: "◇",
  },
  {
    title: "IPFS metadata",
    body: "SEP-0050 compatible token URIs for rich membership badges and community identity.",
    icon: "◎",
  },
  {
    title: "Flash-loan safe",
    body: "Checkpoint voting power prevents last-minute manipulation of governance outcomes.",
    icon: "⬡",
  },
  {
    title: "Wallet native",
    body: "Connect Freighter and interact with contracts directly from the browser dashboard.",
    icon: "◈",
  },
  {
    title: "OpenZeppelin core",
    body: "Battle-tested NonFungibleVotes and Governor modules composed for Stolla.",
    icon: "◉",
  },
];

const stack = [
  { label: "Soroban", desc: "Smart contracts on Stellar" },
  { label: "SEP-0050", desc: "NFT standard" },
  { label: "OpenZeppelin", desc: "Governance & tokens" },
  { label: "IPFS", desc: "Off-chain metadata" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-zinc-50">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #c7d2fe 0%, transparent 50%), radial-gradient(circle at 80% 0%, #e0e7ff 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
              Stellar Testnet · Live
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Communities that vote with{" "}
              <span className="text-indigo-600">NFT membership</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
              Stolla helps Stellar projects launch a membership NFT collection and
              run transparent DAO governance. Holders delegate voting power and
              shape the community on-chain.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/community"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500"
              >
                Open Community
              </Link>
              <Link
                href="/proposals"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                View Proposals
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-zinc-200/80 pt-10 sm:grid-cols-4">
            {[
              { value: "1 NFT", label: "= 1 vote" },
              { value: "SEP-0050", label: "NFT standard" },
              { value: "Soroban", label: "on-chain logic" },
              { value: "Open source", label: "MIT license" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            From collection launch to your first vote — four steps to a
            functioning NFT-gated community on Stellar.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl font-bold text-indigo-100">
                {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Features */}
      <section className="bg-zinc-100/80 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900">
              Built for Stellar communities
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
              Everything you need to gate governance by membership — without
              building contracts from scratch.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-lg text-indigo-600"
                  aria-hidden
                >
                  {feature.icon}
                </span>
                <h3 className="mt-4 font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                Powered by the Stellar stack
              </h2>
              <p className="mt-3 text-zinc-600">
                Stolla composes OpenZeppelin Soroban modules with a Next.js
                dashboard. Contracts are tested, WASM-built, and ready for
                testnet deployment.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
              {stack.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-center"
                >
                  <p className="font-semibold text-zinc-900">{item.label}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 px-8 py-12 text-center sm:px-16 sm:py-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to launch your community?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-indigo-100">
            Connect your wallet, mint membership NFTs, and run your first
            governance vote on Stellar testnet today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              Get started
            </Link>
            <Link
              href="/proposals"
              className="inline-flex items-center justify-center rounded-xl border border-indigo-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Browse proposals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
