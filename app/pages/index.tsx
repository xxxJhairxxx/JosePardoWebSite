import HomeBanner from "@/components/organisms/HomeBanner";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import HomeAbout from "@/components/organisms/HomeAbout";
import { useObserver } from "@/hooks/useObserver";
import { Home, HomeData } from "@/interfaces/home";
import { baseApi } from "@/lib/baseApi";

interface HomeProps {
  home: HomeData;
}

export default function Home({ home }: HomeProps) {

  // El arreglo de dependencias vacío asegura que se ejecute solo en el cliente

  return (
    <main className={`main-page`}>
      <HomeBanner
        subtitle={home.home_banner.subtitle}
        title={home.home_banner.title}
        bg_video={home.home_banner.bg_video}
      />
      
      <HomeAbout
        title={home.home_about.title}
        subtitle={home.home_about.subtitle}
        text={home.home_about.text}
      />

     
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {

  const [{ data: home }] = await Promise.all([
    baseApi.get<Home>("/home?populate=deep"),
  ]);

  return {
    props: {
      home: home.data,
    },
    revalidate: 1,
  };
};
