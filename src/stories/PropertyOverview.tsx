import Image from "next/image";
import React from "react";
import { Export, DownloadSimple } from "@phosphor-icons/react";

const amenities = [
  "6 Guest",
  "3 Bedrooms",
  "2 Bathrooms",
  "English-Style Cottage",
];

const PropertyOverview = () => {
  return (
    <div className="bg-white w-full md:-mt-10 md:max-w-[810px]">
      <div>
        <div className="flex items-center text-[#8A1E61]">
          <button className="flex items-center justify-center p-5">
            <Export className="text-md md:text-2xl" />
            <p className="pl-3 text-sm md:text-base">Share</p>
          </button>
          <button className="flex items-center justify-center p-5">
            <DownloadSimple className="text-md md:text-2xl" />
            <p className="pl-3 text-sm md:text-base">Download Brochure</p>
          </button>
        </div>
        <div className="px-5">
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
            In a village overlooking the backwaters of the Vembanad Lake near
            Cochin, experience an unimaginably perfect abode under the stars and
            reflected in water. Here is a beautiful and soulful luxury home in
            Kerala that invites you to live in the moment. Built by one of
            India's best-known ad-film makers as a passion project, with
            incredible attention to detail.
          </p>
          <hr className="my-6" />
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
