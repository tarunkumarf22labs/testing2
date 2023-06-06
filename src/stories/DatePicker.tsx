import {
  DatePickerStateProvider,
  useContextCalendars,
  useContextDays,
  useContextMonthsPropGetters,
  useDatePickerContext,
  useDatePicker,
  useDatePickerState,
} from "@rehookify/datepicker";
import React, { useState } from "react";
// import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
//   import { Button, Calendar } from "./components";
import { Button } from "./button";
import { Calendar } from "./calendar";

interface DatePickerProps {
  startDate: string | undefined;
  setStartDate: React.Dispatch<string | undefined>;
  endDate: string | undefined;
  setEndDate: React.Dispatch<string | undefined>;
}

function Root(props: DatePickerProps) {
  const { startDate, setStartDate, endDate, setEndDate } = props;
  const { calendars,  } = useContextCalendars();
  const { formattedDates } = useContextDays();
  const { previousMonthButton, nextMonthButton } =
    useContextMonthsPropGetters();
  const { selectedDates } = useDatePickerState();
  console.log(calendars)
  const [start, end] = formattedDates;
   console.log('start',start)  

  console.log(">", selectedDates);

  console.log(formattedDates, 'formattedDates)');
  
  setStartDate(start);
  setEndDate(end);
  return (
    <div className="block absolute bg-white w-[80%] left-10 sm:left-[5%] sm:w-[90%] top-50 p-4 border border-slate-300 rounded shadow-xs shadow shadow-slate-300  m-auto md:w-[75%] md:left-[12.5%] lg:w-[50%] lg:left-[30%] xl:w-[35%]">
      {/* <h1 className="w-full mb-6 text-2xl text-center">
        {start ? start : "..."}&nbsp; - &nbsp;{end ? end : "..."}
      </h1> */}
      <main className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 border-green">
        <Calendar
          prevButton={
            <Button className="w-8" {...previousMonthButton()}>
              {/* <IoChevronBack /> */}
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
          }
          calendar={calendars[1]}
          MonthOrder="first"
          year={calendars[1].year}
        />
        {/* <Calendar
            calendar={calendars[0]}
          /> */}
        <Calendar
          nextButton={
            <Button className="w-8" {...nextMonthButton()}>
              {/* <IoChevronForward /> */}
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
          }
          // calendar={calendars[2]}
          calendar={calendars[0]}
          MonthOrder="second"
          year={calendars[0].year}
        />
      </main>
    </div>
  );
} // maxDate: new Date(Y, M + 2, 0),

const Datepicker = (props: DatePickerProps) => {
  const { startDate, setStartDate, endDate, setEndDate } = props;
  const now = new Date();
  const M = now.getMonth();
  const Y = now.getFullYear();
  const D = now.getDate();
  const [selectedDates, onDatesChange] = useState<Date[]>([]);

  console.log(">>", selectedDates);

  return (
    <DatePickerStateProvider
      config={{
        selectedDates,
        onDatesChange,
        dates: {
          mode: "range",
          minDate: new Date(Y, M - 2, 1),
          // maxDate: new Date(Y, M + 2, 0),
          selectSameDate: true,
        //   toggle: true
        },
        calendar: {
          offsets: [-1, 1],
        },
        exclude: {
          day: [],
          date: [new Date("2023-06-10T12:39:02.476Z"), new Date("2023-06-15T12:39:02.476Z"), new Date("2023-06-25T12:39:02.476Z")],
        },
      }}
    >
      <Root
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </DatePickerStateProvider>
  );
};

export default Datepicker;
