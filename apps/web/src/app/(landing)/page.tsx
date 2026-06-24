import { CtaSection } from "@/components/landing/CtaSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ShowcaseSection } from "@/components/landing/ShowcaseSection";
import { TechnologySection } from "@/components/landing/TechnologySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <HowItWorksSection />
      <TechnologySection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
