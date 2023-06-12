import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { motion } from "framer-motion"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface CarousalProps {
  images: string[];
}
import { Autoplay } from "swiper";
import Search from "./Search";

export default function Carousal(props: CarousalProps) {
  const text = 'UNLOCK THE LUXURY WITH LUXUNLOCK'
  const { images } = props;

  
  return (
    <div className="relative text-center md:-mt-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map((ele, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="w-full ease-in-out ">
                <Image
                  src={ele}
                  width={1920}
                  height={1080}
                  alt="Poster Image"
                  className=" h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="overflow-hidden Home-page-text-div absolute top-[35%] sm:top-[30%] left-[50%] z-[48] w-1/2 md:w-[50%] lg:1/3 xl:w-[30%] text-4xl font-[Brandon Grotesque] tracking-wide text-white">
        <motion.p className="animate-slide-down">UNLOCK THE LUXURY WITH LUXUNLOCK</motion.p>
        {/* {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: index * 0.1, duration: 0.5 }}

          
          // style={{ display: 'inline-block', marginRight: '4px' }}
          // initial={{ y: -50, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ delay: index * 0.1, duration: 0.5 }}

          style={{ display: 'inline-block', marginRight: '4px' }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.1 }}
            exit={{ y: 50, opacity: 0 }}
        >
          {letter}
        </motion.span>
      ))} */}

      </div>

    </div>
  );
}
