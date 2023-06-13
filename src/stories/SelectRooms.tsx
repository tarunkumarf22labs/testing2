import React from "react";

const SelectRooms = () => {

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full h-full mb-5 border-red">
        <div className="w-1/2 ml-5 text-xs">
          <p className="text-left capitalize">Master Bedroom</p>
          <p className="text-left">Accommodates 2-3 Guests</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div>
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
          <div >
           1
          </div>
          <div>
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
          <p className="text-left capitalize" >Second Bedroom</p>
          <p className="text-left" >Accommodates 2-3 Guests</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div>
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
            1
          </div>
          <div >
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

export default SelectRooms;
