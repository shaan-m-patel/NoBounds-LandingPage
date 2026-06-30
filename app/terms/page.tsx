import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { Container } from "@/components/ui/Container";
import { TERMS_LAST_UPDATED, TERMS_SECTIONS } from "@/lib/content/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "No Bounds Terms of Service. Read the terms governing your use of our couple-only iOS app.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <LegalDocument
          title="Terms of Service"
          lastUpdated={TERMS_LAST_UPDATED}
          sections={TERMS_SECTIONS}
        />
      </Container>
    </div>
  );
}
