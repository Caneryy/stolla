import Link from "next/link";

const footerLinks = {
  product: [
    { href: "/community", label: "Community" },
    { href: "/proposals", label: "Proposals" },
  ],
  resources: [
    {
      href: "https://developers.stellar.org/docs/build/smart-contracts",
      label: "Soroban Docs",
      external: true,
    },
    {
      href: "https://docs.openzeppelin.com/stellar-contracts",
      label: "OpenZeppelin Stellar",
      external: true,
    },
    {
      href: "https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0050.md",
      label: "SEP-0050 NFT",
      external: true,
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-zinc-900">
              Stolla
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-600">
              NFT-gated community governance for Stellar projects. Launch
              membership collections and run transparent on-chain votes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Product</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Network</h3>
            <p className="mt-4 text-sm text-zinc-600">
              Currently deployed on{" "}
              <span className="font-medium text-indigo-600">Stellar Testnet</span>
              . Mainnet support planned after audit.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Stolla. Open source under MIT.
          </p>
          <p className="text-xs text-zinc-400">
            Built with Soroban · OpenZeppelin · Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
