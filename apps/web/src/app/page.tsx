import Link from "next/link";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { MembershipVisual } from "@/components/landing/MembershipVisual";
import { NetworkVisual } from "@/components/landing/NetworkVisual";
import { SectionHeader } from "@/components/landing/SectionHeader";

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

const stats = [
  { value: "1 NFT", label: "1 vote" },
  { value: "SEP-0050", label: "NFT standard" },
  { value: "Soroban", label: "On-chain logic" },
  { value: "MIT", label: "Open source" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-zinc-50 to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                Stellar Testnet
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Launch a community.
                <span className="mt-1 block text-indigo-600">
                  Vote with NFTs.
                </span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">
                Stolla gives Stellar projects a membership NFT collection and
                on-chain DAO governance — one token, one voice.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/community"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Get started
                </Link>
                <Link
                  href="/proposals"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Browse proposals
                </Link>
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                No install required — connect Freighter and start on testnet.
              </p>
            </div>

            <div className="lg:pl-4">
              <HeroVisual />
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-zinc-200/80 bg-white/80 px-4 py-4 text-center shadow-sm backdrop-blur-sm"
              >
                <dt className="text-lg font-bold text-zinc-900 sm:text-xl">
                  {stat.value}
                </dt>
                <dd className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How it works — moved up for clearer narrative */}
      <section
        id="how-it-works"
        className="border-y border-zinc-200 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="How it works"
            title="From collection to first vote"
            description="Four steps to launch membership NFTs and run transparent governance on Stellar."
          />
          <HowItWorks />
        </div>
      </section>

      {/* Membership */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-1 lg:order-2">
              <SectionHeader
                align="left"
                eyebrow="Membership"
                title="Your NFT is your voice"
                description="Each token is a unique on-chain credential. Holders delegate voting power and participate in community decisions."
              />
              <Link
                href="/community"
                className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
              >
                Explore community →
              </Link>
            </div>
            <div className="order-2 overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50 shadow-sm lg:order-1">
              <MembershipVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-zinc-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Dashboard"
                title="Govern from your browser"
                description="Mint NFTs, delegate voting power, create proposals, and cast votes — all connected to your Stellar wallet."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Freighter wallet integration",
                  "Real-time proposal status",
                  "IPFS metadata support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-600"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/proposals"
                className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
              >
                View proposals →
              </Link>
            </div>
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Features"
            title="Built for Stellar communities"
            description="OpenZeppelin governance modules, SEP-0050 NFTs, and a wallet-native dashboard."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-zinc-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-sm sm:p-6"
              >
                <h3 className="font-semibold text-zinc-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 flex flex-col justify-center p-8 sm:p-12 lg:order-1">
                <SectionHeader
                  align="left"
                  eyebrow="Stack"
                  title="Powered by the Stellar ecosystem"
                  description="OpenZeppelin Soroban modules composed with a Next.js dashboard. Tested contracts, WASM-built, testnet-ready."
                />
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {stack.map((item) => (
                    <li
                      key={item.label}
                      className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2.5"
                    >
                      <p className="text-sm font-semibold text-zinc-900">
                        {item.label}
                      </p>
                      <p className="text-xs text-zinc-500">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <NetworkVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
        <div className="rounded-2xl bg-indigo-600 px-6 py-10 text-center sm:px-12 sm:py-14">
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
