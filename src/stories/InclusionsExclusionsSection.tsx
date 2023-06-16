import React from "react";
import {
  availableServices,
  includedServices,
  viewAllInclusions,
  villaServiceDisclaimer,
} from "src/data/constants";

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
  return (
    <div className="bg-white w-full">
      <div className="flex flex-col md:flex-row py-10 lg:py-20 px-5 xl:px-0 space-y-16 md:space-y-0 md:space-x-20 xl:max-w-7xl xl:mx-auto">
        <InclusionsExlusions
          heading={heading}
          inclusions={inclusions}
          exclusions={exclusions}
        />
        <InclusionsExlusions
          inclusion={false}
          heading={heading}
          inclusions={inclusions}
          exclusions={exclusions}
        />
      </div>
    </div>
  );
};

const InclusionsExlusions = ({
  inclusion = true,
  heading,
  inclusions,
  exclusions,
}) => {
  const array = inclusion ? inclusions : exclusions;
  const fiveItemsArray = array.length > 5 ? array.slice(0, 5) : array;

  return (
    <div className="md:w-1/2">
      <p className="uppercase text-sm text-[#8A1E61] mb-2">{heading}</p>
      <p className="uppercase text-xl md:text-5xl text-[#18181B] mb-6 font-light">
        {inclusion ? includedServices : availableServices}
      </p>
      <ul className="hidden md:block list-disc font-centaur text-base text-[#545456] space-y-4">
        {array.map((item, index) => (
          <List item={item} key={index} />
        ))}
      </ul>
      <ul className="md:hidden list-disc font-centaur text-base text-[#545456] space-y-4">
        {fiveItemsArray.map((item, index) => (
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
