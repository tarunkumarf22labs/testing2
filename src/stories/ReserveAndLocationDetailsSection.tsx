import React, { useContext } from 'react';
import Reserve from './Reserve';
import LocationAndDetails from './LocationAndDetails';
import { AppContext } from 'src/Context';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

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
  isOnlineBookingPossible: Boolean;
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
  roomDetails,
  isOnlineBookingPossible
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
    roomDetails,
    isOnlineBookingPossible
  };

  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.reserve
  );

  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.location
  );

  return (
    <>
      <div className="gsap-pd-reserve-section">
        <div className="gsap-pd-reserve-section-content opacity-0 bg-white md:p-4">
          <Reserve {...ReserveProps} />
        </div>
      </div>
      <div className="gsap-pd-location-section">
        <div className="gsap-pd-location-section-content opacity-0 bg-white mt-[60px] pb-4 md:mt-8 md:p-4">
          <LocationAndDetails {...LocationProps} />
        </div>
      </div>
    </>
  );
};

export default ReserveAndLocationDetailsSection;
