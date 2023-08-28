import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  newItem: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const NewCard = ({ newItem }: Props) => {
  return (
    <Link href={`/noticias/${newItem.id}`}>
      <div className="new-card w-full flex gap-1 md:gap-2">
        <div className="new-card__content w-1/2">
          <div className="new-card__title">
            <h3 className="text-left md:text-xl text-lg font-semibold text-slate-800 mb-4">
              {newItem.title}
            </h3>
            <p className="text-slate-600 hidden sm:block">
              {newItem.description}
            </p>
          </div>
        </div>
        <div className="new-card__image w-1/2">
          <Image
            alt="Imagen de la noticia"
            src={newItem.image}
            width={1200}
            height={1200}
            className="object-cover h-44 "
          />
        </div>
      </div>
    </Link>
  );
};

export default NewCard;
