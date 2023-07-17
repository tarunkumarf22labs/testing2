import React, { useState } from 'react';

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

const Option = (props: OptionProps) => {
  const { title, options, id, onMenuSelectedHandler } = props;
  const [showOptions, setShowOptions] = useState(false);

  const shouldShow = showOptions ? 'absolute' : 'hidden';
  return (
    <li
      key={id}
      onClick={() => {
        setShowOptions(!showOptions);
      }}
      className="relative cursor-pointer hover:underline px-2 lg:px-5"
    >
      {title}
      {options && options.length === 0 ? (
        ''
      ) : showOptions ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-flex w-4 h-4 ml-1 -mt-1"
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
          className="inline-flex w-4 h-4 ml-1 -mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      )}
      {options && options.length > 0 && (
        <ul
          className={`${shouldShow} absolute p-5 text-black -left-48 w-[621px] grid grid-cols-3 bg-white shadow-2xl md:top-[58px] lg:-left-[440px] xl:right-1`}
        >
          {options &&
            options.length > 0 &&
            options.map((opt: optionsInterface, idx: number) => {
              return (
                <li
                  key={idx}
                  className="mb-3 ml-1 text-sm cursor-pointer hover:underline "
                  onClick={() => {
                    onMenuSelectedHandler(opt);
                  }}
                >
                  {opt.value}
                </li>
              );
            })}
        </ul>
      )}
    </li>
  );
};

export default Option;
