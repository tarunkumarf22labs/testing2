import React, { useState } from "react";
import { Container } from "./Container";
import { NameTitle } from "./NameTitle";
import { IInclusionsExclusionsSection } from "./InclusionsExclusionsSection";
import classNames from "classnames";
import { stringToArray } from "src/Props";
import { DownArrow, UpArrow } from "src/data/Icons";

interface IAccordion {
  heading: string;
  data: Array<{
    title: string;
    data: Array<{
      id: number;
      service?: string;
      description?: string;
      title?: null | string;
    }>;
  }>;
}

export const Accordion = (props: IAccordion) => {
  const { heading, data } = props;
  return (
    <div className="bg-white md:bg-[#f8f8f9]">
      <div className="px-5 xl:px-0 pt-10 xl:max-w-7xl xl:mx-auto lg:py-20">
        <div className="flex flex-col divide-y">
          {data.map((item, index) => {
            return <AccordionItem key={index} item={item} heading={heading} />;
          })}
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ item, heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, data } = item;

  return (
    <div className="relative py-8">
      <NameTitle
        propertyName={heading}
        title={title}
        removeBottomPadding={true}
      />
      <div
        className="absolute right-0 top-5 p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? <DownArrow /> : <UpArrow />}
      </div>
      {isOpen && (
        <div className="mt-6">
          {!data[0].title && (
            <ul className="list-disc font-centaur text-base text-[#545456] flex flex-col space-y-4">
              {data.map((itm, index) => {
                return (
                  <li key={index} className="ml-5 font-centaur text-base">
                    {itm.service}
                  </li>
                );
              })}
            </ul>
          )}
          {data[0]?.title &&
            data.map((itm, index) => {
              const { description, title } = itm;
              const storyList = stringToArray(description);
              return (
                <div key={index} className="pb-6">
                  <p className="uppercase pb-6">{title}</p>
                  <ul className="list-disc font-centaur text-base text-[#545456] flex flex-col space-y-4">
                    {storyList.map((list, idx) => (
                      <li key={idx} className="ml-5 font-centaur text-base">
                        {list.service}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
