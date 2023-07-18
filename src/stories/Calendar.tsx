import React, { FC, ReactNode } from 'react';
import {
  DPCalendar as CalendarType,
  useContextCalendars,
  useContextDaysPropGetters,
  useDatePickerContext
} from '@rehookify/datepicker';

import { getDayClassName } from './classnames-utils';
import { DayButton } from './DayButton';
import { Section } from './section';

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
  console.log(inReserve, MonthOrder, 'room');
  let display = MonthOrder === 'second' && inReserve ? 'none' : null;
  console.log(display, 'room');
  return (
    <Section className="w-full m-auto border-red">
      <div
        className={`
        ${MonthOrder === 'second' ? 'hidden sm:grid' : ''} 
        grid items-center h-8 grid-cols-7 mb-2 sm:grid gap-y-2
        ${display}`}
        style={{ display: display }}
      >
        {weekDays.map((d) => (
          <p className="text-xs text-center" key={d}>
            {d}
          </p>
        ))}
      </div>
      <main
        className={`
        ${MonthOrder == 'second' ? 'hidden sm:grid ' : ''} 
          grid grid-cols-7 gap-x-0 text-red 
          ${inReserve && MonthOrder === 'second' ? 'hidden' : ''}`}
        style={{ display: display }}
      >
        {days.map((d) => {
          return (
            <DayButton
              key={d.$date.toString()}
              className={getDayClassName('', d)}
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
