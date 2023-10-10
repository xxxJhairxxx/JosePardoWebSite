import { useGenerals } from "@/context/generals.context";
import { SocialNetwork } from "@/interfaces/general";
import { Picture } from "@/interfaces/shared";
import Image from "next/image";

interface Props{
    image:Picture;
    nombre_completo:string;
    profesion:string;
    sociales:SocialNetwork[],
}

const InstructoresCard = ({image,nombre_completo,profesion,sociales}:Props) => {
const {multilanguage,general} = useGenerals();
    return ( 
    <div className="InstructoresCard">
        
        <div className="InstructoresCard_thumb">
            <Image src={image.url} width={500} height={500} alt={"perfil"} />
            
            <div className="InstructoresCard_thumb-socials">
                 {sociales.map(({type,url},i)=>

                        <div
                        key={i}
                        title={`${!url ? "Coming soon" : type}`}
                        className="InstructoresCard_thumb-socials-item"
                        >
                        <a
                            className={`InstructoresCard_thumb-socials-item-link ${!url ? "pointer-events-none" : ""}`}
                            href={url ? url : "#"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className={`InstructoresCard_thumb-socials-item-link-icon icon-${type} `} />
                        </a>
                        </div>

            )}
            </div>
           
        </div>

        <div className="InstructoresCard_description">
            <p className="InstructoresCard_description-text"> {profesion}</p>
            <p className="InstructoresCard_description-text">{nombre_completo}</p>
        </div>

              
    </div>
);
}
 
export default InstructoresCard;