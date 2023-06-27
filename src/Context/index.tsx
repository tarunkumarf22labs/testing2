import React, { useState } from "react";
import { GuestsInterface } from "src/Interface";

export const AppContext = React.createContext(undefined);
function AppProvider({ children }) {
  const [numberOfGuests, setNumberOfGuests] = useState<GuestsInterface>({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
    additional_guests: 0,
  });
  const [startDate, setStartDate] = useState<string | undefined>("");
  const [endDate, setEndDate] = useState<string | undefined>("");
  const [selectedDates, onDatesChange] = useState<Date[]>([]);

  function ClearSelectedDate () {
    onDatesChange([])
    return
  }

  return (
    <AppContext.Provider value={{
      numberOfGuests,
      setNumberOfGuests,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      selectedDates,
      onDatesChange,
      ClearSelectedDate
    }}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
