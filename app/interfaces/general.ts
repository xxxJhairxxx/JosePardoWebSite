export interface General {
  data: GeneralData;
}

export interface GeneralData {
  id: number;
  phone: string;
  email: string;
  direccion: string;
  horario:string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  map_url: string;
  frame_url: string;
  social_network: SocialNetwork[];
  logo: Logo;
}
export interface Logo {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface SocialNetwork {
  id: number;
  type: string;
  url: string;
}
