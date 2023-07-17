import React, { useRef } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { ScrollButton } from './ScrollButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useIsMobile from '@/hooks/useIsMobile';

interface IGallery {
  heading: {
    heading: string;
    subHeading: string;
  };
  bigImages: string[];
  smallImages: string[];
}

export const ImagesBig = [
  '/images/GalleryRoom1.png',
  '/images/GalleryRoom2.png',
  '/images/GalleryRoom1.png',
  '/images/GalleryRoom2.png',
  '/images/GalleryRoom1.png',
  '/images/GalleryRoom2.png'
];

export const ImagesSmall = [
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png',
  '/images/GallerySmallRoom1.png'
];

export const GallerySection = ({
  heading,
  bigImages = ImagesBig,
  smallImages = ImagesSmall
}: IGallery) => {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  return (
    <div className="mt-10 lg:mt-20 relative md:ml-[max(0px,(100%_-_80rem)/2)]">
      <div className="uppercase pb-6 pl-5 xl:pl-0 sm:pb-10">
        <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
          {heading.subHeading}
        </p>
        <p className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light">
          {heading.heading}
        </p>
      </div>
      <div className="pl-5 xl:pl-0">
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={'auto'}
          className="relative mb-6"
          centeredSlides={isMobile}
          centeredSlidesBounds={isMobile}
        >
          {bigImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-full pr-5 max-w-[290px] sm:max-w-[530px]"
            >
              <Image src={image} alt={String(index)} width={530} height={354} />
            </SwiperSlide>
          ))}
          <div className="hidden md:block absolute top-[50%] -translate-y-[50%] right-5 z-10">
            <ScrollButton
              onNextPress={() => swiperRef?.current?.slideNext()}
              onPrevPress={() => swiperRef?.current?.slidePrev()}
            />
          </div>
        </Swiper>
        <p className="text-[#8A1E61] text-xs uppercase md:hidden">VIEW ALL</p>
        <div className="hidden max-w-7xl h-[106px] pr-5 md:flex xl:pr-0">
          <div className="flex h-full w-[calc(100%_-_91px)] overflow-x-scroll space-x-3 no-scrollbar">
            {smallImages.map((image, index) => (
              <div
                key={index}
                className={classNames(
                  index > 0 && 'opacity-40',
                  'h-full min-w-[160px] '
                )}
              >
                <Image
                  src={image}
                  alt={String(index)}
                  width={160}
                  height={106}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
            className={
              'h-full w-[91px] bg-white flex items-center justify-center ml-4 cursor-pointer'
            }
          >
            <p className="uppercase text-[#8A1E61] text-xs font-medium">
              View All
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
