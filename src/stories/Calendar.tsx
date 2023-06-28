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
  inReserve?: Boolean;
}

export const Calendar: FC<CalendarProps> = ({
  prevButton,
  nextButton,
  calendar,
  MonthOrder,
  year,
  inVillaDetails,
  inReserve
}) => {
  const { weekDays } = useContextCalendars();
  const { dayButton } = useContextDaysPropGetters();
  const { days, month } = calendar;

  return (
    <Section className="w-full m-auto border-red">
      <div
        className={`
        ${MonthOrder === "second" ? "hidden sm:grid" : ""} 
        ${inReserve && 'hidden'}
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
        ${inReserve && 'hidden'}
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
