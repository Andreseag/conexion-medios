import Image from "next/image";
import newsData from "@/app/data/news.data";
import Link from "next/link";
import Carousel from "@/components/Carousel/Carousel";
import { capitalizeString } from "./utils";
import NewCard from "@/components/NewCard/NewCard";
import HomeMainNews from "@/components/HomeMainNews/HomeMainNews";
import { getApiAllPosts } from "./api/posts/postsActions";

export const metadata = {
  title: "Conexión medios",
};

async function GetPosts() {
  getApiAllPosts();
}

const Home = async () => {
  const posts = await GetPosts();
  console.log("-----------------------");
  console.log(posts);

  const getNew = () => {
    const newSelected = newsData.find((n, key) => key === 0);
    return newSelected;
  };

  const heroNew = getNew();

  return (
    <>
      <div className="home flex flex-col items-center">
        <div className="home__container w-11/12 xl:w-10/12">
          {/* Carousel */}
          {/* <Carousel /> */}
          <HomeMainNews />
          {/* Hero */}
          {/* {heroNew && (
            <Link href={`/noticias/${heroNew.id}`}>
              <div className="home__hero mt-10 flex flex-col md:flex-row gap-4 border-b border-gray-400">
                <div className="hero__description">
                  <h1 className="text-left text-2xl font-semibold text-slate-800">
                    {heroNew.title}
                  </h1>
                  <p className="text-sm mt-2 italic font-normal text-slate-600">
                    {heroNew.date}
                  </p>
                  <p className="text-lg mt-6 mb-3 text-slate-600">
                    {heroNew.description}
                  </p>
                </div>
                <div className="hero__image">
                  <Image
                    alt="Imagen de la noticia"
                    src={heroNew.image}
                    width={1200}
                    height={1200}
                    className="mb-10 object-cover h-72 md:h-96"
                  />
                </div>
              </div>
            </Link>
          )} */}
          {/* News List */}
          {/* <div className="news-list mt-10">
            <div className="new-list__container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6">
              {newsData
                .filter((item, key) => key != 0)
                .map((newItem, i) => (
                  <NewCard key={i} newItem={newItem} />
                ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
