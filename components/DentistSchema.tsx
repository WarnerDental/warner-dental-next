import { site } from "@/lib/site";
import { SERVICES } from "@/lib/services";

// Structured data (schema.org) so Google and AI assistants read the practice's
// name, address, phone, hours, and services as facts. Rendered once in app/layout.tsx.
export default function DentistSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${site.url}/#practice`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/assets/logo.png`,
    image: `${site.url}/og-image.jpg`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    faxNumber: site.faxHref.replace("fax:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: site.schemaHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    hasMap: site.googleMapsUrl,
    sameAs: [site.googleMapsUrl],
    employee: { "@type": "Person", name: site.dentist, jobTitle: "Dentist" },
    availableService: SERVICES.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.name,
      url: `${site.url}/services/${s.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
