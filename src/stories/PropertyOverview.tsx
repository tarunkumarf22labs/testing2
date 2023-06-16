import React from "react";
import { Export, DownloadSimple, Heart } from "@phosphor-icons/react";
import { Calendar } from "./Calendar";
import { useContextCalendars } from "@rehookify/datepicker";
import { Button } from "./Button";
import useIsMobile from "@/hooks/useIsMobile";
import {
  availableDays,
  checkIn,
  checkOut,
  clearDates,
  propertyOverviewActions,
} from "src/data/constants";

const actions = [
  {
    name: propertyOverviewActions[0],
    Icon: Export,
  },
  {
    name: propertyOverviewActions[1],
    Icon: DownloadSimple,
  },
  {
    name: propertyOverviewActions[2],
    Icon: Heart,
  },
];

const amenities = [
  "6 Guest",
  "3 Bedrooms",
  "2 Bathrooms",
  "English-Style Cottage",
];

const PropertyOverview = () => {
  const { calendars } = useContextCalendars();
  const isMobile = useIsMobile();
  return (
    <div className="bg-white w-full md:-mt-10 md:max-w-[810px]">
      <div>
        <div className="flex items-center text-[#8A1E61] mt-4 justify-between md:pl-3 md:justify-start">
          {actions?.map(({ name, Icon }) => {
            return (
              <button className="flex items-center justify-center p-3 md:p-5">
                <Icon className="text-md md:text-2xl" />
                <p className="pl-2 text-sm md:text-base md:pl-3">{name}</p>
              </button>
            );
          })}
        </div>
        <div className="px-5 md:px-8">
          <h1 className="text-[#18181B] text-[26px] font-bold leading-9 md:text-[62px] md:leading-[89px]">
            Deja View
          </h1>
          <p className="text-[#8A1E61] text-base leading-5 font-medium tracking-widest mt-3 md:text-base md:leading-[18px]">
            Wayanad, Kerala
          </p>
          <div className="flex items-center mt-2">
            {amenities?.map((el, index) => (
              <div key={el} className="flex items-center">
                <p className="font-centaur text-xs text-[#545456] md:text-base md:leading-[18px]">
                  {el}
                </p>
                {index === amenities?.length - 1 ? null : (
                  <div className="w-[2px] h-[2px] rounded-full bg-[#7B8084] mx-[6px]" />
                )}
              </div>
            ))}
          </div>
          <p className="hidden md:block my-8 text-[#18181B] text-[22px] leading-8">
            Experience luxury in the lap of nature!
          </p>
          <p className="font-centaur text-base leading-6 text-[#545456] mt-4 md:mt-0 md:text-[22px] md:leading-8">
            Deja View is a beautiful 2-bedroom plantation-style luxury villa
            with locally-inspired design and contemporary interiors that makes
            it one of the most romantic vacation homes in South India. The villa
            is part of a private community of six homes set on top of a hill in
            a 14-acre coffee & cardamom plantation in Eastern Wayanad, Kerala.
            From your verandah enjoy sweeping and unhindered views of rainforest
            clad hills. Indoors, an open plan design comprising two tastefully
            furnished bedrooms and a gorgeous loft make for an intimate &
            enjoyable holiday. Make time for nature walks & cycling, discovering
            ancient history, and savouring the delicious cuisine of Wayanad.
          </p>
          <hr className="my-6" />
          <p className="text-[#545456] font-medium text-xl">{availableDays}</p>
          <div className="flex mt-5">
            <Calendar MonthOrder="first" calendar={calendars[1]} year="2023" />
            {!isMobile && (
              <Calendar
                MonthOrder="second"
                calendar={calendars[0]}
                year="2023"
              />
            )}
          </div>
          <div className="flex items-center justify-between mb-8">
            <p className="bg-[#8A1E611A] text-[#8A1E61] text-xs md:text-base px-[10px] py-2">
              {checkIn}: Mar 8, {checkOut}: Mar 21
            </p>
            <Button text={clearDates} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
