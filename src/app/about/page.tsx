import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SnapCarousel } from "@/components/home/SnapCarousel";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { team, values } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Rise Power is engineered, manufactured, and validated in British Columbia. A CIMtech Green Energy company built on 20+ years of Canadian advanced manufacturing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Canadian engineered. Field validated."
        description="Rise Power is engineered, manufactured, and validated in British Columbia. A CIMtech Green Energy company built on a 20 plus year Canadian advanced manufacturing track record."
      />

      <section className="border-b border-border py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal variant="left" className="lg:col-span-4">
              <h2 className="font-display text-4xl tracking-tight uppercase">
                Mission
              </h2>
            </Reveal>
            <Reveal variant="right" delay={80} className="lg:col-span-8">
              <p className="max-w-3xl text-base leading-relaxed text-muted lg:text-lg">
                Rise Power builds portable hydrogen fuel cell power systems for
                defense, disaster response, remote operations, and critical
                infrastructure. Incumbent power options carry structural failure
                modes in contested or austere environments. Rise Power replaces
                both diesel and lithium with a cartridge based platform that is
                silent, indoor safe, and mission duration.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Our values
            </p>
          </Reveal>
          <div className="mt-10 xl:hidden">
            <SnapCarousel
              ariaLabel="Our values"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {values.map((value, index) => (
                <Reveal key={value.number} variant="up" delay={index * 70}>
                  <article className="motion-hover-lift h-full border border-border bg-surface p-8">
                    <p className="text-xs tracking-[0.18em] text-accent uppercase">
                      {value.number}
                    </p>
                    <h3 className="mt-3 font-display text-2xl tracking-wide uppercase">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {value.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </SnapCarousel>
          </div>

          <RevealStagger
            className="mt-10 hidden gap-5 xl:grid xl:grid-cols-2"
            step={70}
          >
            {values.map((value) => (
              <article
                key={value.number}
                className="motion-hover-lift border border-border bg-surface p-8"
              >
                <p className="text-xs tracking-[0.18em] text-accent uppercase">
                  {value.number}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-wide uppercase">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.body}
                </p>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="border-b border-border py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <h2 className="font-display text-4xl tracking-tight uppercase">
              The team behind the systems
            </h2>
          </Reveal>
          <RevealStagger className="mt-12 mx-auto max-w-2xl" step={70}>
            {team.map((member) => (
              <article key={member.role} className="motion-hover-lift border border-border p-8 sm:p-10">
                <h3 className="font-display text-2xl tracking-wide uppercase sm:text-3xl">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs tracking-[0.16em] text-accent uppercase">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {member.bio}
                </p>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-12 text-center sm:py-16 lg:py-24">
        <Reveal variant="up">
          <h2 className="font-display text-4xl tracking-tight uppercase">
            Build the future of portable power
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Whether you are a procurement officer, integration partner, or
            potential team member — we want to hear from you.
          </p>
        </Reveal>
        <Reveal variant="up" delay={80} className="mt-8">
          <Button href="/contact">Request a Briefing</Button>
        </Reveal>
      </section>
    </>
  );
}
