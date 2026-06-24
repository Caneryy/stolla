import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { LANDING_IMAGES } from "@/lib/landingImages";

const PREVIEW_ITEMS = [
  {
    title: "Treasury allocation Q1",
    votes: "12 For",
    status: "Active",
    image: LANDING_IMAGES.thumbs.treasury,
    active: true,
  },
  {
    title: "Brand guidelines update",
    votes: "24 For",
    status: "Passed",
    image: LANDING_IMAGES.thumbs.brand,
  },
  {
    title: "Community grant program",
    votes: "3 For",
    status: "Pending",
    image: LANDING_IMAGES.thumbs.badge,
  },
] as const;

export function HeroSection() {
  return (
    <section className="landing-hero">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-20">
        <div className="space-y-6">
          <p className="landing-eyebrow">Community governance on Stellar</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Launch your community.
            <br />
            Govern on-chain.
          </h1>
          <p className="max-w-xl text-base text-[var(--ink-muted)] sm:text-lg">
            Stolla gives Stellar projects NFT membership collections and
            transparent DAO voting. Deploy contracts, mint members, delegate
            power, and vote — all from one dashboard.
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/community">Get started</LinkButton>
            <LinkButton href="/proposals" variant="ghost">
              Browse proposals
            </LinkButton>
          </div>
          <dl className="grid grid-cols-3 gap-3 pt-2 sm:gap-4">
            <div className="landing-stat">
              <dt className="landing-stat-label">Network</dt>
              <dd className="landing-stat-value">Testnet</dd>
            </div>
            <div className="landing-stat">
              <dt className="landing-stat-label">Voting</dt>
              <dd className="landing-stat-value">On-chain</dd>
            </div>
            <div className="landing-stat">
              <dt className="landing-stat-label">Standard</dt>
              <dd className="landing-stat-value">SEP-0050</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <figure className="landing-image-frame neo-card overflow-hidden">
            <Image
              src={LANDING_IMAGES.hero}
              alt="Community members gathered for on-chain governance under a starry sky"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>

          <div className="landing-hero-panel neo-card p-4 sm:p-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
              Live governance preview
            </p>
            <div className="space-y-3">
              {PREVIEW_ITEMS.map((item) => (
                <PreviewRow key={item.title} {...item} />
              ))}
            </div>
            <p className="mt-4 border-t-2 border-[var(--border)] pt-4 text-xs text-[var(--ink-muted)]">
              Proposal state and vote counts are read from Soroban contracts via
              RPC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewRow({
  title,
  votes,
  status,
  image,
  active = false,
}: {
  title: string;
  votes: string;
  status: string;
  image: string;
  active?: boolean;
}) {
  return (
    <div
      className={`landing-preview-row ${active ? "landing-preview-row-active" : ""}`}
    >
      <Image
        src={image}
        alt=""
        width={56}
        height={56}
        className="landing-preview-thumb"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate font-bold">{title}</p>
        <p className="text-xs text-[var(--ink-muted)]">{votes}</p>
      </div>
      <span className="shrink-0 text-xs font-bold">{status}</span>
    </div>
  );
}
