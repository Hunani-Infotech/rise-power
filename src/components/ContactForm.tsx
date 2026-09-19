"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const roles = [
  "Procurement / Contracting",
  "Program Manager",
  "Engineering / Technical",
  "Operations / Field Lead",
  "Executive / Leadership",
  "Integration Partner",
  "Investor",
  "Other",
];

const useCases = [
  "Defense & Security",
  "Disaster Response",
  "Remote Operations",
  "Critical Backup",
  "Data Center / Infrastructure",
  "Drone / UAV Power",
  "Research / Evaluation",
  "Other",
];

const labelClass =
  "text-[11px] font-semibold tracking-[0.16em] text-[#66717d] uppercase";

const fieldClass =
  "mt-2 block w-full rounded-sm border border-[#d9dfe3] bg-[#fbfaf7] px-4 py-3 text-sm text-[#101820] placeholder:text-[#66717d]/50 focus:border-[#849363] focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) nextErrors.name = "Name is required.";
    if (!email) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: data.get("company"),
          role: data.get("role"),
          useCase: data.get("useCase"),
          message,
          website: data.get("website"),
        }),
      });

      if (response.ok) setSent(true);
      else setErrors({ form: "Something went wrong. Please try again." });
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-[#849363]/35 bg-[#fbfaf7] px-6 py-12 text-center sm:px-10">
        <div
          aria-hidden="true"
          className="mx-auto mb-6 h-px w-16 bg-[#849363]"
        />
        <h3 className="font-display text-2xl tracking-wide text-[#101820] uppercase sm:text-3xl">
          Message Received
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#626e7a] sm:text-base">
          Thank you for reaching out. We will respond with specs, runtime data,
          and a deployment summary.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          className={fieldClass}
          placeholder="Your name"
        />
        {errors.name ? (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={fieldClass}
          placeholder="you@company.com"
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Organization
        </label>
        <input
          id="company"
          name="company"
          className={fieldClass}
          placeholder="Department, agency, or company"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className={labelClass}>
            Role
          </label>
          <select id="role" name="role" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select your role
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="useCase" className={labelClass}>
            Use Case
          </label>
          <select
            id="useCase"
            name="useCase"
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Primary use case
            </option>
            {useCases.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Operating environment, runtime requirements, deployment timeline, integration needs."
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        ) : null}
      </div>

      {errors.form ? (
        <p className="text-xs text-red-500">{errors.form}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending..." : "Request Briefing"}
        {!pending ? (
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        ) : null}
      </button>
    </form>
  );
}
