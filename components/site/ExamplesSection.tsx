import Link from "next/link";
import type { Profile } from "@/lib/types";

// "Conheça outros universos": exemplos de perfis.
// Provisório: a Parte 3 troca esta lista pelos mosaicos editoriais.
export function ExamplesSection({ profiles }: { profiles: Profile[] }) {
  return (
    <section aria-labelledby="universos" className="site-container">
      <div className="border-t border-line pt-7">
        <h2 id="universos" className="text-[11px] font-medium uppercase tracking-[0.22em] text-paper">
          Conheça outros universos
        </h2>

        <ul className="mt-8 space-y-2">
          {profiles.map((p) => (
            <li key={p.handle}>
              <Link className="font-serif text-2xl hover:text-lime motion-safe:transition-colors" href={`/${p.handle}`}>
                /{p.handle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
