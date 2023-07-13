import React, { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface IRoomModal {
  showOrHide: () => void;
  roomData: {
    id: number;
    title: string;
    description: string;
    guestCapacity: {
      minAdultAndChildren: number;
      maxAdultAndChildren: number;
      infant: number;
      pet: number;
    };
    bathRoomType: string;
    roomCount: number;
    pricing: {
      basic: number;
      pet: number;
      extraGuest: number;
    };
    amenities: {
      icon: string;
      text: string;
    }[];
    images: {
      image: string;
      thumbnail:string;
      // width: number;
      // height: number;
      type: string;
    }[];
  };
}

const RoomModal = ({ showOrHide, roomData }: IRoomModal) => {
  let mainImage = roomData.images.filter((ele) => ele.type === "Main Image");
  return (
    <div className="fixed left-0 w-full overflow-auto h-[100vh] top-20 ease-in-out z-[500] rounded-3xl">
      <div
        className="fixed top-0 left-0 w-full h-screen "
        style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
        onClick={showOrHide}
      ></div>
      <div className="relative w-11/12 px-4 py-6 m-auto capitalize bg-white md:w-2/3 md:p-8">
        <button className="absolute top-10 right-[5%]" onClick={showOrHide}>
          <XMarkIcon className="w-7 h-7" />
        </button>
        <div className="flex flex-col-reverse items-start w-full gap-4 md:w-2/3 md:flex-row ">
          <div className="hidden w-full h-52 md:h-36 md:w-52 md:block" onClick={showOrHide}>
            <Image
              src={
                // "https://luxunlockdev.s3.ap-south-1.amazonaws.com/thumbnail_Lower_Verandah_at_Breakfast_e5e907f6b2.jpg"
                mainImage[0].thumbnail
              }
              width={400}
              height={100}
              alt="thumbnail"
              className="w-full h-full "
            />
          </div>
          <div className="block w-full h-52 md:h-36 md:w-52 md:hidden " onClick={showOrHide}>
            <Image
              src={
                // "https://luxunlockdev.s3.ap-south-1.amazonaws.com/thumbnail_Lower_Verandah_at_Breakfast_e5e907f6b2.jpg"
                mainImage[0].image
              }
              width={400}
              height={100}
              alt="thumbnail"
              className="w-full h-full "
            />
          </div>
          <div className="text-xs font-[Centaur] ">
            <p className="text-[#18181B] text-xl font-bold capitalize mb-4 md:mb-0">
              {roomData.title}
            </p>
            {/* {room.guestCapacity.minAdultAndChildren}-
              {room.guestCapacity.maxAdultAndChildren} Guests .{" "}
              {room.bathRoomType} */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <p className="capitalize">
                {roomData.guestCapacity.minAdultAndChildren}-
                {roomData.guestCapacity.maxAdultAndChildren} Guests{" "}
              </p>
              <div className="w-1 h-1 bg-[#7B8084] rounded-full "></div>
              <p className="capitalize">{roomData.bathRoomType}</p>
            </div>
            <p>
              <span className="text-sm font-bold">₹{roomData.pricing.basic}</span>{" "}
              <span className="text-[#545456] text-opacity-[0.8]">/ night</span>
            </p>
          </div>
        </div>
        <p className="text-[#545456] text-xl mt-8">master Bedroom Details</p>
        <p className="text-lg mt-5 text-[#545456] font-[Centaur] leading-8">
          {roomData.description}
        </p>
        <p className="mt-8 text-[#545456] text-xl mb-5">
        {roomData.title} Amenities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-[#545456]">
          {roomData.amenities.map((icon, index) => {
            return (
              <p key={index} className="flex">
                {/* {icons[icon.icon]}{" "} */}
                <Image
                  src={
                    // "https://luxunlockdev.s3.ap-south-1.amazonaws.com/wifi_high_824f7b47f3.svg"
                    icon.icon
                  }
                  width={20}
                  height={20}
                  alt={"icon"}
                />
                <span className="pl-3 text-base font-centaur">
                  {icon.text}
                </span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
