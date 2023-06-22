import React, { useState } from "react";
import {
  availableServices,
  includedServices,
  viewAllInclusions,
  villaServiceDisclaimer,
} from "src/data/constants";
import ReadMoreOrLess from "./ReadMoreOrLess";

interface IInclusionsExclusionsSection {
  heading: string;
  inclusions: string[];
  exclusions: string[];
}

export const InclusionsExclusionsSection = ({
  heading,
  inclusions,
  exclusions,
}: IInclusionsExclusionsSection) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full pb-3 bg-white">
      {/* <div className="flex flex-col px-5 py-10 space-y-16 md:flex-row lg:py-20 xl:px-0 md:space-y-0 md:space-x-20 xl:max-w-7xl xl:mx-auto"> */}
      <div className="flex flex-col px-5 pt-10 space-y-16 md:flex-row lg:py-10 xl:px-0 md:space-y-0 md:space-x-20 xl:max-w-7xl xl:mx-auto">
        <InclusionsExlusions
          heading={heading}
          inclusions={inclusions}
          exclusions={exclusions}
          readMore={readMore}
        />
        <InclusionsExlusions
          inclusion={false}
          heading={heading}
          inclusions={inclusions}
          exclusions={exclusions}
          readMore={readMore}
        />
      </div>
      <div className="mt-5 ml-5 xl:max-w-7xl xl:m-auto">
        <div
          className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-24 cursor-pointer border border-[#8A1E61]"
          onClick={() => setReadMore(!readMore)}
        >
          <h3 className="">{!readMore ? "Read More" : "Read Less"}</h3>
        </div>
      </div>
    </div>
  );
};

const InclusionsExlusions = ({
  inclusion = true,
  heading,
  inclusions,
  exclusions,
  readMore,
}) => {
  let array = inclusion ? inclusions : exclusions;
  !readMore ? (array = array.filter((ele, id) => id < 5)) : array;

  return (
    <div className="md:w-1/2">
      <p className="uppercase text-sm text-[#8A1E61] mb-2">{heading}</p>
      <p className="uppercase text-xl md:text-5xl text-[#18181B] mb-6 font-light">
        {inclusion ? includedServices : availableServices}
      </p>
      <ul className=" list-disc font-centaur text-base text-[#545456] space-y-4">
        {array.map((item, index) => (
          <List item={item} key={index} />
        ))}
      </ul>
      {!inclusion ? (
        <p className="text-[#8A1E61] mt-4 text-xs">{villaServiceDisclaimer}</p>
      ) : null}
      <p className="text-[#8A1E61] uppercase mt-5 text-xs md:hidden">
        {viewAllInclusions}
      </p>
    </div>
  );
};

const List = ({ item }) => {
  return <li className="ml-5">{item}</li>;
};
