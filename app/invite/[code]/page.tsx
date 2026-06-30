import type { Metadata } from "next";
import { AppStoreButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type InvitePageProps = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({
  params,
}: InvitePageProps): Promise<Metadata> {
  const { code } = await params;
  return {
    title: `Invite — ${code}`,
    description: `You've been invited to join No Bounds. Use invite code ${code} on your iPhone.`,
  };
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { code } = await params;

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose/15 text-rose">
            <svg
              aria-hidden="true"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <h1 className="text-3xl font-semibold sm:text-4xl">
            You&apos;ve been invited to No Bounds
          </h1>
          <p className="mt-4 text-text-muted">
            Someone special wants to share a private space with you.
          </p>

          <div className="mt-8 rounded-2xl border border-warm-300/60 bg-white/70 p-6 shadow-sm">
            <p className="text-sm font-medium text-text-subtle">Your invite code</p>
            <p className="mt-2 font-mono text-2xl font-semibold tracking-wider text-rose-dark">
              {code}
            </p>
          </div>

          <div className="mt-8 space-y-4 text-left text-sm text-text-muted">
            <p>
              <strong className="text-text-primary">On iPhone with No Bounds installed:</strong>{" "}
              Tap this link again or open the app and enter the invite code above to join your
              partner&apos;s couple space.
            </p>
            <p>
              <strong className="text-text-primary">Don&apos;t have the app yet?</strong>{" "}
              Download No Bounds from the App Store, create an account, then enter this code or
              reopen this link.
            </p>
          </div>

          <div className="mt-10">
            <AppStoreButton />
          </div>

          <p className="mt-6 text-xs text-text-subtle">
            No Bounds is available on iPhone only. This page is a web fallback when the app
            is not installed.
          </p>
        </div>
      </Container>
    </div>
  );
}
