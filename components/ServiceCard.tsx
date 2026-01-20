import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  href
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-black/5 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-black/10"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <span className="rounded-full bg-black/[0.03] px-3 py-1 text-sm group-hover:bg-black/[0.06]">
          →
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-navy-800">{description}</p>
      <p className="mt-4 text-sm font-medium text-gold-500">Learn more</p>
    </Link>
  );
}
