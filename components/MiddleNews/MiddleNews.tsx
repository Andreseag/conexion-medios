// Components
import NewCard from "../NewCard/NewCard";

// Types
import { Posts } from "@/types/posts.type";

interface Props {
  posts: Posts;
}

const MiddleNews = ({ posts }: Props) => {
  return (
    <div className="middle-news mt-12">
      {posts.data && (
        <div className="middle-news__container grid grid-cols-2 gap-5">
          {posts.data.map((post, i) => (
            <NewCard key={i} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MiddleNews;
