import Image from "next/image";
import React from "react";

interface IStorySection {
  heading?: string;
  story?: string;
}

export const StorySection = ({ heading, story }: IStorySection) => {
  return (
    <div className="my-8 sm:my-10">
      <div className="-z-10 sm:min-w-screen">
        <Image
          src="/images/StoryImage.png"
          alt="StoryImage"
          width={390}
          height={127}
          className="w-full"
        />
      </div>
      <div className=" relative -mt-16 sm:-mt-24 xl:-mt-60  xl:w-full xl:max-w-[1240px] bg-white mx-5  xl:mx-auto px-4 py-8 z-50 md:px-8 md:py-11">
        <p className="uppercase text-sm text-[#8A1E61] mb-2 sm:mb-5  tracking-wider">
          {heading}
        </p>
        <p className="uppercase text-3xl md:text-5xl mb-6"> STORY</p>
        <p className="text-base text-[color: #545456;] font-centaur md:text-2xl ">
          {story}
        </p>
      </div>
    </div>
  );
};
