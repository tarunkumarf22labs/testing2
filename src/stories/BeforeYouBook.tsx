import React, { useState } from "react";
import { Container } from "./Container";
import { NameTitle } from "./NameTitle";
import { Conditions } from "./Conditions";
import useIsMobile from "@/hooks/useIsMobile";
import { DownArrow, UpArrow } from "src/data/Icons";

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
      <div className="px-5 xl:px-0 pb-10 xl:max-w-7xl xl:mx-auto lg:py-20">
        <div className="relative border-t md:border-t-0">
          <div className="uppercase pt-8 md:pb-10">
            <p className="text-sm text-[#8A1E61] mb-2 tracking-widest md:mb-5">
              {`${title}'s`}
            </p>
            <p className="text-[28px] md:text-5xl text-[#18181B] font-light">
              {title}
            </p>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer absolute right-0 top-4 md:hidden p-4"
          >
            {!isOpen ? <DownArrow /> : <UpArrow />}
          </div>
          {isMobile && isOpen && (
            <div className="space-y-8 divide-y">
              {beforeYouBook.map((item, index) => {
                return <Conditions data={item} key={index} index={index} />;
              })}
            </div>
          )}
          {!isMobile && (
            <div className="space-y-8 divide-y">
              {beforeYouBook.map((item, index) => {
                return <Conditions data={item} key={index} index={index} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
