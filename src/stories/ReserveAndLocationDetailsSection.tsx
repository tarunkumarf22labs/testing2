import React, { useContext } from 'react';
import Reserve from './Reserve';
import LocationAndDetails from './LocationAndDetails';
import { AppContext } from 'src/Context';

interface IReserveAndLocationDetailsSection {
  locations: string;
  address: string;
  lat: number;
  lng: number;
  infant: number;
  maxAdultAndChildren: number;
  minAdultAndChildren: number;
  pet: number;
  basicPrice: number;
  petPrice: number;
  extraGuestPrice: number;
  roomDetails: {
    id: number;
    title: string;
    guestCapacity: {
      minAdultAndChildren: number;
      maxAdultAndChildren: number;
      infant: number;
      pet: number;
    };
    basicPrice: number;
    petPrice: number;
    extraGuestsPrice: number;
  }[];
}
const ReserveAndLocationDetailsSection = ({
  locations,
  address,
  lat,
  lng,
  infant,
  maxAdultAndChildren,
  minAdultAndChildren,
  pet,
  basicPrice,
  petPrice,
  extraGuestPrice,
  roomDetails
}: IReserveAndLocationDetailsSection) => {
  const LocationProps = {
    locations,
    address,
    lat,
    lng
  };
  const ReserveProps = {
    infant,
    maxAdultAndChildren,
    minAdultAndChildren,
    pet,
    basicPrice,
    petPrice,
    extraGuestPrice,
    roomDetails
  };
  return (
    <>
      <div className="bg-white md:p-4">
        <Reserve {...ReserveProps} />
      </div>
      <div className="bg-white mt-[60px] pb-4 md:mt-8 md:p-4">
        <LocationAndDetails {...LocationProps} />
      </div>
    </>
  );
};

export default ReserveAndLocationDetailsSection;
