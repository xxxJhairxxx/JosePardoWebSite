
import { SocialNetwork } from "./general";
import { MetaSEO, Picture } from "./shared";

export interface Instructores {
  data: InstructoresData[];
}

export interface InstructoresData {
  id: number;
  nombre_completo: string;
  profesion: string;
  sociales: SocialNetwork[];
  image: Picture;
  Seo: MetaSEO;
}
