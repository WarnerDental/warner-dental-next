import type { Metadata } from "next";
import Script from "next/script";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-navy-900 antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-11SQPX73BS"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  // GA4
  gtag('config', 'G-11SQPX73BS');

  // Google Ads
  gtag('config', 'AW-17859415734');

  // Track clicks on any tel: link as a Google Ads conversion
  document.addEventListener('click', function (e) {
    const a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!a) return;

    gtag('event', 'conversion', {
      'send_to': 'AW-17859415734/MuT7CNu8h-0bELadhMRC'
    });
  }, true);
          `}
        </Script>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-navy-900 focus:shadow"
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
