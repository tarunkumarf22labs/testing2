import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { AppContext } from 'src/Context';
import RoomModal from './RoomModal';
import ToastAlert from 'src/Toast';

interface IRoomCard {
  selectRoom: (value: React.SetStateAction<number>) => void;
  room: {
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
      thumbnail: string;
      type: string;
    }[];
  };
}

export const RoomCard = ({ selectRoom, room }: IRoomCard) => {
  const [showRoomModal, setShowRoomModal] = useState<Boolean>(false);

  const { selectedNumberOfRooms, setSelectedNumberOfRooms } =
    useContext(AppContext);
  const iconsArr = room.amenities.map((ele) => ele.icon);
  const maxEightIcons = iconsArr.length > 8 ? iconsArr.slice(0, 8) : iconsArr;
  const maxFourIcons = iconsArr.length > 4 ? iconsArr.slice(0, 4) : iconsArr;
  const mainImage = room.images.filter((ele) => ele.type === 'Main Image');

  function showOrHideRoomModal() {
    setShowRoomModal(!showRoomModal);
  }

  const handleSelectRoom = (id, villaType, type) => {
    let currentRoom = selectedNumberOfRooms?.filter(
      (ele) => ele.id === room.id
    );
    currentRoom = currentRoom?.length > 0 ? currentRoom[0] : null;
    if (type === 'increase') {
      if (currentRoom === null) {
        setSelectedNumberOfRooms([
          ...selectedNumberOfRooms,
          {
            id: id,
            numberOfRooms: 1
          }
        ]);
      } else {
        if (
          room.guestCapacity.maxAdultAndChildren > currentRoom.numberOfRooms
        ) {
          const updatedRooms = selectedNumberOfRooms.map((ele) => {
            ele.id === room.id ? (ele.numberOfRooms += 1) : null;
            return ele;
          });
          setSelectedNumberOfRooms(updatedRooms);
        } else {
          ToastAlert('Maximum room count reached', 'warn');
        }
      }
    } else {
      if (currentRoom === null || currentRoom.numberOfRooms === 0) {
        ToastAlert('Number of rooms can not be less than 0', 'warn');
      } else {
        if (currentRoom.numberOfRooms > 0) {
          const updatedRooms = selectedNumberOfRooms.map((ele) => {
            ele.id === room.id ? (ele.numberOfRooms -= 1) : null;
            return ele;
          });
          setSelectedNumberOfRooms(updatedRooms);
        }
      }
    }
  };

  return (
    <>
      <div className="p-3 flex flex-col sm:p-4 border border-[#7B8084] sm:flex-row sm:max-w-3xl">
        <div
          className="w-full mb-3 cursor-pointer sm:mb-0 sm:mr-4"
          onClick={showOrHideRoomModal}
        >
          <Image
            src={mainImage[0].image}
            alt={room.title}
            width={326}
            height={209}
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-between capitalize min-h-full w-full sm:max-w-[410px]">
          <div className="">
            <div
              className="mb-1 text-xl font-bold cursor-pointer"
              onClick={showOrHideRoomModal}
            >
              {room.title && room.title}
            </div>
            <div
              className="text-xs text-[#545456] mb-4 cursor-pointer"
              onClick={showOrHideRoomModal}
            >
              {room.guestCapacity.minAdultAndChildren && room.guestCapacity.minAdultAndChildren}-
              {room.guestCapacity.maxAdultAndChildren && room.guestCapacity.maxAdultAndChildren} Guests .{' '}
              {room.bathRoomType && room.bathRoomType}
            </div>
            <div className="flex items-center justify-between w-3/5 pr-20 mb-4 sm:mb-0 sm:pr-0">
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleSelectRoom(room?.id, room?.title, 'increase');
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
                  <line
                    x1="12"
                    y1="7"
                    x2="12"
                    y2="17"
                    stroke="#000"
                    stroke-width="2"
                  />
                  <line
                    x1="7"
                    y1="12"
                    x2="17"
                    y2="12"
                    stroke="#000"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div>
                {selectedNumberOfRooms.find((object) => object.id === room.id)
                  ?.numberOfRooms
                  ? selectedNumberOfRooms.find(
                      (object) => object.id === room.id
                    )?.numberOfRooms
                  : 0}
              </div>
              <div
                onClick={() => {
                  handleSelectRoom(room?.id, room?.title, 'decrease');
                }}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
                  <line
                    x1="7"
                    y1="12"
                    x2="17"
                    y2="12"
                    stroke="#000"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-6">
            <div className="flex justify-between">
              <div className="hidden space-x-6 md:flex md:flex-row">
                {maxEightIcons.map((icon, index) => (
                  <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt={'icon'}
                    key={index}
                  />
                ))}
              </div>
              <div className="flex space-x-6 md:hidden">
                {maxFourIcons.map((icon, index) => (
                  <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt={'icon'}
                    key={index}
                  />
                ))}
              </div>
            </div>
            {iconsArr.length > 8 && (
              <div
                className="text-xs text-[#8A1E61] whitespace-nowrap cursor-pointer"
                onClick={showOrHideRoomModal}
              >
                +15 More
              </div>
            )}
          </div>
        </div>
      </div>
      {showRoomModal && (
        <RoomModal showOrHide={showOrHideRoomModal} roomData={room} />
      )}
    </>
  );
};
