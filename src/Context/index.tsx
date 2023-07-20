import React, { useState } from 'react';
import { GuestsInterface } from 'src/Interface';

interface InumberOfRooms {
  id: number;
  numberOfRooms: number;
}

export const AppContext = React.createContext(undefined);
function AppProvider({ children }) {
  const [numberOfGuests, setNumberOfGuests] = useState<GuestsInterface>(() => {
    return {
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0,
      additional_guests: 0
    };
  });
  const [startDate, setStartDate] = useState<string | undefined>(() => '');
  const [endDate, setEndDate] = useState<string | undefined>(() => '');
  const [selectedDates, onDatesChange] = useState<Date[]>(() => []);
  const [currentlocation, setCurrentlocation] = useState(() => {
    return {
      id: 0,
      title: '',
      type: ''
    };
  });
  const [guestsValue, setGuestsValue] = useState(() => '');
  const [selectedNumberOfRooms, setSelectedNumberOfRooms] = useState<
    InumberOfRooms[]
  >(() => []);
  const [showSidebar, setShowSideBar] = useState<boolean>(false);

  function ClearSelectedDate() {
    onDatesChange([]);
    return;
  }

  return (
    <AppContext.Provider
      value={{
        numberOfGuests,
        setNumberOfGuests,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        selectedDates,
        onDatesChange,
        ClearSelectedDate,
        currentlocation,
        setCurrentlocation,
        setGuestsValue,
        guestsValue,
        selectedNumberOfRooms,
        setSelectedNumberOfRooms,
        showSidebar,
        setShowSideBar
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
