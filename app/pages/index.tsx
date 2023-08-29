import HomeBanner from "@/components/organisms/HomeBanner";
import { Home } from "@/interfaces/home";
import { baseApi } from "@/lib";
import { GetStaticProps } from "next";


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
        pre_title={home.home_banner.pre_title}
      />
 
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  // const generals = await getGenerals();
  const [{ data: home }] = await Promise.all([
    baseApi.get<Home>("/home?populate=*"),
  ]);

  return {
    props: {
      home: home.data,
      // generals,
    },
    revalidate: 1,
  };
};
