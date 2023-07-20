import React, { useContext, useState } from 'react';
import { Export, DownloadSimple, Heart, Share } from '@phosphor-icons/react';
import { Button } from './Button';
import { getUrl } from '@/hooks/useIsMobile';
import Link from 'next/link';
import {
  availableDays,
  checkIn,
  checkOut,
  clearDates,
  propertyOverviewActions
} from 'src/data/constants';
import Datepicker from './DatePicker';
import { AppContext } from 'src/Context';
import ShareUrl from './ShareUrl';

interface IPropertyOverview {
  name: string;
  city: string;
  state: string;
  byliner: string;
  about: string;
  amenities: string[];
  pdf: string;
}

const actions = [
  {
    name: propertyOverviewActions[0],
    Icon: Export
  },
  {
    name: propertyOverviewActions[1],
    Icon: DownloadSimple
  },
  {
    name: propertyOverviewActions[2],
    Icon: Heart
  }
];

const showStory = () => {
  const item = document.getElementById('STORY-for-scroll');
  item.scrollIntoView({
    behavior: 'smooth'
  });
};
const showDetailDescription = () => {
  const item = document.getElementById('detail-description-to-view');
  item.scrollIntoView({
    behavior: 'smooth'
  });
};

const PropertyOverview = ({
  name,
  city,
  state,
  byliner,
  about,
  amenities,
  pdf
}: IPropertyOverview) => {
  const url = getUrl();

  const { startDate, endDate, selectedDates, ClearSelectedDate } =
    useContext(AppContext);
  const [showShareModal, setShowShareModal] = useState(false);

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
    <div className="bg-white w-full md:-mt-10 md:max-w-[810px]">
      {showShareModal && (
        <ShareUrl
          url={url}
          setShowShareModal={setShowShareModal}
          showShareModal={showShareModal}
        />
      )}
      <div>
        <div className="flex items-center text-[#8A1E61] mt-4 justify-between md:pl-3 md:justify-start">
          <button
            className="flex items-center justify-center py-3 md:p-5"
            onClick={() => {
              setShowShareModal(!showShareModal);
            }}
          >
            <Export size={32} />
            <p className="pl-2 text-sm md:text-base md:pl-3">{'Share'}</p>
          </button>
          <button className="flex items-center justify-center py-3 md:p-5">
            <DownloadSimple size={32} />
            <Link href={pdf} target="blank">
              <p className="pl-2 text-sm md:text-base md:pl-3">
                {'Download Brochure'}
              </p>
            </Link>
          </button>
          <button className="flex items-center justify-center py-3 md:p-5">
            <Heart size={32} />
            <p className="pl-2 text-sm md:text-base md:pl-3">
              {'Add To Favourites'}
            </p>
          </button>
        </div>
        <div className="md:px-8">
          <h1 className="text-[#18181B] text-[26px] font-bold leading-9 md:text-[62px] md:leading-[89px]">
            {name && name}
          </h1>
          <p className="text-[#8A1E61] text-base leading-5 font-medium tracking-widest mt-3 md:text-base md:leading-[18px]">
            {city && city}, {state && state}
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
            {byliner && byliner}
          </p>
          <p className="font-centaur text-base leading-6 text-[#545456] mt-4 md:mt-0 md:text-[22px] md:leading-8">
            {about && about}
          </p>
          <div className="flex mt-8 gap-[24px] md:gap-[34px] flex-wrap">
            <div
              onClick={showStory}
              className="px-[10px] text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex flex-1 md:flex-auto justify-center items-center cursor-pointer border border-[#8A1E61]"
            >
              <h3>DEJA VIEW’S STORY</h3>
            </div>
            <div
              onClick={showDetailDescription}
              className="px-[10px] text-[#8A1E61] font-[Brandon Grotesque] font-medium text-xs h-10 flex flex-1 md:flex-auto justify-center items-center cursor-pointer border border-[#8A1E61]"
            >
              <h3>
                <span className="hidden sm:block">
                  DEJA VIEW’S DETAILED DESCRIPTION
                </span>
                <span className="sm:hidden">DETAILED DESCRIPTION</span>
              </h3>
            </div>
          </div>
          <hr className="my-6" />
          <p className="text-[#545456] font-medium text-xl">{availableDays}</p>
          <div className="w-full py-5">
            <Datepicker inVillaDetails={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
