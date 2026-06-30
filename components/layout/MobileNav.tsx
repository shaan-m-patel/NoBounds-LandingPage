"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  if (!open) return null;

  return (
    <div id="mobile-nav" className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-text-primary/20 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        className="absolute right-0 top-0 flex h-full w-72 flex-col bg-warm-100 p-6 shadow-xl"
        aria-label="Mobile"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>
          <button
            type="button"
            className="rounded-lg p-2 text-text-muted hover:bg-warm-200"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-base font-medium text-text-primary hover:text-rose-dark"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
