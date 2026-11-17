import type { Metadata } from "next";

// The contact page is a client component, so its title lives here.
export const metadata: Metadata = {
  title: "Contact & Directions – Rigby Dentist",
  description:
    "Call or text (208) 745-7424 or request an appointment online. Warner Dental, 190 N 1st W, Rigby, ID 83442.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
