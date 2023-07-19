import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Datepicker from './DatePicker';
import { motion } from 'framer-motion';
import { AppContext } from 'src/Context';

interface ISearch {
  locations: {
    id: number;
    type: string;
    title: string;
  }[];
  handleshowSearch?: () => void;
}

const Search = ({ locations, handleshowSearch }: ISearch) => {
  const router = useRouter();
  const [showDate, setShowDate] = useState(false);
  const { startDate, endDate } = useContext(AppContext);
  const {
    locationtype,
    location,
    locationid,
    checkin,
    checkout,
    numberofguests
  } = router.query;

  const [currentlocation, setCurrentlocation] = useState({
    id: 0,
    title: '',
    type: ''
  });
  const { setGuestsValue, guestsValue } = useContext(AppContext);
  useEffect(() => {
    let datesFlag = (!startDate && !endDate) || (startDate && endDate);

    datesFlag ? setShowDate(false) : setShowDate(true);
  }, [endDate, startDate]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = Number(value);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setGuestsValue(value);
      if (router.pathname === '/result') {
        router.push({
          pathname: '/result',
          query: {
            ...router.query,
            numberofguests: value
          }
        });
      }
    }
  };

  const handleSelect = (e) => {
    const inputEvent = e.target as HTMLSelectElement;
    const selectedOptionData =
      inputEvent.options[inputEvent.selectedIndex].dataset;
    let data = selectedOptionData.container
      ? JSON.parse(selectedOptionData.container)
      : null;
    setCurrentlocation({
      id: data?.id,
      title: data?.title,
      type: data?.type
    });
    if (
      router.pathname === '/result' &&
      data?.id &&
      data?.title &&
      data?.type
    ) {
      router.push({
        pathname: '/result',
        query: {
          ...router.query,
          locationtype: data.type,
          location: data.title,
          locationid: data.id
        }
      });
    }
  };

  const firstDateString = startDate;
  const firstDateParts = firstDateString?.split('/');
  const firstMonth = parseInt(firstDateParts[1]);
  const firstDay = parseInt(firstDateParts[0]);
  const firstYear = parseInt(firstDateParts[2]);
  const firstDate = new Date(firstYear + '-' + firstMonth + '-' + firstDay);

  // Get the month name
  const firstMonthName = firstDate.toLocaleString('default', { month: 'long' });

  const secondDateString = endDate;
  const secondDateParts = secondDateString?.split('/');
  const secondMonth = parseInt(secondDateParts[1]);
  const secondDay = parseInt(secondDateParts[0]);
  const secondYear = parseInt(secondDateParts[2]);
  const secondDate = new Date(secondYear + '-' + secondMonth + '-' + secondDay);

  // Get the month name
  const secondMonthName = secondDate.toLocaleString('default', {
    month: 'long'
  });

  return (
    <>
      <motion.div
        style={{ opacity: 0.2 }}
        animate={{
          opacity: 1
        }}
        initial={{
          opacity: 0
        }}
        transition={{
          duration: 3
        }}
        className="bg-[#FFFFFF] -mt-[50px] relative m-auto z-[49]  border md:w-11/12 lg:flex md:justify-between md:items-center  lg:w-full xl:w-9/12 font-[Brandon Grotesque] text-zinc-900 text-xs font-[Brandon Grotesque] font-bold lg:h-[100px]"
      >
        <div className="sm:flex justify-evenly items-center lg:w-[52%]">
          <div className="mb-8 ml-3 mr-3 border-b border-zinc-500 sm:w-5/12 md:mb-9">
            <select
              name=""
              id=""
              value={location}
              placeholder="Select Destination"
              className="w-full text-xs uppercase border border-b-2 border-none outline-none mt-7 focus:ring-0 custom-select"
              onChange={handleSelect}
            >
              <option value="">Select your option</option>
              {locations.map((ele, id) => {
                let value = {
                  id: ele.id,
                  title: ele.title,
                  type: ele.type
                };
                return (
                  <option
                    value={value.title}
                    data-container={JSON.stringify(value)}
                    key={id}
                  >
                    {ele.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div
            className="relative flex items-center justify-between h-10 mt-4 ml-3 mr-3 border-b border-zinc-500 sm:w-5/12 md:m-0 sm:-top-[14px] md:-top-[7px]"
            onClick={() => setShowDate(!showDate)}
          >
            {startDate ? (
              <p className="ml-3 uppercase">{`${firstDay} ${firstMonthName} ${firstYear}`}</p>
            ) : (
              <p className="ml-3 uppercase">CHECK IN </p>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
        </div>
        <div className="sm:flex justify-evenly items-center  lg:w-[52%]  ">
          <div
            className="relative flex items-center justify-between h-10 mt-8 sm:mt-4 ml-3 mr-3 border-b border-zinc-500 sm:w-5/12 md:m-0 sm:-top-[2px] md:-top-[7px] md:ml-[1.7em] lg:ml-0"
            onClick={() => setShowDate(!showDate)}
          >
            {endDate ? (
              <p className="ml-3 uppercase">
                {' '}
                {`${secondDay} ${secondMonthName} ${secondYear}`}
              </p>
            ) : (
              <p className="ml-3 uppercase">CHECK OUT</p>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between mb-4 ml-3 mr-3 border-b border-zinc-500 sm:w-5/12 md:mb-11">
            <input
              type="number"
              // className="w-full border-none placeholder-zinc-900 mt-7 focus:ring-0"
              className="w-full placeholder-black border-none mt-7 focus:ring-0 placeholder:font-medium"
              placeholder="Guest"
              min={1}
              max={20}
              value={guestsValue}
              onChange={handleChange}
            />
          </div>
        </div>

        <div
          className="bg-[#8A1E61] flex justify-between items-center ml-3 mr-3 mb-4 h-12 sm:mt-5 md:w-11/12 md:-mt-4 md:m-auto md:mb-2 lg:w-[10%] lg:mr-[3%] rounded-sm"
          onClick={() => {
            handleshowSearch && handleshowSearch();
            router.push({
              pathname: '/result',
              query: {
                locationtype: currentlocation.type,
                location: currentlocation.title,
                locationid: currentlocation.id,
                checkin: startDate,
                checkout: endDate,
                numberofguests: guestsValue
              }
            });
          }}
        >
          <button className="bg-[#8A1E61] text-white text-center m-auto h-full font-[Brandon Grotesque]rounded-sm">
            SEARCH
          </button>
        </div>
      </motion.div>
      <div className={`${showDate === false ? 'hidden' : 'block'}`}>
        <Datepicker inVillaDetails={false} />
      </div>
    </>
  );
};

export default Search;
