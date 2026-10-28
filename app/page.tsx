import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { listProfiles } from "@/lib/sample-data";

export default function Home() {
  return (
    <>
      <SiteHeader current="explorar" />
      <main id="conteudo" className="site-container flex-1 py-16">
        {/* Provisório: o hero (Parte 2) e os mosaicos (Parte 3) substituem este bloco. */}
        <p className="text-sm text-mute">Em construção. Por enquanto, os perfis de exemplo:</p>
        <ul className="mt-4 space-y-2">
          {listProfiles().map((p) => (
            <li key={p.handle}>
              <Link className="font-serif text-2xl hover:text-lime motion-safe:transition-colors" href={`/${p.handle}`}>
                /{p.handle}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
