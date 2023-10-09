import { Posts } from "@/app/types/posts.type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  posts: Posts;
}

const MiddleNews = ({ posts }: Props) => {
  return (
    <div className="middle-news mt-12">
      <div className="middle-news__container grid grid-cols-2 gap-5">
        {posts.data.map((post, i) => (
          <div key={i} className="new-card mb-12">
            <div className="new-card__container border-b border-slate-300 pb-12">
              <Image
                alt="Imagen de la noticia"
                src={post.attributes?.image.data[0].attributes.url}
                width={1200}
                height={1200}
                className="mb-3"
              />
              <Link
                href={`/`}
                className="mb-3 font-semibold text-red-500 hover:text-red-800 capitalize underline mt-2 py-3"
              >
                {post.attributes?.categories.data[0].attributes.title}
              </Link>
              <h4 className="text-xl font-medium">{post.attributes?.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleNews;
