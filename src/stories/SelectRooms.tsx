import React from 'react';
import SelectRoomOption from './SelectRoomOption';

interface ISelectRooms {
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
}

const SelectRooms = ({ roomDetails }: ISelectRooms) => {
  return (
    <div className="w-full">
      {roomDetails.map((ele) => {
        return <SelectRoomOption key={ele.id} {...ele} />;
      })}
    </div>
  );
};

export default SelectRooms;
