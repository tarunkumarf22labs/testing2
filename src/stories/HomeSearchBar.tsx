import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { CalendarBlank } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { AppContext } from 'src/Context';
import PrimaryButton from './PrimaryButton';
import classNames from 'classnames';
import Datepicker from './DatePicker';

interface IHomeSearchBar {
  locations: {
    id: number;
    type: string;
    title: string;
  }[];
  handleshowSearch?: () => void;
}

const HomeSearchBar = ({ locations, handleshowSearch }: IHomeSearchBar) => {
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

  const inputContainerClassName =
    'min-h-[48px] w-full md:w-auto flex-1 flex items-center border-b-[0.6px] border-[#7B8084] px-4';

  const handleSearchClick = () => {
    if (handleshowSearch) {
      handleshowSearch();
    }
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
  };

  return (
    <>
      <div className="w-full bg-white flex flex-col md:flex-row items-center p-6 gap-[26px]">
        <div className={inputContainerClassName}>
          <select
            value={location}
            placeholder="Select Destination"
            className="h-full w-full text-xs font-[420] text-black placeholder:text-[#7B8084] uppercase border-none outline-none focus:ring-0 p-0"
            onChange={handleSelect}
          >
            <option className="text-[#7B8084]" value="">
              Select your option
            </option>
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
          className={classNames(
            'flex items-center justify-between',
            inputContainerClassName
          )}
          onClick={() => setShowDate(!showDate)}
        >
          <div className="text-xs font-[420] text-[#7B8084] uppercase">
            {startDate ? (
              <p className="text-black">{`${firstDay} ${firstMonthName} ${firstYear}`}</p>
            ) : (
              <p>CHECK IN</p>
            )}
          </div>
          <CalendarBlank />
        </div>

        <div
          className={classNames(
            'flex items-center justify-between',
            inputContainerClassName
          )}
          onClick={() => setShowDate(!showDate)}
        >
          <div className="text-xs font-[420] text-[#7B8084] uppercase">
            {endDate ? (
              <p className="text-black">{`${secondDay} ${secondMonthName} ${secondYear}`}</p>
            ) : (
              <p>CHECK OUT</p>
            )}
          </div>
          <CalendarBlank />
        </div>

        <div className={inputContainerClassName}>
          <input
            type="number"
            className="w-full h-full border-none focus:ring-0 text-xs font-[420] text-black placeholder:text-[#7B8084] uppercase p-0"
            placeholder="Guest"
            min={1}
            max={20}
            value={guestsValue}
            onChange={handleChange}
          />
        </div>

        <PrimaryButton
          title="SEARCH"
          onClick={handleSearchClick}
          className="flex-1 w-full max-w-full md:max-w-[160px] justify-center"
        />
      </div>
      <div className={`${showDate === false ? 'hidden' : 'block'}`}>
        <Datepicker inVillaDetails={false} />
      </div>
    </>
  );
};

export default HomeSearchBar;
