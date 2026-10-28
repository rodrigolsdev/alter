import { ExamplesSection } from "@/components/site/ExamplesSection";
import { Hero } from "@/components/site/Hero";
import { SiteHeader } from "@/components/site/SiteHeader";
import { listProfiles } from "@/lib/sample-data";

export default function Home() {
  return (
    <>
      <SiteHeader current="explorar" />
      <main id="conteudo" className="flex-1 pb-24">
        <Hero />
        <ExamplesSection profiles={listProfiles()} />
      </main>
    </>
  );
}
