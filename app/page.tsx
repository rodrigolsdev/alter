import Link from "next/link";
import { listProfiles } from "@/lib/sample-data";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">ALTER</h1>
      <p className="mt-3 text-lg opacity-70">
        Um espaço na internet que é inteiramente seu. Mostre o que você gosta, o que te inspira e o que faz você ser você.
      </p>
      <h2 className="mt-12 text-sm font-medium opacity-60">Perfis de exemplo</h2>
      <ul className="mt-3 space-y-2">
        {listProfiles().map((p) => (
          <li key={p.handle}>
            <Link className="underline underline-offset-4" href={`/${p.handle}`}>
              /{p.handle}
            </Link>{" "}
            <span className="opacity-60">— {p.theme.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
