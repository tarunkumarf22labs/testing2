import Image from "next/image";
import React, { useState } from "react";
import ReadMoreOrLess from "./ReadMoreOrLess";

interface IStorySection {
  isStory?: boolean;
  heading?: string;
  secondheading?: string;
  story?: string;
  image?: string;
  stringLength: number;
  initialListToShow: number;
}


export const StorySection = ({
  isStory = true,
  heading,
  story,
  image,
  secondheading,
  stringLength,
  initialListToShow
}: IStorySection) => {
  return (
    <div className="mb-20" id={`${secondheading}-for-scroll`}>
      <div className="-z-10 sm:min-w-screen">
        <Image
          src={image}
          alt="StoryImage"
          width={390}
          height={127}
          className="w-full"
        />
      </div>
      <div className="relative z-10 px-4 py-8 mx-5 -mt-16 bg-white sm:-mt-24 xl:-mt-60 xl:w-full xl:max-w-7xl xl:mx-auto md:px-8 md:py-11">
        {isStory && (
          <p className="uppercase text-sm text-[#8A1E61] mb-2 sm:mb-5  tracking-wider">
            {heading}
          </p>
        )}
        <p className="mb-6 text-3xl font-light uppercase md:text-5xl">
          {/* {isStory ? "STORY" : "Getting there"} */}
          {secondheading}
        </p>
        <ReadMoreOrLess story={story} stringLength={stringLength} initialListToShow={initialListToShow}/>
      </div>
    </div>
  );
};
