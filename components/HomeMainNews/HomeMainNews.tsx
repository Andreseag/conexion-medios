import Image from "next/image";

import { Posts } from "@/app/types/posts.type";
import MainNew from "../MainNew/MainNew";
import MiddleNews from "../MiddleNews/MiddleNews";
import SideNews from "../SideNews/SideNews";
import Link from "next/link";

interface Props {
  mainPost: Posts;
  posts: Posts;
  politicsPosts: Posts;
  actualityPosts: Posts;
}

const HomeMainNews = ({
  mainPost,
  posts,
  politicsPosts,
  actualityPosts,
}: Props) => {
  return (
    <div className="home-main-news">
      <div className="home-main-news__container">
        <div className="home-main-news__principals flex gap-10">
          <SideNews posts={actualityPosts} />
          <div className="center-news w-1/2">
            <MainNew mainPost={mainPost} />
            <MiddleNews posts={politicsPosts} />
          </div>
          <SideNews posts={politicsPosts} />
        </div>
        <div className="home-main-news__videos">
          <div className="home-main-news__videos__title border-b border-slate-300 py-2 mb-10">
            <h2 className="text-4xl font-semibold text-slate-900">Videos</h2>
          </div>
          <div className="home-main-news__videos__main-post flex gap-14">
            <div className="home-main-news__videos__main-post__image w-6/12">
              <Image
                alt="Imagen de la noticia"
                src={mainPost?.data[0].attributes?.image.data[0].attributes.url}
                width={1200}
                height={1200}
              />
            </div>
            <div className="home-main-news__videos__main-post__content w-6/12">
              <Link
                href={`/`}
                className="font-semibold text-red-500 hover:text-red-800 capitalize underline mt-2 py-3"
              >
                {
                  mainPost?.data[0].attributes?.categories.data[0].attributes
                    .title
                }
              </Link>
              <h3 className="text-4xl font-semibold mt-2">
                {mainPost?.data[0].attributes?.title}
              </h3>
            </div>
          </div>
          <div className="home-main-news__videos__last-posts mt-8">
            <div className="new-card mb-12 flex gap-10">
              {politicsPosts.data.map((post, i) => (
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
                    <h4 className="text-xl font-medium">
                      {post.attributes?.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainNews;
