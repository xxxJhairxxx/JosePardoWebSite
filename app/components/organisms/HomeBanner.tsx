import { Media } from "@/interfaces/home";
import { Container } from "../globals";
import Enlace from "../atoms/Enlace";
import { goToSection } from "@/lib";
import SkillCard from "../molecules/SkillCard";
import Button from "../atoms/Button";
import { useGenerals } from "@/context/generals.context";
import { useEffect, useRef, useState } from "react";

interface HomeBannerProps {
  subtitle: string;
  title: string;
  bg_video: Media;
  pre_title: string;
}
const HomeBanner = ({
  subtitle,
  title,
  bg_video,
  pre_title,
}: HomeBannerProps) => {
  const handleGoToSection = (url: string) => {
    goToSection(url);
  };

  const { multilanguage } = useGenerals();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const titleBanner = title.split("/");

  useEffect(() => {
    //validar que la funcion se aplique solo en dispositivos iOS
    const handlePlayClick = () => {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

      if (isIOS && videoRef.current) {
        const videoElement = videoRef.current;
        if (videoElement.paused) {
          videoElement.play().then(() => {
            setVideoPlaying(true);
          });
        } else {
          videoElement.pause();
          setVideoPlaying(false);
        }
      }
    };

    document
      .querySelector(".homeBanner")
      ?.addEventListener("click", handlePlayClick);

    return () => {
      document
        .querySelector(".homeBanner")
        ?.removeEventListener("click", handlePlayClick);
    };
  }, []);

  return (
    <section className="homeBanner" data-section="/">
      <video
        className="homeBanner-video"
        ref={videoRef}
        src={bg_video.url}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="homeBanner__container">
        <h3 className="homeBanner__container-subtitle">{subtitle}</h3>
        <h2 className="homeBanner__container-pre_title">{pre_title}</h2>
        <h1 className="homeBanner__container-title">{title}</h1>

        <section className="homeBanner__container-buttons">
          <Button
            text={multilanguage.lbl_btn_quote}
            className="homeBanner__container-buttons-btn"
          ></Button>

          <button
            className="Btn homeBanner__container-buttons-btn lg:hidden"
            onClick={() => handleGoToSection("/service")}
          >
            {multilanguage.lbl_see_services}
          </button>
        </section>
        <div className="homeBanner__container-skills">
          {multilanguage.skills.map(({ image, text }, index) => (
            <SkillCard
              key={index}
              image_url={image.url}
              text={text}
              // className={`homeBanner__container-skills-item${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
