import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Set NEXT_PUBLIC_SITE_URL in your host's env to the real domain so social
// share cards and any absolute URLs resolve correctly. Falls back to a
// placeholder that keeps the build valid until it's configured.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sinhlemkhabela.com";

const title = "Sinhle Mkhabela | Software Engineer & Founder";
const description =
  "Software Engineer and Founder building production systems. Currently building Sorae, a fintech platform South African lenders use to automate affordability decisions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sinhle Mkhabela",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
