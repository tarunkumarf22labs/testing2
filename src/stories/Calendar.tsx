import React, { FC, ReactNode } from "react";
import {
  DPCalendar as CalendarType,
  useContextCalendars,
  useContextDaysPropGetters,
  useDatePickerContext,
} from "@rehookify/datepicker";

import { getDayClassName } from "./classnames-utils";
import { DayButton } from "./DayButton";
import { Section } from "./section";

interface CalendarProps {
  prevButton?: ReactNode;
  nextButton?: ReactNode;
  calendar: CalendarType;
  MonthOrder: string;
  year: string;
  inVillaDetails?: Boolean;
}

export const Calendar: FC<CalendarProps> = ({
  prevButton,
  nextButton,
  calendar,
  MonthOrder,
  year,
  inVillaDetails,
}) => {
  const { weekDays } = useContextCalendars();
  const { dayButton } = useContextDaysPropGetters();
  const { days, month } = calendar;

  return (
    <Section className="border-red w-full md:w-[90%] m-auto">
      <div
        className={`
        ${MonthOrder === "second" ? "hidden sm:grid" : ""} 
        grid items-center h-8 grid-cols-7 mb-2 gsm:rid gap-y-2`}
      >
        {weekDays.map((d) => (
          <p className="text-xs text-center" key={d}>
            {d}
          </p>
        ))}
      </div>
      <main
        className={`
        ${MonthOrder === "second" ? "hidden sm:grid " : ""} 
          grid grid-cols-7 gap-x-0 text-red `}
      >
        {days.map((d) => {
          return (
            <DayButton
              key={d.$date.toString()}
              className={getDayClassName("", d)}
              {...dayButton(d)}
            >
              {d.day}
            </DayButton>
          );
        })}
      </main>
    </Section>
  );
};
