import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { team, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Canadian engineered. Field validated."
        description="Rise Power is engineered, manufactured, and validated in British Columbia. A CIMtech Green Energy company built on a 20 plus year Canadian advanced manufacturing track record."
      />

      <section className="border-b border-border py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-4xl tracking-tight uppercase lg:col-span-4">
              Mission
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-muted lg:col-span-8 lg:text-lg">
              Rise Power builds portable hydrogen fuel cell power systems for
              defense, disaster response, remote operations, and critical
              infrastructure. Incumbent power options carry structural failure
              modes in contested or austere environments. Rise Power replaces
              both diesel and lithium with a cartridge based platform that is
              silent, indoor safe, and mission duration.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Our values
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.number} className="border border-border bg-surface p-8">
                <p className="text-xs tracking-[0.18em] text-accent uppercase">
                  {value.number}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-wide uppercase">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <h2 className="font-display text-4xl tracking-tight uppercase">
            The team behind the systems
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.role} className="border border-border p-8">
                <h3 className="font-display text-2xl tracking-wide uppercase">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs tracking-[0.16em] text-accent uppercase">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="font-display text-4xl tracking-tight uppercase">
          Build the future of portable power
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Whether you are a procurement officer, integration partner, or
          potential team member — we want to hear from you.
        </p>
        <div className="mt-8">
          <Button href="/contact">Request a Briefing</Button>
        </div>
      </section>
    </>
  );
}
