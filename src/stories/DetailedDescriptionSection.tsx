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
    plainPara: { heading: string; detail: string }[];
    listPara: { heading: string; detail: string }[];
  };
}

export const DetailedDescriptionSection = ({
  image,
  detailedDescription,
}: IDetailedDescriptionSection) => {
  const [readMore, setReadmore] = useState(false);

  const { propertyName, title, plainPara, listPara } = detailedDescription;
  return (
    <div id="detail-description-to-view">
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
        <NameTitle propertyName={propertyName} title={title} />
        <div className="mb-8 space-y-10">
          <div className="space-y-10">
            {plainPara.map((item, index) => {
              return (
                <div key={index}>
                  <p className="mb-4 text-base uppercase">{item.heading}</p>
                  <p className="text-base md:text-xl text-[#545456] font-centaur leading-[22px] md:leading-[34px]">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
          {readMore ? (
            <div className="space-y-10">
              {listPara.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="mb-4 text-base uppercase">{item.heading}</p>
                    <p className="text-base md:text-xl text-[#545456] font-centaur leading-[22px] md:leading-[34px]">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
              {readMore && <FloorSection floorPlanImages={floorPlanImages} />}
            </div>
          ) : null}
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
