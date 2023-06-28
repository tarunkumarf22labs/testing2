import React, { useState } from "react";
interface IFilter {
  options: string[];
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
  currentFilter: string;
}
export default function Filter({ options,setCurrentFilter,currentFilter }:IFilter) {

  return (
      <div className="flex justify-evenly items-center pb-7 px-64 sm:px-8 md:px-16 lg:px-32 text-[#8A1E61]">
        {options?.map((el, idx) => (
          <button
            key={idx}
            onClick={() => {
              typeof el === "string" && setCurrentFilter(el);
            }}
            className={`cursor-pointer capitalize ${
              currentFilter === el &&
              "border border-[#8A1E61] bg-pink-100  rounded-full"
            }`}
            style={{
              transition: "opacity 1s ease-in-out",
              opacity: currentFilter === el ? 1 : 0.5,
              padding: "5px 12px",
            }}
          >
            {el}
          </button>
        ))}
      </div>
  );
}
