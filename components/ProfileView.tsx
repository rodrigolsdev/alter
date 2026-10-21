import type { CSSProperties } from "react";
import { FONTS } from "@/lib/themes";
import type { Profile, Theme } from "@/lib/types";
import { Art, rnd } from "./Art";
import { ScrollProgress } from "./ScrollProgress";

const RATIOS = [1, 1.25, 0.8, 1.4, 1];

export function ProfileView({ profile, theme }: { profile: Profile; theme: Theme }) {
  const vars = {
    "--bg": theme.bg,
    "--fg": theme.fg,
    "--ac": theme.accent,
    "--ff": FONTS[theme.font],
    "--gr": theme.grain,
  } as CSSProperties;

  // posição inicial de cada coleção (usada para variar as capas e a inclinação na colagem)
  const starts: number[] = [];
  let total = 0;
  for (const col of profile.collections) {
    starts.push(total);
    total += col.items.length;
  }

  return (
    <div className={`alter-page l-${theme.layout}`} style={vars}>
      <style>{`html,body{background:${theme.bg}}`}</style>
      <aside className="hd">
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="bio">{profile.bio}</p>
        <span className="chip">alter.link/{profile.handle}</span>
        {profile.nowPlaying && (
          <div className="now">
            <i />
            Ouvindo agora: {profile.nowPlaying}
          </div>
        )}
        <a className="cta" href="#">
          Mandar um oi
        </a>
        {theme.layout === "split" && <ScrollProgress />}
      </aside>

      <main className="mn">
        {profile.collections.map((col, ci) => (
          <section key={col.title}>
            <h2>{col.title}</h2>
            <div className="items">
              {col.items.map((item, ii) => {
                const k = starts[ci] + ii + 1;
                const figVars = {
                  "--ar": 1 / RATIOS[k % 5],
                  "--w": `${150 + Math.floor(rnd(k + 3) * 80)}px`,
                  "--rot": `${((rnd(k + 7) - 0.5) * 8).toFixed(1)}deg`,
                } as CSSProperties;
                return (
                  <figure key={item.title} style={figVars}>
                    <div className="tile">
                      <Art seed={k} palette={theme.palette} />
                    </div>
                    <figcaption>
                      <span>{item.title}</span>
                      <em>{item.subtitle}</em>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
