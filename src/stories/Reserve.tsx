import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import Guests from "./Guests";
import SelectRooms from "./SelectRooms";
import { AppContext } from "src/Context";

const Reserve = () => {
  const [guestsSelectorOpen, setGuestsSelectorOpen] = useState(false);
  const [roomSelected, setRoomSelected] = useState(false);
  const [showRoomOption, setshowRoomOption] = useState(false);
  const { startDate, endDate, numberOfGuests } = useContext(AppContext);

  let TotalGuests =
    numberOfGuests.additional_guests +
    numberOfGuests.adults +
    numberOfGuests.children +
    numberOfGuests.infants;

  return (
    <div className="w-[390px] m-auto lg:w-[350px]">
      <p className="text-center">
        <b>₹12,450 </b>/ night
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
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </div>
      {guestsSelectorOpen && (
        <div className="flex items-center justify-between w-10/12 m-auto  text-center h-68 bg-[#F8F8F9] mt-2 text-xs">
          <Guests
          // numberOfGuests={numberOfGuests}
          // setNumberOfGuests={setNumberOfGuests}
          />
        </div>
      )}

      <div className="flex items-center justify-between w-10/12 h-3 m-auto mt-6 text-center">
        <p className="flex items-center justify-start h-full ml-1">
          ₹27,500 X 13 Nights
        </p>
        <p className="flex items-center justify-end h-full">₹357,500</p>
      </div>
      <div className="flex items-center justify-between w-10/12 h-3 m-auto mt-6 text-center">
        <p className="flex items-center justify-start h-full ml-1">VAT / GST</p>
        <p className="flex items-center justify-end h-full">₹64,350</p>
      </div>
      <div className="flex items-center justify-between w-10/12 h-3 m-auto mt-6 font-bold text-center">
        <p className="flex items-center justify-start h-full">Total Price</p>
        <p className="flex items-center justify-end h-full">₹4,21,850</p>
      </div>
      <div className="flex justify-center items-center w-10/12 h-12 m-auto mt-5 font-bold bg-[#8A1E61] text-white p-auto hover:text-[#8A1E61] hover:bg-[#F8F8F9] rounded-sm">
        RESERVE
      </div>
    </div>
  );
};

export default Reserve;
