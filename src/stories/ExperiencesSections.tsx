import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { ScrollButton } from "./ScrollButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const experiences = [
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

const ExperiencesSections = () => {
  const swiperOneRef = useRef(null);
  const swiperTwoRef = useRef(null);
  return (
    <div className="mt-10 lg:mt-20">
      <div className="bg-white relative py-10 lg:py-20">
        <div className="relative pl-5 md:ml-[max(0px,(100%_-_80rem)/2)] xl:pl-0">
          <div className="uppercase pb-6 sm:pb-10">
            <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
              {"DEJA VIEW'S"}
            </p>
            <p className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light">
              {"CURATED EXPERIENCES"}
            </p>
          </div>
          <Swiper
            ref={swiperOneRef}
            onSwiper={(swiper) => {
              swiperOneRef.current = swiper;
            }}
            slidesPerView={"auto"}
            className="relative"
            centeredSlides
            centeredSlidesBounds
          >
            {experiences?.map((el, idx) => {
              return (
                <SwiperSlide
                  key={`${idx + 1}`}
                  className="w-full max-w-[290px] md:max-w-[373px] pr-5"
                >
                  <ExperienceCard
                    heading=""
                    subHeading=" "
                    paragraph=""
                    imageUrl={el}
                  />
                </SwiperSlide>
              );
            })}
            <div className="hidden md:block absolute top-[50%] -translate-y-[50%] right-5 z-10">
              <ScrollButton
                onNextPress={() => swiperOneRef?.current?.slideNext()}
                onPrevPress={() => swiperOneRef?.current?.slidePrev()}
              />
            </div>
          </Swiper>
        </div>
      </div>
      <div className="relative py-10 lg:py-20">
        <div className="relative pl-5 md:ml-[max(0px,(100%_-_80rem)/2)] xl:pl-0">
          <div className="uppercase pb-6 sm:pb-10">
            <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
              {"DEJA VIEW'S"}
            </p>
            <p className="text-3xl uppercase sm:text-5xl sm:text-[#1C1917] font-light">
              {"Experiences and attraction"}
            </p>
          </div>
          <Swiper
            ref={swiperTwoRef}
            onSwiper={(swiper) => {
              swiperTwoRef.current = swiper;
            }}
            slidesPerView={"auto"}
            className="relative"
            centeredSlides
            centeredSlidesBounds
          >
            {experiences?.map((el, idx) => {
              return (
                <SwiperSlide
                  key={`${idx + 1}`}
                  className="w-full max-w-[290px] md:max-w-[373px] pr-5"
                >
                  <ExperienceCard heading="" paragraph="" imageUrl={el} />
                </SwiperSlide>
              );
            })}
            <div className="hidden md:block absolute top-[50%] -translate-y-[50%] right-5 z-10">
              <ScrollButton
                onNextPress={() => swiperTwoRef?.current?.slideNext()}
                onPrevPress={() => swiperTwoRef?.current?.slidePrev()}
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSections;
