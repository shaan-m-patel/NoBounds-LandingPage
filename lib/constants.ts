export const SITE_URL = "https://nobounds.app";
export const APP_STORE_URL = "https://apps.apple.com/app/id0000000000";
export const SUPPORT_EMAIL = "support@nobounds.app";
export const PRIVACY_EMAIL = "privacy@nobounds.app";
export const LEGAL_EMAIL = "legal@nobounds.app";

export const TAGLINE = "A private space for two";
export const SUB_TAGLINE =
  "Stay close every day—without the noise of a social feed.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/help", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export const FOOTER_LINKS = [
  { href: "/help", label: "Support" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/account-deletion", label: "Account Deletion" },
  { href: `mailto:${SUPPORT_EMAIL}`, label: "Contact" },
] as const;
