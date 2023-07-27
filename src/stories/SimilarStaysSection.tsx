import React, { useRef, useState } from 'react';
import SimilarStaysCard from './SimilarStaysCard';
import { ScrollButton } from './ScrollButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useIsMobile from '@/hooks/useIsMobile';
import { Container } from './Container';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

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

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);

  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.similar_stays
  );

  return (
    <div className="gsap-pd-similar-stays-section">
      <Container bgWhite slider={inVillaDetails ? true : false}>
        <div className="pb-6 uppercase sm:pb-10">
          {heading && (
            <>
              <div className="text-sm text-[#8A1E61] mb-5 md:tracking-[4.2px] md:font-[450] overflow-hidden">
                <p className="gsap-pd-similar-stays-section-heading-text opacity-0">{`LuxUNLOCK’s`}</p>
              </div>
              <div className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light overflow-hidden">
                <h1 className="gsap-pd-similar-stays-section-heading-text opacity-0">
                  {heading}
                </h1>
              </div>
            </>
          )}
        </div>
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setAllowSlideNext(Boolean(swiper?.allowSlideNext));
            setAllowSlidePrev(Boolean(swiper?.allowSlidePrev));
          }}
          slidesPerView={'auto'}
          className="relative"
          centeredSlides={isMobile}
          centeredSlidesBounds={isMobile}
          watchOverflow={true}
        >
          {villaData?.map((villaData, idx) => {
            return (
              <SwiperSlide
                key={`${idx + 1}`}
                className={`${
                  inVillaDetails
                    ? 'w-full max-w-[290px] md:max-w-[373px] pr-5'
                    : 'w-full max-w-[284px] md:w-[500px] md:max-w-[500px] mr-10'
                } gsap-pd-similar-stays-section-content opacity-0`}
              >
                <SimilarStaysCard
                  {...villaData}
                  inVillaDetails={inVillaDetails}
                />
              </SwiperSlide>
            );
          })}
          {allowSlideNext || allowSlidePrev ? (
            <div className="hidden md:block absolute top-[50%] -translate-y-[50%] right-5 z-10">
              <ScrollButton
                onNextPress={() => swiperRef?.current?.slideNext()}
                onPrevPress={() => swiperRef?.current?.slidePrev()}
              />
            </div>
          ) : null}
        </Swiper>
      </Container>
    </div>
  );
};

export default SimilarStaysSection;
