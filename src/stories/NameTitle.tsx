import classNames from 'classnames';
import React from 'react';

interface INameTitle {
  propertyName: string;
  title: string;
  removeBottomPadding?: boolean;
  onClick?: () => void;
}

export const NameTitle = ({
  propertyName,
  title,
  removeBottomPadding = false,
  onClick
}: INameTitle) => {
  return (
    <div
      className={classNames(
        'uppercase md:pb-10',
        removeBottomPadding ? '' : 'pb-6'
      )}
      onClick={onClick}
    >
      <p className="text-sm text-[#8A1E61] mb-2 md:tracking-[4.2px] md:font-[450] md:mb-5">
        {propertyName}
      </p>
      <p className="text-[28px] md:text-5xl text-[#18181B] font-light">
        {title}
      </p>
    </div>
  );
};
