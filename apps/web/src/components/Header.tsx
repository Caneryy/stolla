"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWallet } from "@/context/WalletProvider";

const navItems = [
  { href: "/community", label: "Community" },
  { href: "/proposals", label: "Proposals" },
];

export function Header() {
  const pathname = usePathname();
  const { address, connect, disconnect, isConnecting } = useWallet();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:py-4">
        <div className="flex min-w-0 items-center gap-5 sm:gap-8">
          <Link href="/" className="shrink-0 text-lg font-semibold text-zinc-900">
            Stolla
          </Link>
          <nav className="flex gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-2.5 py-1.5 text-sm transition-colors sm:px-3 ${
                    isActive
                      ? "bg-indigo-50 font-medium text-indigo-700"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {address ? (
            <>
              <span className="hidden truncate text-xs text-zinc-500 sm:inline sm:max-w-[180px]">
                {address}
              </span>
              <button
                type="button"
                onClick={disconnect}
                className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={connect}
              disabled={isConnecting}
              className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 disabled:opacity-50 sm:px-4"
            >
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
