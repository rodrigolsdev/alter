"use client";

import { useEffect, useState } from "react";

// Barra de progresso do layout "Lateral".
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = Math.max(1, h.scrollHeight - window.innerHeight);
      setPct(Math.round((100 * window.scrollY) / max));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="prog">
      <span>{pct}%</span>
      <div>
        <i style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
