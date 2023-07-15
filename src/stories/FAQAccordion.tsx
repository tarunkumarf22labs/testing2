import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

interface IFAQAccordion {
  data: {
    question: string;
    answer: string;
  }[];
}

const FAQAccordion = ({ data }: IFAQAccordion) => {
  const [active, setActive] = useState<number | false>(false);

  const onClick = (index: number) => {
    setActive(active === index ? false : index);
  };

  return (
    <div className="w-full">
      {data?.map((faq, idx) => {
        return (
          <div
            key={`${idx}`}
            className="cursor-pointer border-b border-b-[#7B8084]/20 pt-10 pb-8 overflow-hidden"
            onClick={() => onClick(idx)}
          >
            <div className={"flex justify-between pb-2"}>
              <p className="text-base leading-[18px] text-[#545456] font-normal pr-2">
                {faq?.question}
              </p>
              {active === idx ? (
                <MinusIcon className="w-6 text-[#545456]" />
              ) : (
                <PlusIcon className="w-6 text-[#545456]" />
              )}
            </div>
            <AnimatePresence initial={false}>
              {active === idx && (
                <motion.p
                  className={
                    "text-[#7B8084] leading-[22px] font-normal font-[Centaur]"
                  }
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {faq?.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
