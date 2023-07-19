import React, { useState } from 'react';
import { Container } from './Container';
import { Conditions } from './Conditions';
import useIsMobile from '@/hooks/useIsMobile';
import { DownArrow, UpArrow } from 'src/data/Icons';
import { beforeYouBookSection } from 'src/data/constants';

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
    <Container
      bgWhite={isMobile ? true : false}
      innerContainerClassName="py-0 lg:py-0"
    >
      <div className="relative border-y md:border-y-0 py-10 lg:py-20">
        <div className="uppercase md:pb-10" onClick={() => setIsOpen(!isOpen)}>
          <p className="text-sm text-[#8A1E61] mb-2 tracking-widest md:mb-5">
            {title && `${title}'s`}
          </p>
          <p className="text-[28px] md:text-5xl text-[#18181B] font-light">
            {beforeYouBookSection.heading}
          </p>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-0 p-4 cursor-pointer top-4 md:hidden"
        >
          {!isOpen ? <DownArrow /> : <UpArrow />}
        </div>
        {isMobile && isOpen && (
          <div className="space-y-8 divide-y mt-6">
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
    </Container>
  );
};
