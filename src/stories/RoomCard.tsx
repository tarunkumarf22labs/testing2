import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { AppContext } from 'src/Context';
import RoomModal from './RoomModal';
import ToastAlert from 'src/Toast';
import {
  PlusIcon,
  MinusIcon,
  MinusCircleIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';

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
      <div className="w-full p-3 flex flex-col gap-4 sm:p-4 border border-[#7B8084] sm:flex-row lg:max-h-[218px]">
        <div className="lg:max-w-[290px] flex-1">
          <Image
            onClick={showOrHideRoomModal}
            src={mainImage[0].image}
            alt={room.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full cursor-pointer"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between capitalize">
          <div>
            <div
              className="mb-1 text-xl font-bold cursor-pointer"
              onClick={showOrHideRoomModal}
            >
              {room.title && room.title}
            </div>
            <div
              className="text-xs text-[#545456] mb-4 cursor-pointer font-[400] font-centaur"
              onClick={showOrHideRoomModal}
            >
              {room.guestCapacity.minAdultAndChildren &&
                room.guestCapacity.minAdultAndChildren}
              -
              {room.guestCapacity.maxAdultAndChildren &&
                room.guestCapacity.maxAdultAndChildren}{' '}
              Guests . {room.bathRoomType && room.bathRoomType}
            </div>
            <div className="flex items-center justify-between w-20 pr-20 mt-4 mb-8 gap-x-2 sm:pr-0">
              <div
                onClick={() => {
                  handleSelectRoom(room?.id, room?.title, 'decrease');
                }}
                className="cursor-pointer"
              >
                <MinusCircleIcon fill="#8A1E61" color="white" className="w-6" />
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
                className="cursor-pointer"
                onClick={() => {
                  handleSelectRoom(room?.id, room?.title, 'increase');
                }}
              >
                <PlusCircleIcon fill="#8A1E61" color="white" className="w-6" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-6">
            <div className="flex justify-between">
              <div className="hidden gap-6 md:flex md:flex-row md:flex-wrap">
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
              <div className="flex gap-6 md:hidden">
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
