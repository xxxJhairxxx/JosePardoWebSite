import { Picture } from "@/interfaces/shared";
import { Container } from "../globals";
import Image from "next/image";
import SectionTitle from "../atoms/SectionTitle";
import { cursos } from "@/interfaces/cursos";
import CursoCards from "../molecules/CursoCards";

interface CursoProps{
    title: string;
    subtitle: string;
    image: Picture;
    cursos: cursos[];
}

const HomeCurso = ({title,subtitle,image,cursos}:CursoProps) => {
    
    return ( <div className="homeCurso">
        
                <div className="homeCurso__title">
                    <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
                    
                </div>
      
        <Container className="homeCurso__ctn">
            {/* <div className="homeCurso__ctn__portada">
                    <Image src={image.url} width={500} height={500} alt={title}></Image>
            </div> */}

            <div className="homeCurso__ctn__cursos">
                {cursos.map(({id,title,image,inicio})=><div key={id}>
                        <CursoCards title={title} inicio={inicio} subtitle={subtitle} image={image.url} ></CursoCards>
                </div>)}
            </div>
        </Container>
           
    </div> );
}
 
export default HomeCurso;