import React, { useState } from 'react';
import {
  availableServices,
  includedServices,
  viewAllInclusions
} from 'src/data/constants';
import { Container } from './Container';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

export interface IInclusionsExclusionsSection {
  heading: string;
  inclusions: {
    id: number;
    service: string;
  }[];
  exclusions: {
    id: number;
    service: string;
  }[];
}

export const InclusionsExclusionsSection = ({
  heading,
  inclusions,
  exclusions
}: IInclusionsExclusionsSection) => {
  const [readMore, setReadMore] = useState(false);

  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.included_excluded_services
  );

  return (
    <div className="gsap-pd-inclusions-exclusions-section">
      <Container>
        <div className="flex flex-col gap-x-20 md:flex-row">
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
        {inclusions.length > 5 ||
          (exclusions.length > 5 && (
            <div className="mt-5 ml-5 xl:max-w-7xl xl:m-auto">
              <div
                className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-24 cursor-pointer border border-[#8A1E61]"
                onClick={() => setReadMore(!readMore)}
              >
                <h3 className="">{!readMore ? 'Read More' : 'Read Less'}</h3>
              </div>
            </div>
          ))}
      </Container>
    </div>
  );
};

const InclusionsExlusions = ({
  inclusion = true,
  heading,
  inclusions,
  exclusions,
  readMore
}) => {
  let array = inclusion ? inclusions : exclusions;
  !readMore ? (array = array.filter((ele, id) => id < 5)) : array;

  return (
    <div className="md:w-1/2">
      <div className="uppercase text-sm text-[#8A1E61] mb-2 sm:mb-5 md:tracking-[4.2px] md:font-[450] overflow-hidden">
        <div className="gsap-pd-inclusions-exclusions-section-heading-text opacity-0">
          {heading}
        </div>
      </div>
      <div className="uppercase text-xl md:text-5xl text-[#18181B] mb-6 font-light overflow-hidden">
        <h1 className="gsap-pd-inclusions-exclusions-section-heading-text opacity-0">
          {inclusion ? includedServices : availableServices}
        </h1>
      </div>
      <ul className=" list-disc font-centaur text-base text-[#545456] space-y-4">
        {array.map((item, index) => (
          <List item={item.service} key={index} />
        ))}
      </ul>
      <p className="text-[#8A1E61] uppercase mt-5 text-xs md:hidden">
        {viewAllInclusions}
      </p>
    </div>
  );
};

const List = ({ item }) => {
  return (
    <li className="ml-5 gsap-pd-inclusions-exclusions-section-item opacity-0">
      {item}
    </li>
  );
};
