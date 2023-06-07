import React from "react";
import { heading } from "src/data/constants";

interface IDetailedDescriptionSection {
  detailedDescription: {
    propertyName: string;
    title: string;
    plainPara: { heading: string; detail: string }[];
    listPara: { heading: string; detail: string }[];
  };
}

export const DetailedDescriptionSection = ({
  detailedDescription,
}: IDetailedDescriptionSection) => {
  const { propertyName, title, plainPara, listPara } = detailedDescription;
  return (
    <div className="w-full px-5 py-10 lg:max-w-7xl lg:mx-auto">
      <div className="uppercase pb-6 md:pb-10">
        <p className="text-sm text-[#8A1E61] md:mb-5">{propertyName}</p>
        <p className="text-3xl md:text-5xl text-[#18181B]">{title}</p>
      </div>
      <div className="space-y-10">
        <div className="space-y-10">
          {plainPara.map((item, index) => {
            return (
              <div key={index}>
                <p className="uppercase text-base mb-4">{item.heading}</p>
                <p className="text-xl text-[#545456] font-centaur">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
        <div className="space-y-10">
          {listPara.map((item, index) => {
            return (
              <div key={index}>
                <p className="uppercase text-base mb-4">{item.heading}</p>
                <p className="text-xl text-[#545456] font-centaur">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
