import { useRef } from 'react';
import Image from 'next/image';
import { ScrollButton } from './ScrollButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ISpotlightAndJourney } from 'src/Interface/home-page';

const JourneyMobile = ({
  data,
  journeySectionheading
}: {
  data: ISpotlightAndJourney[];
  journeySectionheading: string;
}) => {
  const swiperRef = useRef(null);
  return (
    <div className="flex flex-col items-center">
      <div className="text-[#18181B] uppercase text-[26px] font-light tracking-[0.8px] mt-3 overflow-hidden">
        <h1 className="gsap-journey-section-heading-text opacity-0">
          {journeySectionheading}
        </h1>
      </div>
      <div className="w-full mt-8">
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          centeredSlides={true}
          centeredSlidesBounds={true}
        >
          {data?.map((el, idx) => {
            return (
              <SwiperSlide key={`${idx}`} className="h-full w-full">
                <div className="h-full md:max-w-[350px] mx-auto">
                  <h2 className="gsap-journey-section-content text-center text-[#1C1917] text-[22px] font-light tracking-[0.64px] capitalize">
                    {el?.title}
                  </h2>
                  <p className="gsap-journey-section-content text-center mt-4 text-[#545456] font-normal leading-6">
                    {el?.description}
                  </p>
                  <div className="gsap-journey-section-button w-full h-[231px] relative mt-8">
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
          <div className="w-full flex justify-center mt-6">
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

export default JourneyMobile;
