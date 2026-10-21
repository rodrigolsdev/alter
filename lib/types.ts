export type Layout = "mosaic" | "rows" | "collage" | "split";
export type FontKey = "serif" | "sans" | "mono";

export type Theme = {
  name: string;
  bg: string;
  fg: string;
  accent: string;
  font: FontKey;
  layout: Layout;
  grain: number;
  palette: string[];
};

export type Item = { title: string; subtitle: string };
export type Collection = { title: string; items: Item[] };

export type Profile = {
  handle: string;
  name: string;
  role: string;
  bio: string;
  nowPlaying?: string;
  theme: Theme;
  collections: Collection[];
};
