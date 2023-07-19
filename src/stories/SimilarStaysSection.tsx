import React, { useRef } from 'react';
import SimilarStaysCard from './SimilarStaysCard';
import { ScrollButton } from './ScrollButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useIsMobile from '@/hooks/useIsMobile';
import { Container } from './Container';
import classNames from 'classnames';

interface ISimilarStaySection {
  heading?: string;
  inVillaDetails?: boolean;
  villaData: {
    name: string;
    city: string;
    state: string;
    image: {
      image: string;
      width: number;
      height: number;
      alt: string;
    };
    amenities: string[];
    basicPrice: number;
  }[];
}

const SimilarStaysSection = ({
  heading,
  villaData,
  inVillaDetails
}: ISimilarStaySection) => {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();
  return (
    <Container bgWhite slider={inVillaDetails ? false : true}>
      <div className="pb-6 uppercase sm:pb-10">
        {heading && (
          <>
            <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
              {'LuxUNLOCK’s'}
            </p>
            <p className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light">
              {heading}
            </p>
          </>
        )}
      </div>
      <Swiper
        ref={swiperRef}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={'auto'}
        className="relative"
        centeredSlides={isMobile}
        centeredSlidesBounds={isMobile}
      >
        {villaData?.map((villaData, idx) => {
          return (
            <SwiperSlide
              key={`${idx + 1}`}
              className={`${
                inVillaDetails
                  ? 'w-full max-w-[290px] md:max-w-[373px] pr-5'
                  : 'w-[284px] max-w-[300px] md:w-[500px] md:max-w-[500px] mr-10'
              }`}
            >
              <SimilarStaysCard
                {...villaData}
                inVillaDetails={inVillaDetails}
                duration={idx}
              />
            </SwiperSlide>
          );
        })}
        <div className="hidden md:block absolute top-[50%] -translate-y-[50%] right-5 z-10">
          <ScrollButton
            onNextPress={() => swiperRef?.current?.slideNext()}
            onPrevPress={() => swiperRef?.current?.slidePrev()}
          />
        </div>
      </Swiper>
    </Container>
  );
};

export default SimilarStaysSection;
