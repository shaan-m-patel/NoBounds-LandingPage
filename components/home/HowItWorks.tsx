import { Section } from "@/components/ui/Section";

const steps = [
  {
    number: "1",
    title: "Create account & invite your partner",
    description:
      "Sign up with email or Sign in with Apple. Generate a shareable invite code or link—your partner joins by entering the code or opening the link on their iPhone.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Build daily rituals together",
    description:
      "Answer daily prompts, share quick photos, track shared habits, and capture memories. Use the app solo before pairing—your entries merge when you connect.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Stay close across time zones",
    description:
      "Get thoughtful notifications, see your partner's latest photo on a home screen widget, track reunion countdowns, and browse your shared timeline.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
        <p className="mt-3 text-text-muted">
          Three simple steps to your private couple space.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="relative text-center md:text-left">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose/15 text-rose md:mx-0">
              {step.icon}
            </div>
            <span className="text-sm font-semibold text-rose">Step {step.number}</span>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
