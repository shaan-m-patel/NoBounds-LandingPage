export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is No Bounds?",
    answer:
      "No Bounds is a native iOS app for long-distance couples and close pairs. It combines daily guided prompts, private photo sharing, shared habits, a unified timeline, reunion countdowns, and playful features—all in a couple-only private space with no public social feed.",
  },
  {
    question: "Is there an Android or web app?",
    answer:
      "No. No Bounds is available on iPhone only. There is no web client for daily use—this website is for marketing, support, and legal information. You can create an account and use the app only on iOS.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Download No Bounds from the App Store, then sign up with email and password or Sign in with Apple. Email confirmation may be required for email signups. Anyone can create an account in the app.",
  },
  {
    question: "How do I pair with my partner?",
    answer:
      "One partner creates a shareable invite code and link in the app. The other joins by entering the code or opening the invite link (https://nobounds.app/invite/{code}) on their iPhone. If the app is installed, the link opens No Bounds directly via Universal Links.",
  },
  {
    question: "Can I use the app before my partner joins?",
    answer:
      "Yes. Solo mode lets you use habits, memories, and prompt entries on your own. When you pair with your partner, your solo entries merge into the shared couple space.",
  },
  {
    question: "How do daily prompts work?",
    answer:
      "Each couple receives one curated question per day. Each partner answers independently—answers stay hidden until both have responded. Once unlocked, you can react with emoji, comment, and add follow-up replies. Optional photo attachments are supported.",
  },
  {
    question: "How does the home screen widget work?",
    answer:
      "The Partner Presence widget shows your partner's most recent shared photo in small, medium, or large sizes. Tap the widget to open the app to a fast camera-first send flow. When signed out or unpaired, the widget shows privacy-safe placeholders with no personal information.",
  },
  {
    question: "How do I change notification settings?",
    answer:
      "In the app, go to Settings to adjust per-category notification preferences (prompts, photos, reactions, habits, milestones, reunion countdown, and more). You can also revoke push notification consent in iOS Settings at any time.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Open the app → Profile → Settings → Account → Delete account. Confirm the deletion prompt. This permanently deletes your account and associated data. If you are paired, your partner will be disconnected and shared couple data will be removed. This cannot be undone.",
  },
  {
    question: "How do I request my data?",
    answer:
      "In the app, go to Settings → Your data → Request my data. This opens a pre-filled email to support@nobounds.app. Automated data export is not yet available—we will respond to your request by email.",
  },
  {
    question: "Is cycle tracking medical advice?",
    answer:
      "No. Cycle tracking in No Bounds is not medical advice, not a contraceptive tool, and not a diagnostic tool. It is not connected to Apple HealthKit. Consult a healthcare provider for health decisions.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Email us at support@nobounds.app, use the contact form on this page, or submit feedback from Profile in the app (which includes helpful diagnostics like app version and device model).",
  },
  {
    question: "Are there subscriptions?",
    answer:
      "The core No Bounds experience is free today. Subscriptions and premium features may be introduced in a future release—no pricing tiers exist in the app currently.",
  },
  {
    question: "What happens to my data if I delete my account?",
    answer:
      "Account deletion permanently removes your account and associated personal data through a server-side delete-account process. If you were paired, your partner is disconnected and shared couple data is removed. This action cannot be undone.",
  },
  {
    question: "What if my partner and I break up or disconnect?",
    answer:
      "You can disconnect from your partner in the app, which ends the couple connection. Shared couple content policies apply as described in our Terms of Service. Either partner can also delete their account, which disconnects the partner and removes shared couple data.",
  },
];
