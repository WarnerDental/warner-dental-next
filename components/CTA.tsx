import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-navy-900 px-8 py-12 text-white shadow-soft sm:px-12">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to schedule your visit?
              </h2>
              <p className="mt-3 text-white/85">
                New patient or returning—tell us what you need and we’ll help you
                find a time that fits.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact#request"
                className="rounded-full bg-gold-500 px-6 py-3 font-medium text-white hover:bg-gold-400"
              >
                Schedule a Visit
              </Link>
              <Link
                href="/new-patients"
                className="rounded-full bg-white/10 px-6 py-3 font-medium text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                New Patient Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
