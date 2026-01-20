"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    const exact = nav.find((n) => n.href === pathname)?.href;
    return exact ?? "";
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900">
      {/* Full-width header row */}
      <div className="grid h-20 w-full grid-cols-[auto,1fr,auto] items-center gap-3 px-4">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-3">
  <div className="h-14 w-auto">
    <img
      src="/assets/logo2.png"
      alt="Warner Dental logo"
      className="h-full w-auto object-contain"
    />
  </div>
</Link>


        {/* CENTER: Desktop nav links */}
        <nav
          className="hidden justify-self-center sm:flex items-center gap-1"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white ${
                  isActive ? "bg-white/15 text-white font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Schedule button + mobile menu button */}
        <div className="justify-self-end flex items-center gap-2">
          <Link
            href="/contact#request"
            className="hidden sm:inline-flex rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-white hover:bg-gold-400"
          >
            Schedule
          </Link>

          <button
            className="rounded-full border border-white/20 px-3 py-2 text-sm text-white hover:bg-white/10 sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-black/5 bg-white sm:hidden"
        >
          <nav className="px-4 py-3" aria-label="Mobile Primary">
            <div className="grid gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 hover:bg-black/[0.03]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact#request"
                className="rounded-lg bg-navy-900 px-3 py-2 text-center font-medium text-white hover:bg-navy-800"
              >
                Schedule a Visit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
