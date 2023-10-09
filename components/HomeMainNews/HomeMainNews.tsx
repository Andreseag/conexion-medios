import Image from "next/image";

import { Posts } from "@/app/types/posts.type";
import MainNew from "../MainNew/MainNew";
import MiddleNews from "../MiddleNews/MiddleNews";
import SideNews from "../SideNews/SideNews";
import Link from "next/link";
import NewCard from "../NewCard/NewCard";
import CategoryPostsBlock from "../CategoryPostsBlock/CategoryPostsBlock";

interface Props {
  mainPost: Posts;
  posts: Posts;
  politicsPosts: Posts;
  actualityPosts: Posts;
  videoPosts: Posts;
}

const HomeMainNews = ({
  mainPost,
  posts,
  politicsPosts,
  actualityPosts,
  videoPosts,
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
        <CategoryPostsBlock videoPosts={videoPosts} />
      </div>
    </div>
  );
};

export default HomeMainNews;
