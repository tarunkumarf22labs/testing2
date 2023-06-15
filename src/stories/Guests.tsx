import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { AppContext } from "src/Context";

const Guests = () => {
  const { setNumberOfGuests,numberOfGuests } = useContext(AppContext)
  const capacity = 15;

  function IncreaseNumberOfGuest(type: string): void {
    const CountOfGuests =
      numberOfGuests.additional_guests +
      numberOfGuests.adults +
      numberOfGuests.children +
      numberOfGuests.infants;

    if (CountOfGuests == capacity) {
      return;
    }
    setNumberOfGuests((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  function DecreaseNumberOfGuest(type: string): void {
    if (type === "adults" && numberOfGuests.adults === 1) {
      return;
    } else if (numberOfGuests[type] <= 0) {
      return;
    }
    setNumberOfGuests((prev) => ({
      ...prev,
      [type]: prev[type] - 1,
    }));
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full h-full mb-5 border-red">
        <div className="w-1/2 ml-5 text-xs">
          <p className="text-left">ADULTS</p>
          <p className="text-left">Age 13+</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div onClick={() => IncreaseNumberOfGuest("adults")}>
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
            {numberOfGuests.adults < 9 ? (
              <p>0{numberOfGuests.adults}</p>
            ) : (
              <p>{numberOfGuests.adults}</p>
            )}
          </div>
          <div onClick={() => DecreaseNumberOfGuest("adults")}>
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
      <div className="flex items-center justify-between w-full mb-5 border-red ">
        <div className="w-1/2 ml-5 text-xs ">
          <p className="text-left">CHILDREN</p>
          <p className="text-left">Ages 5-12 yrs</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div onClick={() => IncreaseNumberOfGuest("children")}>
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
            {numberOfGuests.children < 9 ? (
              <p>0{numberOfGuests.children}</p>
            ) : (
              <p>{numberOfGuests.children}</p>
            )}
          </div>
          <div onClick={() => DecreaseNumberOfGuest("children")}>
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
      <div className="flex items-center justify-between w-full mb-5 border-red ">
        <div className="w-1/2 ml-5 text-xs ">
          <p className="text-left">INFANTS</p>
          <p className="text-left">Under 5 yrs</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div onClick={() => IncreaseNumberOfGuest("infants")}>
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
            {numberOfGuests.infants < 9 ? (
              <p>0{numberOfGuests.infants}</p>
            ) : (
              <p>{numberOfGuests.infants}</p>
            )}
          </div>
          <div onClick={() => DecreaseNumberOfGuest("infants")}>
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
      <div className="flex items-center justify-between w-full mb-5 border-red ">
        <div className="w-1/2 ml-5 text-xs">
          <p className="text-left">PETS</p>
          <p className="text-left">No. of Pets</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div onClick={() => IncreaseNumberOfGuest("pets")}>
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
            {numberOfGuests.pets < 9 ? (
              <p>0{numberOfGuests.pets}</p>
            ) : (
              <p>{numberOfGuests.pets}</p>
            )}
          </div>
          <div onClick={() => DecreaseNumberOfGuest("pets")}>
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
      <div className="flex items-center justify-between w-full mb-5 border-red ">
        <div className="w-1/2 ml-5 text-xs ">
          <p className="text-left">ADDITIONAL GUESTS</p>
          <p className="text-left">No. of Additional Guests</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5 mb-5">
          <div onClick={() => IncreaseNumberOfGuest("additional_guests")}>
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
            {numberOfGuests.additional_guests < 9 ? (
              <p>0{numberOfGuests.additional_guests}</p>
            ) : (
              <p>{numberOfGuests.additional_guests}</p>
            )}
          </div>
          <div onClick={() => DecreaseNumberOfGuest("additional_guests")}>
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
    </div>
  );
};

export default Guests;
