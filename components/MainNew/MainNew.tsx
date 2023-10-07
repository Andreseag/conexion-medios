import { Post, Posts } from "@/app/types/posts.type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  posts: Posts;
}

const MainNew = ({ posts }: Props) => {
  const getMain = () => {
    return posts.data.find((n, key) => key === 0);
  };

  const mainPost = getMain();

  return (
    <>
      {mainPost && (
        <div className="main-new">
          <div className="main-new__container flex flex-col items-center">
            <Image
              alt="Imagen de la noticia"
              src={mainPost?.attributes?.Imagen?.data[0]?.attributes?.url}
              width={1200}
              height={1200}
            />
            <Link
              href={`/`}
              className="font-semibold text-red-500 hover:text-red-800 capitalize underline mt-2 py-3"
            >
              {mainPost?.attributes?.categories.data[0].attributes.title}
            </Link>
            <h3 className="text-4xl font-semibold text-center">
              {mainPost?.attributes?.Descripcion}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNew;
