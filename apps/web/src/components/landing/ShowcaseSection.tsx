import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { LANDING_IMAGES } from "@/lib/landingImages";

const SHOWCASE_ITEMS = [
  {
    title: "Treasury allocation Q1",
    category: "Finance",
    detail: "12 votes · Active",
    image: LANDING_IMAGES.showcase.treasury,
    imageAlt: "Treasury budget coins and pie chart",
  },
  {
    title: "Brand guidelines update",
    category: "Community",
    detail: "24 votes · Passed",
    image: LANDING_IMAGES.showcase.brand,
    imageAlt: "Brand color swatches and logo sketches",
  },
  {
    title: "Membership badge refresh",
    category: "NFT",
    detail: "8 votes · Closed",
    image: LANDING_IMAGES.showcase.badge,
    imageAlt: "Membership NFT badge artwork",
  },
] as const;

export function ShowcaseSection() {
  return (
    <section id="showcase" className="landing-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="landing-eyebrow">Showcase</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-black sm:text-4xl">
              What communities are voting on
            </h2>
            <p className="mt-3 text-[var(--ink-muted)]">
              From treasury decisions to membership updates. Every proposal is
              an on-chain vote with transparent outcomes.
            </p>
          </div>
          <LinkButton href="/proposals" variant="ghost">
            View all proposals
          </LinkButton>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE_ITEMS.map((item) => (
            <article
              key={item.title}
              className="landing-showcase-card neo-card overflow-hidden"
            >
              <figure className="landing-showcase-image">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                  {item.category}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm">
                  Status: <strong>{item.detail}</strong>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
