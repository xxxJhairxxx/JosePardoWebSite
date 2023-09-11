import Image from "next/image";
import SectionTitle from "../atoms/SectionTitle";
import Button from "../atoms/Button";
import { Picture } from "@/interfaces/shared";

interface HomeAboutProps {
  title: string;
  subtitle: string;
  text: string;
  image: Picture;
}

const HomeAbout = ({
  title,
  subtitle,
  text,
  image
}: HomeAboutProps) => {
  return (
    <section className="homeAbout" data-section="/about">

      <div className="homeAbout__thumb">
            <Image src={image.url} width={500} height={500} alt={title}></Image>
      </div>

      <div className="homeAbout__description">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="homeAbout__description__title"
        />
        <p className="homeAbout__description__text">{text}</p>

        <Button
          // text={multilanguage.lbl_btn_contact}
          text="contactame"
          className="homeAbout__description-btn"
        ></Button>
      </div>
    </section>
  );
};

export default HomeAbout;
