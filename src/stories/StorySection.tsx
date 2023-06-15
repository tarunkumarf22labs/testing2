import ReadMore from "@/components/ReadMore/ReadMore";
import Image from "next/image";
import React from "react";

interface IStorySection {
  isStory?: boolean;
  heading?: string;
  story?: string;
  image?: string;
}

export const StorySection = ({
  isStory = true,
  heading,
  story,
  image,
}: IStorySection) => {
  return (
    <div>
      <div className="-z-10 sm:min-w-screen">
        <Image
          src={image}
          alt="StoryImage"
          width={390}
          height={127}
          className="w-full"
        />
      </div>
      <div className=" relative -mt-16 sm:-mt-24 xl:-mt-60  xl:w-full xl:max-w-7xl bg-white mx-5  xl:mx-auto px-4 py-8 z-10 md:px-8 md:py-11">
        {isStory && (
          <p className="uppercase text-sm text-[#8A1E61] mb-2 sm:mb-5  tracking-wider">
            {heading}
          </p>
        )}
        <p className="uppercase text-3xl md:text-5xl mb-6 font-light">
          {isStory ? "STORY" : "Getting there"}
        </p>
        <ReadMore
          text={story}
          textClassName={
            "text-base text-[#545456] font-centaur leading-[22px] md:leading-[34px] md:text-[22px]"
          }
          readMoreTextClassName={"text-[#8A1E61]"}
        />
      </div>
    </div>
  );
};
