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

export function HowItWorks() {
  return (
    <ol className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
      {steps.map((item, index) => (
        <li key={item.step} className="relative">
          {index < steps.length - 1 ? (
            <span
              aria-hidden
              className="absolute left-8 top-4 hidden h-px w-[calc(100%-2rem)] bg-indigo-200 lg:block"
            />
          ) : null}

          <div className="flex gap-4 lg:block">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              {item.step}
            </span>
            <div className="lg:mt-4">
              <h3 className="font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
