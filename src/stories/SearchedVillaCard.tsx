import React, { useState } from "react";
import Image from "next/image";

interface IVillaCard {
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
    <div className="h-[500px] font-[Brandon Grotesque] sm:max-w-[608px]">
      <div className="w-11/12 m-auto mt-8">
        <Image
          src="/images/a030.png"
          alt="villa"
          width={350}
          height={230}
          className="w-full h-full"
        />
      </div>
      <div className="w-11/12 m-auto mt-4">
        <div className="m-3">
          <p className="font-bold text-[#8A1E61] text-sm">
            {city}, {state}
          </p>
          <p className="mt-8 text-xl font-bold">{title}</p>
          <div className="mt-1 flex items-center justify-between w-3/4 text-xs mr-[25%]">
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
        className={`flex items-center justify-between w-11/12 m-auto mt-1 ${
          !available && "opacity-50 pointer-events-none"
        }`}
      >
        <div className="w-1/2 text-center">
          <p className="text-[8px] text-center">(3 out of 4 rooms available)</p>
        </div>
        <div className="w-1/2 text-center">
          <p className="text-[10px] text-right">₹1,82,333 total</p>
        </div>
      </div>
    </div>
  );
};

export default SearchedVillaCard;
