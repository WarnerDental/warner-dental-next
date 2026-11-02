import { NextResponse } from "next/server";
import { site } from "@/lib/site";

function clean(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] Missing RESEND_API_KEY");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Spam trap: real visitors never see or fill this field
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const phone = clean(body.phone, 30);
  const email = clean(body.email, 120);
  const contactMethod = clean(body.contactMethod, 20);
  const patientType = clean(body.patientType, 20);
  const bestTime = clean(body.bestTime, 40);
  const message = clean(body.message, 1000);

  if (!name || !phone || (contactMethod === "Email" && !email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const text = [
    "New appointment request from warnerdentalteam.com",
    "",
    `PREFERS: ${contactMethod ? contactMethod.toUpperCase() : "(not specified)"}`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "(not provided)"}`,
    `Patient: ${patientType || "(not specified)"}`,
    `Best time to reach: ${bestTime || "(not specified)"}`,
    "",
    message ? `Message:\n${message}` : "(No message)",
  ].join("\n");

  const subject =
    `New appointment request: ${name}` +
    (contactMethod ? ` (prefers ${contactMethod.toLowerCase()})` : "");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Warner Dental Website <website@warnerdentalteam.com>",
      to: [site.email],
      ...(email ? { reply_to: email } : {}),
      subject,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}