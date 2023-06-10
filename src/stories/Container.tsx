import classNames from "classnames";
import React from "react";

interface IContainer {
  children?: React.ReactNode;
  bgWhite?: boolean;
}

export const Container = ({ children, bgWhite = true }: IContainer) => {
  return (
    <div className={classNames(bgWhite ? "bg-white" : "bg-[#f8f8f9]")}>
      <div className="px-5 py-10 xl:max-w-7xl xl:mx-auto lg:py-20">
        {children}
      </div>
    </div>
  );
};
