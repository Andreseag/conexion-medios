import { Posts } from "@/app/types/posts.type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  mainPost: Posts;
}

const MainNew = ({ mainPost }: Props) => {
  return (
    <>
      {mainPost && (
        <div className="main-new">
          <div className="main-new__container flex flex-col items-center">
            <Image
              alt="Imagen de la noticia"
              src={mainPost?.data[0].attributes?.image.data[0].attributes.url}
              width={1200}
              height={1200}
            />
            <Link
              href={`/`}
              className="font-semibold text-red-500 hover:text-red-800 capitalize underline mt-2 py-3"
            >
              {
                mainPost?.data[0].attributes?.categories.data[0].attributes
                  .title
              }
            </Link>
            <h3 className="text-4xl font-semibold text-center">
              {mainPost?.data[0].attributes?.title}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNew;
