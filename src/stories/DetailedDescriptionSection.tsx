import React, { useState } from "react";
import Image from "next/image";
import { NameTitle } from "./NameTitle";

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
        <NameTitle propertyName={propertyName} title={title} />
        <div className="space-y-10">
          <div className="space-y-10">
            {plainPara.map((item, index) => {
              return (
                <div key={index}>
                  <p className="mb-4 text-base uppercase">{item.heading}</p>
                  <p className="text-base md:text-xl text-[#545456] font-centaur leading-[22px] md:leading-[34px]">
                    {item.detail}
                    {!readMore && (
                      <span>
                        {"... "}
                        <span
                          onClick={() => setReadmore(true)}
                          className="text-[#8A1E61] hover:underline cursor-pointer"
                        >
                          read more
                        </span>
                      </span>
                    )}
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
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
