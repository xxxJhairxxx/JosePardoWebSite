import HomeBanner from "@/components/organisms/HomeBanner";
import { Home, HomeData, Homeatributes } from "@/interfaces/home";
import { baseApi } from "@/lib/baseApi";

import { GetStaticProps } from "next";


interface HomeProps {
  home: Homeatributes;
}

export default function Home({ home }: HomeProps) {


  // El arreglo de dependencias vacío asegura que se ejecute solo en el cliente

  return (
    <main className={`main-page`}>
       <HomeBanner
        subtitle={home.home_banner.subtitle}
        title={home.home_banner.title}
        // bg_video={home.attributes.home_banner.bg_video}
      />

    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  // const generals = await getGenerals();
  const [{ data: home }] = await Promise.all([
    baseApi.get<Home>(process.env.NEXT_PUBLIC_STRAPI_URL+"/home?populate=*"),
  ]);

  console.log(home.data.attributes)

  return {
    props: {
      home: home.data.attributes,
      // generals,
    },
    revalidate: 1,
  };
};
