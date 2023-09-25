import Link from "next/link";
import Image from "next/image";

const SideNews = () => {
  return (
    <div className="side-news w-1/4">
      <div className="side-news__container">
        {"."
          .repeat(4)
          .split("")
          .map((item, i) => (
            <div key={i} className="new-card mb-12">
              <div className="new-card__container border-b border-slate-300 pb-12">
                <Image
                  alt="Imagen de la noticia"
                  src={"/img/noticias/IMG_0634.jpeg"}
                  width={1200}
                  height={1200}
                  className="mb-3"
                />
                <Link
                  href={`/`}
                  className="mb-3 font-semibold text-red-500 hover:text-red-800 capitalize underline mt-2 py-3"
                >
                  Política
                </Link>
                <h4 className="text-xl font-medium">
                  Marisela Duarte: Por primera vez una mujer es la más opcionada
                  para ser Gobernadora de Casanare
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideNews;
