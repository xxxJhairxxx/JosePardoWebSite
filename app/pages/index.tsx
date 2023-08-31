import HomeBanner from "@/components/organisms/HomeBanner";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import HomeAbout from "@/components/organisms/HomeAbout";
import { useObserver } from "@/hooks/useObserver";
import { Home, HomeData } from "@/interfaces/home";
import { baseApi } from "@/lib/baseApi";
import { getGenerals } from "@/lib/getGenerals";
import { useNavbarContext } from "@/context/navbar.context";
import { goToSection } from "@/lib/utils";

interface HomeProps {
  home: HomeData;
}

export default function Home({ home }: HomeProps) {

  // El arreglo de dependencias vacío asegura que se ejecute solo en el cliente
  const { setActiveSection, scrolltoSectionFromOtherPage } = useNavbarContext();

  const { setElements, entries } = useObserver({
    rootMargin: "-13% 0px -80% 0px",
  });

  useEffect(() => {
    const elements = document.querySelectorAll("[data-section]");
    setElements(elements);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute("data-section");
        setActiveSection(String(section));
      }
    });
  }, [entries, setActiveSection]);

  useEffect(() => {
    if (scrolltoSectionFromOtherPage) {
      goToSection(scrolltoSectionFromOtherPage);
    }
  }, [scrolltoSectionFromOtherPage]);

  return (
    <main className={`main-page`}>
      <HomeBanner
        subtitle={home.home_banner.subtitle}
        title={home.home_banner.title}
        bg_video={home.home_banner.bg_video}
        text={home.home_banner.text}
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
  const generals = await getGenerals();
  const [{ data: home }] = await Promise.all([
    baseApi.get<Home>("/home?populate=deep"),
  ]);

  return {
    props: {
      home: home.data,
      generals
    },
    revalidate: 1,
  };
};
