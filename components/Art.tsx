// Capas geradas por código (formas e cores). No Passo 6 isto é substituído
// pelas imagens que a pessoa enviar.
export const rnd = (n: number) => {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

const f = (n: number) => n.toFixed(1);

export function Art({ seed, palette }: { seed: number; palette: string[] }) {
  const c = (j: number) => palette[Math.floor(rnd(seed + j) * palette.length)];
  const kind = seed % 4;

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="100" height="100" fill={c(1)} />
      <circle cx="85" cy="12" r="30" fill={c(2)} opacity=".6" />
      {kind === 0 && (
        <circle cx={f(30 + rnd(seed) * 40)} cy={f(35 + rnd(seed + 1) * 30)} r={f(18 + rnd(seed + 2) * 18)} fill={c(5)} />
      )}
      {kind === 1 && (
        <rect x={f(10 + rnd(seed) * 30)} y={f(40 + rnd(seed + 1) * 20)} width={f(35 + rnd(seed + 2) * 40)} height="60" fill={c(5)} />
      )}
      {kind === 2 && <path d={`M0 100 Q50 ${f(rnd(seed) * 60)} 100 100Z`} fill={c(5)} />}
      {kind === 3 && (
        <>
          <rect y={f(rnd(seed) * 40)} width="100" height="14" fill={c(5)} />
          <rect y={f(55 + rnd(seed + 1) * 30)} width="100" height="7" fill={c(6)} />
        </>
      )}
    </svg>
  );
}
