import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Container } from './Container';
import TabButton from './TabButton';
import { curatedCollectionSection, viewAll } from 'src/data/constants';
import CuratedCollectionCard from './CuratedCollectionCard';
import classNames from 'classnames';
import { ScrollButton } from './ScrollButton';
import useIsMobile from '@/hooks/useIsMobile';

const data = [
  {
    category: 'LUXURY INDULGENCE',
    properties: [
      {
        place: 'Wayanad, Kerala',
        name: 'Deja View'
      },
      {
        place: 'Palakkad, Kerala',
        name: 'Gramercy House'
      },
      {
        place: 'Chennai, Tamil Nadu',
        name: "John's Villa"
      },
      {
        place: 'Salem, Tamil Nadu',
        name: "Elon's House"
      },
      {
        place: 'Pollachi, Tamil Nadu',
        name: 'Dream View'
      }
    ]
  },
  {
    category: 'PET FRIENDLY'
  },
  {
    category: 'THE PEAKS'
  },
  {
    category: 'CULTURAL HERITAGE'
  },
  {
    category: 'FOOD TRAIL'
  },
  {
    category: 'RANDOM'
  }
];

const CuratedCollection = () => {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(data?.[0]);

  return (
    <Container bgWhite={isMobile ? true : false} slider>
      <div>
        <p className="uppercase text-[#8A1E61] text-center md:text-left tracking-[3px] md:tracking-[4.2px] text-[10px] md:text-sm font-[450]">
          LuxUNLOCK’s
        </p>
        <h1 className="text-[40px] md:text-[52px] text-center md:text-left tracking-[0.8px] md:tracking-[1.04px] font-light leading-[48px] md:leading-[68px] text-[#1C1917] mt-3 md:mt-5">
          {curatedCollectionSection.heading}
        </h1>
        <div>
          <div className="flex gap-6 mt-8 md:mt-10 overflow-x-auto pb-4">
            {(data?.length > 5 ? data.slice(0, 5) : data)?.map((el, idx) => {
              return (
                <TabButton
                  key={`${idx}`}
                  title={el?.category}
                  isSelected={selectedCategory?.category === el?.category}
                  onClick={() => setSelectedCategory(el)}
                />
              );
            })}
            {data?.length > 5 ? (
              <TabButton title={viewAll} onClick={() => {}} />
            ) : null}
          </div>
          <div className="mt-2">
            <Swiper
              ref={swiperRef}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setAllowSlideNext(Boolean(swiper?.allowSlideNext));
                setAllowSlidePrev(Boolean(swiper?.allowSlidePrev));
              }}
              spaceBetween={isMobile ? 24 : 80}
              slidesPerView={'auto'}
              centeredSlides={true}
              onActiveIndexChange={(swiper) => {
                setActiveIndex(swiper?.activeIndex);
              }}
              slideToClickedSlide
              wrapperClass={activeIndex === 0 && '!translate-x-0'}
              className="relative"
              watchOverflow={true}
            >
              {selectedCategory?.properties?.map((property, idx) => {
                return (
                  <SwiperSlide
                    key={`${idx}`}
                    className={classNames(
                      'max-w-[280px]',
                      activeIndex === idx ||
                        selectedCategory?.properties?.length === 2
                        ? 'md:max-w-[620px]'
                        : 'md:max-w-[426px]'
                    )}
                  >
                    <div
                      className={classNames(
                        'box-content flex md:min-h-[474px] items-center',
                        activeIndex === idx - 1
                          ? 'justify-start'
                          : activeIndex === idx + 1
                          ? 'justify-end'
                          : 'justify-center md:pb-24'
                      )}
                    >
                      <CuratedCollectionCard
                        className={classNames(
                          'h-auto',
                          activeIndex === idx ||
                            selectedCategory?.properties?.length === 2
                            ? 'w-full md:h-[410px]'
                            : 'w-full md:h-[282px]'
                        )}
                        isActive={Boolean(
                          activeIndex === idx ||
                            selectedCategory?.properties?.length === 2
                        )}
                        name={property?.name}
                        place={property?.place}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              {allowSlideNext || allowSlidePrev ? (
                <div
                  className={classNames(
                    'absolute right-16 md:right-20 flex justify-end bottom-1/2 -translate-y-1/2 z-10',
                    selectedCategory?.properties?.length === 2
                      ? 'md:bottom-0'
                      : 'md:bottom-10'
                  )}
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
      </div>
    </Container>
  );
};

export default CuratedCollection;
