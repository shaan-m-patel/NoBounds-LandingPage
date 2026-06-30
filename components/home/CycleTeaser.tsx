import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function CycleTeaser() {
  return (
    <Section variant="alt">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">Optional cycle sharing</h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
          Each partner can opt in to track their own cycle independently, with
          granular sharing permissions—your partner only sees what you explicitly
          allow. Instant unlink revokes cycle sharing without ending your couple
          connection.
        </p>
        <p className="mt-4 text-sm text-text-subtle">
          This is not medical advice—consult a healthcare provider for health
          decisions. See our{" "}
          <Link href="/terms" className="text-rose hover:text-rose-dark underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-rose hover:text-rose-dark underline">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
      </div>
    </Section>
  );
}
