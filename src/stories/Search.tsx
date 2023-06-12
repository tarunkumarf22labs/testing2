import React, { useContext, useEffect, useState } from "react";
import Datepicker from "./DatePicker";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppContext } from "src/Context";
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const testVariants = {
  animate: {
    y: "10vh",
    opacity: 2,
  },
  initial: {
    opacity: 0.5,
  },
  transition: {
    type: "spring",
    // duration: 2
    stiffness: 60,
    damping: 100,
  },
};

const Search = () => {
  const [showDate, setShowDate] = useState(false);
  const { startDate, endDate } = useContext(AppContext);

  useEffect(() => {
    let datesFlag = (!startDate && !endDate) || (startDate && endDate);

    datesFlag ? setShowDate(false) : setShowDate(true);
  }, [endDate, startDate]);

  return (
    <>
      <motion.div
        style={{ opacity: 0.2 }}
        // variants={testVariants}
        animate={{
          // y: "10vh",
          opacity: 1,
          // backgroundColor:"blue",
          // scale: 2,
          // rotate: isAnimating ? 360 : 0
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          // type: "spring",
          duration: 3,
          // stiffness: 60,
          // damping: 100
        }}
        className="bg-[#FFFFFF] -mt-[50px] relative m-auto z-[60]  border md:w-11/12 lg:flex md:justify-between md:items-center  lg:w-full xl:w-9/12 font-[Brandon Grotesque] text-[#7B8084]"
      >
        <div className="sm:flex justify-evenly items-center lg:w-[52%]">
          <div className="mb-8 ml-3 mr-3 border-b-2 sm:w-5/12 md:mb-11">
            <select
              name=""
              id=""
              placeholder="Select Destination"
              className="w-full border border-b-2 border-none outline-none mt-7 focus:ring-0 custom-select"
            >
              
              <option value="Chennai" >Chennai</option>
              <option value="Delhi" >Delhi</option>
              <option value="Mumbai" >Mumbai</option>
            </select>
          </div>
          <div
            className="flex items-center justify-between mt-4 ml-3 mr-3 border-b-2 sm:w-5/12 md:m-0"
            onClick={() => setShowDate(!showDate)}
          >
            {startDate ? <p>{startDate}</p> : <p>CHECK IN </p>}
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
        <div className="sm:flex justify-evenly items-center lg:w-[52%]">
          <div
            className="flex items-center justify-between mt-8 ml-3 mr-3 border-b-2 sm:w-5/12 md:m-0"
            onClick={() => setShowDate(!showDate)}
          >
            {endDate ? <p>{endDate}</p> : <p>CHECK OUT</p>}
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
            <input type="number" className="w-full border-none mt-7 focus:ring-0" placeholder="Guest" min={1}/>
          </div>
        </div>

        <div className="bg-[#8A1E61] flex justify-between items-center ml-3 mr-3 mb-4 h-12 sm:mt-5 md:w-11/12 md:-mt-4 md:m-auto md:mb-2 lg:w-[10%] lg:mr-[3%]">
          <button className="bg-[#8A1E61] text-white text-center m-auto h-full font-[Brandon Grotesque]">
            <Link href={"/chloe"}>SEARCH</Link>
          </button>
        </div>
      </motion.div>
      <div className={`${showDate === false ? "hidden" : "block"}`}>
        <Datepicker
          inVillaDetails={false}
        />
      </div>
    </>
  );
};

export default Search;
