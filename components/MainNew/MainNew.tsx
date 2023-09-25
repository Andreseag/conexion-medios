import Image from "next/image";
import Link from "next/link";

const MainNew = () => {
  return (
    <div className="main-new">
      <div className="main-new__container flex flex-col items-center">
        <Image
          alt="Imagen de la noticia"
          src={"/img/noticias/IMG_0634.jpeg"}
          width={1200}
          height={1200}
        />
        <Link
          href={`/`}
          className="font-semibold text-red-500 hover:text-red-800 capitalize underline mt-2 py-3"
        >
          Política
        </Link>
        <h3 className="text-4xl font-semibold text-center">
          Marisela Duarte: Por primera vez una mujer es la más opcionada para
          ser Gobernadora de Casanare
        </h3>
      </div>
    </div>
  );
};

export default MainNew;
