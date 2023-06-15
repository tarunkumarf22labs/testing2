import React, { useRef } from "react";
import SimilarStaysCard from "./SimilarStaysCard";
import { ScrollButton } from "./ScrollButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const stays = [
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
];

const SimilarStaysSection = () => {
  const swiperRef = useRef(null);
  return (
    <div className="bg-white relative py-10 lg:py-20">
      <div className="relative pl-5 md:ml-[max(0px,(100%_-_80rem)/2)] xl:pl-0">
        <div className="uppercase pb-6 sm:pb-10">
          <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
            {"LuxUNLOCK’s"}
          </p>
          <p className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light">
            {"SMILAR STAYS FOR YOU"}
          </p>
        </div>
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          className="relative"
        >
          {stays?.map((el, idx) => {
            return (
              <SwiperSlide
                key={`${idx + 1}`}
                className="w-full max-w-[373px] pr-5"
              >
                <SimilarStaysCard heading="" paragraph="" imageUrl={el} />
              </SwiperSlide>
            );
          })}
          <div className="absolute top-[50%] -translate-y-[50%] right-5 z-10">
            <ScrollButton
              onNextPress={() => swiperRef?.current?.slideNext()}
              onPrevPress={() => swiperRef?.current?.slidePrev()}
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarStaysSection;
