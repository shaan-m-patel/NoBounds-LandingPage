export type LegalSection = {
  title: string;
  content: string[];
};

export const PRIVACY_LAST_UPDATED = "June 2026";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    title: "Introduction",
    content: [
      'No Bounds ("we," "us," or "our") operates the No Bounds mobile application and the website at nobounds.app (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our Service.',
      "No Bounds is operated by [Your Company Name] (the legal entity name will be updated). By using the Service, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    title: "Who We Are",
    content: [
      "No Bounds is a native iOS application designed for long-distance couples and close pairs. The Service provides a private, couple-only shared space—it is not a public social network.",
      "For privacy-related questions, contact us at privacy@nobounds.app.",
    ],
  },
  {
    title: "Information We Collect",
    content: [
      "Account & profile: Email address and authentication credentials (or Apple ID token via Sign in with Apple), optional name from Apple Sign In, display name, avatar image, and timezone (IANA).",
      "User-generated content (couple-private, protected by row-level security): Prompt answers, replies, and reactions; presence photos, captions, mood tags, and optional text location labels; timeline memories, gratitude entries, and milestones; habit definitions and completion records; cycle tracking logs and sharing preferences (if opted in); virtual pet choices; and in-app feedback and bug reports.",
      "Device & technical: Push notification device tokens (APNs); app version, iOS version, and device model (attached to feedback and optional product analytics events stored in Supabase); optional crash/error reporting via Sentry when enabled in production builds (disabled in default development configuration).",
    ],
  },
  {
    title: "Permissions",
    content: [
      "Camera — used to take a quick photo to share with your partner.",
      "Photo Library — used to choose a photo from your library to share with your partner.",
      "Push Notifications — used for relationship reminders and partner activity alerts.",
      "We do not request access to contacts, microphone, GPS/location services, HealthKit, or Face ID. No app lock with biometrics is shipped in the current version.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide and operate the Service, including authentication, couple pairing, content storage, and synchronization between partners.",
      "To send push notifications and in-app alerts you have opted into (prompts, photos, reactions, habits, milestones, reunion countdown, and related categories).",
      "To respond to support requests, feedback, and bug reports.",
      "To improve the product through optional analytics events and crash reporting (when enabled).",
      "To enforce our Terms of Service and protect the security of the Service.",
    ],
  },
  {
    title: "Legal Bases for Processing",
    content: [
      "Contract: Processing necessary to provide the Service you signed up for, including account management and couple pairing.",
      "Consent: For push notifications and optional features such as cycle tracking and sharing preferences—you can withdraw consent through app settings or iOS system settings.",
      "Legitimate interests: To improve the Service, prevent abuse, and ensure security, balanced against your privacy rights.",
    ],
  },
  {
    title: "Couple-Only Access Model",
    content: [
      "No Bounds is designed as a private space for exactly two connected partners. Your shared content is not public, is not indexed for discovery, and has no followers or social feed.",
      "Access to couple content is enforced through server-side access controls (Supabase row-level security). Only you and your paired partner can access your shared couple data.",
      "We do not sell your personal data to third parties.",
    ],
  },
  {
    title: "Third-Party Service Providers",
    content: [
      "Supabase — hosts authentication, database, file storage, and server functions. Supabase processes data on our behalf as a data processor.",
      "Apple — provides Sign in with Apple, Apple Push Notification service (APNs), and App Store distribution.",
      "Sentry (optional) — provides crash and error reporting when enabled in production builds.",
      "These providers are bound by their own privacy policies and our data processing agreements where applicable.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your information for as long as your account is active and as needed to provide the Service.",
      "When you delete your account (Profile → Settings → Account → Delete account), a server-side delete-account process permanently removes your account and associated data. If you were paired, shared couple data is also removed and your partner is disconnected.",
      "Some information may be retained in backups for a limited period before being purged, or as required by law.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Access: You can view most of your data within the app. To request a copy of your data, go to Settings → Your data → Request my data, which opens a pre-filled email to support@nobounds.app. Automated export is not yet available.",
      "Correction: You can update your display name, avatar, and preferences in the app.",
      "Deletion: You can delete your account in-app at Profile → Settings → Account → Delete account. You may also email support@nobounds.app if you cannot access the app.",
      "Notification preferences: Adjust per-category settings in the app or revoke push consent in iOS Settings.",
      "Depending on your location, you may have additional rights under applicable privacy laws. Contact privacy@nobounds.app to exercise them.",
    ],
  },
  {
    title: "Children",
    content: [
      "The Service is not intended for users under 13 years of age (or 16 where applicable under local law). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact privacy@nobounds.app and we will take steps to delete it.",
    ],
  },
  {
    title: "International Users",
    content: [
      "No Bounds is primarily operated for users in the United States. If you access the Service from outside the United States, your information may be transferred to and processed in the United States or other countries where our service providers operate.",
      "By using the Service, you consent to such transfer and processing. We take reasonable steps to protect your data in accordance with this policy.",
    ],
  },
  {
    title: "Security",
    content: [
      "We implement technical and organizational measures to protect your information, including server-side access controls, encrypted connections (HTTPS/TLS), and row-level security on couple-private data.",
      "No method of transmission or storage is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised 'Last updated' date. Continued use of the Service after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "For privacy questions or requests: privacy@nobounds.app",
      "For general support: support@nobounds.app",
      "Website: https://nobounds.app",
    ],
  },
];
