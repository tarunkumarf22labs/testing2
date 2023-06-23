import React, { useContext } from "react";
import Reserve from "./Reserve";
import LocationAndDetails from "./LocationAndDetails";
import { AppContext } from "src/Context";

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
}: IReserveAndLocationDetailsSection) => {
  const LocationProps = {
    locations,
    address,
    lat,
    lng,
  };
  const ReserveProps = {
    infant,
    maxAdultAndChildren,
    minAdultAndChildren,
    pet,
    basicPrice,
    petPrice,
    extraGuestPrice,
  };

  return (
    <>
      <div className="bg-white">
        <Reserve {...ReserveProps} />
      </div>
      <div className="bg-white mt-[60px] md:mt-8">
        <LocationAndDetails {...LocationProps} />
      </div>
    </>
  );
};

export default ReserveAndLocationDetailsSection;
