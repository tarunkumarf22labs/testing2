import React, { useState } from "react";
import Image from "next/image";

interface IVillaCard {
  bannerImage: string;
  image: string;
  amenities: string[];
  city: string;
  state: string;
  title: string;
  description: string;
  available: Boolean;
  availableDates: string;
  villaPrice: string;
  roomPrice: string;
}

const SearchedVillaCard = ({
  bannerImage,
  image,
  amenities,
  city,
  state,
  title,
  description,
  available,
  availableDates,
  villaPrice,
  roomPrice,
}: IVillaCard) => {
  const [roomSelected, setRoomSelected] = useState(false);
  return (
    <div className="font-[Brandon Grotesque] w-[90vw] sm:max-w-[608px] bg-[#FFFFFF]">
      <div className="w-full shadow-md ml-[5vw] sm:max-w-xl rounded-t-sm rounded-b-none">
        <div className="relative w-full mt-8 rounded-t-sm rounded-b-none">
          <Image
            src={bannerImage}
            alt="villa"
            width={350}
            height={230}
            className="relative w-full h-full rounded-t-sm rounded-b-none"
          />
          <div className="rounded-t-sm">
            <Image
              src={image}
              alt="small-image"
              width={229}
              height={152}
              className="absolute hidden rounded-t-sm top-64 left-80 sm:block"
            />
          </div>
        </div>
        <div>
          <div className="w-11/12 m-auto mt-4">
            <div className="m-3 sm:m-0">
              <p className="font-bold text-[#8A1E61] text-sm">
                {city}, {state}
              </p>
              <p className="mt-8 text-xl font-bold">{title}</p>
              <div className="mt-1 flex items-center justify-between w-3/4 text-xs mr-[25%] flex-wrap">
                {amenities.map((ele, idx) => {
                  return (
                    <>
                      <p>{ele}</p>
                      {idx !== amenities.length - 1 ? (
                        <div className="w-[2px] h-[2px] rounded bg-black"></div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </div>
              <p className="text-sm font-[Centaur] text-[#545456] mt-4">
                {description}
              </p>
            </div>
          </div>
          {!available && (
            <div className="flex flex-row-reverse w-11/12 m-auto mt-4 ">
              <div className="text-[10px] text-[#8A1E61] text-center w-28 h-11 border-[#8A1E61] bg-[#dfc9d6d9] rounded-full pt-1 pb-1 pl-3 pr-3">
                <p className="font-bold">Available Dates</p>
                <p className="font-bold mt-[2px]">{availableDates}</p>
              </div>
            </div>
          )}
          <div
            className={`flex items-center justify-between w-11/12 m-auto mt-6 ${
              !available && "opacity-50 pointer-events-none"
            }`}
          >
            <div className="flex items-center justify-between w-1/2 h-8 m-auto text-xs text-center">
              <div
                className={`${
                  roomSelected
                    ? ""
                    : "bg-[#8A1E61] text-white ease-in-out duration-500 rounded-sm"
                } flex items-center justify-center w-6/12 h-full `}
                onClick={() => {
                  setRoomSelected(!roomSelected);
                }}
              >
                VILLA
              </div>
              <div
                className={`${
                  roomSelected
                    ? "bg-[#8A1E61]  text-white ease-in-out duration-500"
                    : ""
                } flex items-center justify-center w-6/12 h-full`}
                onClick={() => {
                  setRoomSelected(!roomSelected);
                }}
              >
                ROOM
              </div>
            </div>
            <div className="w-1/2 h-8">
              <p className="text-sm text-right">
                {roomSelected ? roomPrice : villaPrice} / night
              </p>
            </div>
          </div>
          <div
            className={`pb-6 flex items-center justify-between w-11/12 m-auto mt-1 ${
              !available && "opacity-50 pointer-events-none"
            }`}
          >
            <div className="w-1/2 text-center">
              <p className="text-[8px] text-center">
                (3 out of 4 rooms available)
              </p>
            </div>
            <div className="w-1/2 text-center">
              <p className="text-[10px] text-right">₹1,82,333 total</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedVillaCard;
