export default function ServicesPage() {
  return (
    <>
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Services
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
            title="Preventive"
            items={["Exams & cleanings", "Digital X-rays", "Oral cancer screening", "Fluoride & sealants"]}
          />
          <Category
            id="restorative"
            title="Restorative"
            items={["Tooth-colored fillings", "Crowns", "Bridges", "Dentures & partials"]}
          />
          <Category
            id="cosmetic"
            title="Cosmetic"
            items={["Whitening", "Bonding", "Veneers", "Smile planning"]}
          />
          <Category
            id="family"
            title="Family Dentistry"
            items={["Kids & teens", "Adult care", "Gentle appointments", "Prevention coaching"]}
          />
          <Category
            id="implants"
            title="Implant Restorations"
            items={["Implant crowns", "Implant bridges", "Implant-supported dentures", "Coordination of care"]}
          />
          <Category
            id="comfort"
            title="Comfort & Emergency"
            items={["Toothache relief", "Same-day priority when possible", "Anxiety-friendly approach", "Clear next steps"]}
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
  items
}: {
  id: string;
  title: string;
  items: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="grid gap-6 md:grid-cols-3 md:items-start">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 text-sm text-navy-800">
            {/* TODO: customize per category */}
            Thoughtful care designed for comfort and long-term results.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
            <ul className="grid gap-2 sm:grid-cols-2">
              {items.map((x) => (
                <li key={x} className="flex gap-3 text-sm text-navy-800">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold-500" />
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
