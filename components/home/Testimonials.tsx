import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    names: "Alex & Jordan",
    quote:
      "The daily prompts give us something real to talk about—not just 'how was your day.' We look forward to unlocking our answers every evening.",
    location: "San Francisco & London",
  },
  {
    names: "Maya & Chris",
    quote:
      "Seeing their latest photo on my home screen widget feels like a small hello across the miles. It's intimate without being overwhelming.",
    location: "Austin & Tokyo",
  },
  {
    names: "Sam & Riley",
    quote:
      "We built habits together before we were even in the same city. When we paired, everything merged seamlessly into our shared space.",
    location: "Chicago & Berlin",
  },
];

export function Testimonials() {
  return (
    <Section variant="alt">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Couples like you</h2>
        <p className="mt-3 text-text-muted">
          Example quotes from long-distance pairs who value daily connection.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.names}>
            <blockquote className="text-text-muted">
              <p className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
            </blockquote>
            <footer className="mt-4 border-t border-warm-300/50 pt-4">
              <p className="text-sm font-semibold text-text-primary">{item.names}</p>
              <p className="text-xs text-text-subtle">{item.location}</p>
            </footer>
          </Card>
        ))}
      </div>
    </Section>
  );
}
