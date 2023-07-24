import React, { useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Container } from './Container';
import TabButton from './TabButton';
import { curatedCollectionSection, viewAll } from 'src/data/constants';
import CuratedCollectionCard from './CuratedCollectionCard';
import classNames from 'classnames';
import { ScrollButton } from './ScrollButton';
import useIsMobile from '@/hooks/useIsMobile';
import { ICuratedCollection } from 'src/Interface/home-page';

const CuratedCollection = ({
  collections,
  curatedCollectionSectionheading
}: {
  collections: ICuratedCollection[];
  curatedCollectionSectionheading: string
}) => {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(collections?.[0]);

  const selectedCollectionVilla = useMemo(() => {
    return collections?.find((el) => el?.id === selectedCategory?.id)
      ?.properties?.data;
  }, [selectedCategory?.id]);

  return (
    <Container bgWhite={isMobile ? true : false} slider>
      <div>
        <h1 className="uppercase text-[26px] md:text-[52px] text-center md:text-left tracking-[0.8px] md:tracking-[1.04px] font-light leading-[48px] md:leading-[68px] text-[#1C1917] mt-3 md:mt-5">
          {curatedCollectionSectionheading}
        </h1>
        <div>
          <div className="flex gap-6 pb-4 mt-8 overflow-x-auto md:mt-10">
            {(collections?.length > 5
              ? collections.slice(0, 5)
              : collections
            )?.map((el, idx) => {
              return (
                <TabButton
                  key={`${idx}`}
                  title={el?.title}
                  isSelected={selectedCategory?.id === el?.id}
                  onClick={() => setSelectedCategory(el)}
                />
              );
            })}
            {collections?.length > 5 ? (
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
              {selectedCollectionVilla?.map((property, idx) => {
                return (
                  <SwiperSlide
                    key={`${idx}`}
                    className={classNames(
                      'max-w-[280px]',
                      activeIndex === idx ||
                        selectedCollectionVilla?.length === 2
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
                            selectedCollectionVilla?.length === 2
                            ? 'w-full md:h-[410px]'
                            : 'w-full md:h-[282px]'
                        )}
                        isActive={Boolean(
                          activeIndex === idx ||
                            selectedCollectionVilla?.length === 2
                        )}
                        name={property?.attributes?.name}
                        place={
                          property?.attributes?.address?.city?.data?.attributes
                            ?.name +
                          ', ' +
                          property?.attributes?.address?.state?.data?.attributes
                            ?.name
                        }
                        basePrice={property?.attributes?.pricing?.basic}
                        amenities={property?.attributes?.amenities?.data?.map(
                          (el) => el?.attributes?.title
                        )}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              {allowSlideNext || allowSlidePrev ? (
                <div
                  className={classNames(
                    'absolute right-16 md:right-20 flex justify-end bottom-1/2 -translate-y-1/2 z-10',
                    selectedCollectionVilla?.length === 2
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
