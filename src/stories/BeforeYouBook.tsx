import React, { useState } from 'react';
import { Container } from './Container';
import { NameTitle } from './NameTitle';
import { Conditions } from './Conditions';
import useIsMobile from '@/hooks/useIsMobile';
import { DownArrow, UpArrow } from 'src/data/Icons';

interface IConditionProps {
  label: string;
  text: string;
}

export interface ICondition {
  title: string;
  conditions: IConditionProps[] | string;
}

interface IBeforeYouBook {
  title: string;
  beforeYouBook: ICondition[];
}

export const BeforeYouBook = ({ title, beforeYouBook }: IBeforeYouBook) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white md:bg-[#f8f8f9] ">
      <div className="px-5 pb-10 xl:px-0 xl:max-w-7xl xl:mx-auto lg:py-20">
        <div className="relative border-t md:border-t-0">
          <div className="pt-8 uppercase md:pb-10"
           onClick={() => setIsOpen(!isOpen)}>
            <p className="text-sm text-[#8A1E61] mb-2 tracking-widest md:mb-5">
              { title && `${title}'s`}
            </p>
            <p className="text-[28px] md:text-5xl text-[#18181B] font-light">
              {title && title}
            </p>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-0 p-4 cursor-pointer top-4 md:hidden"
          >
            {!isOpen ? <DownArrow /> : <UpArrow />}
          </div>
          {isMobile && isOpen && (
            <div className="space-y-8 divide-y">
              {beforeYouBook?.map((item, index) => {
                return <Conditions data={item} key={index} index={index} />;
              })}
            </div>
          )}
          {!isMobile && (
            <div className="space-y-8 divide-y">
              {beforeYouBook?.map((item, index) => {
                return <Conditions data={item} key={index} index={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
