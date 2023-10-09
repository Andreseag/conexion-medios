import Link from "next/link";
import Image from "next/image";
import { Posts } from "@/app/types/posts.type";

interface Props {
  posts: Posts;
}

const SideNews = ({ posts }: Props) => {
  return (
    <div className="side-news w-1/4">
      <div className="side-news__container">
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

export default SideNews;
