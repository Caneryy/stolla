import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";

const PRODUCT_LINKS = [
  { href: "/community", label: "Community" },
  { href: "/proposals", label: "Proposals" },
  { section: "features", label: "Features" },
  { section: "showcase", label: "Showcase" },
  { section: "faq", label: "FAQ" },
] as const;

const RESOURCE_LINKS = [
  { href: "https://stellar.org", label: "Stellar" },
  { href: "https://developers.stellar.org", label: "Developers" },
  {
    href: "https://developers.stellar.org/docs/build/smart-contracts",
    label: "Soroban docs",
  },
  {
    href: "https://docs.openzeppelin.com/stellar-contracts",
    label: "OpenZeppelin Stellar",
  },
] as const;

export function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="landing-footer">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="block text-left transition-opacity hover:opacity-85">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-muted)]">
                Stolla
              </p>
              <p className="mt-1 text-2xl font-black text-[var(--paper)]">
                Community Governance
              </p>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--paper-muted)]">
              NFT-gated DAO voting for Stellar projects. Deploy membership
              collections, delegate voting power, and govern transparently on
              testnet.
            </p>
            <div className="mt-5">
              <LinkButton href="/community">Launch app</LinkButton>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="landing-footer-heading">Product</h3>
            <ul className="landing-footer-list">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  {"href" in link ? (
                    <Link href={link.href} className="landing-footer-link">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={`/#${link.section}`} className="landing-footer-link">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h3 className="landing-footer-heading">Resources</h3>
            <ul className="landing-footer-list">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="landing-footer-link"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-2 border-[var(--paper-muted)] p-3 text-sm text-[var(--paper-muted)]">
              <p className="font-bold text-[var(--paper)]">Stellar Testnet</p>
              <p className="mt-1">Test XLM only. Signaling votes — no mainnet funds.</p>
            </div>
          </div>
        </div>

        <div className="landing-footer-bottom mt-10 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--paper-muted)]">
            © {year} Stolla. Open source under MIT.
          </p>
          <p className="text-sm text-[var(--paper-muted)]">
            Built with Soroban · OpenZeppelin · Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
