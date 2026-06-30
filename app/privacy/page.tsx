import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { Container } from "@/components/ui/Container";
import { PRIVACY_LAST_UPDATED, PRIVACY_SECTIONS } from "@/lib/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "No Bounds Privacy Policy. Learn how we collect, use, and protect your data in our couple-only private space.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <LegalDocument
          title="Privacy Policy"
          lastUpdated={PRIVACY_LAST_UPDATED}
          sections={PRIVACY_SECTIONS}
        />
      </Container>
    </div>
  );
}
