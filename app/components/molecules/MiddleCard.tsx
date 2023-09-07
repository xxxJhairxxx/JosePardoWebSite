import Image from "next/image";
import { text } from "stream/consumers";

interface MiddleCardProps {
  title: string;
  image: string;
}

const MiddleCard = ({ title, image }: MiddleCardProps) => {
  return (
    <div className="middleCard">

     
      <div className="middleCard__thumb">
          <Image
            src={image}
            width={120}
            height={120}
            alt={title}
          />
      </div>   
      <h2 className="middleCard__title">{title}</h2>
    </div>
  );
};

export default MiddleCard;
