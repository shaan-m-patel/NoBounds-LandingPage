import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const features = [
  {
    title: "Daily prompts",
    description:
      "One curated question per couple each day. Each partner answers independently—responses stay hidden until both have replied, then the thread unlocks for reactions, comments, and follow-up replies. Optional photo attachments included.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Photo presence & widget",
    description:
      "Share quick photos with optional captions and mood tags. Your partner's latest photo appears on Home and in the Bound tab. A home screen widget shows their most recent shared photo—tap to open a fast camera-first send flow.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Shared habits",
    description:
      "Track habits scoped as Mine, Partner's, or Ours—with completion policies for either partner or both. View month and week calendars with streaks, plus a special Week's Bound weekly memory habit every Sunday.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Timeline & memories",
    description:
      "A unified feed of memories, photos, prompts, gratitude entries, and milestones. Filter by type, favorite across types, and search. Create memories with optional photos and gratitude notes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Reunion countdown",
    description:
      "Set reunion date ranges and see your countdown from Home. Get notifications as milestones approach—so the days apart feel a little shorter.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Play & pets",
    description:
      "Adopt a personal companion pet on the Play tab—preview it on Home when paired. Play Tic-Tac-Toe together now; Word Duel, Memory Match, and Draw & Guess are coming soon.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function FeatureGrid() {
  return (
    <Section id="features" variant="alt">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need, nothing you don&apos;t</h2>
        <p className="mt-3 text-text-muted">
          Built for emotional intimacy—not a public social feed.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-rose/10 text-rose">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
