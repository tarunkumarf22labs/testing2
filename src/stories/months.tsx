import { useDatePickerContext } from "@rehookify/datepicker";
// import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

// import { getMonthClassName } from '../classnames-utils';
import { getMonthClassName } from "./classnames-utils";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import { Button } from "./DayButton";
import React from "react";

export const Months = () => {
  const {
    data: { months },
    propGetters: { previousMonthButton, nextMonthButton, monthButton },
  } = useDatePickerContext();

  const year = months[0].$date.getFullYear();

  return (
    <Section>
      <SectionHeader className="flex">
        <Button className="w-8" {...previousMonthButton()}>
          {/* <IoChevronBack /> */}
          {/* {">"} */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
        <p className="text-center text-sm">{year}</p>
        <Button className="w-8" {...nextMonthButton()}>
          {/* <IoChevronForward /> */}
          {/* {"<"} */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
      </SectionHeader>
      <main className="grid grid-cols-3 items-center gap-x-2 gap-y-2">
        {months.map((m) => (
          <Button
            key={m.month + year}
            className={getMonthClassName("text-xs", m)}
            {...monthButton(m)}
          >
            {m.month}
          </Button>
        ))}
      </main>
    </Section>
  );
};
