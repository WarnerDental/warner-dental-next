"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

// Google Ads conversion for form submissions (we'll fill this in next step)
const ADS_FORM_CONVERSION = "";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass = "rounded-xl border border-black/10 px-4 py-3";
const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white hover:bg-navy-800";
const outlineBtn =
  "inline-flex items-center justify-center rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 hover:bg-navy-900/5";

function CallTextButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a className={primaryBtn} href={site.phoneHref}>
        Call {site.phoneDisplay}
      </a>
      <a className={outlineBtn} href={site.smsHref}>
        Text us
      </a>
    </div>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [contactMethod, setContactMethod] = useState("Text");

  const handleAppointmentSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setStatus("sent");

      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("event", "generate_lead", { form: "appointment_request" });
        if (ADS_FORM_CONVERSION) {
          gtag("event", "conversion", { send_to: ADS_FORM_CONVERSION });
        }
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-800">
            Call, text, or request a visit online. We’ll get back to you
            quickly.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <section className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Office info</h2>

            <div className="mt-5">
              <CallTextButtons />
            </div>

            <div className="mt-6 space-y-2 text-sm text-navy-800">
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

            {status === "sent" ? (
              <div className="mt-6 rounded-xl bg-navy-900/5 p-6" role="status">
                <p className="text-lg font-semibold">
                  Thanks! We got your request.
                </p>
                <p className="mt-2 text-sm text-navy-800">
                  We’ll reach out soon the way you asked. Need us sooner?
                </p>
                <div className="mt-4">
                  <CallTextButtons />
                </div>
              </div>
            ) : (
              <>
                <p className="mt-3 text-sm text-navy-800">
                  Rather skip the form? Call or text us directly.
                </p>
                <div className="mt-3">
                  <CallTextButtons />
                </div>

                <div className="my-6 border-t border-black/5" />

                <p className="text-sm text-navy-800">
                  Or share a few details and we’ll reach out with scheduling
                  options.
                </p>

                <form
                  className="mt-6 grid gap-4"
                  onSubmit={handleAppointmentSubmit}
                >
                  {/* Spam trap: hidden from real visitors */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px" }}
                  />

                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">Name</span>
                    <input className={inputClass} type="text" name="name" autoComplete="name" required />
                  </label>

                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">Phone</span>
                    <input className={inputClass} type="tel" name="phone" autoComplete="tel" required />
                  </label>

                  <fieldset className="grid gap-2 text-sm">
                    <legend className="mb-2 font-medium">How should we reach you?</legend>
                    <div className="flex flex-wrap gap-6">
                      {["Text", "Call", "Email"].map((m) => (
                        <label key={m} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={m}
                            checked={contactMethod === m}
                            onChange={() => setContactMethod(m)}
                          />
                          {m}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">
                      Email{" "}
                      {contactMethod !== "Email" && (
                        <span className="font-normal text-navy-800">(optional)</span>
                      )}
                    </span>
                    <input
                      className={inputClass}
                      type="email"
                      name="email"
                      autoComplete="email"
                      required={contactMethod === "Email"}
                    />
                  </label>

                  <fieldset className="grid gap-2 text-sm">
                    <legend className="mb-2 font-medium">Are you a new or returning patient?</legend>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="patientType" value="New patient" defaultChecked />
                        New
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="patientType" value="Returning patient" />
                        Returning
                      </label>
                    </div>
                  </fieldset>

                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">Best time to reach you</span>
                    <select className={inputClass} name="bestTime" defaultValue="Anytime">
                      <option>Anytime</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">
                      Anything we should know?{" "}
                      <span className="font-normal text-navy-800">(optional)</span>
                    </span>
                    <textarea className={`min-h-[110px] ${inputClass}`} name="message" />
                    <span className="text-xs text-navy-800">
                      Please don’t include medical details here. We’ll go over
                      those with you directly.
                    </span>
                  </label>

                  {status === "error" && (
                    <p className="text-sm text-red-700" role="alert">
                      Sorry, something went wrong. Please call or text us at{" "}
                      {site.phoneDisplay}.
                    </p>
                  )}

                  <button
                    className={`mt-2 ${primaryBtn} disabled:opacity-60`}
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Request appointment"}
                  </button>

                  <p className="text-xs text-navy-800">
                    By submitting, you agree we may contact you by
                    phone/text/email to coordinate scheduling.
                  </p>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </>
  );
}