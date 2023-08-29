
import { MetaSEO, Picture } from "./shared";

export interface Blog {
  data: BlogPosts[];
}

export interface BlogPosts {
  id: number;
  title: string;
  created: string;
  text: string;
  slug: string;
  image: Picture;
  Seo: MetaSEO;
}
