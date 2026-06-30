import { AppStoreButton, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SUB_TAGLINE, TAGLINE } from "@/lib/constants";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xs" aria-hidden="true">
      <div className="rounded-[2.5rem] border-[6px] border-text-primary/10 bg-warm-200 p-3 shadow-xl shadow-rose/10">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-warm-50 to-warm-200">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="h-2 w-12 rounded-full bg-warm-300" />
            <div className="h-2 w-6 rounded-full bg-warm-300" />
          </div>
          <div className="px-5 pb-6 pt-2">
            <div className="mb-4 h-3 w-24 rounded bg-rose/30" />
            <div className="mb-6 h-2 w-32 rounded bg-warm-300" />
            <div className="mb-4 aspect-[4/5] rounded-2xl bg-gradient-to-br from-rose/20 to-rose-light/30" />
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-warm-300/80" />
              <div className="h-2 w-4/5 rounded bg-warm-300/60" />
              <div className="h-2 w-3/5 rounded bg-warm-300/40" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-rose/10 blur-xl" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-rose-light/20 blur-xl" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-warm-50 to-warm-100 py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-block rounded-full bg-rose/10 px-4 py-1.5 text-sm font-medium text-rose-dark">
              For long-distance couples
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              No Bounds
            </h1>
            <p className="mt-4 text-balance text-xl font-medium text-rose-dark sm:text-2xl">
              {TAGLINE}
            </p>
            <p className="mt-4 text-balance text-base text-text-muted sm:text-lg">
              {SUB_TAGLINE}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <AppStoreButton />
              <Button href="/#how-it-works" variant="secondary">
                Learn how it works
              </Button>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}
