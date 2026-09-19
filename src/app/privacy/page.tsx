import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Rise Power collects, uses, and safeguards information when you visit risepower.com.",
  path: "/privacy",
});

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Rise Power Corp. ("Rise Power," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website risepower.com (the "Site").',
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect personal information that you voluntarily provide when you:",
    ],
    bullets: [
      "Fill out a contact form",
      "Subscribe to our newsletter",
      "Request information about our products or services",
    ],
    after: [
      "This information may include your name, email address, phone number, company name, and any message you choose to send.",
    ],
  },
  {
    title: "3. Automatically Collected Information",
    paragraphs: [
      "When you visit the Site, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and pages viewed. This data is used to analyze trends and improve the Site.",
    ],
  },
  {
    title: "4. Use of Information",
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Respond to your inquiries and provide customer support",
      "Send periodic communications related to our products and services",
      "Improve our website and user experience",
      "Comply with legal obligations",
    ],
  },
  {
    title: "5. Sharing of Information",
    paragraphs: [
      "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating the Site, conducting our business, or serving you, provided they agree to keep your information confidential.",
    ],
  },
  {
    title: "6. Data Security",
    paragraphs: [
      "We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Cookies",
    paragraphs: [
      "The Site may use cookies and similar tracking technologies to enhance your experience. You may choose to set your browser to refuse cookies, though some features of the Site may not function properly without them.",
    ],
  },
  {
    title: "8. Third-Party Links",
    paragraphs: [
      "The Site may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "10. Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy, please contact us at info@risepower.com.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
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
                  {"after" in section && section.after
                    ? section.after.map((p) => <p key={p}>{p}</p>)
                    : null}
                </div>
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
