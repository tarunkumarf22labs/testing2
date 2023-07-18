import React, { useState } from 'react';
interface IFilter {
  options: string[];
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
  currentFilter: string;
  inGallery?: boolean;
}
export default function Filter({
  options,
  setCurrentFilter,
  currentFilter,
  inGallery
}: IFilter) {
  return (
    <div
      className={`text-[#8A1E61] ${
        inGallery
          ? 'flex justify-between whitespace-nowrap  overflow-scroll scrollbar-hide pb-7 max-w-[1440px] m-auto'
          : 'text-sm md:pr-0 flex justify-between whitespace-nowrap overflow-scroll scrollbar-hide'
      }`}
    >
      {options?.map((el, idx) => (
        <button
          key={idx}
          onClick={() => {
            typeof el === 'string' && setCurrentFilter(el);
          }}
          className={`cursor-pointer capitalize ${
            currentFilter === el &&
            'border border-[#8A1E61] bg-pink-100  rounded-full'
          } mr-20`}
          style={{
            transition: 'opacity 1s ease-in-out',
            opacity: currentFilter === el ? 1 : 0.5,
            padding: '5px 12px'
          }}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
