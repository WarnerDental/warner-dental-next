import type { Metadata } from "next";
import Section from "@/components/Section";
import PhotoCarousel from "@/components/PhotoCarousel";
import { site } from "@/lib/site";

// Structured data for Dr. Warner. Linked to the practice data in components/DentistSchema.tsx
// through the same @id. Only list facts that also appear on this page.
const dentistPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#dr-warner`,
  name: "Cory Warner",
  honorificPrefix: "Dr.",
  honorificSuffix: "DDS",
  jobTitle: "Dentist",
  url: `${site.url}/about`,
  image: `${site.url}/assets/photos/photo-2.png`,
  worksFor: { "@id": `${site.url}/#practice` },
  sameAs: [site.facebookUrl],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Creighton University School of Dentistry",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "Doctor of Dental Surgery (DDS), cum laude, 2022",
    recognizedBy: {
      "@type": "CollegeOrUniversity",
      name: "Creighton University School of Dentistry",
    },
  },
};

export const metadata: Metadata = {
  title: "About Dr. Cory Warner – Rigby Dentist",
  description:
    "Dr. Cory Warner grew up in Rigby and came home to open Warner Dental. Clear recommendations, no pressure, and care for the whole family.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistPerson) }}
      />

      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About Warner Dental
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-800">
            A small, hometown dental office in Rigby, Idaho, built around comfort, clarity, and
            long-term health.
          </p>
        </div>
      </div>

      <Section eyebrow="Our approach" title="What you can expect here">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-navy-800 leading-relaxed">
            <p>
              Dr. Cory Warner grew up in Rigby and has been caring for patients since 2020,
              beginning with his clinical training at Creighton. Before opening Warner Dental, he
              worked in larger, high-volume practices. That
              experience is what convinced him to come home and build something different: a
              smaller office where patients get unhurried time with their dentist and honest
              recommendations.
            </p>
            <p>
              Dr. Warner’s approach to dentistry is conservative, thoughtful, and centered on doing what’s truly necessary. As he entered clinical practice, he became increasingly aware that dentistry can sometimes lean toward more treatment than a patient truly needs—and it reinforced his commitment to a prevention- and preservation-focused philosophy. His goal is to help you keep as much of your natural tooth structure as possible while preventing small issues from becoming bigger problems. And when treatment is needed, he takes time to explain what he’s seeing, walk through your options clearly, and let you choose what fits best for your goals, comfort, and situation.
            </p>
            <p>
              In our office, you’ll never feel rushed—or like you barely know your dentist. Dr. Warner believes great dentistry takes time, attention, and real connection. Rather than popping in for a quick minute and disappearing, he’s committed to being present, listening carefully, and making sure you feel heard and understood. He wants to genuinely get to know you, earn your trust, and build a lasting relationship—so your care always feels personal, comfortable, and tailored to you.
            </p>
            <p>
              We’re a small office—and we like it that way. Keeping our practice intentionally personal allows us to take the time to truly get to know our patients, never rush appointments, and focus on the details that make care feel comfortable and exceptional. You’ll see familiar faces, feel genuinely recognized, and experience dentistry that’s built around quality, relationships, and doing what’s best for you—not just moving people through a schedule.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-soft">
            <img
              src="/assets/photos/photo-3.png"
              alt="Bright, modern dental office interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Background" title="Training & background">
        <div className="max-w-3xl space-y-4 text-navy-800 leading-relaxed">
          <p>
            Dr. Cory Warner earned his Doctor of Dental Surgery degree, cum laude, from Creighton
            University School of Dentistry in 2022. He practiced in Arizona for two years before
            coming home to eastern Idaho, and opened Warner Dental in Rigby, the town he grew up in.
          </p>
        </div>
      </Section>

<Section eyebrow="A little more personal" title="Meet the Warner family">
  <div className="grid items-center gap-10 md:grid-cols-2">
    <div className="overflow-hidden rounded-3xl border border-black/5 shadow-soft">
      {/* TODO: replace family.jpg with your final photo */}
      <PhotoCarousel
  images={[
    { src: "/assets/photos/family-1.jpeg", alt: "Candid family photo outdoors" },
    { src: "/assets/photos/family-2.jpeg", alt: "Family photo at an event" },
    { src: "/assets/photos/family-3.jpeg", alt: "Candid moment with the kids" },
    { src: "/assets/photos/family-4.jpeg", alt: "Family photo smiling together" },
    { src: "/assets/photos/family-5.jpeg", alt: "Family photo smiling together" },
    { src: "/assets/photos/family-6.jpeg", alt: "Family photo smiling together" },
    { src: "/assets/photos/family-7.jpeg", alt: "Family photo smiling together" },
    { src: "/assets/photos/family-8.jpeg", alt: "Family photo smiling together" },
    { src: "/assets/photos/family-9.jpeg", alt: "Family photo smiling together" },
  ]}
/>
    </div>

    <div className="space-y-4 text-navy-800 leading-relaxed">
      <p>
        Hi, I'm Cory Warner, and I’m grateful to practice dentistry in the community I grew up in. 
        My wife, Paige, and I just had our first baby last year--a little girl we named Eleanor. Together, 
        we enjoy spending time together with our family, making yummy food, and exploring all that Idaho
        has to offer. 
      </p>

      <p>
        I built Warner Dental to feel different: unhurried, welcoming, and focused on doing
        what’s right for the patient. My goal is to earn trust through clear communication,
        conservative recommendations, and care that holds up long-term.
      </p>

      <p>
        If you’re looking for a dental home where you’re known by name and treated like a neighbor,
        we’d love to meet you.
      </p>

      <div className="pt-2">
        <a
          href="/contact#request"
          className="inline-flex rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-navy-900 hover:bg-gold-600"
        >
          Request an Appointment
        </a>
      </div>
    </div>
  </div>
</Section>

      <Section eyebrow="Values" title="Care that feels personal">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Conservative Approach",
              d: "Only fix what needs to be fixed."
            },
            {
              t: "Clear guidance",
              d: "We explain pros/cons and costs so you can choose confidently."
            },
            {
              t: "Modern standards",
              d: "Up-to-date tools and clean, consistent processes—every visit."
            }
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-black/5 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-800">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
