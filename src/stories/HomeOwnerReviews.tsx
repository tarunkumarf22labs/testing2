import useIsMobile from "@/hooks/useIsMobile";
import React, { useRef } from "react";
import { ScrollButton } from "./ScrollButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HomeOwnerReviewsCard from "./HomeOwnerReviewsCard";

interface IHomeOwnerReviews {
  HomeOwnerReviewsCardProps : {
    description: string;
    date: string;
    id: number;
    name: string;
    image: string;
    link: string;
  }[];

}
const HomeOwnerReviews = ({HomeOwnerReviewsCardProps}:IHomeOwnerReviews) => {
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();
  
  return (
    <div className={`relative py-8 pl-0  lg:py-15`}>
      <div
        className={`relative pl-5 xl:pl-0 md:ml-[max(0px,(100%_-_80rem)/2)]`}
      >
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={"auto"}
          className="relative"
          centeredSlides={isMobile}
          centeredSlidesBounds={isMobile}
        >
          {HomeOwnerReviewsCardProps.map((ele, id) => {
            return (
              <SwiperSlide
                key={id}
                className="w-11/12 m-auto md:max-w-[500px] mr-10 bg-white relative"
              >
              <HomeOwnerReviewsCard description={ele.description} id={ele.id} name={ele.name} date={ele.date} image={ele.image} link={ele.link}/>
              </SwiperSlide>
            );
          })}
          <div className="block absolute bottom-1 right-[50%] translate-x-[50%] md:bottom-[50%] md:translate-x-0 md:top-[50%] md:translate-y-[50%] md:right-5 z-10">
            <ScrollButton
              onNextPress={() => swiperRef?.current?.slideNext()}
              onPrevPress={() => swiperRef?.current?.slidePrev()}
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeOwnerReviews;

