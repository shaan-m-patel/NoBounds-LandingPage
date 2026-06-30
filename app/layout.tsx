import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE_URL, SUB_TAGLINE, TAGLINE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL(SITE_URL),
  title: {
    default: "No Bounds — A private space for two",
    template: "%s | No Bounds",
  },
  description: `${TAGLINE}. ${SUB_TAGLINE} A native iOS app for long-distance couples.`,
  openGraph: {
    title: "No Bounds — A private space for two",
    description: SUB_TAGLINE,
    url: SITE_URL,
    siteName: "No Bounds",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
