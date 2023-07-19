import React, { useContext, useEffect } from 'react';
import { AppContext } from 'src/Context';
import ToastAlert from 'src/Toast';
interface IGuests {
  infant: number;
  maxAdultAndChildren: number;
  minAdultAndChildren: number;
  pet: number;
}

const Guests = ({
  infant,
  maxAdultAndChildren,
  minAdultAndChildren,
  pet
}: IGuests) => {
  const { setNumberOfGuests, numberOfGuests } = useContext(AppContext);
  const capacity = infant + maxAdultAndChildren;

  useEffect(() => {
    if (numberOfGuests.children + numberOfGuests.adults > minAdultAndChildren) {
      setNumberOfGuests((prev) => ({
        ...prev,
        adults: minAdultAndChildren
      }));
    }
    if (numberOfGuests.infants > infant) {
      setNumberOfGuests((prev) => ({
        ...prev,
        infants: infant
      }));
    }
    if (numberOfGuests.pets > pet) {
      setNumberOfGuests((prev) => ({
        ...prev,
        pets: pet
      }));
    }
    if (
      numberOfGuests.children +
        numberOfGuests.adults +
        numberOfGuests.additional_guests >
      maxAdultAndChildren
    ) {
      setNumberOfGuests((prev) => ({
        ...prev,
        additional_guests: maxAdultAndChildren - minAdultAndChildren
      }));
    }
  }, [
    infant,
    maxAdultAndChildren,
    minAdultAndChildren,
    numberOfGuests,
    pet,
    setNumberOfGuests
  ]);

  function IncreaseNumberOfGuest(type: string): void {
    if (!minAdultAndChildren || !maxAdultAndChildren) {
      ToastAlert('Please select a room first', 'warn');
      return;
    }
    const CountOfGuests =
      numberOfGuests.additional_guests +
      numberOfGuests.adults +
      numberOfGuests.children +
      numberOfGuests.infants;

    if (CountOfGuests == capacity) {
      ToastAlert("Villa's maximum capacity reached", 'warn');
      return;
    }
    if (type === 'adults' || type === 'children') {
      if (
        numberOfGuests.children + numberOfGuests.adults ===
        minAdultAndChildren
      ) {
        ToastAlert(
          'Maximum capacity reached, please select additional guests',
          'warn'
        );
        return;
      } else {
        setNumberOfGuests((prev) => ({
          ...prev,
          [type]: prev[type] + 1
        }));
      }
    } else if (type === 'infants') {
      if (numberOfGuests.infants === infant) {
        ToastAlert('Maximum capacity reached, for infants', 'warn');
        return;
      } else {
        setNumberOfGuests((prev) => ({
          ...prev,
          [type]: prev[type] + 1
        }));
      }
    } else if (type === 'additional_guests') {
      if (
        numberOfGuests.additional_guests ===
        maxAdultAndChildren - minAdultAndChildren
      ) {
        ToastAlert('Maximum capacity reached, for additional guests', 'warn');
        return;
      } else {
        setNumberOfGuests((prev) => ({
          ...prev,
          [type]: prev[type] + 1
        }));
      }
    } else {
      if (numberOfGuests.pets === pet) {
        ToastAlert('Maximum capacity reached, for pets', 'warn');
        return;
      } else {
        setNumberOfGuests((prev) => ({
          ...prev,
          [type]: prev[type] + 1
        }));
      }
    }
  }

  function DecreaseNumberOfGuest(type: string): void {
    if (!minAdultAndChildren || !maxAdultAndChildren) {
      ToastAlert('Please select a room first', 'warn');
      return;
    }
    if (type === 'adults' && numberOfGuests.adults === 1) {
      ToastAlert('adult can not be zero', 'warn');
      return;
    } else if (numberOfGuests[type] <= 0) {
      ToastAlert(`${type} can not be lesser than 0`, 'warn');
      return;
    }
    setNumberOfGuests((prev) => ({
      ...prev,
      [type]: prev[type] - 1
    }));
  }

  return (
    <div className="w-full pt-5">
      <div className="flex items-center justify-between w-full h-full mb-5 border-red">
        <div className="w-1/2 ml-5 text-xs">
          <p className="text-left">ADULTS</p>
          <p className="text-left">Age 13+</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div
            onClick={() => IncreaseNumberOfGuest('adults')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="12"
                y1="7"
                x2="12"
                y2="17"
                stroke="#000"
                stroke-width="2"
              />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
          <div>
            {numberOfGuests.adults < 9 ? (
              <p>0{numberOfGuests.adults}</p>
            ) : (
              <p>{numberOfGuests.adults}</p>
            )}
          </div>
          <div
            onClick={() => DecreaseNumberOfGuest('adults')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mb-5 border-red ">
        <div className="w-1/2 ml-5 text-xs ">
          <p className="text-left">CHILDREN</p>
          <p className="text-left">Ages 5-12 yrs</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div
            onClick={() => IncreaseNumberOfGuest('children')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="12"
                y1="7"
                x2="12"
                y2="17"
                stroke="#000"
                stroke-width="2"
              />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
          <div>
            {numberOfGuests.children < 9 ? (
              <p>0{numberOfGuests.children}</p>
            ) : (
              <p>{numberOfGuests.children}</p>
            )}
          </div>
          <div
            onClick={() => DecreaseNumberOfGuest('children')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mb-5 border-red ">
        <div className="w-1/2 ml-5 text-xs ">
          <p className="text-left">INFANTS</p>
          <p className="text-left">Under 5 yrs</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div
            onClick={() => IncreaseNumberOfGuest('infants')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="12"
                y1="7"
                x2="12"
                y2="17"
                stroke="#000"
                stroke-width="2"
              />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
          <div>
            {numberOfGuests.infants < 9 ? (
              <p>0{numberOfGuests.infants}</p>
            ) : (
              <p>{numberOfGuests.infants}</p>
            )}
          </div>
          <div
            onClick={() => DecreaseNumberOfGuest('infants')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mb-5 border-red ">
        <div className="w-1/2 ml-5 text-xs">
          <p className="text-left">PETS</p>
          <p className="text-left">No. of Pets</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5">
          <div
            onClick={() => IncreaseNumberOfGuest('pets')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="12"
                y1="7"
                x2="12"
                y2="17"
                stroke="#000"
                stroke-width="2"
              />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
          <div>
            {numberOfGuests.pets < 9 ? (
              <p>0{numberOfGuests.pets}</p>
            ) : (
              <p>{numberOfGuests.pets}</p>
            )}
          </div>
          <div
            onClick={() => DecreaseNumberOfGuest('pets')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mb-5 border-red ">
        <div className="w-1/2 ml-5 text-xs ">
          <p className="text-left">ADDITIONAL GUESTS</p>
          <p className="text-left">No. of Additional Guests</p>
        </div>
        <div className="flex items-center justify-between w-2/5 pl-5 pr-5 mb-5">
          <div
            onClick={() => IncreaseNumberOfGuest('additional_guests')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="12"
                y1="7"
                x2="12"
                y2="17"
                stroke="#000"
                stroke-width="2"
              />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
          <div>
            {numberOfGuests.additional_guests < 9 ? (
              <p>0{numberOfGuests.additional_guests}</p>
            ) : (
              <p>{numberOfGuests.additional_guests}</p>
            )}
          </div>
          <div
            onClick={() => DecreaseNumberOfGuest('additional_guests')}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="11" fill="#e9e9e9" />
              <line
                x1="7"
                y1="12"
                x2="17"
                y2="12"
                stroke="#000"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;
