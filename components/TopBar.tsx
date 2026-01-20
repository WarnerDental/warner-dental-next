import Link from "next/link";
import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a className="hover:underline" href={site.phoneHref} aria-label="Call us">
            {site.phoneDisplay}
          </a>
          <span className="hidden h-4 w-px bg-black/10 sm:inline-block" />
          <a
            className="text-navy-800 hover:underline"
            href="https://maps.google.com/?q=190+N+1st+W,+Rigby,+ID+83442"
            target="_blank"
            rel="noreferrer"
          >
            {site.addressOneLine}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/new-patients"
            className="rounded-full border border-navy-900/15 px-4 py-2 text-navy-900 hover:border-navy-900/30 hover:bg-black/[0.02]"
          >
            New Patient Info
          </Link>
          <Link
  href="/new-patients#forms"
  className="rounded-full bg-gold-500 px-4 py-2 font-medium text-white hover:bg-gold-400"
>
  Forms
</Link>

        </div>
      </div>
    </div>
  );
}
