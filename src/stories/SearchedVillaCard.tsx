import React, { useState } from "react";
import Image from "next/image";
import { IImageTag } from "src/Interface";

interface IVillaCard {
  bannerImage: IImageTag;
  image: IImageTag;
  amenities: string[];
  city: string;
  state: string;
  title: string;
  description: string;
  available: Boolean;
  availableDates: string;
  villaPrice: number;
  roomPrice: number;
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
    <div className="font-[Brandon Grotesque] w-full bg-[#FFFFFF] flex justify-center mb-10">
      <div className="w-full rounded-t-sm rounded-b-none shadow-md ">
        <div className="relative w-full rounded-t-sm rounded-b-none h-[400px]">
          <Image
            src={bannerImage.image}
            alt={bannerImage.alt}
            width={bannerImage.width}
            height={bannerImage.height}
            className="relative w-full h-full rounded-t-sm rounded-b-none "
          />
          <div className="rounded-t-sm">
            <Image
              src={image.image}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="absolute hidden rounded-t-sm top-[21rem] left-[25rem] sm:block"
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
              <div className="mt-1 flex items-center justify-between sm:w-2/5  text-xs mr-[25%] flex-wrap">
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
                } flex items-center justify-center w-6/12 h-full cursor-pointer`}
                onClick={() => {
                  setRoomSelected(!roomSelected);
                }}
              >
                VILLA
              </div>
              {available && (
                <div
                  className={`${
                    roomSelected
                      ? "bg-[#8A1E61]  text-white ease-in-out duration-500 rounded-sm"
                      : ""
                  } flex items-center justify-center w-6/12 h-full cursor-pointer`}
                  onClick={() => {
                    setRoomSelected(!roomSelected);
                  }}
                >
                  ROOM
                </div>
              )}
            </div>
            <div className="w-1/2 h-8">
              <p className="text-sm text-right font-[Centaur]">
                {roomSelected ? `starting form ${roomPrice}` : villaPrice} /
                night
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
