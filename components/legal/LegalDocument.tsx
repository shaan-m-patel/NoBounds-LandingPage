import type { LegalSection } from "@/lib/content/privacy";

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalDocument({ title, lastUpdated, sections }: LegalDocumentProps) {
  return (
    <article className="prose-legal mx-auto max-w-3xl">
      <header className="mb-10 border-b border-warm-300/50 pb-8">
        <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-text-subtle">Last updated: {lastUpdated}</p>
      </header>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-xl font-semibold">{section.title}</h2>
            <div className="space-y-4">
              {section.content.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
