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
  inReserve?: boolean;
}

function Root({ inVillaDetails, inReserve }: DatePickerProps) {
  const { calendars } = useContextCalendars();
  const { formattedDates } = useContextDays();
  const { previousMonthButton, nextMonthButton } =
    useContextMonthsPropGetters();
  const { selectedDates } = useDatePickerState();
  const { setStartDate, setEndDate, startDate, endDate, ClearSelectedDate } =
    useContext(AppContext);

  const [start, end] = formattedDates;

  useEffect(() => {
    start ? setStartDate(start) : setStartDate("");
    end ? setEndDate(end) : setEndDate("");
  }, [start, end, setStartDate, setEndDate, startDate]);
  const firstDateString = startDate;
  const firstDateParts = firstDateString?.split("/");
  const firstMonth = parseInt(firstDateParts[1]);
  const firstDay = parseInt(firstDateParts[0]);
  const firstYear = parseInt(firstDateParts[2]);
  const firstDate = new Date(firstYear + "-" + firstMonth + "-" + firstDay);

  // Get the month name
  const firstMonthName = firstDate.toLocaleString("default", { month: "long" });

  const secondDateString = endDate;
  const secondDateParts = secondDateString?.split("/");
  const secondMonth = parseInt(secondDateParts[1]);
  const secondDay = parseInt(secondDateParts[0]);
  const secondYear = parseInt(secondDateParts[2]);
  const secondDate = new Date(secondYear + "-" + secondMonth + "-" + secondDay);

  // Get the month name
  const secondMonthName = secondDate.toLocaleString("default", {
    month: "long",
  });

  return (
    <div
      className={`z-[49] block ${
        inVillaDetails
          ? ""
          : "absolute  m-auto  ml-0 left-0 lg:w-7/12 lg:ml-40 xl:w-5/12 xl:left-44 2xl:w-5/12 2xl:left-[16vw] rounded shadow-xs shadow shadow-slate-300   top-50 p-4  "
      }w-full  bg-white`}
    >
      <div>
        <div className="flex items-center justify-between w-full bg-white z-[150]">
          <div className={`flex items-start justify-between w-[33%] ${inReserve ? "sm:w-[20%]" : "sm:w-[46%]"}`}>
            <p className="">
              {" "}
              <DayButton className="w-8" {...previousMonthButton()}>
                <div className="flex items-center justify-center rounded-full bg-[#545456] text-white w-6 h-6 ml-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </DayButton>
              {""}
            </p>
            <p  className={inReserve ? `hidden` : "hidden text-center sm:block"}>
              {calendars[1].year} {calendars[1].month}
            </p>
          </div>
          {/* <p className="hidden text-center sm:block">
            {calendars[0].year} {calendars[0].month}
            </p> */}
          <div className={`flex items-start justify-between w-[55%]  ${inReserve ? " sm:w-[60%]" : "sm:w-[46%]"}`}>
            <p className="text-center ">
              {calendars[0].year} {calendars[0].month}
            </p>
            <p>
              {" "}
              <DayButton className="w-8" {...nextMonthButton()}>
                <div className="flex items-center justify-center rounded-full bg-[#545456] text-white w-6 h-6 mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </DayButton>
            </p>
          </div>
        </div>


        
      </div>
      <main
        className={`grid grid-cols-1 gap-x-6 ${
          inReserve ? "sm:grid-cols-1" : "sm:grid-cols-2"
        } border-green z-[150] w-full`}
      >
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
          inReserve={inReserve}
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
          inReserve={inReserve}
        />
      </main>
      {firstMonthName !== "Invalid Date" && (
        <div className="flex items-center justify-between mb-4 text-xs md:text-xs">
          <p className="bg-[#8A1E611A] text-[#8A1E61] px-[10px] py-2">
            {firstMonthName !== "Invalid Date" &&
              firstDay &&
              `Check-in: ${firstMonthName} ${firstDay}`}{" "}
            {firstMonthName !== "Invalid Date" &&
              firstDay &&
              secondMonthName !== "Invalid Date" &&
              secondDay &&
              ` , Check-out: ${secondMonthName} ${secondDay}`}
          </p>
          <button
            className="uppercase py-2 px-4 text-xs text-[#8A1E61] sm:py-3 sm:px-6 whitespace-nowrap font-medium tracking-wide"
            onClick={ClearSelectedDate}
          >
            CLEAR DATES
          </button>
        </div>
      )}
    </div>
  );
}

const Datepicker = (props: DatePickerProps) => {
  const { inVillaDetails, inReserve } = props;
  const now = new Date();
  const M = now.getMonth();
  const Y = now.getFullYear();
  const D = now.getDate();
  const { selectedDates, onDatesChange, ClearSelectedDate } =
    useContext(AppContext);

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
      <Root inVillaDetails={inVillaDetails} inReserve={inReserve} />
    </DatePickerStateProvider>
  );
};

export default Datepicker;
