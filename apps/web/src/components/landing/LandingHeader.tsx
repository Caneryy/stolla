"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scroll";

const SECTION_LINKS = [
  { id: "features", label: "Features" },
  { id: "showcase", label: "Showcase" },
  { id: "how-it-works", label: "How it works" },
  { id: "technology", label: "Technology" },
  { id: "faq", label: "FAQ" },
] as const;

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--border)] bg-[var(--surface)]">
      <div className="landing-header-inner mx-auto max-w-6xl px-4 py-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="landing-header-brand text-left transition-opacity hover:opacity-80"
          aria-label="Scroll to top"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Stolla
          </p>
          <p className="text-xl font-black sm:text-2xl">Community Governance</p>
        </button>

        <nav className="landing-header-nav" aria-label="Landing sections">
          {SECTION_LINKS.map((link) => (
            <Button
              key={link.id}
              type="button"
              variant="ghost"
              className="landing-nav-btn shrink-0"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="landing-header-actions">
          <Link href="/community" className="neo-button w-full px-4 py-3 min-h-11 sm:w-auto">
            Enter app
          </Link>
        </div>
      </div>
    </header>
  );
}
