import type { Metadata } from "next";
import { ContactForm } from "@/components/help/ContactForm";
import { FAQ } from "@/components/help/FAQ";
import { Container } from "@/components/ui/Container";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support & Help",
  description:
    "Get help with No Bounds. Contact support, browse FAQs, and find answers about pairing, prompts, widgets, account deletion, and more.",
};

export default function HelpPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Support & Help</h1>
          <p className="mt-4 text-text-muted">
            We&apos;re here to help. Reach out anytime at{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-rose hover:text-rose-dark"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-semibold">Contact us</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold">Quick links</h2>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a href="/account-deletion" className="text-rose hover:text-rose-dark">
                  Account deletion instructions →
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-rose hover:text-rose-dark">
                  Privacy Policy →
                </a>
              </li>
              <li>
                <a href="/terms" className="text-rose hover:text-rose-dark">
                  Terms of Service →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            Frequently asked questions
          </h2>
          <FAQ />
        </div>
      </Container>
    </div>
  );
}
