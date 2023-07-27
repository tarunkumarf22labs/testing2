import React, { useState } from 'react';
import { NameTitle } from './NameTitle';
import { stringToArray } from 'src/Props';
import { DownArrow, UpArrow } from 'src/data/Icons';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

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
    gsapClassName?: string;
    gsapEnum?: gsap_property_details_animation_sections;
  }>;
}

export const Accordion = (props: IAccordion) => {
  const { heading, data } = props;
  return (
    <div className="bg-white md:bg-[#f8f8f9]">
      <div className="px-5 xl:px-0 xl:max-w-7xl xl:mx-auto lg:py-20">
        <div className="flex flex-col divide-y">
          {data?.map((item, index) => {
            return <AccordionItem key={index} item={item} heading={heading} />;
          })}
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({
  item,
  heading
}: {
  item: {
    title: string;
    data: Array<{
      id: number;
      service?: string;
      description?: string;
      title?: null | string;
    }>;
    gsapClassName?: string;
    gsapEnum?: gsap_property_details_animation_sections;
  };
  heading: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, data, gsapClassName, gsapEnum } = item;

  useGsapPropertyDetailsAnimatons(gsapEnum);

  if (data?.length) {
    return (
      <div className={`${gsapClassName} relative py-8 overflow-hidden`}>
        <NameTitle
          propertyName={heading}
          title={title}
          removeBottomPadding={true}
          onClick={() => setIsOpen(!isOpen)}
          gsapClassName={`${gsapClassName}-heading-text opacity-0`}
        />
        <div
          className={`${gsapClassName}-action opacity-0 absolute right-0 p-4 cursor-pointer top-5`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <DownArrow /> : <UpArrow />}
        </div>
        <AnimatePresence initial={true}>
          <motion.div
            className="mt-6"
            initial="collapsed"
            animate={{
              opacity: isOpen ? 1 : 0,
              height: isOpen ? 'auto' : 0
            }}
            transition={{
              duration: 0.3
            }}
            onAnimationComplete={() => {
              ScrollTrigger.refresh();
            }}
          >
            {!data[0]?.title && (
              <ul className="list-disc font-centaur text-base text-[#545456] flex flex-col space-y-4">
                {data?.map((itm, index) => {
                  return (
                    <li key={index} className="ml-5 text-base font-centaur">
                      {itm.service && itm.service}
                    </li>
                  );
                })}
              </ul>
            )}
            {data[0]?.title &&
              data?.map((itm, index) => {
                const { description, title } = itm;
                const storyList = stringToArray(description);
                return (
                  <div key={index} className="pb-6">
                    <p className="pb-6 uppercase">{title}</p>
                    <ul className="list-disc font-centaur text-base text-[#545456] flex flex-col space-y-4">
                      {storyList.map((list, idx) => (
                        <li key={idx} className="ml-5 text-base font-centaur">
                          {list.service && list.service}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  } else {
    return null;
  }
};
