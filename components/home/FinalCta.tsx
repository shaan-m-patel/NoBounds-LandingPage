import { AppStoreButton, Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function FinalCta() {
  return (
    <Section variant="accent">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Start your private space today
        </h2>
        <p className="mt-4 text-text-muted">
          Download No Bounds on iPhone and invite your partner. The core experience
          is free.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppStoreButton />
          <Button href="/help" variant="secondary">
            Questions? Visit Support
          </Button>
        </div>
      </div>
    </Section>
  );
}
