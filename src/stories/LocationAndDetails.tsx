import React from "react";
import Map from "./Map";

interface IReserveAndLocationDetailsSection {
  locations: string;
  address: string;
  lat: number;
  lng: number;
}

const details = [
  "From Bengaluru - 5 hr 15 min, 270.8 km via NH 766",
  "From Kochi - 7 hr 57 min, 259.5 km via NH 66 and NH 766",
  "From Chennai - 11 hr 51 min, 611.0 km via NH 48",
  "From Coimbatore - 6 hr 9 min, 242.0 km via NH948 and NH 766",
  "From Mysore - 2 hr 48 min, 130.6 km via NH 766",
];

// const locations = [
//   { address: "Address1", lat: 18.5204, lng: 73.8567 },
//   { address: "Address2", lat: 18.5314, lng: 73.8446 },
//   { address: "Address3", lat: 18.5642, lng: 73.7769 },
// ];

const LocationAndDetails = ({
  locations,
  address,
  lat,
  lng,
}: IReserveAndLocationDetailsSection) => {
  const locationDetail = [
    {
      address: address,
      lat: lat,
      lng: lng,
    },
  ];

  const isList = locations.includes("\n-") || locations.includes("\n -");

  let splittedList;
  if (isList) {
    splittedList = locations.split(/\n-|\n -/);
    splittedList[0] = splittedList[0].substring(1);
  }
  return (
    <div className="p-5">
      <div className="w-full h-40">
        <Map markers={locationDetail} />
      </div>
      <div className="mt-4">
        {splittedList?.map((el) => {
          return (
            <li
              key={el}
              className="text-[#545456] font-centaur text-lg md:text-lg leading-[34px]"
            >
              {el}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default LocationAndDetails;
