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
import HomeMiddle from "@/components/organisms/HomeMiddle";
import { Curso, cursos } from "@/interfaces/cursos";
import HomeCurso from "@/components/organisms/HomeCurso";
import { Instructores, InstructoresData } from "@/interfaces/instructores";
import HomeInstructores from "@/components/organisms/HomeInstructores";

interface HomeProps {
  home: HomeData;
  curso: cursos[];
  instructores:InstructoresData[];
}

export default function Home({ home,curso,instructores}: HomeProps) {

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
       {/* <HomeMiddle middle_card={home.home_middle.middle_card}></HomeMiddle> */}
      <HomeAbout
        title={home.home_about.title}
        subtitle={home.home_about.subtitle}
        text={home.home_about.text}
        image={home.home_about.image}
      />

      <HomeCurso title={home.home_cursos.title} subtitle={home.home_cursos.subtitle} image={home.home_cursos.image} cursos={curso}/>
      <HomeInstructores title={home.home_instructores.title} subtitle={home.home_instructores.subtitle} instructores={instructores}></HomeInstructores>
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals();
  const [{ data: home },{data: cursos},{data: instructores}] = await Promise.all([
    baseApi.get<Home>("/home?populate=deep"),
    baseApi.get<Curso>("/cursos?populate=deep"),
    baseApi.get<Instructores>("/instructores?populate=deep")
  ]);

  return {
    props: {
      home: home.data,
      curso: cursos.data,
      instructores: instructores.data,
      generals
    },
    revalidate: 1,
  };
};
