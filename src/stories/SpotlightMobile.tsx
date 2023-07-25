import { useRef, useState } from 'react';
import Image from 'next/image';
import { ScrollButton } from './ScrollButton';
import { spotLightSection } from 'src/data/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ISpotlightAndJourney } from 'src/Interface/home-page';

const SpotlightMobile = ({ data }: { data: ISpotlightAndJourney[] }) => {
  const swiperRef = useRef(null);

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="text-[#18181B] uppercase text-[40px] font-light tracking-[0.8px] mt-3 overflow-hidden">
        <h1 className="gsap-spotlight-section-heading-text opacity-0">
          {spotLightSection.heading}
        </h1>
      </div>
      <div className="w-full mt-8">
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setAllowSlideNext(Boolean(swiper?.allowSlideNext));
            setAllowSlidePrev(Boolean(swiper?.allowSlidePrev));
          }}
          slidesPerView={1}
          centeredSlides={true}
          centeredSlidesBounds={true}
          watchOverflow={true}
        >
          {data?.map((el, idx) => {
            return (
              <SwiperSlide key={`${idx}`} className="h-full w-full pb-8">
                <div className="h-full md:max-w-[350px] mx-auto">
                  <h2 className="gsap-spotlight-section-content text-center text-[#1C1917] text-[22px] font-light tracking-[0.64px] capitalize">
                    {el?.title}
                  </h2>
                  <p className="gsap-spotlight-section-content text-center mt-4 text-[#545456] font-normal leading-6">
                    {el?.description}
                  </p>
                  <div className="gsap-spotlight-section-button w-full h-[231px] relative mt-8">
                    <Image
                      src={el?.images?.data?.[0]?.attributes?.url}
                      alt="spotlight"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className={`absolute h-full w-full object-cover`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {allowSlideNext || allowSlidePrev ? (
            <div className="w-full flex justify-center mt-8">
              <ScrollButton
                onNextPress={() => swiperRef?.current?.slideNext()}
                onPrevPress={() => swiperRef?.current?.slidePrev()}
              />
            </div>
          ) : null}
        </Swiper>
      </div>
    </div>
  );
};

export default SpotlightMobile;
