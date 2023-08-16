import newsData from "@/app/data/news.data";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

export default function New({ params }: { params: { idNoticia: string } }) {
  const getNew = () => {
    const id = parseInt(params.idNoticia);
    const newSelected = newsData.find((n) => n.id === id);
    return newSelected;
  };

  const newSelected = getNew();

  return (
    <div className="layout flex justify-center mt-20">
      <div className="layout__container w-11/12 md:w-3/4 lg:w-3/5 xl:w-2/5">
        {newSelected && (
          <div className="new font-semibold ">
            <h1 className="text-center text-3xl capitalize text-slate-800">
              {newSelected.title}
            </h1>
            <p className="text-lg mt-8 mb-3 font-normal text-slate-600">
              {newSelected.description}
            </p>
            <div className="new__date border-t py-2 border-gray-400 mb-10">
              <span className="text-sm font-bold underline italic text-slate-700">
                {newSelected.autor}
              </span>
              <p className="text-sm font-normal text-slate-600">
                {newSelected.date}
              </p>
            </div>
            <Image
              alt="Imagen de la noticia"
              src={newSelected.image}
              width={800}
              height={600}
              className="mb-10"
            />

            <div className="content font-normal text-slate-600">
              {ReactHtmlParser(newSelected.content)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
