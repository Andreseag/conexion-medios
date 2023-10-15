import Link from "next/link";
import Image from "next/image";
import { Posts } from "@/app/types/posts.type";
import NewCard from "../NewCard/NewCard";

interface Props {
  posts: Posts;
}

const SideNews = ({ posts }: Props) => {
  return (
    <div className="side-news w-1/4">
      {posts.data && (
        <div className="side-news__container">
          {posts.data.map((post, i) => (
            <NewCard key={i} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideNews;
