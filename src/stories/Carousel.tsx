import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface CarouselProps {
  images: string[];
  bannerImageStyle: string;
  bannerTextStyle: string;
  bannerText: string | (JSX.Element | string)[];
}
import { Autoplay } from "swiper";
import Search from "./Search";

export default function Carousel({ images,bannerImageStyle,bannerTextStyle,bannerText }: CarouselProps) {
    
  return (
    <>
    <div className="relative text-center md:-mt-28">
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
                  className={bannerImageStyle}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={`overflow-hidden ${bannerTextStyle} Home-page-text-div font-[Brandon Grotesque] tracking-wide text-4xl md:text-5xl`}>
        <p className="capitalize animate-slide-down">{bannerText}</p>
      </div>
    </div>
    <div className="relative m-auto bg-[#FFFFFF] lg:absolute top-[60%] lg:left-14 lg:right-14 xl:left-28 xl:right-24 w-[90%]">
        <Search/>
      </div>
    </>
  );
}
