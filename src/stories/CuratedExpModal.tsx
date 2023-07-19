import useIsMobile from '@/hooks/useIsMobile';
import React, { useRef, useState } from 'react';
import { curratedCollectionsModelData } from 'src/data/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ScrollButton } from './ScrollButton';
import Image from 'next/image';

interface ICuratedExpModal {
  id: number;
  villa: string;
  header: string;
  props: {
    image: {
      image: string;
      width: number;
      height: number;
      alt: string;
    };
    shortDescription: string;
    longDecription: string;
    title: string;
  }[];
}

export const CuratedExpModal = ({ props }: ICuratedExpModal) => {
  const propertyCuratedExperience = props;
  const swiperOneRef = useRef(null);
  const isMobile = useIsMobile();

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);

  return (
    <div className="relative md:pb-24 max-w-[350px] md:max-w-[512px]">
      <Swiper
        ref={swiperOneRef}
        onSwiper={(swiper) => {
          swiperOneRef.current = swiper;
          setAllowSlideNext(Boolean(swiper?.allowSlideNext));
          setAllowSlidePrev(Boolean(swiper?.allowSlidePrev));
        }}
        slidesPerView="auto"
        className="relative"
        centeredSlides={isMobile}
        centeredSlidesBounds={isMobile}
        watchOverflow={true}
      >
        {propertyCuratedExperience?.map((el, idx) => {
          const bulletPoints = el.longDecription.split(/\n-|\n -/);
          return (
            <SwiperSlide
              key={`${idx + 1}`}
              className="w-full max-w-[350px] md:max-w-[512px] md:w-[512px]"
            >
              <div className="z-[160]">
                <Image
                  src={el.image.image}
                  alt={el.title}
                  width={512}
                  height={320}
                  className="mb-6"
                />
                <p className="text-xs text-[#8A1E61] mb-2">
                  {/* {el.nights} Nights */}2 Nights
                </p>
                <h3 className="mb-4 text-xl capitalize">{el.title}</h3>
                <ul className="space-y-3 list-disc">
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
      {allowSlideNext || allowSlidePrev ? (
        <div className="hidden md:block absolute bottom-0 translate-x-[50%] right-[50%] z-10">
          <ScrollButton
            onNextPress={() => swiperOneRef?.current?.slideNext()}
            onPrevPress={() => swiperOneRef?.current?.slidePrev()}
          />
        </div>
      ) : null}
    </div>
  );
};
