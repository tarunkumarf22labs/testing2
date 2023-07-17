import classNames from "classnames";
import React from "react";

type PrimaryButtonTypes = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  leftComponent?: JSX.Element;
};

const PrimaryButton = ({
  title,
  onClick,
  disabled,
  className,
  leftComponent,
}: PrimaryButtonTypes) => {
  return (
    <button
      className={classNames(
        "bg-[#8A1E61] hover:bg-[#7a1a56] hover:shadow-sm active:ring-1 active:ring-[#8A1E61] uppercase p-4 text-xs font-medium text-white tracking-wide flex items-center gap-[10px]",
        className,
        disabled &&
          "opacity-80 hover:bg-[#8A1E61] hover:shadow-none active:ring-0 cursor-not-allowed"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {leftComponent ?? null}
      {title}
    </button>
  );
};

export default PrimaryButton;
