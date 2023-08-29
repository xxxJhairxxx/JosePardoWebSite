import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useRef } from "react";
import { Logo } from "../atoms/Logo";
import { Socials } from "../atoms/Socials";

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {


  return (
    <nav
    >
      <Socials className={`Navbar-socials`} rsp={true} />
      <Logo className="Navbar-logo" />
      <div className="Navbar-ctn">
       
      </div>
    </nav>
  );
};
