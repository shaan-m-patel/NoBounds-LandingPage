import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Account Deletion",
  description:
    "How to delete your No Bounds account. Permanent deletion instructions and what happens to your data.",
};

export default function AccountDeletionPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <article className="mx-auto max-w-3xl">
          <header className="mb-10 border-b border-warm-300/50 pb-8">
            <h1 className="text-3xl font-semibold sm:text-4xl">Account Deletion</h1>
            <p className="mt-4 text-text-muted">
              How to permanently delete your No Bounds account and associated data.
            </p>
          </header>

          <div className="space-y-8 text-sm leading-relaxed text-text-muted">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-text-primary">
                Delete your account in the app
              </h2>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Open No Bounds on your iPhone</li>
                <li>Go to Profile → Settings → Account</li>
                <li>Tap Delete account</li>
                <li>Confirm the deletion prompt</li>
              </ol>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-text-primary">
                What happens when you delete
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Your account and associated personal data are permanently deleted
                  through a server-side delete-account process.
                </li>
                <li>
                  If you are paired with a partner, they will be disconnected and
                  shared couple data will be removed.
                </li>
                <li>This action cannot be undone.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-text-primary">
                Cannot access the app?
              </h2>
              <p>
                If you are unable to access the app to delete your account, email us
                at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-rose hover:text-rose-dark"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                with the email address associated with your account. We will verify
                your identity and process your deletion request.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-text-primary">
                Request a copy of your data
              </h2>
              <p>
                Before deleting, you may request a copy of your data via Settings →
                Your data → Request my data in the app, or email{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-rose hover:text-rose-dark"
                >
                  {SUPPORT_EMAIL}
                </a>
                . Automated export is not yet available.
              </p>
            </section>

            <p>
              For more information, see our{" "}
              <Link href="/privacy" className="text-rose hover:text-rose-dark">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/help" className="text-rose hover:text-rose-dark">
                Support page
              </Link>
              .
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
