import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityDetail } from "@/components/capabilities/CapabilityDetail";
import {
  getCapabilityBySlug,
  getCapabilityStaticParams,
} from "@/lib/capabilities";
import { pageMetadata } from "@/lib/seo";

type CapabilityPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCapabilityStaticParams();
}

export async function generateMetadata({
  params,
}: CapabilityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    return pageMetadata({
      title: "Capabilities",
      description:
        "Engineering, integration, field deployment, and safety for hydrogen power systems.",
      path: "/capabilities",
    });
  }

  return pageMetadata({
    title: capability.metaTitle,
    description: capability.metaDescription,
    path: `/capabilities/${capability.slug}`,
  });
}

export default async function CapabilityDetailPage({
  params,
}: CapabilityPageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) notFound();

  return <CapabilityDetail capability={capability} />;
}
