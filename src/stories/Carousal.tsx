import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface CarousalProps {
  images: string[];
}
import { Autoplay } from "swiper";

export default function Carousal(props: CarousalProps) {
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
              <div className="w-full h-screen ease-in-out ">
                <Image
                  src={ele}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Poster Image"
                  className="block w-full h-screen"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="Home-page-text-div absolute top-[50%] left-[50%] z-[48] w-1/2 md:w-[50%] lg:1/3 xl:w-[30%] text-4xl font-[Brandon Grotesque] tracking-wide text-white">
        <p>UNLOCK THE LUXURY WITH LUXUNLOCK</p>
      </div>
    </div>
  );
}
