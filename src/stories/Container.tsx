import classNames from "classnames";
import React from "react";

interface IContainer {
  children?: React.ReactNode;
  bgWhite?: boolean;
  className?: string;
  full?: boolean;
  slider?: boolean;
}

export const Container = ({
  children,
  bgWhite = true,
  className,
  full = false,
  slider = false,
}: IContainer) => {
  return (
    <div
      className={classNames(bgWhite ? "bg-white" : "bg-[#f8f8f9]", className)}
    >
      <div
        className={
          full
            ? ""
            : classNames(
                "py-10 lg:py-20",
                slider
                  ? "md:ml-[max(0px,(100%_-_80rem)/2)] pl-5 xl:pl-0"
                  : "xl:max-w-7xl xl:mx-auto px-5 xl:px-0"
              )
        }
      >
        {children}
      </div>
    </div>
  );
};
