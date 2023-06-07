import { FC, ReactNode } from "react";
import {
  DPCalendar as CalendarType,
  useContextCalendars,
  useContextDaysPropGetters,
  useDatePickerContext,
} from "@rehookify/datepicker";

// import { getDayClassName } from '../classnames-utils';
// import { getDayClassName } from '../classnames-utils';
// import { getDayClassName } from '../classnames-utils';
import { getDayClassName } from "./classnames-utils";
import { Button } from "./DayButton";
import { Section } from "./section";
import { SectionHeader } from "./section-header";

// import './calendar.css';

import React from "react";

interface CalendarProps {
  prevButton?: ReactNode;
  nextButton?: ReactNode;
  calendar: CalendarType;
  MonthOrder: string;
  year: string;
}

export const Calendar: FC<CalendarProps> = ({
  prevButton,
  nextButton,
  calendar,
  MonthOrder,
  year,
}) => {
  const { weekDays } = useContextCalendars();
  const { dayButton } = useContextDaysPropGetters();
  const { days, month } = calendar;
  //   console.log(days);

  return (
    <Section className="border-red w-[100%] md:w-[90%] m-auto">
      {MonthOrder === "first" && (
        <div className="flex items-center justify-between w-full">
          <p> {prevButton} </p>
          <p className="text-center ">
            {month} {year}
          </p>
        </div>
      )}
      {MonthOrder === "second" && (
        <div className="flex items-center justify-between w-full">
          <p className="text-center ">
            {month} {year}
          </p>
          <p> {nextButton} </p>
        </div>
      )}
      <div className="grid items-center h-8 grid-cols-7 mb-2 gap-y-2">
        {weekDays.map((d) => (
          <p className="text-xs text-center" key={d}>
            {d}
          </p>
        ))}
      </div>
      <main className="grid grid-cols-7 gap-y-2 text-red ">
        {days.map((d) => {
          //   console.log(d);
          return (
            // <button   key={d.$date.toString()}
            // >
            //     {d.day}
            // </button>
            <Button
              key={d.$date.toString()}
              className={getDayClassName("w-8 text-xs", d)}
              // disabled={true}
              // disabled={d.day === '27' ? true :false}
              {...dayButton(d)}
            >
              {d.day}
            </Button>
          );
        })}
      </main>
    </Section>
  );
};
