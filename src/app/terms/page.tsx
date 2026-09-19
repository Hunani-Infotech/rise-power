import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for the Rise Power website at risepower.com.",
  path: "/terms",
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      'By accessing and using the Rise Power Corp. ("Rise Power") website at risepower.com (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.',
    ],
  },
  {
    title: "2. Use of the Site",
    paragraphs: [
      "You agree to use the Site only for lawful purposes and in a manner that does not:",
    ],
    bullets: [
      "Violate any applicable laws or regulations",
      "Infringe on the rights of others",
      "Interfere with or disrupt the operation of the Site",
      "Attempt to gain unauthorized access to any part of the Site",
    ],
  },
  {
    title: "3. Intellectual Property",
    paragraphs: [
      "All content on the Site, including text, graphics, logos, images, and software, is the property of Rise Power or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.",
    ],
  },
  {
    title: "4. Disclaimer of Warranties",
    paragraphs: [
      'The Site and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied. Rise Power does not warrant that the Site will be uninterrupted, error-free, or free of harmful components.',
    ],
  },
  {
    title: "5. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Rise Power shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site, even if we have been advised of the possibility of such damages.",
    ],
  },
  {
    title: "6. Product Information",
    paragraphs: [
      "Information about our products and services on the Site is provided for general informational purposes only. Specifications, features, and availability are subject to change without notice. Nothing on the Site constitutes a binding offer or guarantee of performance.",
    ],
  },
  {
    title: "7. Third-Party Links",
    paragraphs: [
      "The Site may contain links to third-party websites. These links are provided for convenience only, and Rise Power is not responsible for the content or practices of any linked sites.",
    ],
  },
  {
    title: "8. Governing Law",
    paragraphs: [
      "These Terms of Use are governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflict of law principles.",
    ],
  },
  {
    title: "9. Changes to These Terms",
    paragraphs: [
      "Rise Power reserves the right to modify these Terms of Use at any time. Changes will be effective when posted on this page. Your continued use of the Site constitutes acceptance of any modifications.",
    ],
  },
  {
    title: "10. Contact Us",
    paragraphs: [
      "If you have questions about these Terms of Use, please contact us at info@risepower.com.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <div className="mx-auto max-w-[991px] px-6 py-16 text-sm leading-relaxed text-muted lg:px-10">
        <Reveal variant="up">
          <p className="text-foreground/80">Effective Date: April 1, 2026</p>
          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl tracking-tight text-foreground uppercase">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {"bullets" in section && section.bullets ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
