import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CarousalProps {
  images: string[];
}

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousal(props: CarousalProps) {
  const { images } = props;
  return (
    <div className="relative md:-mt-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        // modules={[Autoplay, Pagination, Navigation]}

        className="mySwiper"
      >
        {images.map((ele, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="w-full h-screen ease-in-out ">
                <Image
                  src={ele}
                  width={100}
                  height={100}
                  alt="Poster Image"
                  className="block w-full h-screen"
                />
              </div>
            </SwiperSlide>
          );
        })}
        {/* max-w-md */}
      </Swiper>
      {/* <div className="font-light max-w-xs m-auto absolute sm:max-w-md  left-[20%] sm:w-96 sm:left-[30%] lg:left-[35%] bottom-[60%] text-white bg-transparent text-center text-4xl font-[Brandon Grotesque] tracking-wide z-50">
         <p>UNLOCK THE LUXURY WITH LUXUNLOCK</p>
      </div> */}
        <div className="font-light w-64 md:w-96 absolute  top-2/4 left-1/4 md:left-[40%] text-center text-white text-4xl font-[Brandon Grotesque] tracking-wide z-50">
         <p>UNLOCK THE LUXURY WITH LUXUNLOCK</p>
      </div>
    </div>
  );
}
