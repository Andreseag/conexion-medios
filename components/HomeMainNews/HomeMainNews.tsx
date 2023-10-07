import { Posts } from "@/app/types/posts.type";
import MainNew from "../MainNew/MainNew";
import MiddleNews from "../MiddleNews/MiddleNews";
import SideNews from "../SideNews/SideNews";

interface Props {
  posts: Posts;
}

const HomeMainNews = ({ posts }: Props) => {
  return (
    <div className="home-main-news">
      <div className="home-main-news__container flex gap-10">
        <SideNews />
        <div className="center-news w-1/2">
          <MainNew posts={posts} />
          <MiddleNews />
        </div>
        <SideNews />
      </div>
    </div>
  );
};

export default HomeMainNews;
