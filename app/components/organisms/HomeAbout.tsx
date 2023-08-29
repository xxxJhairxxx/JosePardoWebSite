import Image from "next/image";
import SectionTitle from "../atoms/SectionTitle";
import Button from "../atoms/Button";

interface HomeAboutProps {
  title: string;
  subtitle: string;
  text: string;
}

const HomeAbout = ({
  title,
  subtitle,
  text,
}: HomeAboutProps) => {
  return (
    <section className="homeAbout" data-section="/about">


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
