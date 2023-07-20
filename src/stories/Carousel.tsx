import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
interface CarouselProps {
  images: string[];
  bannerImageStyle: string;
  bannerTextStyle: string;
  bannerText: string | (JSX.Element | string)[];
  locations?: {
    id: number;
    type: string;
    title: string;
  }[];
}
import { Autoplay } from 'swiper';
import HomeSearchBar from './HomeSearchBar';
import { Container } from './Container';
import { CalendarBlank, MagnifyingGlass, Users } from '@phosphor-icons/react';

export default function Carousel({
  images,
  bannerImageStyle,
  bannerTextStyle,
  bannerText,
  locations
}: CarouselProps) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(true);
  };

  return (
    <div className="relative text-center md:-mt-[100px] h-[480px] md:h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper h-full w-full"
      >
        {images.map((ele, idx) => {
          return (
            <SwiperSlide key={idx} className="ease-in-out">
              <Image
                src={ele}
                width={0}
                height={0}
                sizes="100vw"
                alt="Poster Image"
                className={bannerImageStyle}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Container
        bgTransparent
        className={`md:bg-black/20 absolute h-full inset-0 z-10 pt-16 md:pt-0`}
        innerContainerClassName="flex h-full flex-col md:items-center px-0 xl:px-5 py-0 lg:py-20 md:justify-center"
      >
        {showFilterMenu ? null : (
          <div
            onClick={toggleFilterMenu}
            className="flex md:hidden h-[48px] w-full bg-[#F8F8F9] items-center px-5"
          >
            <MagnifyingGlass size={20} />
            <p className="flex-1 text-[#7B8084] text-[10px] font-[420] text-left pl-3">
              Select Destination
            </p>
            <CalendarBlank size={20} className="mr-4" />
            <Users size={20} />
          </div>
        )}
        <div className="hidden flex-1 md:flex items-center justify-center">
          <h1
            className={`capitalize animate-slide-down max-w-[830px] leading-[68px] font-[330] ${bannerTextStyle} text-4xl md:text-[52px]`}
          >
            {bannerText}
          </h1>
        </div>
        <motion.div
          animate={{
            opacity: 1
          }}
          initial={{
            opacity: 0
          }}
          transition={{
            duration: 1
          }}
          className={'w-full mb-20 hidden md:block'}
        >
          <HomeSearchBar locations={locations} />
        </motion.div>

        {showFilterMenu ? (
          <motion.div
            animate={{
              opacity: 1
            }}
            initial={{
              opacity: 0
            }}
            transition={{
              duration: 1
            }}
            className={'w-full block md:hidden'}
          >
            <HomeSearchBar locations={locations} />
          </motion.div>
        ) : null}
      </Container>
    </div>
  );
}
