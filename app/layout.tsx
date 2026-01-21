import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.warnerdentalteam.com"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Modern, friendly dental care in Rigby, Idaho. Preventive, restorative, and cosmetic dentistry for the whole family.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: "https://www.warnerdentalteam.com",
    title: `${site.name} | ${site.tagline}`,
    description:
      "Modern, relationship-focused dental care in Rigby, Idaho. Conservative, world-class family and cosmetic dentistry without the rushed, corporate feel.",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description:
      "World-class dentistry with small-town values in Rigby, Idaho.",
  },
};
;

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-navy-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] rounded-md bg-white px-4 py-2 shadow-soft"
        >
          Skip to content
        </a>

        <TopBar />
        <Header />

        <main id="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
