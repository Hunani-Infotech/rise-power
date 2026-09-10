import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  useCase?: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  console.info("[contact]", {
    name,
    email,
    company: body.company,
    role: body.role,
    useCase: body.useCase,
    message,
  });

  return NextResponse.json({ ok: true });
}
