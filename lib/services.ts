// Content for the individual service pages at /services/<slug>.
// Everything here comes from what's already on the site or what Cory has said
// about the practice. Read it through and change anything that isn't exactly right.

export type Service = {
  slug: string;
  name: string;
  title: string; // browser/Google title — the layout adds " | Warner Dental"
  description: string; // Google snippet, ~150 characters
  h1: string;
  intro: string;
  includes: string[];
  sections: {
    heading: string;
    body: string;
    points?: string[]; // short benefit bullets shown under the paragraph
    image?: Photo;
    beforeAfter?: { before: Photo; after: Photo };
  }[];
  // Real patient before/after photos only (with the patient's written consent).
  beforeAfter?: { before: Photo; after: Photo; caption: string }[];
  faqs: { q: string; a: string }[];
};

// Photos live in /public/assets/services/. Use the path from /assets/... .
export type Photo = { src: string; alt: string };

export const SERVICES: Service[] = [
  {
    slug: "family-dentistry",
    name: "Family Dentistry",
    title: "Family Dentist in Rigby, ID",
    description:
      "Checkups, cleanings, and gentle care for kids, teens, and adults in Rigby, Idaho. We take almost every dental insurance. Children's fluoride at no charge.",
    h1: "Family Dentist in Rigby, Idaho",
    intro:
      "From a toddler's first checkup to a grandparent's crown, Warner Dental cares for the whole family under one roof. Dr. Cory Warner grew up in Rigby and keeps things simple: explain what's going on, recommend only what you need, and never rush you.",
    includes: [
      "Exams & cleanings",
      "Digital X-rays",
      "Oral cancer screening",
      "Fluoride & sealants",
      "Kids & teens",
      "Gentle appointments",
    ],
    sections: [
      {
        heading: "Checkups and cleanings",
        body:
          "Regular exams and cleanings catch small problems before they turn into expensive ones. Each visit includes a cleaning, an exam with Dr. Warner, and x-rays when they're due.",
        image: {
          src: "/assets/services/preventive-care.jpg",
          alt: "Bamboo toothbrushes in a glass jar beside a eucalyptus sprig",
        },
      },
      {
        heading: "Kids and teens",
        body:
          "We see young children and work at their pace. If a child needs a break, we take one. Fluoride for children is included at no charge.",
      },
    ],
    faqs: [
      {
        q: "Are you accepting new patients?",
        a: "Yes. Call or text (208) 745-7424, or request an appointment online.",
      },
      {
        q: "Do you take insurance?",
        a: "Yes — we take almost every dental insurance, and we'll help you understand your benefits and estimate costs before treatment.",
      },
      {
        q: "How young can my child be for a first visit?",
        a: "We see children as young as toddlers. Bringing kids in early helps them get comfortable at the dentist.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    title: "Cosmetic Dentist in Rigby – Esthetic Crowns & Whitening",
    description:
      "Esthetic crowns and teeth whitening in Rigby, Idaho. Natural-looking results from Dr. Cory Warner at Warner Dental.",
    h1: "Cosmetic Dentistry in Rigby",
    intro:
      "Cosmetic dentistry at Warner Dental is about natural results — a smile that still looks like yours, just better. Dr. Warner will talk through what's realistic for your teeth and your budget before anything is done.",
    includes: ["Esthetic crowns", "Internal whitening", "External whitening", "Smile planning"],
    sections: [
      {
        heading: "Esthetic crowns",
        body:
          "Tooth-colored, full-coverage crowns that rebuild worn, chipped, or discolored teeth — changing their shape and color while protecting the whole tooth. They look natural and are strong enough for everyday chewing.",
      },
      {
        heading: "Internal whitening: brighten a single dark tooth",
        body:
          "A tooth that has turned dark — often after an injury or a root canal — can be whitened from the inside so it matches the teeth around it again.",
        beforeAfter: {
          before: {
            src: "/assets/services/whitening-internal-before.jpg",
            alt: "One upper front tooth noticeably darker than the others before internal whitening",
          },
          after: {
            src: "/assets/services/whitening-internal-after.jpg",
            alt: "The same front teeth after internal whitening, now matching in color",
          },
        },
      },
      {
        heading: "External whitening: brighten your whole smile",
        body:
          "Whitens all of your teeth at once for a brighter, more even smile.",
        beforeAfter: {
          before: {
            src: "/assets/services/whitening-external-before.jpg",
            alt: "Yellowed upper and lower teeth before whitening",
          },
          after: {
            src: "/assets/services/whitening-external-after.jpg",
            alt: "The same teeth noticeably whiter after external whitening",
          },
        },
      },
    ],
    beforeAfter: [
      {
        before: {
          src: "/assets/services/cosmetic-case1-before.jpg",
          alt: "Worn, chipped, and discolored front teeth before cosmetic treatment",
        },
        after: {
          src: "/assets/services/cosmetic-case1-after.jpg",
          alt: "The same smile after esthetic crowns — even, bright, natural-looking front teeth",
        },
        caption: "Worn, chipped, and discolored teeth restored with full-coverage esthetic crowns.",
      },
      {
        before: {
          src: "/assets/services/cosmetic-case2-before.jpg",
          alt: "Uneven, darker front teeth before cosmetic treatment",
        },
        after: {
          src: "/assets/services/cosmetic-case2-after.jpg",
          alt: "The same smile after treatment — brighter, evenly shaped teeth",
        },
        caption: "A brighter, more even smile with full-coverage esthetic crowns.",
      },
    ],
    faqs: [
      {
        q: "Can you whiten just one dark tooth?",
        a: "Often, yes. Internal whitening lightens a single darkened tooth from the inside so it blends in with the rest of your smile. Dr. Warner will check the tooth first to see if it's a good candidate.",
      },
      {
        q: "Which cosmetic option is right for me?",
        a: "It depends on your teeth and your goals. Start with an exam and Dr. Warner will lay out the options and what each one costs.",
      },
    ],
  },
  {
    slug: "braces",
    name: "Braces & Clear Aligners",
    title: "Braces & Clear Aligners in Rigby, ID",
    description:
      "Braces and clear aligners at Warner Dental in Rigby, Idaho — straighten your teeth with your family dentist, close to home.",
    h1: "Braces & Clear Aligners in Rigby, Idaho",
    intro:
      "Dr. Cory Warner offers both traditional braces and clear aligners right here in Rigby, so you can straighten your teeth with the same dentist who knows your mouth — no driving to Idaho Falls or Rexburg.",
    includes: [
      "Traditional braces",
      "Clear aligners",
      "Single-arch (top or bottom only) options",
      "Teens & adults",
      "Exam & treatment planning",
    ],
    sections: [
      {
        heading: "Braces or clear aligners?",
        body:
          "Both straighten teeth — the right choice depends on your teeth and your goals. Dr. Warner will recommend whichever makes the most sense for you.",
      },
      {
        heading: "Traditional braces",
        body:
          "Brackets and wires that work around the clock. Braces handle a wide range of cases, from simple spacing to more complex crowding and bite problems.",
        image: {
          src: "/assets/services/traditional-braces.jpg",
          alt: "Close-up of a smile with traditional metal braces",
        },
      },
      {
        heading: "Clear aligners",
        body:
          "A series of clear, removable trays that gradually move your teeth. They're nearly invisible and come out for eating and brushing.",
        image: {
          src: "/assets/services/clear-aligners.jpg",
          alt: "Person placing a clear aligner tray over their upper teeth",
        },
      },
      {
        heading: "Just your top or bottom teeth?",
        body:
          "If only one arch needs straightening, we have options for treating just the top or just the bottom teeth — which can mean a simpler treatment plan.",
      },
      {
        heading: "Getting started",
        body:
          "It starts with an exam and x-rays. Dr. Warner will explain what he sees, which option fits best, and what treatment will cost.",
      },
    ],
    beforeAfter: [
      {
        before: {
          src: "/assets/services/ortho-case1-before.jpg",
          alt: "Gaps between the upper and lower front teeth before orthodontic treatment",
        },
        after: {
          src: "/assets/services/ortho-case1-after.jpg",
          alt: "The same smile after orthodontic treatment, with the gaps closed",
        },
        caption: "Gaps closed and teeth aligned.",
      },
      {
        before: {
          src: "/assets/services/ortho-case2-before.jpg",
          alt: "Crowded upper teeth with a canine sitting high and out of line before treatment",
        },
        after: {
          src: "/assets/services/ortho-case2-after.jpg",
          alt: "The same smile after orthodontic treatment, with the teeth evenly aligned",
        },
        caption: "Crowded teeth straightened into an even smile.",
      },
    ],
    faqs: [
      {
        q: "Do you offer clear aligners?",
        a: "Yes. We offer both clear aligners and traditional braces, and we'll help you decide which makes the most sense for your teeth.",
      },
      {
        q: "Can you straighten just my top or bottom teeth?",
        a: "Often, yes. We have options for treating a single arch when only the top or bottom teeth need to move. Dr. Warner will let you know if it's a good fit.",
      },
      {
        q: "Do you straighten teeth for adults?",
        a: "Yes. Braces and aligners aren't just for teenagers. Ask about it at your next visit.",
      },
    ],
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    title: "Fillings, Crowns & Bridges in Rigby",
    description:
      "Tooth-colored fillings, crowns, bridges, and dentures in Rigby, Idaho. Clear options and costs before treatment at Warner Dental.",
    h1: "Fillings, Crowns & Bridges in Rigby",
    intro:
      "When a tooth needs repair, Dr. Warner walks you through the options and the cost before anything starts. Conservative recommendations, done to last.",
    includes: [
      "Tooth-colored fillings",
      "Crowns",
      "Bridges",
      "Implant crowns",
      "Dentures & partials",
    ],
    sections: [
      {
        heading: "Tooth-colored fillings",
        body:
          "For cavities and small areas of damage. We remove the decay and fill the tooth with a tooth-colored material that bonds directly to it.",
        points: [
          "Blends in with your natural tooth",
          "Usually done in a single visit",
          "Keeps as much of your healthy tooth as possible",
        ],
        image: {
          src: "/assets/services/restorative-filling.jpg",
          alt: "Illustration of a tooth-colored filling being placed in a molar",
        },
      },
      {
        heading: "Crowns",
        body:
          "When a tooth is cracked, badly worn, has a large old filling, or has had a root canal, a crown covers the whole tooth to hold it together and protect it.",
        points: [
          "Protects a weak or cracked tooth from breaking",
          "Restores the tooth's shape and your bite",
          "Tooth-colored, so it looks natural",
        ],
        image: {
          src: "/assets/services/restorative-crown.jpg",
          alt: "Illustration of a crown being placed over a prepared tooth",
        },
      },
      {
        heading: "Bridges",
        body:
          "A bridge replaces one or more missing teeth by anchoring a replacement tooth to crowns on the teeth on either side of the gap.",
        points: [
          "Fixed in place — nothing to take out",
          "No surgery needed",
          "Fills the gap so neighboring teeth don't drift",
        ],
        image: {
          src: "/assets/services/restorative-bridge.jpg",
          alt: "Illustration of a three-unit dental bridge fitting over two prepared teeth",
        },
      },
      {
        heading: "Implant crowns",
        body:
          "A dental implant replaces the root of a missing tooth, and a custom crown on top replaces the part you see. We restore implants with crowns made to match your smile.",
        points: [
          "Stands on its own without touching neighboring teeth",
          "Looks, feels, and works like a natural tooth",
          "Brushed and flossed just like your other teeth",
        ],
        image: {
          src: "/assets/services/restorative-implant-crown.jpg",
          alt: "Illustration of a dental implant post, abutment, and crown",
        },
      },
      {
        heading: "Dentures and partials",
        body:
          "Removable options for replacing several or all of your teeth.",
        points: [
          "Often the most affordable way to replace multiple teeth",
          "No surgery needed",
        ],
      },
      {
        heading: "Which option is right for me?",
        body:
          "It depends on the tooth, your bite, and your budget. Dr. Warner will walk you through every option that fits your situation — with the trade-offs and costs of each — and recommend only what you actually need.",
      },
    ],
    faqs: [
      {
        q: "Do I need a crown or just a filling?",
        a: "Smaller areas of damage can usually be fixed with a filling. When a large part of the tooth is damaged or cracked, a crown protects it better. Dr. Warner will show you what he sees and explain why.",
      },
      {
        q: "Should I get a bridge or an implant?",
        a: "Both replace a missing tooth with something fixed in place. An implant stands on its own without involving the teeth next to it, while a bridge uses those teeth for support and doesn't require surgery. We'll go over which fits your situation and budget.",
      },
      {
        q: "Will I know the cost before treatment?",
        a: "Yes. We'll explain your options and estimate costs, including what insurance is likely to cover, before we start.",
      },
    ],
  },
  {
    slug: "dental-implants",
    name: "Implant Restorations",
    title: "Dental Implant Crowns in Rigby",
    description:
      "Replace a missing tooth with an implant crown at Warner Dental in Rigby, Idaho. We'll compare implants, bridges, and partials with you.",
    h1: "Dental Implant Restorations in Rigby",
    intro:
      "Missing a tooth? An implant topped with a custom crown looks, feels, and works like a natural tooth. Dr. Warner restores dental implants and will talk through whether an implant, a bridge, or a partial is the best fit for you.",
    includes: [
      "Implant crowns",
      "Implant bridges",
      "Implant-supported dentures",
      "Coordination of care",
    ],
    sections: [
      {
        heading: "How an implant crown works",
        body:
          "The implant is a small post that sits in the jawbone and takes the place of the tooth's root. A connector attaches to it, and a custom crown goes on top as the part of the tooth you see.",
        points: [
          "Stands on its own without touching neighboring teeth",
          "Looks, feels, and works like a natural tooth",
          "Brushed and flossed just like your other teeth",
        ],
        image: {
          src: "/assets/services/restorative-implant-crown.jpg",
          alt: "Illustration of a dental implant post, abutment, and crown",
        },
      },
      {
        heading: "Comparing your options",
        body:
          "Implants, bridges, and partial dentures each have trade-offs in cost, time, and how long they last. We'll explain each one plainly so you can decide.",
      },
    ],
    faqs: [
      {
        q: "How do I know if an implant is right for me?",
        a: "Schedule an exam. Dr. Warner will check the area, take x-rays, and give you an honest recommendation.",
      },
    ],
  },
  {
    slug: "emergency-dentist",
    name: "Emergency Dental Care",
    title: "Emergency Dentist in Rigby, ID",
    description:
      "Toothache, broken tooth, or dental injury in Rigby? Call or text Warner Dental at (208) 745-7424 — same-day priority when possible.",
    h1: "Emergency Dentist in Rigby",
    intro:
      "Toothache, a broken tooth, or a fall that hurt a child's teeth — call or text (208) 745-7424. We give emergencies same-day priority when possible, take x-rays, and get you out of pain.",
    includes: [
      "Toothache relief",
      "Same-day priority when possible",
      "Anxiety-friendly approach",
      "Clear next steps",
    ],
    sections: [
      {
        heading: "Common dental emergencies",
        body:
          "Severe toothache, swelling, a cracked or broken tooth, a lost filling or crown, and injuries to the teeth or mouth.",
        image: {
          src: "/assets/services/emergency.jpg",
          alt: "Woman holding an ice pack to her cheek because of a toothache",
        },
      },
      {
        heading: "Nervous about the dentist?",
        body:
          "Many of our patients have had a bad experience somewhere else. We go at your pace and explain everything before we start.",
      },
    ],
    faqs: [
      {
        q: "Can I be seen the same day?",
        a: "Call or text and we'll do our best to see you right away.",
      },
      {
        q: "What if I don't have dental insurance?",
        a: "Ask about our new patient rate for uninsured patients when you call.",
      },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
