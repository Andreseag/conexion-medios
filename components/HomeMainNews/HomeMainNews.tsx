import MainNew from "../MainNew/MainNew";
import MiddleNews from "../MiddleNews/MiddleNews";
import SideNews from "../SideNews/SideNews";

const HomeMainNews = () => {
  return (
    <div className="home-main-news">
      <div className="home-main-news__container flex gap-10">
        <SideNews />
        <div className="center-news w-1/2">
          <MainNew />
          <MiddleNews />
        </div>
        <SideNews />
      </div>
    </div>
  );
};

export default HomeMainNews;
