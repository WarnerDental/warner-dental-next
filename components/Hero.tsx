import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Video background – all breakpoints */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/photos/hero-poster.png" // optional; remove if you don’t have this
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" />
          {/* Fallback text if video can’t load */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-navy-900/35" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 py-24 sm:py-32">
        <div className="max-w-xl text-white">
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Welcome to{" "}
            <span className="block">Warner Dental</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/90">
            World-class dentistry. Small-town values.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact#request"
              className="rounded-full bg-gold-500 px-6 py-3 font-medium text-white hover:bg-gold-400"
            >
              Schedule a Visit
            </Link>
            <Link
              href="/services"
              className="rounded-full bg-white/10 px-6 py-3 font-medium text-white ring-1 ring-white/20 hover:bg-white/15"
            >
              Explore Services
            </Link>
          </div>

          <p className="mt-6 text-sm text-white/80">
            Rigby, Idaho • Family, cosmetic, and restorative dentistry
          </p>
        </div>
      </div>
    </section>
  );
}
