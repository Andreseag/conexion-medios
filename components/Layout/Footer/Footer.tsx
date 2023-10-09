import Link from "next/link";
import Image from "next/image";
import MaterialSymbol from "@/components/Icons/MaterialSymbol/MaterialSymbol";

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center bg-slate-900">
      <div className="footer__container w-11/12 xl:w-10/12">
        <div className="footer__logo">
          <Link href="/">
            <Image
              src={"/logo-l.png"}
              alt="Picture of the author"
              width="200"
              height="200"
            />
          </Link>
          <div className="footer__social-media">
            <MaterialSymbol variant="outlined" icon="close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
