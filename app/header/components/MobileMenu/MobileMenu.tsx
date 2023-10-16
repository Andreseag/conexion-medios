import Link from "next/link";
import Image from "next/image";
import ConexionLogo from "../../../../public/logo-l.png";
import MaterialSymbol from "@/components/Icons/MaterialSymbol/MaterialSymbol";

// Interfaces
interface Props {
  toggleMenu: () => void;
}

const MobileMenu = ({ toggleMenu }: Props) => {
  return (
    <div className="mobile-menu absolute md:hidden h-screen  top-0 w-full">
      <div className="mobile-menu__container z-20 absolute w-10/12 bg-white h-full">
        <button onClick={toggleMenu}>
          <MaterialSymbol
            icon="close"
            fill
            className="absolute text-slate-800 right-3 top-3"
          />
        </button>
        <Link className="flex justify-center" href="/">
          <Image
            src={ConexionLogo}
            alt="Picture of the author"
            width="170"
            className=""
          />
        </Link>
        <div className="mobile-menu__title bg-slate-100 mt-2 py-2 border-b border-slate-300 px-3 font-medium">
          <h3>Secciones</h3>
        </div>
        <nav className="px-3">
          <ul>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Inicio
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Poítica
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Actualidad
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Regional
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Nacional
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Judicial
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu__title mt-3 bg-slate-100 py-2 border-b border-slate-300 px-3 font-medium">
          <h3>Categorías</h3>
        </div>
        <nav className="px-3">
          <ul>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Salud
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Deportes
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Emprendimiento
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Cronicas
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Opinión
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Economía
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Deportes
              </Link>
            </li>
            <li className="py-1 pl-2">
              <Link href={"/"} className="hover:underline text-sm py-2">
                Especiales
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobile-menu__background absolute top-0 h-full w-full bg-black/30"></div>
    </div>
  );
};

export default MobileMenu;
