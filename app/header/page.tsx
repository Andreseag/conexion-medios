import Image from "next/image";
import ConexionLogo from "../../public/logo-l.png";

function Header() {
  return (
    <header className="header shadow-lg">
      <div className="header__container h-12 flex items-center justify-center">
        <Image src={ConexionLogo} alt="Picture of the author" width="110" />
      </div>
    </header>
  );
}

export default Header;
