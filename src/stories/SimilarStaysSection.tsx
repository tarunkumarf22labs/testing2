import React from "react";
import SimilarStaysCard from "./SimilarStaysCard";
import { ScrollButton } from "./ScrollButton";

const stays = [
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
];

const SimilarStaysSection = () => {
  return (
    <div className="bg-white relative py-10 lg:py-20">
      <div className="relative px-5 md:ml-[max(0px,(100%_-_80rem)/2)] xl:px-0">
        <div className="uppercase pb-6 sm:pb-10">
          <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
            {"LuxUNLOCK’s"}
          </p>
          <p className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light">
            {"SMILAR STAYS FOR YOU"}
          </p>
        </div>
        <div className="flex gap-x-5 md:gap-x-[60px] overflow-scroll no-scrollbar ">
          {stays?.map((el) => {
            return (
              <SimilarStaysCard
                heading=""
                subHeading=" "
                paragraph=""
                imageUrl={el}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute top-40 right-5 sm:top-72 sm:right-20">
        <ScrollButton />
      </div>
    </div>
  );
};

export default SimilarStaysSection;
