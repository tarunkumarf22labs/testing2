import React from "react";

export const ScrollButton = ({
  onPrevPress,
  onNextPress,
}: {
  onPrevPress: () => void;
  onNextPress: () => void;
}) => {
  return (
    <div className="sm:w-24 mt-3 flex gap-0 z-10">
      <button
        onClick={onPrevPress}
        className="p-4 pr-2 rounded-l-full bg-[#8A1E61] text-[#FCFAED] active:ring-1 active:ring-[#8A1E61]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        onClick={onNextPress}
        className="p-4 pl-2 rounded-r-full bg-[#8A1E61] text-[#FCFAED] active:ring-1 active:ring-[#8A1E61]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};
