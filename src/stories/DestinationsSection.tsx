import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Container } from './Container';
import TabButton from './TabButton';
import { destinationsSection } from 'src/data/constants';
import { ScrollButton } from './ScrollButton';
import useIsMobile from '@/hooks/useIsMobile';
import DestinationCard from './DestinationCard';
import { IDestination } from 'src/Interface/home-page';
import { villaInterface } from 'src/Interface';
import useGsapHomeAnimations from '@/hooks/useGsapHomeAnimations';
import { gsap_animation_sections } from 'src/types/enum';

const DestinationsSection = ({
  destinations,
  villas,
  destinationSectionheading,
  destinationSectiontext,
  istagsdisable = true
}: {
  destinations: IDestination[];
  villas: villaInterface[];
  destinationSectionheading: string;
  destinationSectiontext?: string;
  istagsdisable?: boolean;
}) => {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(destinations?.[0]);

  useGsapHomeAnimations(gsap_animation_sections.destination);

  const getAvailableAddress = useCallback((destination: IDestination) => {
    if (destination?.city?.data)
      return { availableType: 'city', data: destination?.city?.data };
    else if (destination?.state?.data)
      return { availableType: 'state', data: destination?.state?.data };
    else if (destination?.country?.data)
      return { availableType: 'country', data: destination?.country?.data };
    else if (destination?.region?.data)
      return { availableType: 'region', data: destination?.region?.data };
    else return null;
  }, []);

  const selectedDestinationVillas = useMemo(() => {
    return villas?.filter(
      (el) =>
        el?.attributes?.address?.[
          getAvailableAddress(selectedCategory)?.availableType
        ]?.data?.attributes?.name ===
        getAvailableAddress(selectedCategory)?.data?.attributes?.name
    );
  }, [selectedCategory]);
  const DestinationVillas = istagsdisable ? selectedDestinationVillas : villas;
  return (
    <div className="gsap-destination-section">
      <Container bgWhite={isMobile ? true : false} slider>
        <div className="uppercase text-[26px] md:text-[52px] text-center md:text-left tracking-[0.8px] md:tracking-[1.04px] font-light leading-[48px] md:leading-[68px] text-[#1C1917] mt-3 md:mt-5 overflow-hidden">
          <h1 className="gsap-destination-section-heading-text opacity-0">
            {destinationSectionheading}
          </h1>
        </div>
        {destinationSectiontext && (
          <p className="py-3  max-w-[1239px]">{destinationSectiontext}</p>
        )}
        <div>
          {istagsdisable && (
            <div className="gsap-destination-section-tab opacity-0 flex gap-6 mt-8 md:mt-10 overflow-x-auto pb-4">
              {destinations?.map((el, idx) => {
                return (
                  <TabButton
                    key={`${idx}`}
                    title={getAvailableAddress(el)?.data?.attributes?.name}
                    isSelected={
                      getAvailableAddress(selectedCategory)?.data?.attributes
                        ?.name ===
                      getAvailableAddress(el)?.data?.attributes?.name
                    }
                    onClick={() => setSelectedCategory(el)}
                  />
                );
              })}
            </div>
          )}
          <div className="mt-10">
            <Swiper
              ref={swiperRef}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setAllowSlideNext(Boolean(swiper?.allowSlideNext));
                setAllowSlidePrev(Boolean(swiper?.allowSlidePrev));
              }}
              spaceBetween={isMobile ? 24 : 80}
              slidesPerView={'auto'}
              centeredSlides={false}
              slideToClickedSlide
              className="relative"
              watchOverflow={true}
            >
              {DestinationVillas?.map((property, idx) => {
                return (
                  <SwiperSlide
                    key={`${idx}`}
                    className="gsap-destination-section-item w-full max-w-[284px] md:max-w-[500px]"
                  >
                    <DestinationCard
                      name={property?.attributes?.name}
                      city={
                        property?.attributes?.address?.city?.data?.attributes
                          ?.name
                      }
                      state={
                        property?.attributes?.address?.state?.data?.attributes
                          ?.name
                      }
                      imageUrl={
                        property?.attributes?.images?.[0]?.image?.data
                          ?.attributes?.url
                      }
                      amenities={property?.attributes?.amenities?.data?.map(
                        (el) => el?.attributes?.title
                      )}
                      basicPrice={property?.attributes?.pricing?.basic}
                    />
                  </SwiperSlide>
                );
              })}
              {allowSlideNext || allowSlidePrev ? (
                <div
                  className={
                    'absolute right-16 md:right-20 flex justify-end bottom-1/2 -translate-y-1/2 z-10'
                  }
                >
                  <ScrollButton
                    onNextPress={() => swiperRef?.current?.slideNext()}
                    onPrevPress={() => swiperRef?.current?.slidePrev()}
                  />
                </div>
              ) : null}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DestinationsSection;
