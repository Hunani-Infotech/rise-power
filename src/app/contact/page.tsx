import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Briefing"
        title="Tell us your operating environment."
        description="For procurement, programs, and integration leads. We will respond with specs, runtime data, and a deployment summary tailored to your mission."
      />

      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-16 lg:grid-cols-[1fr_1.2fr] lg:px-10 lg:py-24">
        <div>
          <div className="space-y-8 text-sm">
            <div>
              <p className="text-xs tracking-[0.16em] text-accent uppercase">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block text-lg hover:text-accent">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.16em] text-accent uppercase">Phone</p>
              <a href={site.phoneHref} className="mt-2 block text-lg hover:text-accent">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.16em] text-accent uppercase">Address</p>
              <p className="mt-2 text-lg leading-relaxed">
                {site.parent}
                <br />
                {site.address.line1}
                <br />
                {site.address.city}
                <br />
                {site.address.country}
              </p>
            </div>
          </div>
        </div>
        <div className="relative border border-border bg-surface p-6 lg:p-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
