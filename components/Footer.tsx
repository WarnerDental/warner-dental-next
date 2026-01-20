import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo2.png"
              alt={`${site.name} logo`}
              className="h-9 w-auto"
            />
            <div className="leading-tight">
              <div className="font-semibold">{site.name}</div>
              <div className="text-sm text-navy-800">{site.tagline}</div>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <a className="block hover:underline" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a className="block hover:underline" href={site.faxHref}>
            Fax: {site.faxDisplay}
            </a>

            <a className="block hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="text-navy-800">
              {site.addressLines.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/contact#request"
              className="inline-flex rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-800"
            >
              Schedule
            </Link>
          </div>

          <p className="mt-8 text-xs text-navy-800">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold">Hours</h3>
            <dl className="mt-4 space-y-2 text-sm text-navy-800">
              {site.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between gap-3">
                  <dt className="font-medium text-navy-900">{h.day}</dt>
                  <dd>{h.hours}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <a
                className="text-sm font-medium text-gold-500 hover:underline"
                href={site.formsHref}
              >
                Download new patient forms
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Map</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">
              {/* Placeholder embed (no API key). Swap later if desired. */}
              <iframe
                title="Map to Warner Dental"
                src={site.mapEmbedSrc}
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
