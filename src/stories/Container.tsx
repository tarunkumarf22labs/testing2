import classNames from "classnames";
import React from "react";

interface IContainer {
  children?: React.ReactNode;
  bgWhite?: boolean;
  className?: string;
  full?: boolean;
}

export const Container = ({
  children,
  bgWhite = true,
  className,
  full = false,
}: IContainer) => {
  return (
    <div
      className={classNames(bgWhite ? "bg-white" : "bg-[#f8f8f9]", className)}
    >
      <div
        className={classNames(
          full ? "" : "px-5 xl:px-0 xl:max-w-7xl xl:mx-auto py-10 lg:py-20"
        )}
      >
        {children}
      </div>
    </div>
  );
};
