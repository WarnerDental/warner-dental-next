"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { site } from "@/lib/site";
import { SERVICES } from "@/lib/services";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const activeHref = useMemo(() => {
    if (pathname.startsWith("/services")) return "/services";
    const exact = nav.find((n) => n.href === pathname)?.href;
    return exact ?? "";
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close the Services dropdown on an outside click or the Escape key.
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900">
      {/* Full-width header row */}
      <div className="grid h-20 w-full grid-cols-[auto,1fr,auto] items-center gap-3 px-4">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-3">
  <div className="h-14 w-auto">
    <img
      src="/assets/logo-white.svg"
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
            const linkClass = `rounded-full px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white ${
              isActive ? "bg-white/15 text-white font-medium" : ""
            }`;

            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center">
                    <Link href={item.href} className={`${linkClass} pr-2`}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Show services"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="-ml-1 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                      <div
                        id="services-menu"
                        className="w-64 overflow-hidden rounded-2xl border border-black/5 bg-white py-2 shadow-soft"
                      >
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className={`block px-4 py-2.5 text-sm text-navy-900 hover:bg-black/[0.04] ${
                              pathname === `/services/${s.slug}` ? "font-semibold" : ""
                            }`}
                          >
                            {s.name}
                          </Link>
                        ))}
                        <div className="my-1 border-t border-black/5" />
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-sm font-medium text-navy-700 hover:bg-black/[0.04]"
                        >
                          All services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

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
            className="hidden sm:inline-flex rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-navy-900 hover:bg-gold-600"
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
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2 hover:bg-black/[0.03]"
                  >
                    {item.label}
                  </Link>
                  {item.href === "/services" && (
                    <div className="ml-3 grid gap-1 border-l border-black/10 pl-3">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="rounded-lg px-3 py-1.5 text-sm text-navy-800 hover:bg-black/[0.03]"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
