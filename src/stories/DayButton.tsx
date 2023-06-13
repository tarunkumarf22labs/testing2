import React from "react";
import { FC, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export const DayButton: FC<ButtonProps> = ({ className, children, ...props }) => {
  return(
    // <button className={buttonClassName} {...props}>
    <button className={`h-8 w-[4rem] sm:w-[3rem] flex justify-center items-center hover:bg-['#8A1E61] rounded disabled:opacity-50 disabled:cursor-not-allowed ${className}` } {...props}>

        {children}
    </button>
  );
};

