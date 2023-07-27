import React, { useEffect, useState } from 'react';
import { Container } from './Container';
import { Conditions } from './Conditions';
import useIsMobile from '@/hooks/useIsMobile';
import { DownArrow, UpArrow } from 'src/data/Icons';
import { beforeYouBookSection } from 'src/data/constants';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.before_you_book
  );

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isMobile, isOpen]);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="gsap-pd-before-you-book-section">
      <Container
        bgWhite={isMobile ? true : false}
        innerContainerClassName="py-0 lg:py-0"
      >
        <div className="relative border-y md:border-y-0 py-10 lg:py-20">
          <div className="uppercase md:pb-10" onClick={onToggle}>
            <div className="text-sm text-[#8A1E61] mb-2 md:tracking-[4.2px] md:font-[450] md:mb-5 overflow-hidden">
              <p className="gsap-pd-before-you-book-section-heading-text opacity-0">
                {title && `${title}'s`}
              </p>
            </div>
            <div className="text-[28px] md:text-5xl text-[#18181B] font-light overflow-hidden">
              <h1 className="gsap-pd-before-you-book-section-heading-text opacity-0">
                {beforeYouBookSection.heading}
              </h1>
            </div>
          </div>
          <div
            onClick={onToggle}
            className="gsap-pd-before-you-book-section-action absolute right-0 p-4 cursor-pointer top-4 md:hidden"
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
    </div>
  );
};
