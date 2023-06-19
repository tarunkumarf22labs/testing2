import { useState } from "react";

const SortVilla = () => {
  const [filterValue, setFilterValue] = useState("most popular");
  const [showDropDown, setShowDropDown] = useState(false)
 
  return (
    <div className="text-[#8A1E61] flex justify-between items-center m-auto mt-20 mb-5 w-[97%] mr-0 font-[Brandon Grotesque]">
      <h3 className="text-base font-bold">LUXUNLOCK’s</h3>
      <div className="w-48 font-medium rounded-3xl bg-[#8A1E611A] pt-3 pb-3 pl-6 pr-6 flex justify-between items-center text-xs relative"
      onClick={() => setShowDropDown(!showDropDown)}
      >
        <p className="text-center uppercase">{filterValue}</p>
        <p className={`${showDropDown ? 'rotate-180': 'rotate-0'} duration-100`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-xs"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
        {
            showDropDown &&
        <div className="absolute w-full top-14 bg-[#8A1E61] text-white left-0 z-50 rounded-md">
          <div className="pt-3 pb-3 pl-6 pr-6 border-b-2 hover:text-[#8A1E61] hover:bg-[#eee0e8] rounded-t-md" onClick={() => setFilterValue('highest_rated')}>
            <p>Highest rated</p>
          </div>
          <div className="pt-3 pb-3 pl-6 pr-6 border-b-2 hover:text-[#8A1E61] hover:bg-[#eee0e8]" onClick={() => setFilterValue('price_high_to_low')}>
            <p>Price High to low </p>
          </div>
          <div className="pt-3 pb-3 pl-6 pr-6 border-b-2 hover:text-[#8A1E61] hover:bg-[#eee0e8] " onClick={() => setFilterValue('price_low_to_high')}>
            <p>Price low to High </p>
          </div>
          <div className="pt-3 pb-3 pl-6 pr-6 border-b-2 rounded-b-md hover:text-[#8A1E61] hover:bg-[#eee0e8] " onClick={() => setFilterValue('most_popular')}>
            <p>Most Popular</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default SortVilla;
