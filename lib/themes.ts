import type { FontKey, Layout, Theme } from "./types";

export const FONTS: Record<FontKey, string> = {
  serif: "'Instrument Serif', Georgia, serif",
  sans: "'Inter', system-ui, sans-serif",
  mono: "'Space Mono', ui-monospace, monospace",
};

export const LAYOUTS: readonly Layout[] = ["mosaic", "rows", "collage", "split"];

export const PRESETS = {
  cine: {
    name: "Cinematográfico",
    bg: "#0b0b0b",
    fg: "#ece8e1",
    accent: "#d9d2c0",
    font: "serif",
    layout: "mosaic",
    grain: 0.55,
    palette: ["#1c1c1c", "#3a3a38", "#6f6e69", "#a9a69d", "#d8d4c8", "#0e0e0e"],
  },
  cor: {
    name: "Colorido",
    bg: "#e8962e",
    fg: "#1f4fd8",
    accent: "#1f4fd8",
    font: "sans",
    layout: "collage",
    grain: 0.3,
    palette: ["#1f4fd8", "#c8321c", "#f2d03b", "#1c7a4a", "#e86aa8", "#2a1b3d"],
  },
  min: {
    name: "Minimalista",
    bg: "#f1efe9",
    fg: "#1b1b1a",
    accent: "#46612f",
    font: "serif",
    layout: "split",
    grain: 0.15,
    palette: ["#c4b8a4", "#8d978a", "#d9cdb7", "#5f5b52", "#a7a79b", "#e6e0d2"],
  },
} satisfies Record<string, Theme>;

export type PresetKey = keyof typeof PRESETS;
