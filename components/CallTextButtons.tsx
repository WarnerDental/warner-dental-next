import Link from "next/link";
import { site } from "@/lib/site";

const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white hover:bg-navy-800";
const outlineBtn =
  "inline-flex items-center justify-center rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 hover:bg-navy-900/5";

export default function CallTextButtons({
  showSchedule = false,
}: {
  showSchedule?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <a className={primaryBtn} href={site.phoneHref}>
        Call {site.phoneDisplay}
      </a>
      <a className={outlineBtn} href={site.smsHref}>
        Text us
      </a>
      {showSchedule && (
        <Link className={outlineBtn} href="/contact#request">
          Request appointment
        </Link>
      )}
    </div>
  );
}