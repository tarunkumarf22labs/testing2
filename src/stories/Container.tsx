import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IContainer {
  children?: React.ReactNode;
  bgWhite?: boolean;
  className?: string;
  full?: boolean;
  slider?: boolean;
  innerContainerClassName?: string;
  bgTransparent?: boolean;
}

export const Container = ({
  children,
  bgWhite = true,
  className,
  full = false,
  slider = false,
  innerContainerClassName,
  bgTransparent
}: IContainer) => {
  return (
    <div
      className={twMerge(
        bgTransparent
          ? 'bg-transparent'
          : bgWhite
          ? 'bg-white'
          : 'bg-[#f8f8f9]',
        slider ? 'lg:pl-10 xl:pl-[100px]' : 'lg:px-10 xl:px-[100px]',
        className
      )}
    >
      <div
        className={
          full
            ? ''
            : twMerge(
                'py-10 lg:py-20',
                slider
                  ? 'xl:ml-[max(0px,(100%_-_80rem)/2.5)] pl-5 lg:pl-0'
                  : 'xl:max-w-7xl xl:mx-auto px-5 lg:px-0',
                innerContainerClassName
              )
        }
      >
        {children}
      </div>
    </div>
  );
};
