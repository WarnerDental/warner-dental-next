import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section eyebrow="Services" title="Care for every stage of life">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Checkups & Cleanings"
            description="Prevention-first visits to keep you healthy and catch concerns early."
            href="/services#preventive"
          />
          <ServiceCard
            title="Cosmetic Dentistry"
            description="Whitening, bonding, and veneers—subtle upgrades with natural results."
            href="/services#cosmetic"
          />
          <ServiceCard
            title="Restorative Care"
            description="Fillings, crowns, and bridges designed for comfort and longevity."
            href="/services#restorative"
          />
          <ServiceCard
            title="Family Dentistry"
            description="A calm, friendly experience for kids, teens, and adults."
            href="/services#family"
          />
          <ServiceCard
            title="Implant Restorations"
            description="Modern tooth replacement options that look and feel secure."
            href="/services#implants"
          />
          <ServiceCard
            title="Comfort & Emergency"
            description="We prioritize gentle care—especially when you’re in pain or anxious."
            href="/services#comfort"
          />
        </div>
      </Section>

      <Section eyebrow="Meet your dentist" title="Modern care, personal attention">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-navy-800 leading-relaxed">
              {/* TODO: replace with Dr. Warner bio */}
              Dr. Cory Warner is proud to call Rigby home. After growing up here, he pursued advanced training and had opportunities to practice in larger cities—but he chose to return to the community that shaped him. Today, Dr. Warner is committed to bringing world-class dental care to Rigby, with an emphasis on trust, clear communication, and building lasting relationships with every patient he serves.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-800">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold-500" />
                Transparent recommendations (no pressure)
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold-500" />
                Comfort-first approach with modern tools
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold-500" />
                Family-friendly environment
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/about"
                className="rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white hover:bg-navy-800"
              >
                About Warner Dental
              </a>
              <a
                href="/contact#request"
                className="rounded-full border border-navy-900/15 px-6 py-3 text-sm font-medium hover:border-navy-900/30 hover:bg-black/[0.02]"
              >
                Request an Appointment
              </a>
            </div>
          </div>

          {/* TODO: swap photo */}
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-soft">
            <img
              src="/assets/photos/photo-2.png"
              alt="Dentist smiling"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Kind words" title="Trusted by families in our community">
        <div className="grid gap-6 lg:grid-cols-2">
          <TestimonialCarousel
            quotes={[
              {
                quote:
                  "Everyone was welcoming and organized. The visit felt calm, and I left knowing exactly what the plan was.",
                name: "Patient Review",
                location: "Rigby, ID"
              },
              {
                quote:
                  "Clear communication, gentle care, and no pressure. Exactly what I want in a dental office.",
                name: "Patient Review",
                location: "Jefferson County"
              },
              {
                quote:
                  "They were great with my kids—patient, friendly, and efficient. Scheduling was easy too.",
                name: "Patient Review",
                location: "Ririe, ID"
              }
            ]}
          />
          <div className="grid gap-5">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">A premium experience—without the attitude</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-800">
                Thoughtful details, modern tools, and a team that treats you like a neighbor.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">Clear treatment plans</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-800">
                We walk through options, timelines, and costs so you can choose what fits.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Insurance & financing" title="Simple, straightforward options">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold">Have insurance?</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-800">
              We’ll help you understand your benefits and estimate costs before treatment.
            </p>
            <a
              className="mt-6 inline-flex rounded-full bg-black/[0.03] px-5 py-2.5 text-sm font-medium hover:bg-black/[0.06]"
              href="/new-patients#insurance"
            >
              Insurance details →
            </a>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold">No insurance?</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-800">
              Ask about flexible payment options designed to keep care within reach.
            </p>
            <a
              className="mt-6 inline-flex rounded-full bg-black/[0.03] px-5 py-2.5 text-sm font-medium hover:bg-black/[0.06]"
              href="/new-patients#financing"
            >
              Financing options →
            </a>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
