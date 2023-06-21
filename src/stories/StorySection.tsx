import ReadMore from "@/components/ReadMore/ReadMore";
import Image from "next/image";
import React, { useState } from "react";

interface IStorySection {
  isStory?: boolean;
  heading?: string;
  secondheading?: string;
  story?: string | string[];
  image?: string;
}

export const StorySection = ({
  isStory = true,
  heading,
  story,
  image,
  secondheading,
}: IStorySection) => {
  console.log(story);
  const [readMore, setReadMore] = useState(false);
  let List;
  typeof story !== "string" && readMore === false
    ? (List = story.filter((ele, id) => id < 3))
    : typeof story !== "string"
    ? (List = story)
    : null;
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
          <ReadMore
            text={story}
            textClassName={
              "text-base text-[#545456] font-centaur leading-[22px] md:leading-[34px] md:text-[22px]"
            }
            readMoreTextClassName={"text-[#8A1E61]"}
            maxChars={500}
          />
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
            <div className="mt-5 ml-5 xl:max-w-7xl xl:m-auto">
              <div
                className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-24 cursor-pointer border border-[#8A1E61]"
                onClick={() => setReadMore(!readMore)}
              >
                <h3 className="">{!readMore ? "Read More" : "Read Less"}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
