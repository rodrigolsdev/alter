// Chamada principal da página inicial.
export function Hero() {
  return (
    <section className="site-container pb-10 pt-14 sm:pt-[4.5rem]">
      <h1 className="font-serif text-[clamp(2.75rem,4.6vw,4.75rem)] leading-[0.95] tracking-[-0.015em] text-paper motion-safe:animate-rise">
        Tudo o que faz
        <span className="block">você ser você.</span>
      </h1>
      <p className="mt-7 max-w-[26rem] text-[17px] leading-relaxed text-mute motion-safe:animate-rise [animation-delay:120ms]">
        Um espaço próprio para reunir suas referências, gostos e obsessões.
      </p>
    </section>
  );
}
