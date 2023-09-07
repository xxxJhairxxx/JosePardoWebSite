import { middleCard } from "@/interfaces/home";
import MiddleCard from "../molecules/MiddleCard";
import { SwiperOptions } from "swiper/types";
import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

interface homeMiddleProps {
  middle_card: middleCard[];
}


const swiperOptions: SwiperOptions = {
  speed: 400,
  slidesPerView: "auto",
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 5,
      slidesPerGroup: 4,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 5,
      slidesPerGroup: 4,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
};
const HomeMiddle = ({ middle_card }: homeMiddleProps) => {
  
  return (
    <section className="homeMiddle" data-section="/middle">
        <Swiper {...swiperOptions} className="mySwiper">
      
        {middle_card.map(({ title, image }, index) => (
          <SwiperSlide key={index} className="homeMiddle__container">
          <MiddleCard  title={title} image={image.url} />
          </SwiperSlide>
        ))}
      
      </Swiper>
    </section>
  );
};

export default HomeMiddle;
