
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  url: string;

}

export const Logo: FC<LogoProps> = ({ className, url }) => {



  return (
    <Link href={"/"} legacyBehavior>
       <picture className={`logoCont ${className}`}>
        {url && (
          <Image
            priority
            src={url}
            width={210}
            height={110}
            alt=""
          ></Image>
        )} 
      </picture> 
    </Link>
  );
};
