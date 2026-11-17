import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService, type Photo } from "@/lib/services";
import { site } from "@/lib/site";
import CTA from "@/components/CTA";

// One template renders every service page (/services/braces, etc.).
// Page text lives in lib/services.ts.

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | ${site.name}`, description: s.description },
  };
}

export default function ServicePage({ params }: Props) {
  const s = getService(params.slug);
  if (!s) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-700">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span className="mx-2">›</span>
            <span>{s.name}</span>
          </nav>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{s.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy-800">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact#request"
              className="rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white hover:bg-navy-800"
            >
              Request an Appointment
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-navy-900/15 px-6 py-3 text-sm font-medium hover:border-navy-900/30 hover:bg-black/[0.02]"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-10 md:col-span-2">
            {s.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="text-2xl font-semibold tracking-tight">{sec.heading}</h2>
                <p className="mt-3 leading-relaxed text-navy-800">{sec.body}</p>
                {sec.points ? (
                  <ul className="mt-4 space-y-2">
                    {sec.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-navy-800">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {sec.beforeAfter ? (
                  <div className="mt-5 rounded-2xl border border-black/5 bg-white p-4 shadow-soft">
                    <BeforeAfterPair before={sec.beforeAfter.before} after={sec.beforeAfter.after} />
                  </div>
                ) : null}
                {sec.image ? (
                  <div className="mt-5 overflow-hidden rounded-2xl border border-black/5 shadow-soft">
                    <img
                      src={sec.image.src}
                      alt={sec.image.alt}
                      loading="lazy"
                      className="h-auto w-full"
                    />
                  </div>
                ) : null}
              </section>
            ))}

            {s.beforeAfter && s.beforeAfter.length > 0 ? (
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">Before &amp; after</h2>
                <p className="mt-2 text-sm text-navy-800">
                  Real results from Warner Dental patients, shared with their permission.
                </p>
                <div className="mt-5 space-y-6">
                  {s.beforeAfter.map((ba) => (
                    <figure
                      key={ba.caption}
                      className="rounded-2xl border border-black/5 bg-white p-4 shadow-soft"
                    >
                      <BeforeAfterPair before={ba.before} after={ba.after} />
                      <figcaption className="mt-3 text-sm text-navy-800">{ba.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Common questions</h2>
              <div className="mt-4 space-y-4">
                {s.faqs.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft"
                  >
                    <h3 className="font-semibold">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold">What&apos;s included</h2>
              <ul className="mt-4 space-y-2">
                {s.includes.map((x) => (
                  <li key={x} className="flex gap-3 text-sm text-navy-800">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-navy-700" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Visit us in Rigby</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-800">
                {site.addressOneLine}
                <br />
                Call or text{" "}
                <a href={site.phoneHref} className="font-medium underline">
                  {site.phoneDisplay}
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold">Other services</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/services/${o.slug}`} className="text-navy-800 hover:underline">
                      {o.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <CTA />
    </>
  );
}

function BeforeAfterPair({ before, after }: { before: Photo; after: Photo }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: "Before", photo: before },
        { label: "After", photo: after },
      ].map(({ label, photo }) => (
        <div key={label}>
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="aspect-[3/2] w-full rounded-xl object-cover"
          />
          <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-navy-700">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
