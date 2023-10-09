import { Posts } from "@/app/types/posts.type";
import MainNew from "../MainNew/MainNew";
import MiddleNews from "../MiddleNews/MiddleNews";
import SideNews from "../SideNews/SideNews";

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
      <div className="home-main-news__container flex gap-10">
        <SideNews posts={actualityPosts} />
        <div className="center-news w-1/2">
          <MainNew mainPost={mainPost} />
          <MiddleNews posts={politicsPosts} />
        </div>
        <SideNews posts={politicsPosts} />
      </div>
    </div>
  );
};

export default HomeMainNews;
