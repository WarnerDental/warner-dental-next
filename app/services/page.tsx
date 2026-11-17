import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Services in Rigby, ID",
  description:
    "Checkups and cleanings, fillings, crowns, braces, clear aligners, esthetic crowns, whitening, implant crowns, and emergency dental care at Warner Dental in Rigby, Idaho.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Dental Services in Rigby
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-800">
            Comprehensive care—preventive, restorative, cosmetic, and family dentistry.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10">
          <Category
            id="preventive"
            blurb="Regular checkups and cleanings that catch small problems early, before they turn into bigger, more expensive ones."
            title="Preventive"
            href="/services/family-dentistry"
            items={["Exams & cleanings", "Digital X-rays", "Oral cancer screening", "Fluoride & sealants"]}
          />
          <Category
            id="restorative"
            blurb="Repairs that look natural and hold up, with your options and costs explained before we start."
            title="Restorative"
            href="/services/restorative-dentistry"
            items={["Tooth-colored fillings", "Crowns", "Bridges", "Dentures & partials"]}
          />
          <Category
            id="cosmetic"
            blurb="Brighter, more even smiles with natural-looking results, from whitening a single dark tooth to full esthetic crowns."
            title="Cosmetic"
            href="/services/cosmetic-dentistry"
            items={["Esthetic crowns", "Internal whitening", "External whitening", "Smile planning"]}
          />
          <Category
            id="family"
            blurb="Care for kids, teens, and adults under one roof, at a pace that keeps everyone comfortable."
            title="Family Dentistry"
            href="/services/family-dentistry"
            items={["Kids & teens", "Adult care", "Gentle appointments", "Prevention coaching"]}
          />
          <Category
            id="implants"
            blurb="Custom crowns that turn a dental implant into a tooth that looks and works like the real thing."
            title="Implant Restorations"
            href="/services/dental-implants"
            items={["Implant crowns", "Implant bridges", "Implant-supported dentures", "Coordination of care"]}
          />
          <Category
            id="comfort"
            blurb="Toothache or broken tooth? Call or text and we'll get you in as soon as we can."
            title="Comfort & Emergency"
            href="/services/emergency-dentist"
            items={["Toothache relief", "Same-day priority when possible", "Anxiety-friendly approach", "Clear next steps"]}
          />
          <Category
            id="braces"
            blurb="Traditional braces or clear aligners, whichever makes the most sense for your teeth."
            title="Braces & Clear Aligners"
            href="/services/braces"
            items={["Traditional braces", "Clear aligners", "Single-arch options", "Teens & adults"]}
          />
        </div>

        <div className="mt-14 rounded-3xl border border-black/5 bg-white p-8 shadow-soft sm:p-10">
          <h2 className="text-2xl font-semibold">Not sure what you need?</h2>
          <p className="mt-3 text-navy-800">
            Tell us what’s going on and we’ll guide you to the right next step.
          </p>
          <a
            href="/contact#request"
            className="mt-6 inline-flex rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white hover:bg-navy-800"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

function Category({
  id,
  title,
  blurb,
  href,
  items
}: {
  id: string;
  title: string;
  blurb: string;
  href: string;
  items: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="grid gap-6 md:grid-cols-3 md:items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            <Link href={href} className="hover:underline">{title}</Link>
          </h2>
          <p className="mt-2 text-sm text-navy-800">
            {blurb}
          </p>
          <Link href={href} className="mt-3 inline-block text-sm font-medium text-navy-700 hover:underline">
            Learn more →
          </Link>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
            <ul className="grid gap-2 sm:grid-cols-2">
              {items.map((x) => (
                <li key={x} className="flex gap-3 text-sm text-navy-800">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-600" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
