import Image from "next/image";
import React, { useState } from "react";
import ReadMoreOrLess from "./ReadMoreOrLess";

interface IStorySection {
  isStory?: boolean;
  heading?: string;
  secondheading?: string;
  story?: string | string[];
  image?: string;
  stringLength: number;
}

export const StorySection = ({
  isStory = true,
  heading,
  story,
  image,
  secondheading,
  stringLength
}: IStorySection) => {
  const [readMore, setReadMore] = useState<Boolean>(false);
  let List;
  typeof story !== "string" && readMore === false
    ? (List = story.filter((ele, id) => id < 3))
    : typeof story !== "string"
    ? (List = story)
    : null;
  return (
    <div className="mb-20"id={`${secondheading}-for-scroll`}>
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
        {typeof story === "string" ? (
          <div className="mb-8">
            <p className="text-base text-[#545456] font-centaur leading-[22px] md:leading-[34px] md:text-[22px]">
              {readMore
                ? story
                : story?.length > stringLength
                ? story?.slice(0, stringLength - 3) + "... "
                : story}
            </p>
          </div>
        ) : (
          <div>
            <ul className="m-auto mb-8 ml-8 mr-8 text-xl leading-8 list-disc">
              {List.map((ele, id) => {
                return (
                  <li
                    key={id}
                    className="text-xl text-[#545456] ml-2 md:ml-0 font-centaur leading-8 "
                  >
                    {ele}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <ReadMoreOrLess setReadMore={setReadMore} readMore={readMore} />
      </div>
    </div>
  );
};
