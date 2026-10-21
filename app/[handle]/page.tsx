import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProfileView } from "@/components/ProfileView";
import { getProfile, listProfiles } from "@/lib/sample-data";
import { LAYOUTS, PRESETS, type PresetKey } from "@/lib/themes";
import type { Layout, Profile, Theme } from "@/lib/types";
import "./profile.css";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// Páginas conhecidas são geradas antes (rápido). No Passo 4 isto passa a listar o banco.
export function generateStaticParams() {
  return listProfiles().map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: PageProps<"/[handle]">): Promise<Metadata> {
  const { handle } = await params;
  const profile = getProfile(handle);
  if (!profile) return { title: "Página não encontrada | ALTER" };
  return { title: `${profile.name} | ALTER`, description: profile.bio };
}

// Só para testar no Passo 1: ?estilo=cine|cor|min e ?layout=mosaic|rows|collage|split
async function PreviewProfile({ profile, searchParams }: { profile: Profile; searchParams: SearchParams }) {
  const sp = await searchParams;
  const estilo = typeof sp.estilo === "string" && sp.estilo in PRESETS ? PRESETS[sp.estilo as PresetKey] : profile.theme;
  const layout: Layout =
    typeof sp.layout === "string" && (LAYOUTS as readonly string[]).includes(sp.layout)
      ? (sp.layout as Layout)
      : estilo.layout;
  const theme: Theme = { ...estilo, layout };
  return <ProfileView profile={profile} theme={theme} />;
}

export default async function ProfilePage({ params, searchParams }: PageProps<"/[handle]">) {
  const { handle } = await params;
  const profile = getProfile(handle);
  if (!profile) notFound();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=Space+Mono&display=swap"
        precedence="default"
      />
      <Suspense fallback={<ProfileView profile={profile} theme={profile.theme} />}>
        <PreviewProfile profile={profile} searchParams={searchParams} />
      </Suspense>
    </>
  );
}
