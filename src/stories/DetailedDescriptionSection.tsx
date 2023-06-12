import React, { useState } from "react";
import Image from "next/image";

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
      <div className=" relative -mt-16 sm:-mt-24 xl:-mt-60  xl:w-full xl:max-w-7xl bg-white mx-5  xl:mx-auto px-4 py-8 z-10 md:px-8 md:py-11">
        <div className="uppercase pb-6 md:pb-10">
          <p className="text-sm text-[#8A1E61] md:mb-5">{propertyName}</p>
          <p className="text-3xl md:text-5xl text-[#18181B] font-light">
            {title}
          </p>
        </div>
        <div className="space-y-10">
          <div className="space-y-10">
            {plainPara.map((item, index) => {
              return (
                <div key={index}>
                  <p className="uppercase text-base mb-4">{item.heading}</p>
                  <p className="text-xl text-[#545456] font-centaur leading-[34px]">
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
                    <p className="uppercase text-base mb-4">{item.heading}</p>
                    <p className="text-xl text-[#545456] font-centaur leading-[34px]">
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
