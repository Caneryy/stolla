import { LinkButton } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="landing-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="landing-cta neo-card p-6 sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="landing-eyebrow">Get started</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-black sm:text-4xl">
              Ready to launch your community?
            </h2>
            <p className="mt-3 text-[var(--ink-muted)]">
              Connect Freighter and run your first governance vote on Stellar
              testnet today.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <LinkButton href="/community">Get started</LinkButton>
              <LinkButton href="/proposals" variant="ghost">
                Browse proposals
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
