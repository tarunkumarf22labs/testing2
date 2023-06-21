import useIsMobile from "@/hooks/useIsMobile";
import React, { useRef } from "react";
import { curratedCollectionsModelData } from "src/data/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollButton } from "./ScrollButton";
import Image from "next/image";

interface ICuratedExpModal {
  id: number;
}

export const CuratedExpModal = ({ id }: ICuratedExpModal) => {
  const propertyCuratedExperience = curratedCollectionsModelData[id].list;
  const swiperOneRef = useRef(null);
  const isMobile = useIsMobile();
  return (
    <div className="relative md:pb-24 max-w-[350px] md:max-w-[512px]">
      <Swiper
        ref={swiperOneRef}
        onSwiper={(swiper) => {
          swiperOneRef.current = swiper;
        }}
        slidesPerView="auto"
        className="relative"
        centeredSlides={isMobile}
        centeredSlidesBounds={isMobile}
      >
        {propertyCuratedExperience?.map((el, idx) => {
          const bulletPoints = el.details.split("\n -");
          return (
            <SwiperSlide
              key={`${idx + 1}`}
              className="w-full max-w-[350px] md:max-w-[512px] md:w-[512px]"
            >
              <div className="">
                <Image
                  src={el.img}
                  alt={el.title}
                  width={512}
                  height={320}
                  className="mb-6"
                />
                <p className="text-xs text-[#8A1E61] mb-2">
                  {el.nights} Nights
                </p>
                <h3 className="text-xl capitalize mb-4">{el.title}</h3>
                <ul className="list-disc space-y-3">
                  {bulletPoints?.map((elem, index) => {
                    return (
                      <li
                        key={index}
                        className="ml-4 font-centaur text-[#545456]"
                      >
                        {elem}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="hidden md:block absolute bottom-0 translate-x-[50%] right-[50%] z-10">
        <ScrollButton
          onNextPress={() => swiperOneRef?.current?.slideNext()}
          onPrevPress={() => swiperOneRef?.current?.slidePrev()}
        />
      </div>
    </div>
  );
};
