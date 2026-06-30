import { Section } from "@/components/ui/Section";

export function PrivacyCallout() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl rounded-3xl border border-warm-300/60 bg-white/60 p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose/10 text-rose">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold sm:text-3xl">Privacy-first by design</h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          No Bounds is a couple-only private space—no public feed, no followers, no
          discovery. Your shared content is accessible only to you and your partner,
          protected by server-side access controls (Supabase row-level security). We
          don&apos;t sell your personal data.
        </p>
      </div>
    </Section>
  );
}
