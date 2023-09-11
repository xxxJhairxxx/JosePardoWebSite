
import { MetaSEO, Picture } from "./shared";

export interface Curso {
  data: cursos[];
}

export interface cursos {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  slug: string;
  image: Picture;
  inicio: string;
}
