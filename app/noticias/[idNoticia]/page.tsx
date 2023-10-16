import { getApiPost } from "@/api/posts";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

async function getNew(slug: string) {
  return getApiPost(slug);
}

export default async function New({
  params,
}: {
  params: { idNoticia: string };
}) {
  const post = await getNew(params.idNoticia);

  return (
    <div className="layout flex justify-center mt-20">
      <div className="layout__container w-11/12 md:w-3/4 lg:w-3/5 xl:w-2/5">
        {post.data && (
          <div className="new font-semibold ">
            <h1 className="text-center text-3xl font-semibold capitalize text-slate-800">
              {post.data.attributes.title}
            </h1>
            <p className="text-lg mt-8 mb-3 font-normal text-slate-600">
              {post.data.attributes.description}
            </p>
            <div className="new__date border-t py-2 border-gray-400 mb-10">
              <span className="text-sm font-bold underline italic text-slate-700">
                {post.data.attributes.author}
              </span>
              <p className="text-sm font-normal text-slate-600">
                {post.data.attributes.date}
              </p>
            </div>
            <Image
              alt="Imagen de la noticia"
              src={post.data.attributes.image.data[0].attributes.url}
              width={1200}
              height={600}
              className="mb-10"
            />

            <div className="content font-normal text-slate-600">
              {ReactHtmlParser(post.data.attributes.body)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
