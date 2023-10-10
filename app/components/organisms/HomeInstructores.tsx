import { subtle } from "crypto";
import SectionTitle from "../atoms/SectionTitle";
import { Instructores, InstructoresData } from "@/interfaces/instructores";
import { useEffect } from "react";
import { Container } from "../globals";
import Image from "next/image";
import { getGenerals } from "@/lib/getGenerals";
import { useGenerals } from "@/context/generals.context";
import InstructoresCard from "../molecules/InstructoresCard";
import { Socials } from "../atoms";

interface HomeInstructoresProps{
    title: string;
    subtitle:string;
    instructores: InstructoresData[];
}

const HomeInstructores = ({title,subtitle,instructores}:HomeInstructoresProps) => {
    
    const {multilanguage,general } =useGenerals();

    return ( <div className="homeInstructores">
        <SectionTitle className="homeInstructores_title" title={title} subtitle={subtitle} />

        <Container className="homeInstructores_ctn ">
            {
            instructores.map(({id,image,nombre_completo,profesion,sociales})=>
              <InstructoresCard key={id} image={image} nombre_completo={nombre_completo} profesion={profesion} sociales={sociales} />) 
        }</Container>
    </div> );
}
 
export default HomeInstructores;