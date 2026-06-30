import { CycleTeaser } from "@/components/home/CycleTeaser";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PrivacyCallout } from "@/components/home/PrivacyCallout";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <HowItWorks />
      <FeatureGrid />
      <PrivacyCallout />
      <CycleTeaser />
      <FinalCta />
    </>
  );
}
