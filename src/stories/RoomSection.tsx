import React, { useContext, useEffect, useState } from 'react';
import { RoomCard } from './RoomCard';
import { AppContext } from 'src/Context';

interface IRoomSection {
  villaTitle: string;
  heading: string;
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
      thumbnail: string;
      image: string;
      type: string;
    }[];
  }[];
}

export const RoomSection = ({
  villaTitle,
  heading,
  roomData
}: IRoomSection) => {
  const [selectedRoom, setSelectedRoom] = useState<number>();

  return (
    <div className="md:px-8 py-10 uppercase flex-1 sm:p-8 lg:mt-20 bg-white">
      {villaTitle?.length ? (
        <p className="text-sm text-[#8A1E61] mb-2 sm:mb-5 sm:uppercase md:tracking-[4.2px] md:font-[450]">
          {`${villaTitle}'s`}
        </p>
      ) : null}
      <p className="text-3xl sm:text-5xl sm:text-[#1C1917] mb-6 sm:mb-10 font-light">
        {heading && heading}
      </p>
      <div className="space-y-5 sm:space-y-10">
        {roomData?.map((ele, id) => {
          return (
            <RoomCard
              room={ele}
              key={id}
              selectRoom={() => {
                setSelectedRoom(ele.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
