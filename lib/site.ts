export const site = {
  name: "Warner Dental",
  tagline: "Family & Cosmetic Dentistry", // TODO: swap if you choose a different tagline
  phoneDisplay: "(208) 745-7424",
  phoneHref: "tel:+12087457424", // TODO: update with real number
    smsHref: "sms:+12087457424",
  faxDisplay: "(208) 545-0550",     // TODO: change to your real fax
  faxHref: "fax:+12085450550",      // (some devices support this; harmless if not)
  email: "office@warnerdentalteam.com",
  addressLines: ["190 N 1st W", "Rigby, ID 83442"],
  addressOneLine: "190 N 1st W, Rigby, ID 83442",
  formsHref: "/assets/forms/new-patient-forms.pdf", // TODO: replace with your real PDF
  mapEmbedSrc:
    "https://www.google.com/maps?q=190+N+1st+W,+Rigby,+ID+83442&output=embed",
  // ── SEO / structured data ──
  // Keep these EXACTLY matching your Google Business Profile.
  url: "https://www.warnerdentalteam.com",
  dentist: "Dr. Cory Warner",
  street: "190 N 1st W",
  city: "Rigby",
  region: "ID",
  postalCode: "83442",
  googleMapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJTVW5tilvVFMRRRiRBrs50ds",
  facebookUrl: "https://www.facebook.com/profile.php?id=61585065629614",
  // Other profiles of the practice (Facebook, Yelp).
  profiles: [
    "https://www.facebook.com/profile.php?id=61585065629614",
    "https://www.yelp.com/biz/warner-dental-rigby",
  ],
  areaServed: ["Rigby", "Rexburg", "Idaho Falls", "Ammon", "Menan", "Ririe", "Jefferson County"],
  // Machine-readable hours for Google. If you change `hours` below, change these too.
  schemaHours: [
    { days: ["Monday", "Tuesday", "Wednesday"], opens: "08:00", closes: "17:00" },
    { days: ["Friday"], opens: "08:00", closes: "14:00" },
  ],
  hours: [
    { day: "Mon", hours: "8:00 AM – 5:00 PM" },
    { day: "Tue", hours: "8:00 AM – 5:00 PM" },
    { day: "Wed", hours: "8:00 AM – 5:00 PM" },
    { day: "Thu", hours: "Closed" },
    { day: "Fri", hours: "8:00 AM – 2:00 PM" },
    { day: "Sat", hours: "Closed" },
    { day: "Sun", hours: "Closed" }
  ]
};
