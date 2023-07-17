import React from 'react';
import { MobileSearchFiltersvg } from 'src/assets';
import { IMobileSearch } from './type';

const MobileSearch = ({
  text = 'Chennai',
  onclick = () => {}
}: IMobileSearch) => {
  return (
    <div
      className="h-[48px] flex items-center justify-between  border border-pantone font-Brandon "
      onClick={onclick}
    >
      <div className="pl-4 text-xs leading-6 font-normal uppercase text-pantone">
        {text}
      </div>
      <div className="pr-4">
        {' '}
        <MobileSearchFiltersvg />
      </div>
    </div>
  );
};

export default MobileSearch;
