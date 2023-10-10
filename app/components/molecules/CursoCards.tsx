import Image from "next/image";

interface CursoCardProps {
  title: string;
  subtitle: string;
  inicio:string;
  image: string;
}
const CursoCards = ({ title, subtitle, image }: CursoCardProps) => {
  return (
    <section className="CursoCards">
      <div className="CursoCards__thumb ">
        <Image src={image} width={1000} height={1000} alt={title} />
      </div>

      <div className="CursoCards__description">
        <h2 className="CursoCards__description-title">{title}</h2>
       
      </div>
    </section>
  );
};

export default CursoCards;
