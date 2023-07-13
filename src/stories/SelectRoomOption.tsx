import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "src/Context";
import ToastAlert from "src/Toast";

interface ISelectRoomOption {
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
}

const SelectRoomOption = (room: ISelectRoomOption) => {
  const { selectedNumberOfRooms, setSelectedNumberOfRooms } =
    useContext(AppContext);
  const handleSelectRoom = (id, villaType, type) => {
    let currentRoom = selectedNumberOfRooms?.filter(
      (ele) => ele.id === room.id
    );
    currentRoom = currentRoom?.length > 0 ? currentRoom[0] : null;
    if (type === "increase") {
      if (currentRoom === null) {
        setSelectedNumberOfRooms([
          ...selectedNumberOfRooms,
          {
            id: id,
            numberOfRooms: 1,
          },
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
          ToastAlert("Maximum room count reached", "warn");
        }
      }
    } else {
      if (currentRoom === null || currentRoom.numberOfRooms === 0) {
        ToastAlert("Number of rooms can not be less than 0", "warn");
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
    <div className="flex items-center justify-between w-full h-full mb-5 border-red">
      <div className="w-1/2 ml-5 text-xs">
        <p className="text-left capitalize">{room.title}</p>
        <p className="text-left">
          Accommodates {room.guestCapacity.minAdultAndChildren}-
          {room.guestCapacity.maxAdultAndChildren} Guests
        </p>
      </div>
      <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
        <div
          onClick={() => {
            handleSelectRoom(room.id, room.title, "increase");
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
            ? selectedNumberOfRooms.find((object) => object.id === room.id)
                ?.numberOfRooms
            : 0}
        </div>
        <div
          onClick={() => {
            handleSelectRoom(room.id, room.title, "decrease");
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
  );
};

export default SelectRoomOption;
