import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-800">
            Call, email, or request a visit online. We’ll get back to you quickly.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <section className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Office info</h2>

            <div className="mt-5 space-y-2 text-sm text-navy-800">
              <a className="block hover:underline" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
              <a className="block hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <div>
                {site.addressLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-black/5">
              <iframe
                title="Map to Warner Dental"
                src={site.mapEmbedSrc}
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </section>

          <section
            id="request"
            className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft scroll-mt-24"
            aria-label="Request an appointment"
          >
            <h2 className="text-2xl font-semibold">Request an appointment</h2>
            <p className="mt-3 text-sm text-navy-800">
              {/* NOTE: This is a front-end placeholder. Hook to your form tool later. */}
              Share a few details and we’ll reach out with scheduling options.
            </p>

            <form className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Name</span>
                <input
                  className="rounded-xl border border-black/10 px-4 py-3"
                  type="text"
                  name="name"
                  autoComplete="name"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-medium">Phone</span>
                <input
                  className="rounded-xl border border-black/10 px-4 py-3"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-medium">Email</span>
                <input
                  className="rounded-xl border border-black/10 px-4 py-3"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-medium">What can we help with?</span>
                <textarea
                  className="min-h-[110px] rounded-xl border border-black/10 px-4 py-3"
                  name="message"
                />
              </label>

              <button
                className="mt-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white hover:bg-navy-800"
                type="submit"
              >
                Submit request
              </button>

              <p className="text-xs text-navy-800">
                By submitting, you agree we may contact you by phone/text/email to coordinate scheduling.
              </p>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
