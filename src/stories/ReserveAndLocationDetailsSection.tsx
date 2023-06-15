import React from "react";
import Reserve from "./Reserve";
import LocationAndDetails from "./LocationAndDetails";

const ReserveAndLocationDetailsSection = () => {
  return (
    <>
      <div className="bg-white">
        <Reserve />
      </div>
      <div className="bg-white mt-[60px] md:mt-8">
        <LocationAndDetails />
      </div>
    </>
  );
};

export default ReserveAndLocationDetailsSection;
