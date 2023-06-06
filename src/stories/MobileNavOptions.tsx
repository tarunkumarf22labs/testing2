import React, { useState } from "react";

interface optionsInterface {
  id: number;
  value: string;
  path: string;
}

interface OptionProps {
  title: string;
  options?: optionsInterface[];
  id: number;
  onMenuSelectedHandler: (menu: optionsInterface) => void;
}

const MobileNavOptions = (props: OptionProps) => {
  const { title, options, id, onMenuSelectedHandler } = props;
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="">
      <div
        className=" h-12 flex justify-between items-center p-2 text-xs"
        onClick={() => setShowOptions(!showOptions)}
        key={id}
      >
        <p className="hover:underline cursor-pointer">{title}</p>
        {options?.length === 0 ? (
          ""
        ) : showOptions ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      <ul>
        {showOptions &&
          options &&
          options.map((ele, id) => {
            return (
              <li
                key={id}
                className="  mb-1 h-5 ml-2 hover:underline cursor-pointer text-xs"
                onClick={() => {
                  onMenuSelectedHandler(ele);
                }}
              >
                {ele.value}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MobileNavOptions;
