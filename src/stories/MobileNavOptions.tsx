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
    <div>
      <div
        className="flex items-center justify-between h-12 p-2 text-xs"
        onClick={() => setShowOptions(!showOptions)}
        key={id}
      >
        <p className="cursor-pointer hover:underline">{title}</p>
        {options?.length === 0 ? (
          ""
        ) : showOptions ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
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
            className="w-4 h-4"
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
                className="h-5 mb-1 ml-2 text-xs cursor-pointer hover:underline"
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
