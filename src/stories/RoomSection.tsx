import React from "react";
import { RoomCard, iconsArr } from "./RoomCard";

interface IRoomSection {
  heading: {
    heading: string;
    subHeading: string;
  };
}

export const RoomSection = ({ heading }: IRoomSection) => {
  return (
    <div className="px-5 pt-10 uppercase md:max-w-[810px] sm:w-full sm:p-8 sm:my-10 bg-white">
      <p className="text-sm text-[#8A1E61] sm:mb-5 sm:uppercase">
        {heading.subHeading}
      </p>
      <p className="text-3xl sm:text-5xl sm:text-[#1C1917] mb-6 sm:mb-10 ">
        {heading.heading}
      </p>
      <div className="space-y-5 sm:space-y-10">
        <RoomCard
          image="/images/Room1.png"
          roomName="Second Bedroom"
          icons={iconsArr}
        />
        <RoomCard
          image="/images/Room2.png"
          roomName="Master Bedroom"
          icons={iconsArr}
        />
      </div>
    </div>
  );
};
