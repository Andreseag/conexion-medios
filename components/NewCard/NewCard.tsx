import React from "react";
import Link from "next/link";
import Image from "next/image";

// types
import { Post } from "@/types/posts.type";

interface Props {
  post: Post;
  className?: string;
}

const NewCard = ({ post, className }: Props) => {
  return (
    <div className={`new-card mb-12 ${className}`}>
      <div className="new-card__container border-b border-slate-300 pb-12">
        <Link href={`/noticias/${post.attributes.slug}`}>
          <Image
            alt="Imagen de la noticia"
            src={post.attributes?.image.data[0].attributes.url}
            width={1200}
            height={1200}
            className="mb-3"
          />
        </Link>
        <Link
          href={`/`}
          className="mb-3 font-semibold text-red-500 hover:text-red-800 capitalize underline mt-2 py-3"
        >
          {post.attributes?.categories.data[0].attributes.title}
        </Link>
        <Link href={`/noticias/${post.attributes.slug}`}>
          <h4 className="text-xl font-medium hover:text-slate-500">
            {post.attributes?.title}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default NewCard;
