import { useDatePickerContext } from "@rehookify/datepicker";
// import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

// import { getYearsClassName } from '../classnames-utils';
import { getYearsClassName } from "./classnames-utils";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import { Button } from "./DayButton";
import React from "react";

export const Years = () => {
  const {
    data: { years },
    propGetters: { previousYearsButton, nextYearsButton, yearButton },
  } = useDatePickerContext();

  return (
    <Section>
      <SectionHeader>
        <Button className="w-8" {...previousYearsButton()}>
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
        <p className="text-center text-sm">
          {`${years[0].year} - ${years[years.length - 1].year}`}
        </p>
        <Button className="w-8" {...nextYearsButton()}>
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
        {years.map((y) => (
          <Button
            key={y.$date.toString()}
            className={getYearsClassName("text-xs", y)}
            {...yearButton(y)}
          >
            {y.year}
          </Button>
        ))}
      </main>
    </Section>
  );
};
