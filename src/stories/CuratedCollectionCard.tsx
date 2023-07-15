import classNames from "classnames";
import Image from "next/image";
import React from "react";

const amenities = [
  "6 - 8 Guests",
  "3 Bedrooms",
  "4 Bathrooms",
  "Pet Friendly",
  "Beach Villa",
];

const CuratedCollectionCard = ({
  className,
  isActive,
  name,
  place,
}: {
  className: string;
  isActive?: boolean;
  name: string;
  place: string;
}) => {
  return (
    <div
      className={classNames(
        "relative overflow-visible transition-all origin-center duration-700",
        className
      )}
    >
      <Image
        src={"/images/Amenities1.png"}
        width={0}
        height={0}
        sizes="100vw"
        className="md:absolute w-full h-[180px] md:h-full object-cover"
        alt="image"
      />

      <div className="block md:hidden mt-5">
        <p className="text-[#8A1E61] text-xs tracking-[1.2px] font-normal truncate flex-1">
          {place}
        </p>

        <div className={"justify-between flex mt-[12px]"}>
          <h1 className={"text-[#171717] font-normal truncate text-xl flex-1"}>
            {name}
          </h1>
          <p className="text-sm text-[#8A1E61] font-normal truncate pl-1">
            ₹12,589 night
          </p>
        </div>
        <div className={"items-center mt-[8px] truncate flex flex-wrap"}>
          {amenities?.map((el, index) => (
            <div key={el} className="flex items-center">
              <p className="font-centaur text-xs text-[#545456]">{el}</p>
              {index === amenities?.length - 1 ? null : (
                <div className="w-[2px] h-[2px] rounded-full bg-[#7B8084] mx-[6px]" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={classNames(
          "hidden md:block bg-white absolute w-10/12 max-h-[123px] left-1/2 -translate-x-1/2 transition-all origin-center",
          isActive ? "p-6 top-[85%]" : "p-4 top-[90%]"
        )}
      >
        <div
          className={classNames(
            "justify-between",
            isActive ? "flex" : "hidden"
          )}
        >
          <p className="text-[#8A1E61] text-xs tracking-[1.2px] font-normal truncate flex-1">
            {place}
          </p>
          <p className="text-sm text-[#545456] font-normal truncate flex-1 text-right">
            ₹12,589 night
          </p>
        </div>
        <h1
          className={classNames(
            "text-[#171717] font-normal truncate",
            isActive ? "mt-[10px] text-xl" : "text-base text-center"
          )}
        >
          {name}
        </h1>
        <div
          className={classNames(
            "items-center mt-[6px] truncate",
            isActive ? "flex" : "hidden"
          )}
        >
          {amenities?.map((el, index) => (
            <div key={el} className="flex items-center">
              <p className="font-centaur text-xs text-[#545456]">{el}</p>
              {index === amenities?.length - 1 ? null : (
                <div className="w-[2px] h-[2px] rounded-full bg-[#7B8084] mx-[6px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuratedCollectionCard;
