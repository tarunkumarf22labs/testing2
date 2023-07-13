import React, { useState } from "react";

interface IReadMore {
  story: string;
  stringLength: number;
  initialListToShow: number;
}

const ReadMoreOrLess = ({
  story,
  stringLength,
  initialListToShow,
}: IReadMore) => {
  const [readMore, setReadMore] = useState<Boolean>(false);
  console.log("containsPattern: ", story);
  const containsPattern = story.includes("\n-") || story.includes("\n -");

  let storyList;
  let List;
  if (containsPattern) {
    storyList = story.split(/\n-|\n -/);
  }
  let a = storyList?.filter((ele, id) => id < initialListToShow);
  console.log("containsPattern: ", a);
  // return <></>
  if (containsPattern && readMore === false) {
    List = storyList?.filter((ele, id) => id < initialListToShow);
    // List[0] = List[0].substring(1);
  } else {
    List = storyList;
    // List[0] = List[0].substring(1);
  }

  console.log("containsPattern 2: ", containsPattern, List);
  return (
    <>
      {containsPattern === false ? (
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
      {(containsPattern && initialListToShow < storyList.length) ||
      (!containsPattern && story?.length > stringLength) ? (
        <div
          className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-24 cursor-pointer border border-[#8A1E61]"
          onClick={() => setReadMore(!readMore)}
        >
          <h3 className="">{!readMore ? "Read More" : "Read Less"}</h3>
        </div>
      ) : null}
    </>
  );
};

export default ReadMoreOrLess;
