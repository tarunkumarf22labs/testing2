import React, { useContext } from "react";
import { Export, DownloadSimple, Heart } from "@phosphor-icons/react";
import { Button } from "./Button";
import useIsMobile from "@/hooks/useIsMobile";
import {
  availableDays,
  checkIn,
  checkOut,
  clearDates,
  propertyOverviewActions,
} from "src/data/constants";
import Datepicker from "./DatePicker";
import { AppContext } from "src/Context";

interface IPropertyOverview {
  name: string;
  city: string;
  state: string;
  byliner: string;
  about: string;
  amenities: string[];
}

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

const showStory = () => {
  const item = document.getElementById("STORY-for-scroll");
  item.scrollIntoView({
    behavior: "smooth",
  });
};
const showDetailDescription = () => {
  const item = document.getElementById("detail-description-to-view");
  item.scrollIntoView({
    behavior: "smooth",
  });
};

const PropertyOverview = ({
  name,
  city,
  state,
  byliner,
  about,
  amenities,
}: IPropertyOverview) => {
  const isMobile = useIsMobile();

  const {
    startDate,
    endDate,
    selectedDates,
    ClearSelectedDate,
  } = useContext(AppContext);
  
  const firstDateString = startDate;
  const firstDateParts = firstDateString?.split("/");
  const firstMonth = parseInt(firstDateParts[1]);
  const firstDay = parseInt(firstDateParts[0]);
  const firstYear = parseInt(firstDateParts[2]);
  const firstDate = new Date(firstYear + "-" + firstMonth + "-" + firstDay);

  // Get the month name
  const firstMonthName = firstDate.toLocaleString("default", { month: "long" });

  const secondDateString = endDate;
  const secondDateParts = secondDateString?.split("/");
  const secondMonth = parseInt(secondDateParts[1]);
  const secondDay = parseInt(secondDateParts[0]);
  const secondYear = parseInt(secondDateParts[2]);
  const secondDate = new Date(secondYear + "-" + secondMonth + "-" + secondDay);

  // Get the month name
  const secondMonthName = secondDate.toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="bg-white w-full md:-mt-10 md:max-w-[810px]">
      <div>
        <div className="flex items-center text-[#8A1E61] mt-4 justify-between md:pl-3 md:justify-start">
          {actions?.map(({ name, Icon }, id) => {
            return (
              <button
                className="flex items-center justify-center p-3 md:p-5"
                key={id}
              >
                <Icon className="text-md md:text-2xl" />
                <p className="pl-2 text-sm md:text-base md:pl-3">{name}</p>
              </button>
            );
          })}
        </div>
        <div className="px-5 md:px-8">
          <h1 className="text-[#18181B] text-[26px] font-bold leading-9 md:text-[62px] md:leading-[89px]">
            {name}
          </h1>
          <p className="text-[#8A1E61] text-base leading-5 font-medium tracking-widest mt-3 md:text-base md:leading-[18px]">
            {city}, {state}
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
            {byliner}
          </p>
          <p className="font-centaur text-base leading-6 text-[#545456] mt-4 md:mt-0 md:text-[22px] md:leading-8">
            {about}
          </p>
          <div className="flex m-auto sm:m-0 ">
            <div className="mt-8" onClick={showStory}>
              <div
                className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-44 cursor-pointer border border-[#8A1E61]"
                // onClick={() => setReadMore(!readMore)}
              >
                <h3 className="">DEJA VIEW’S STORY</h3>
              </div>
            </div>
            <div className="mt-8 ml-11 " onClick={showDetailDescription}>
              <div
                className=" text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex justify-center items-center w-40 sm:w-60 cursor-pointer border border-[#8A1E61]"
                // onClick={() => setReadMore(!readMore)}
              >
                <h3 className="">
                  <span className="hidden sm:block">
                    DEJA VIEW’S DETAILED DESCRIPTION
                  </span>
                  <span className="sm:hidden">DETAILED DESCRIPTION</span>
                </h3>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <p className="text-[#545456] font-medium text-xl">{availableDays}</p>
          <div className="mt-5 w-full md:w-[110%] md:-ml-[5%]">
            <Datepicker inVillaDetails={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
