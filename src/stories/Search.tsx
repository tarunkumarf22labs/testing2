import React, { useEffect, useState } from "react";
import Datepicker from "./DatePicker";
// import DatePicker from "./DatePicker";
import {
  DatePickerStateProvider,
  useContextCalendars,
  useContextDays,
  useContextMonthsPropGetters,
} from "@rehookify/datepicker";

const Search = () => {
  const [showDate, setShowDate] = useState(false);
  const [startDate, setStartDate] = useState<string | undefined>("");
  const [endDate, setEndDate] = useState<string | undefined>("");

  useEffect (() => {
    // console.log(showDate === false)
    // endDate && showDate === false ? setShowDate(true): setShowDate(false)
    setShowDate(false)
  },[endDate])
  return (
    <>
      <div className="relative m-auto z-[60]  border mw-11/12 lg:flex md:justify-between md:items-center md:w-9/12 lg:11/12">
        {/* <input type="select" name="" id="" placeholder='Select Destination'/> */}
        <div className="sm:flex justify-evenly items-center lg:w-[52%]">
          <div className="mb-8 ml-3 mr-3 border-b-2 sm:w-5/12 md:mb-11">
            <select
              name=""
              id=""
              placeholder="Select Destination"
              className="w-full border border-b-2 border-none outline-none mt-7 "
            >
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <div
            className="flex items-center justify-between mt-4 ml-3 mr-3 border-b-2 sm:w-5/12 md:m-0"
            onClick={() => setShowDate(!showDate)}
          >
            {startDate ? <p>{startDate}</p> : <p>00/00/0000</p>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
        </div>
        <div
          className="sm:flex justify-evenly items-center lg:w-[52%]"
          onClick={() => setShowDate(!showDate)}
        >
          <div className="flex items-center justify-between mt-8 ml-3 mr-3 border-b-2 sm:w-5/12 md:m-0">
          {endDate ? <p>{endDate}</p> : <p>00/00/0000</p>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between mb-4 ml-3 mr-3 border-b-2 sm:w-5/12 md:mb-11">
            <select
              name=""
              id=""
              placeholder="Select Destination"
              className="w-full border border-b-2 border-none outline-none mt-7 "
            >
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
        </div>

        <div className="bg-[#8A1E61] flex justify-between items-center ml-3 mr-3 mb-4 h-12 sm:mt-5 md:w-11/12 md:-mt-4 md:m-auto md:mb-2 lg:w-[10%] lg:mr-[3%]">
          <button className="bg-[#8A1E61] text-white text-center m-auto h-full font-[Brandon Grotesque]">
            {" "}
            SEARCH{" "}
          </button>
        </div>
      </div>
       {/* <div className={`${showDate === false ? 'hidden' : 'block'}`}> */}
         <Datepicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
       {/* </div> */}
    </>
  );
};

export default Search;

// hidden z-50 sticky top-0 ${navbarColor} h-16 py-6 font-[Brandon grotesque] content-center justify-between items-center text-xs sm:hidden  sm:px-3.5 md:flex xl:ml-20 xl:mr-20 2xl:ml-28 2xl:mr-28
