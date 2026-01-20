import { site } from "@/lib/site";

export default function NewPatientsPage() {
  return (
    <>
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            New Patients
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-800">
            Everything you need for a smooth first visit—what to expect, forms, and payment info.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/assets/forms/new-patient-forms.pdf"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-white hover:bg-gold-400"
              download
            >
              Download New Patient Form
            </a>

            <a
              href="/assets/forms/financial-policy.pdf"
              className="rounded-full bg-black/[0.03] px-6 py-3 text-sm font-medium hover:bg-black/[0.06]"
              download
            >
              Download Financial Policy Form
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <section className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">What to expect</h2>
            <ol className="mt-4 space-y-3 text-sm text-navy-800">
              <li>
                <span className="font-medium text-navy-900">1) Check-in:</span>{" "}
                quick paperwork (or complete forms ahead of time).
              </li>
              <li>
                <span className="font-medium text-navy-900">2) Exam + imaging:</span>{" "}
                we evaluate your teeth, gums, and bite.
              </li>
              <li>
                <span className="font-medium text-navy-900">3) Clear plan:</span>{" "}
                we review findings and options with transparent estimates.
              </li>
            </ol>
          </section>

          <section id="insurance" className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft scroll-mt-24">
            <h2 className="text-2xl font-semibold">Insurance</h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-800">
              We’ll help you understand your benefits and provide estimates before treatment
              whenever possible.
            </p>
          </section>

          <section id="financing" className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft scroll-mt-24">
            <h2 className="text-2xl font-semibold">Financing</h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-800">
              Need flexibility? Ask about payment options that help make care more manageable.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Forms & policies</h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-800">
              Download forms ahead of time to make your first visit faster and easier.
              If you have questions, call or email—we’re happy to help.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.formsHref}
                className="rounded-full bg-black/[0.03] px-6 py-3 text-sm font-medium hover:bg-black/[0.06]"
              >
                Download forms →
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-black/[0.03] px-6 py-3 text-sm font-medium hover:bg-black/[0.06]"
              >
                Email us →
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
