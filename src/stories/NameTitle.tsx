import classNames from 'classnames';
import React from 'react';

interface INameTitle {
  propertyName: string;
  title: string;
  removeBottomPadding?: boolean;
  onClick?: () => void;
  gsapClassName?: string;
}

export const NameTitle = ({
  propertyName,
  title,
  removeBottomPadding = false,
  onClick,
  gsapClassName
}: INameTitle) => {
  return (
    <div
      className={classNames(
        'uppercase md:pb-10',
        removeBottomPadding ? '' : 'pb-6'
      )}
      onClick={onClick}
    >
      <div className="text-sm text-[#8A1E61] mb-2 md:tracking-[4.2px] md:font-[450] md:mb-5 overflow-hidden">
        <p className={gsapClassName}>{propertyName}</p>
      </div>
      <div className="text-[28px] md:text-5xl text-[#18181B] font-light overflow-hidden">
        <h1 className={gsapClassName}>{title}</h1>
      </div>
    </div>
  );
};
