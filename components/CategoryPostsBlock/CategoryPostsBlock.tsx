import Link from "next/link";
import Image from "next/image";

// Components
import NewCard from "../NewCard/NewCard";

// Types
import { Posts } from "@/app/types/posts.type";

interface Props {
  videoPosts: Posts;
}

const CategoryPostsBlock = ({ videoPosts }: Props) => {
  // slice main post
  const mainVideoPost = videoPosts?.data.slice(0, 1);

  // slice first post
  const restVideoPosts = videoPosts?.data.slice(1, 4);

  return (
    <div className="home-main-news__videos">
      <div className="home-main-news__videos__title border-b border-slate-300 py-2 mb-10">
        <h2 className="text-4xl font-semibold text-slate-900">Videos</h2>
      </div>
      <div className="home-main-news__videos__main-post flex gap-14">
        <div className="home-main-news__videos__main-post__image w-6/12">
          <Link href={`/noticias/${mainVideoPost[0]?.attributes?.slug}`}>
            <Image
              alt="Imagen de la noticia"
              src={mainVideoPost[0]?.attributes?.image.data[0].attributes.url}
              width={1200}
              height={1200}
            />
          </Link>
        </div>
        <div className="home-main-news__videos__main-post__content w-6/12">
          <Link
            href={`/`}
            className="font-semibold text-red-500 hover:text-red-800 capitalize underline mt-2 py-3"
          >
            {mainVideoPost[0]?.attributes?.categories.data[0].attributes.title}
          </Link>
          <Link href={`/noticias/${mainVideoPost[0]?.attributes.slug}`}>
            <h3 className="text-4xl font-semibold mt-2 hover:text-slate-500">
              {mainVideoPost[0]?.attributes?.title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="home-main-news__videos__last-posts mt-8">
        <div className="new-card mb-12 flex gap-10">
          {restVideoPosts.map((post, i) => (
            <NewCard key={i} post={post} className="w-1/4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPostsBlock;
