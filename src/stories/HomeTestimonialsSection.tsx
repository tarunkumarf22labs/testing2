import React, { useEffect, useRef, useState } from 'react';
import { ISingleTestimonial } from 'src/Interface/home-page';
import { Container } from './Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import useIsMobile from '@/hooks/useIsMobile';
import { ScrollButton } from './ScrollButton';
import GuestSpeakCard from './GuestSpeakCard';
import Image from 'next/image';
import { homeTestimonialSection } from 'src/data/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HomeTestimonialsSection = ({ data }: { data: ISingleTestimonial[] }) => {
  const scrollerStartRef = useRef(null);
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: 'power4.out'
        }
      });

      timeline
        .fromTo(
          '.gsap-home-testimonial-section-heading-text',
          {
            y: 100,
            skewY: 5,
            opacity: 0
          },
          {
            y: 0,
            skewY: 0,
            opacity: 1
          }
        )
        .fromTo(
          '.gsap-home-testimonial-section-item',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1 },
          0.5
        )
        .fromTo(
          '.gsap-home-testimonial-section-tab',
          { opacity: 0 },
          { opacity: 1 },
          '<'
        );

      ScrollTrigger.create({
        trigger: '.gsap-home-testimonial-section',
        start: 'top 50%',
        end: 'bottom bottom',
        animation: timeline
      });

      ScrollTrigger.create({
        trigger: scrollerStartRef?.current,
        start: 'top 100%',
        end: 'bottom 0%',
        toggleActions: 'play none reverse none',
        invalidateOnRefresh: true,
        animation: gsap.from('.gsap-home-testimonial-section-image', {
          scale: 1.5
        }),
        scrub: 1
      });
    }, [scrollerStartRef]);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollerStartRef} className="gsap-home-testimonial-section">
      <Container bgWhite slider innerContainerClassName="xl:py-0">
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
                <div className="flex gap-20 justify-center md:justify-start">
                  <div className="flex flex-col gap-8 md:gap-20 items-center md:items-start">
                    <div className="lg:mt-20">
                      <p className="gsap-home-testimonial-section-heading-text text-[#8A1E61] text-center md:text-left uppercase text-sm font-[450] md:tracking-[4.2px]">
                        {homeTestimonialSection.theirExperience}
                      </p>
                      <h1 className="gsap-home-testimonial-section-heading-text text-[28px] text-center md:text-left lg:text-[52px] font-[330] text-[#1C1917] uppercase mt-5">
                        {homeTestimonialSection.heading}
                      </h1>
                    </div>
                    <div className="gsap-home-testimonial-section-item max-w-[540px] flex flex-col items-center md:items-start">
                      <GuestSpeakCard
                        experience={review?.attributes?.testimonial?.experience}
                        avatar={
                          review?.attributes?.testimonial?.avatar?.data
                            ?.attributes?.url
                        }
                        name={review?.attributes?.testimonial?.name}
                      />
                      {allowSlideNext || allowSlidePrev ? (
                        <div className="gsap-home-testimonial-section-tab mt-6 md:mt-[56px]">
                          <ScrollButton
                            onNextPress={() => swiperRef?.current?.slideNext()}
                            onPrevPress={() => swiperRef?.current?.slidePrev()}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="hidden lg:block flex-1 h-full w-full max-h-[814px] max-w-[721px] overflow-hidden">
                    <Image
                      src={
                        review?.attributes?.portraitImage?.data?.attributes?.url
                      }
                      alt="villa_image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="gsap-home-testimonial-section-image h-[814px] w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default HomeTestimonialsSection;
