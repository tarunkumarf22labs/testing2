import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
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

const ExperiencesSections = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="bg-white py-10 lg:py-20">
        <div className="relative px-5 md:ml-[max(0px,(100%_-_80rem)/2)] xl:px-0">
          <div className="uppercase pb-6 sm:pb-10">
            <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
              {"DEJA VIEW'S"}
            </p>
            <p className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light">
              {"CURATED EXPERIENCES"}
            </p>
          </div>
          <div className="flex gap-x-5 md:gap-x-[60px] overflow-scroll no-scrollbar ">
            {experiences?.map((el) => {
              return (
                <ExperienceCard
                  heading=""
                  subHeading=" "
                  paragraph=""
                  imageUrl={el}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-20">
        <div className="relative px-5 md:ml-[max(0px,(100%_-_80rem)/2)] xl:px-0">
          <div className="uppercase pb-6 sm:pb-10">
            <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
              {"DEJA VIEW'S"}
            </p>
            <p className="text-3xl uppercase sm:text-5xl sm:text-[#1C1917] font-light">
              {"Experiences and attraction"}
            </p>
          </div>
          <div className="flex gap-x-5 md:gap-x-[60px] overflow-scroll no-scrollbar ">
            {experiences?.map((el) => {
              return <ExperienceCard heading="" paragraph="" imageUrl={el} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSections;
