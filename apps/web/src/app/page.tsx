import Image from "next/image";
import Link from "next/link";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { HeroIllustration } from "@/components/landing/HeroIllustration";
import { StepVisual } from "@/components/landing/StepVisual";

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
    image: "/images/feature-vote.svg",
  },
  {
    title: "On-chain proposals",
    body: "Governor contract manages proposal lifecycle with snapshot-based vote counting.",
    image: "/images/feature-proposals.svg",
  },
  {
    title: "IPFS metadata",
    body: "SEP-0050 compatible token URIs for rich membership badges and community identity.",
    image: "/images/feature-ipfs.svg",
  },
  {
    title: "Flash-loan safe",
    body: "Checkpoint voting power prevents last-minute manipulation of governance outcomes.",
    image: "/images/feature-safe.svg",
  },
  {
    title: "Wallet native",
    body: "Connect Freighter and interact with contracts directly from the browser dashboard.",
    image: "/images/feature-wallet.svg",
  },
  {
    title: "OpenZeppelin core",
    body: "Battle-tested NonFungibleVotes and Governor modules composed for Stolla.",
    image: "/images/feature-oz.svg",
  },
];

const stack = [
  { label: "Soroban", desc: "Smart contracts on Stellar" },
  { label: "SEP-0050", desc: "NFT standard" },
  { label: "OpenZeppelin", desc: "Governance & tokens" },
  { label: "IPFS", desc: "Off-chain metadata" },
];

const nftShowcase = [
  { name: "Founder", color: "from-violet-400 to-indigo-500", emoji: "🌟" },
  { name: "Builder", color: "from-sky-400 to-blue-500", emoji: "🔧" },
  { name: "Voter", color: "from-emerald-400 to-teal-500", emoji: "🗳️" },
  { name: "Guardian", color: "from-amber-400 to-orange-500", emoji: "🛡️" },
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
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                Stellar Testnet · Live
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                Communities that vote with{" "}
                <span className="text-indigo-600">NFT membership</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Stolla helps Stellar projects launch a membership NFT collection
                and run transparent DAO governance. Holders delegate voting power
                and shape the community on-chain.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-indigo-100/50 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-white p-2 shadow-xl shadow-indigo-100/50">
                <Image
                  src="/images/stolla-hero.png"
                  alt="NFT membership cards connected to on-chain governance voting"
                  width={640}
                  height={400}
                  className="w-full rounded-xl object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden w-48 sm:block lg:-left-8">
                <HeroIllustration className="drop-shadow-lg" />
              </div>
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

      {/* NFT showcase */}
      <section className="border-y border-zinc-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Membership NFTs, your community identity
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
              Each token is unique, stored on Soroban, and doubles as your voting
              credential in the DAO.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {nftShowcase.map((nft) => (
              <article
                key={nft.name}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`flex aspect-square items-center justify-center bg-gradient-to-br ${nft.color} text-5xl transition group-hover:scale-105`}
                >
                  {nft.emoji}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-zinc-900">{nft.name}</h3>
                  <p className="mt-0.5 text-xs text-zinc-500">Member NFT</p>
                </div>
              </article>
            ))}
          </div>
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
          {steps.map((item, index) => (
            <li
              key={item.step}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <StepVisual index={index} />
              <div className="p-6 pt-0">
                <span className="text-sm font-bold text-indigo-400">
                  {item.step}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* App preview */}
      <section className="bg-zinc-100/80 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">
                A dashboard built for governance
              </h2>
              <p className="mt-4 text-zinc-600">
                Mint NFTs, delegate voting power, create proposals, and cast
                votes — all from a responsive web interface connected to your
                Stellar wallet.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600">
                {[
                  "Freighter wallet integration",
                  "Real-time proposal status",
                  "IPFS metadata URI support",
                  "Testnet-ready out of the box",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-xs text-indigo-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
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
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-indigo-50 to-violet-50">
                <Image
                  src={feature.image}
                  alt=""
                  width={80}
                  height={80}
                  className="h-16 w-16"
                  aria-hidden
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-zinc-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {feature.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative hidden min-h-[280px] lg:block">
              <Image
                src="/images/stellar-network.svg"
                alt="Stellar network visualization"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                Powered by the Stellar stack
              </h2>
              <p className="mt-3 text-zinc-600">
                Stolla composes OpenZeppelin Soroban modules with a Next.js
                dashboard. Contracts are tested, WASM-built, and ready for
                testnet deployment.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4">
                {stack.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3"
                  >
                    <p className="font-semibold text-zinc-900">{item.label}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 px-8 py-12 text-center sm:px-16 sm:py-16">
          <Image
            src="/images/cta-pattern.svg"
            alt=""
            fill
            className="object-cover opacity-10"
            aria-hidden
          />
          <div className="relative">
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
        </div>
      </section>
    </>
  );
}
