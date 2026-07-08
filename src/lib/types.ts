export type MenuCategory = "burgers" | "pizzas" | "sides" | "doces";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
  category: MenuCategory;
  highlight?: boolean;
}

export interface MenuTab {
  id: MenuCategory;
  label: string;
}

export type GalleryKind = "foto" | "premio";

export interface GalleryItem {
  id: string;
  title: string;
  kind: GalleryKind;
  caption: string;
  /** variação de tom para o placeholder (âmbar ou grafite) */
  tone: "amber" | "graphite";
}

export interface Location {
  name: string;
  neighborhood: string;
  address: string;
  hours: string;
  phone: string;
  mapUrl: string;
}

export interface Award {
  org: string;
  title: string;
  year: string;
}
