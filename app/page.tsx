import Image from "next/image";

import newsData from "@/app/data/news.data";
import Link from "next/link";

export const metadata = {
  title: "Conexión medios",
};

export default function Home() {
  const getNew = () => {
    const id = parseInt("33");
    const newSelected = newsData.find((n) => n.id === id);
    return newSelected;
  };

  const heroNew = getNew();

  return (
    <>
      <div className="home flex flex-col items-center">
        <div className="home__container w-11/12 md:w-4/5 lg:w-2/3">
          {/* Hero */}
          {heroNew && (
            <Link href={`/noticias/${heroNew.id}`}>
              <div className="home__hero mt-10 flex flex-col md:flex-row gap-4 border-b border-gray-400">
                <div className="hero__description">
                  <h1 className="text-left text-3xl font-semibold text-slate-800">
                    {heroNew.title}
                  </h1>
                  <p className="text-sm mt-2 italic font-normal text-slate-600">
                    {heroNew.date}
                  </p>
                  <p className="text-lg mt-6 mb-3 font-normal text-slate-600">
                    {heroNew.description}
                  </p>
                </div>
                <div className="hero__image">
                  <Image
                    alt="Imagen de la noticia"
                    src={heroNew.image}
                    width={1200}
                    height={1200}
                    className="mb-10"
                  />
                </div>
              </div>
            </Link>
          )}

          {/* News List */}
          <div className="news-list mt-10">
            <div className="new-list__container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6">
              {newsData
                .filter((item) => item.id != parseInt("33"))
                .map((newItem, i) => (
                  <Link key={i} href={`/noticias/${newItem.id}`}>
                    <div key={i} className="new-card flex gap-1 md:gap-2">
                      <div className="new-card__content">
                        <div className="new-card__title">
                          <h3 className="text-left text-xl  font-semibold text-slate-800 mb-4">
                            {newItem.title}
                          </h3>
                          <p className="font-normal text-slate-600">
                            {newItem.description}
                          </p>
                        </div>
                      </div>
                      <div className="new-card__image">
                        <Image
                          alt="Imagen de la noticia"
                          src={newItem.image}
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
