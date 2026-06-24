import Image from "next/image";
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
  },
  {
    title: "On-chain proposals",
    body: "Governor contract manages proposal lifecycle with snapshot-based vote counting.",
  },
  {
    title: "IPFS metadata",
    body: "SEP-0050 compatible token URIs for rich membership badges and community identity.",
  },
  {
    title: "Flash-loan safe",
    body: "Checkpoint voting power prevents last-minute manipulation of governance outcomes.",
  },
  {
    title: "Wallet native",
    body: "Connect Freighter and interact with contracts directly from the browser dashboard.",
  },
  {
    title: "OpenZeppelin core",
    body: "Battle-tested NonFungibleVotes and Governor modules composed for Stolla.",
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
      <section className="relative overflow-hidden bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                Stellar Testnet
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Communities that vote with{" "}
                <span className="text-indigo-600">NFT membership</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Stolla helps Stellar projects launch a membership NFT collection
                and run transparent DAO governance on-chain.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/community"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Open Community
                </Link>
                <Link
                  href="/proposals"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  View Proposals
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <Image
                src="/images/hero-abstract.png"
                alt="Abstract visual representing community governance"
                width={640}
                height={400}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-10 sm:grid-cols-4">
            {[
              { value: "1 NFT", label: "= 1 vote" },
              { value: "SEP-0050", label: "NFT standard" },
              { value: "Soroban", label: "on-chain logic" },
              { value: "Open source", label: "MIT license" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xl font-bold text-zinc-900 sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Membership */}
      <section className="border-y border-zinc-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl border border-zinc-200">
              <Image
                src="/images/membership-abstract.png"
                alt="Abstract membership token tiles"
                width={640}
                height={360}
                className="w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                Membership as identity
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Each NFT is a unique on-chain credential. Holders delegate voting
                power and participate in community decisions — one token, one
                voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Four steps from collection launch to your first governance vote.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200">
          <Image
            src="/images/flow-abstract.png"
            alt="Abstract flow from launch to governance"
            width={1200}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-xl border border-zinc-200 bg-white p-6"
            >
              <span className="text-sm font-bold text-indigo-500">
                {item.step}
              </span>
              <h3 className="mt-2 font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* App preview */}
      <section className="bg-zinc-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                Governance dashboard
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Mint NFTs, delegate voting power, create proposals, and cast
                votes from a responsive interface connected to your Stellar
                wallet.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-600">
                {[
                  "Freighter wallet integration",
                  "Real-time proposal status",
                  "IPFS metadata support",
                ].map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-lg">
              <Image
                src="/images/app-abstract.png"
                alt="Abstract dashboard atmosphere"
                width={640}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900">
            Built for Stellar communities
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-zinc-200 bg-white p-6"
            >
              <h3 className="font-semibold text-zinc-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[300px]">
              <Image
                src="/images/network-abstract.png"
                alt="Abstract network visualization"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                Powered by the Stellar stack
              </h2>
              <p className="mt-3 text-zinc-600">
                OpenZeppelin Soroban modules composed with a Next.js dashboard.
                Tested contracts, WASM-built, testnet-ready.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {stack.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2"
                  >
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.label}
                    </p>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="rounded-2xl bg-indigo-600 px-8 py-12 text-center sm:px-16 sm:py-14">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to launch your community?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-indigo-100">
            Connect your wallet and run your first governance vote on Stellar
            testnet.
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
              className="inline-flex items-center justify-center rounded-xl border border-indigo-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Browse proposals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
