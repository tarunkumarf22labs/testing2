import React from 'react';
import Map from './Map';

interface IReserveAndLocationDetailsSection {
  locations: string;
  address: string;
  lat: number;
  lng: number;
}

const LocationAndDetails = ({
  locations,
  address,
  lat,
  lng
}: IReserveAndLocationDetailsSection) => {
  const locationDetail = [
    {
      address: address,
      lat: lat,
      lng: lng
    }
  ];

  const isList = locations.includes('\n-') || locations.includes('\n -');

  let splittedList;
  if (isList) {
    splittedList = locations.split(/\n-|\n -/);
    splittedList[0] = splittedList[0].substring(1);
  }
  return (
    <div>
      <div className="w-full h-40">
        <Map markers={locationDetail} zoomdata={2.7} />
      </div>
      <div className="mt-4">
        {splittedList?.map((el) => {
          return (
            <li
              key={el}
              className="text-[#545456] font-centaur text-lg md:text-lg leading-[34px]"
            >
              {el}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default LocationAndDetails;
