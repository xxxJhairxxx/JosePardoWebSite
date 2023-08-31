import { Picture } from "./shared";

export interface Multilanguage {
  data: MultilanguageData;
}

export interface MultilanguageData {
  id: number;
  lbl_ver_mas: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  menu: Menu[];
}

export interface Menu {
  id: number;
  label: string;
  url: string;
  sitemap: boolean;
}
