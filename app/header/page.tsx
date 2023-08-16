import Image from "next/image";
import ConexionLogo from "../../public/logo-l.png";
import Link from "next/link";

function Header() {
  return (
    <header className="header shadow-lg">
      <div className="header__container h-16 flex items-center justify-center">
        <Link href="/">
          <Image src={ConexionLogo} alt="Picture of the author" width="150" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
