import React from "react";
import Map from "./Map";

const details = [
  "From Bengaluru - 5 hr 15 min, 270.8 km via NH 766",
  "From Kochi - 7 hr 57 min, 259.5 km via NH 66 and NH 766",
  "From Chennai - 11 hr 51 min, 611.0 km via NH 48",
  "From Coimbatore - 6 hr 9 min, 242.0 km via NH948 and NH 766",
  "From Mysore - 2 hr 48 min, 130.6 km via NH 766",
];

const locations = [
  { address: "Address1", lat: 18.5204, lng: 73.8567 },
  { address: "Address2", lat: 18.5314, lng: 73.8446 },
  { address: "Address3", lat: 18.5642, lng: 73.7769 },
];

const LocationAndDetails = () => {
  return (
    <div className="p-5">
      <div className="w-full h-40">
        <Map markers={locations} />
      </div>
      <div className="mt-4">
        {details?.map((el) => {
          return (
            <li
              key={el}
              className="text-[#545456] font-centaur text-lg leading-[34px]"
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
