import React, { useState } from "react";
import Image from "next/image";
import { NameTitle } from "./NameTitle";
import { FloorSection } from "./FloorSection";
import { floorPlanImages } from "src/data/constants";
import ReadMoreOrLess from "./ReadMoreOrLess";

interface IDetailedDescriptionSection {
  image: string;
  detailedDescription: {
    propertyName: string;
    title: string;
    list: {
      id: number;
      description: string;
      title: string;
    }[];
  };
}

export const DetailedDescriptionSection = ({
  image,
  detailedDescription,
}: IDetailedDescriptionSection) => {
  const [readMore, setReadmore] = useState(false);

  const { propertyName, title, list } = detailedDescription;
  let filteredList;

  if (readMore) {
    filteredList = list;
  } else {
    filteredList = list.filter((ele, id) => id < 1);
  }

  return (
    <div id="detail-description-to-view">
      <div className=" sm:min-w-screen">
        <Image
          src={image}
          alt="StoryImage"
          width={390}
          height={127}
          className="w-full"
        />
      </div>
      <div className="relative px-4 py-8 mx-5 -mt-16 bg-white sm:-mt-24 xl:-mt-60 xl:w-full xl:max-w-7xl xl:mx-auto md:px-8 md:py-11">
        <NameTitle propertyName={propertyName} title={title} />
        <div className="mb-8 space-y-10">
          <div className="space-y-10">
            {filteredList.map((item, index) => {
              const isList =
                item.description.includes("\n-") ||
                item.description.includes("\n -");
              if (isList) {
                let list = item.description.split(/\n-|\n -/);
                list[0] = list[0].substring(1);
                return (
                  <>
                    <p className="mb-4 text-base uppercase">{item.title}</p>
                    <ul
                      key={index}
                      className="m-auto mb-8 ml-8 mr-8 text-xl leading-8 list-disc"
                    >
                      {list.map((item, id) => {
                        return (
                          <li
                            key={id}
                            className="text-xl text-[#545456] ml-2 md:ml-0 font-centaur leading-8 "
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                );
              } else {
                return (
                  <div key={index}>
                    <p className="mb-4 text-base uppercase">{item.title}</p>
                    <p className="text-base md:text-xl text-[#545456] font-centaur leading-[22px] md:leading-[34px]">
                      {item.description}
                    </p>
                  </div>
                );
              }
            })}
            {readMore && <FloorSection floorPlanImages={floorPlanImages} />}
          </div>
        </div>
        <div className="mt-5 ml-5 xl:max-w-7xl xl:m-auto">
          <div
            className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-24 cursor-pointer border border-[#8A1E61]"
            onClick={() => setReadmore(!readMore)}
          >
            <h3 className="">{!readMore ? "Read More" : "Read Less"}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
