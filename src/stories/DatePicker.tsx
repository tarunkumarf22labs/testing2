import {
  DatePickerStateProvider,
  useContextCalendars,
  useContextDays,
  useContextMonthsPropGetters,
  useDatePickerContext,
  useDatePicker,
  useDatePickerState,
} from "@rehookify/datepicker";
import React, { useContext, useEffect, useState } from "react";
import { DayButton } from "./DayButton";
import { Calendar } from "./Calendar";
import { AppContext } from "src/Context";

interface DatePickerProps {
  inVillaDetails?: boolean;
}


function Root({inVillaDetails}: DatePickerProps) {
  const { calendars } = useContextCalendars();
  const { formattedDates } = useContextDays();
  const { previousMonthButton, nextMonthButton } =
    useContextMonthsPropGetters();
  const { selectedDates } = useDatePickerState();
  const { setStartDate, setEndDate } =
    useContext(AppContext);

  const [start, end] = formattedDates;
  
  useEffect(() => {
    start ? setStartDate(start) : null;
    end ? setEndDate(end) : null;
  }, [start, end, setStartDate, setEndDate]);

  return (
    <div
      className={`z-[49] block ${
        inVillaDetails ? "" : "absolute "
      }w-[100%]  bg-white  top-50 p-4  rounded shadow-xs shadow shadow-slate-300  m-auto  ml-0 left-0 lg:w-7/12 lg:ml-40 xl:w-5/12 xl:left-44 2xl:w-4/12 2xl:left-[17vw]`}
    >
      <div>
        <div className="flex items-center justify-between w-full bg-white z-[150]">
          <p>
            {" "}
            <DayButton className="w-8" {...previousMonthButton()}>
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
            </DayButton>
            {""}
          </p>
          <p className="text-center ">
            {calendars[0].year} {calendars[0].month}
          </p>
          <p className="hidden text-center sm:block">
            {calendars[1].year} {calendars[1].month}
          </p>
          <p>
            {" "}
            <DayButton className="w-8" {...nextMonthButton()}>
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
            </DayButton>
          </p>
        </div>
      </div>
      <main className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 border-green z-[150]">
        <Calendar
          prevButton={
            <DayButton className="w-8" {...previousMonthButton()}>
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
            </DayButton>
          }
          calendar={calendars[1]}
          MonthOrder="first"
          year={calendars[1].year}
          inVillaDetails={inVillaDetails}
        />
        <Calendar
          nextButton={
            <DayButton className="w-8" {...nextMonthButton()}>
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
            </DayButton>
          }
          calendar={calendars[0]}
          MonthOrder="second"
          year={calendars[0].year}
          inVillaDetails={inVillaDetails}
        />
      </main>
    </div>
  );
}

const Datepicker = (props: DatePickerProps) => {
  const { inVillaDetails } = props;
  const now = new Date();
  const M = now.getMonth();
  const Y = now.getFullYear();
  const D = now.getDate();
  const [selectedDates, onDatesChange] = useState<Date[]>([]);

  return (
    <DatePickerStateProvider
      config={{
        selectedDates,
        onDatesChange,
        dates: {
          mode: "range",
          minDate: new Date(Y, M - 2, 1),
          selectSameDate: true,
          //   toggle: true
        },
        calendar: {
          offsets: [-1, 1],
        },
        exclude: {
          day: [],
          date: [
            new Date("2023-06-10T12:39:02.476Z"),
            new Date("2023-06-15T12:39:02.476Z"),
            new Date("2023-06-25T12:39:02.476Z"),
          ],
        },
      }}
    >
      <Root
        inVillaDetails={false}
      />
    </DatePickerStateProvider>
  );
};

export default Datepicker;
