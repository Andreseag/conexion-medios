"use client";

import { useState } from "react";
import Image from "next/image";
import ConexionLogo from "../../public/logo-l.png";
import Link from "next/link";

//Components
import { motion } from "framer-motion";
import NavPrincipalCategories from "@/app/header/components/NavPrincipalCategories/NavPrincipalCategories";
import Today from "@/components/Today/Today";
import NavSecondaryCategories from "./components/NavSecondaryCategories/NavSecondaryCategories";
import NavEspecialCategories from "./components/NavEspecialCategories/NavEspecialCategories";
import MaterialSymbol from "@/components/Icons/MaterialSymbol/MaterialSymbol";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => setIsVisible(!isVisible);

  return (
    <header className="header flex justify-center mb-6">
      <div className="header__container w-full py-1 flex flex-col items-center justify-center">
        <div className="wrapper w-11/12 xl:w-10/12">
          <div className="relative w-full flex justify-center items-center">
            <Today />
            <button onClick={toggleMenu}>
              <MaterialSymbol
                icon="menu"
                fill
                className=" md:hidden absolute left-0"
              />
            </button>

            <Link className="flex justify-center" href="/">
              <Image
                src={ConexionLogo}
                alt="Picture of the author"
                width="234"
                className="w-6/12 sm:w-10/12 md:w-full"
              />
            </Link>
          </div>
          <NavPrincipalCategories />
          <NavSecondaryCategories />
        </div>
        <motion.div
          className="absolute left-0 top-0 w-full md:hidden h-screen bg-white z-10"
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <MobileMenu toggleMenu={toggleMenu} />
        </motion.div>
        <NavEspecialCategories />
      </div>
    </header>
  );
}

export default Header;
