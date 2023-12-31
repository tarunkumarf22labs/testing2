import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

interface ITabButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isSelected?: boolean;
  title: string;
}

const TabButton = ({ className, isSelected, title, ...rest }: ITabButton) => {
  return (
    <button
      className={classNames(
        'uppercase text-[10px] md:text-xs text-[#8A1E61] py-[6px] md:py-3 px-4 md:px-6 rounded-[100px] tracking-[1px] md:tracking-[1.2px] font-light border active:ring-1 ring-[#8A1E61] whitespace-nowrap',
        isSelected
          ? 'border border-[#8A1E61] font-normal bg-[#8A1E61]/10'
          : 'border-transparent',
        className
      )}
      {...rest}
    >
      {title}
    </button>
  );
};

export default TabButton;
