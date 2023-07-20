import React, { useRef, useState } from 'react';
import { ISingleTestimonial } from 'src/Interface/home-page';
import { Container } from './Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import useIsMobile from '@/hooks/useIsMobile';
import { ScrollButton } from './ScrollButton';
import GuestSpeakCard from './GuestSpeakCard';
import Image from 'next/image';
import { homeTestimonialSection } from 'src/data/constants';

const HomeTestimonialsSection = ({ data }: { data: ISingleTestimonial[] }) => {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);

  return (
    <Container bgWhite innerContainerClassName="py-0 lg:py-0">
      <Swiper
        ref={swiperRef}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setAllowSlideNext(Boolean(swiper?.allowSlideNext));
          setAllowSlidePrev(Boolean(swiper?.allowSlidePrev));
        }}
        spaceBetween={isMobile ? 20 : 60}
        slidesPerView={'auto'}
        centeredSlides={false}
        slideToClickedSlide
        className="relative"
        watchOverflow={true}
      >
        {data?.map((review, idx) => {
          return (
            <SwiperSlide key={`${idx}`}>
              <div className="flex gap-20 justify-between">
                <div className="flex flex-col gap-8 md:gap-20 items-center md:items-start">
                  <div className="mt-20">
                    <p className="text-[#8A1E61] text-center md:text-left uppercase text-sm font-[450] md:tracking-[4.2px]">
                      {homeTestimonialSection.theirExperience}
                    </p>
                    <h1 className="text-[28px] text-center md:text-left lg:text-[52px] font-[330] text-[#1C1917] uppercase mt-5">
                      {homeTestimonialSection.heading}
                    </h1>
                  </div>
                  <div className="max-w-[540px] flex flex-col items-center md:items-start">
                    <GuestSpeakCard
                      experience={review?.attributes?.testimonial?.experience}
                      avatar={
                        review?.attributes?.testimonial?.avatar?.data
                          ?.attributes?.url
                      }
                      name={review?.attributes?.testimonial?.name}
                    />
                    {allowSlideNext || allowSlidePrev ? (
                      <div className="mt-6 md:mt-[56px]">
                        <ScrollButton
                          onNextPress={() => swiperRef?.current?.slideNext()}
                          onPrevPress={() => swiperRef?.current?.slidePrev()}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="hidden lg:block flex-1 h-full w-full max-h-[814px] max-w-[721px]">
                  <Image
                    src={
                      review?.attributes?.portraitImage?.data?.attributes?.url
                    }
                    alt="villa_image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default HomeTestimonialsSection;
