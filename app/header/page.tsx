import Image from "next/image";
import ConexionLogo from "../../public/logo-l.png";
import Link from "next/link";

//Components
import NavPrincipalCategories from "@/app/header/components/NavPrincipalCategories/NavPrincipalCategories";
import Today from "@/components/Today/Today";
import NavSecondaryCategories from "./components/NavSecondaryCategories/NavSecondaryCategories";
import NavEspecialCategories from "./components/NavEspecialCategories/NavEspecialCategories";

function Header() {
  return (
    <header className="header flex justify-center mb-6">
      <div className="header__container w-full py-1 flex flex-col items-center justify-center">
        <div className="wrapper w-11/12 xl:w-10/12">
          <div className="relative w-full flex justify-center">
            <Today />
            <Link href="/">
              <Image
                src={ConexionLogo}
                alt="Picture of the author"
                width="234"
              />
            </Link>
          </div>
          <NavPrincipalCategories />
          <NavSecondaryCategories />
        </div>

        <NavEspecialCategories />
      </div>
    </header>
  );
}

export default Header;
