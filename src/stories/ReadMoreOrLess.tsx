import React, { useState } from "react";

interface IReadMore {
  story: string | string[];
  stringLength: number;
}

const ReadMoreOrLess = ({ story, stringLength }: IReadMore) => {
  const [readMore, setReadMore] = useState<Boolean>(false);
  let List;
  typeof story !== "string" && readMore === false
    ? (List = story?.filter((ele, id) => id < 3))
    : typeof story !== "string"
    ? (List = story)
    : null;

  return (
    <>
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
      <div className="mt-5 ml-5 xl:max-w-7xl xl:m-auto">
        <div
          className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-24 cursor-pointer border border-[#8A1E61]"
          onClick={() => setReadMore(!readMore)}
        >
          <h3 className="">{!readMore ? "Read More" : "Read Less"}</h3>
        </div>
      </div>
    </>
  );
};

export default ReadMoreOrLess;
