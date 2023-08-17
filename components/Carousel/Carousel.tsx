"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

const Carousel = () => {
  return (
    <div className="carousel-home mt-8">
      <div className="carousel-home__container">
        <Swiper spaceBetween={0} slidesPerView={1}>
          <SwiperSlide>
            <div className="carousel-home__slide">
              <div className="carousel-home__slide__content">
                <Image
                  src="/img/AFICHE-COLONIAS-2023-FINAL-BIO-FACEBOOK.jpg"
                  width={1920}
                  height={1080}
                  alt="carousel-1"
                  className="object-cover h-60 sm:h-72 md:h-96"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
