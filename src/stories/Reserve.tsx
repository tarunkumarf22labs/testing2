import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import Guests from "./Guests";
import SelectRooms from "./SelectRooms";
import { AppContext } from "src/Context";

interface IReserve {
  infant: number;
  maxAdultAndChildren: number;
  minAdultAndChildren: number;
  pet: number;
  basicPrice: number;
  petPrice: number;
  extraGuestPrice: number;
}

const Reserve = ({
  infant,
  maxAdultAndChildren,
  minAdultAndChildren,
  pet,
  basicPrice,
  petPrice,
  extraGuestPrice,
}: IReserve) => {
  const [guestsSelectorOpen, setGuestsSelectorOpen] = useState(false);
  const [roomSelected, setRoomSelected] = useState(false);
  const [showRoomOption, setshowRoomOption] = useState(false);
  const { startDate, endDate, numberOfGuests } = useContext(AppContext);

  console.log(startDate, endDate, 'endDate')
  let Number_In_Days;

  if(startDate && !endDate){
    Number_In_Days = 1
  }

  useEffect(() => {
    if(startDate && !endDate){
      Number_In_Days = 1
    }
  },[startDate])
  const Date1Part = startDate.split('/');
  const Date2Part = endDate.split('/');

  const date1 = new Date (Date1Part[1] + '/' + Date1Part[0] + '/' + Date1Part[2]);
  const date2 = new Date (Date2Part[1] + '/' + Date2Part[0] + '/' + Date2Part[2]);

  // To calculate the time difference of two dates
  const Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  Number_In_Days = Difference_In_Time / (1000 * 3600 * 24)+1;
  if(Number.isNaN(Number_In_Days)){
    Number_In_Days = 0;
  }

  let GuestProps = {
    infant,
    maxAdultAndChildren,
    minAdultAndChildren,
    pet,
  };

  let TotalGuests =
    numberOfGuests.additional_guests +
    numberOfGuests.adults +
    numberOfGuests.children +
    numberOfGuests.infants;

  const totalPrice =
    numberOfGuests.adults * basicPrice +
    numberOfGuests.children * basicPrice +
    numberOfGuests.additional_guests * extraGuestPrice +
    numberOfGuests.pets * petPrice;
  return (
    <div className="m-auto">
      <p className="text-center">
        <b>₹{basicPrice}</b>/ night
      </p>
      <div className="flex items-center justify-between w-10/12 h-12 m-auto mt-5 text-center">
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
      <div className="flex items-center justify-between w-10/12 h-12 p-5 m-auto mt-5 text-center bg-[#f8f8f9] text-xs">
        <p className="flex items-center justify-start w-6/12 h-full">
          {startDate}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="flex items-center justify-end w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
      </div>
      <div className="flex items-center justify-between w-10/12 h-12 p-5 m-auto mt-5 text-center bg-[#f8f8f9] text-xs">
        <p className="flex items-center justify-start w-6/12 h-full">
          {endDate}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="flex items-center justify-end w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
      </div>
      {roomSelected && (
        <div
          className="flex items-center justify-between w-10/12 h-12 p-5 m-auto mt-5 text-center bg-[#f8f8f9] text-xs"
          onClick={() => setshowRoomOption(!showRoomOption)}
        >
          <p className="flex items-center justify-start w-6/12 h-full">
            Select Bedroom
          </p>
          {showRoomOption ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="flex items-center justify-end w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </div>
      )}
      {showRoomOption && (
        <div className="flex items-center justify-between w-10/12 m-auto  text-center h-68 bg-[#F8F8F9] mt-2 text-xs">
          <SelectRooms />
        </div>
      )}
      <div
        className="flex items-center justify-between w-10/12 h-12 p-5 m-auto mt-5 text-center bg-[#f8f8f9] text-xs"
        onClick={() => setGuestsSelectorOpen(!guestsSelectorOpen)}
      >
        <p className="flex items-center justify-start w-6/12 h-full">
          {TotalGuests}
          {TotalGuests > 1 ? " Guests" : " Guest"}
        </p>
        {guestsSelectorOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="flex items-center justify-end w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </div>
      {guestsSelectorOpen && (
        <div className="flex items-center justify-between w-10/12 m-auto  text-center h-68 bg-[#F8F8F9] mt-2 text-xs">
          <Guests {...GuestProps} />
        </div>
      )}

      <div className="flex items-center justify-between w-10/12 h-3 m-auto mt-6 text-center">
        <p className="flex items-center justify-start h-full ml-1">
          ₹{totalPrice} {'X ' }{Number_In_Days} {'Nights'}
        </p>
        <p className="flex items-center justify-end h-full">
          ₹{totalPrice * Number_In_Days}
        </p>
      </div>
      <div className="flex items-center justify-between w-10/12 h-3 m-auto mt-6 text-center">
        <p className="flex items-center justify-start h-full ml-1">VAT / GST</p>
        <p className="flex items-center justify-end h-full">
          ₹{(totalPrice * Number_In_Days * 18) / 100}
        </p>
      </div>
      <div className="flex items-center justify-between w-10/12 h-3 m-auto mt-6 font-bold text-center">
        <p className="flex items-center justify-start h-full">Total Price</p>
        <p className="flex items-center justify-end h-full">
          ₹{totalPrice * Number_In_Days + (totalPrice * Number_In_Days * 18) / 100}
        </p>
      </div>
      <div className="flex justify-center items-center w-10/12 h-12 m-auto mt-5 font-bold bg-[#8A1E61] text-white p-auto hover:text-[#8A1E61] hover:bg-[#F8F8F9] rounded-sm">
        RESERVE
      </div>
    </div>
  );
};

export default Reserve;
