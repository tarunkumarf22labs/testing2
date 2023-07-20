import { useRef } from 'react';
import Image from 'next/image';
import { ScrollButton } from './ScrollButton';
import { journeySection } from 'src/data/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const JourneyMobile = ({ data }: { data: any[] }) => {
  const swiperRef = useRef(null);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#18181B] uppercase text-[40px] font-light tracking-[0.8px] mt-3">
        {journeySection.heading}
      </h1>
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
                  <h2 className="text-center text-[#1C1917] text-[32px] font-light tracking-[0.64px]">
                    New Villa In Sri Lanka
                  </h2>
                  <p className="text-center mt-4 text-[#545456] font-normal leading-6">
                    {el?.para}
                  </p>
                  <div className="w-full h-[231px] relative mt-8">
                    <Image
                      src={el?.big}
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