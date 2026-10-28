import Link from "next/link";

const NAV = [
  { id: "explorar", label: "Explorar", href: "/" },
  { id: "sobre", label: "Sobre", href: "/sobre" },
] as const;

export type NavId = (typeof NAV)[number]["id"];

// Cabeçalho da plataforma. `current` marca o item ativo com o traço verde-lima.
export function SiteHeader({ current }: { current?: NavId }) {
  return (
    <header className="border-b border-line">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-lime focus:px-3 focus:py-2 focus:text-sm focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <div className="site-container flex h-[62px] items-stretch justify-between">
        <div className="flex items-stretch gap-8 sm:gap-12">
          <Link href="/" aria-label="ALTER, página inicial" className="flex items-center text-[22px] tracking-[0.2em] text-paper">
            ALTER
          </Link>

          <nav aria-label="Principal" className="hidden items-stretch gap-9 sm:flex">
            {NAV.map((item) => {
              const active = item.id === current;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center text-[13px] motion-safe:transition-colors ${
                    active
                      ? "text-paper after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-lime"
                      : "text-mute hover:text-paper"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center">
          <Link
            href="/criar"
            className="inline-flex h-9 items-center border border-paper/40 px-4 text-[13px] text-paper hover:border-paper hover:bg-paper hover:text-ink motion-safe:transition-colors"
          >
            Criar meu espaço
          </Link>
        </div>
      </div>
    </header>
  );
}
