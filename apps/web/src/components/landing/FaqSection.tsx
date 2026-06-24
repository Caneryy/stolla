const FAQ = [
  {
    question: "Do I need an account to use Stolla?",
    answer:
      "No. You only need a Stellar wallet like Freighter connected to testnet. Your wallet address is your identity on the platform.",
  },
  {
    question: "Is this mainnet or testnet?",
    answer:
      "Stolla currently runs on Stellar testnet. Use testnet XLM from a faucet. Do not send real funds expecting mainnet value.",
  },
  {
    question: "How does voting power work?",
    answer:
      "Each membership NFT grants one vote after you delegate to yourself. The Governor uses checkpoint snapshots so voting power cannot be manipulated at proposal time.",
  },
  {
    question: "What can proposals do in the MVP?",
    answer:
      "MVP proposals are signaling votes with empty on-chain targets. They record community decisions transparently; timelock and treasury execution are planned for later.",
  },
  {
    question: "How is NFT metadata stored?",
    answer:
      "Each token stores an IPFS metadata URI on-chain (SEP-0050 compatible). In the MVP you paste the URI when minting; an upload helper may come later.",
  },
] as const;

export function FaqSection() {
  return (
    <section id="faq" className="landing-section landing-section-alt">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl">
          <p className="landing-eyebrow">FAQ</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-black sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-3 text-[var(--ink-muted)]">
            Quick answers before you jump into the app.
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {FAQ.map((item) => (
            <details key={item.question} className="landing-faq-item neo-card group">
              <summary className="cursor-pointer list-none p-4 font-bold marker:content-none sm:p-5">
                <span className="flex items-start justify-between gap-3">
                  {item.question}
                  <span className="landing-faq-chevron" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t-2 border-[var(--border)] px-4 pb-4 text-sm text-[var(--ink-muted)] sm:px-5 sm:pb-5">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
