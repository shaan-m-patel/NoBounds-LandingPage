import Link from "next/link";
import { FOOTER_LINKS, SUPPORT_EMAIL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-warm-300/50 bg-warm-200 py-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-text-primary">No Bounds</p>
            <p className="mt-2 text-sm text-text-muted">
              A private space for two. Made for iPhone.
            </p>
            <p className="mt-4 text-sm text-text-subtle">
              Available on the App Store
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-3 text-sm font-semibold text-text-primary">Links</p>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-rose-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-sm font-semibold text-text-primary">Contact</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm text-rose hover:text-rose-dark"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-warm-300/50 pt-6 text-center text-sm text-text-subtle sm:text-left">
          © 2026 No Bounds. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
