import React from "react";
import classNames from "classnames";

interface IButton {
  active?: boolean;
  text?: string;
}

export const Button = ({ active = false, text }: IButton) => {
  return (
    <button
      className={classNames(
        "uppercase py-2 px-4 text-xs text-[#8A1E61] sm:py-3 sm:px-6 whitespace-nowrap font-medium tracking-wide",
        active
          ? "border border-[#8A1E61] bg-[#8a1e611a] rounded-l-full rounded-r-full"
          : ""
      )}
    >
      {text}
    </button>
  );
};
