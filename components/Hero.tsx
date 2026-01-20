import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Desktop video background */}
      <div className="absolute inset-0 hidden sm:block">
        {/* TODO: replace /assets/video/hero.mp4 with your final */}
        <video
          className="h-full w-full object-cover"
          src="/assets/video/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-navy-900/35" />
      </div>

      {/* Mobile image background */}
      <div className="absolute inset-0 sm:hidden">
        {/* TODO: swap image */}
        <img
          src="/assets/photos/photo-1.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/35" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 min-h-[80vh] flex items-center">
        <div className="max-w-xl">
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Welcome to 
            Warner Dental
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/90">
            World-class Dentistry. Small-town values. 
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
