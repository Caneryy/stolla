import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <LandingHeader />
      <main>{children}</main>
      <LandingFooter />
    </div>
  );
}
