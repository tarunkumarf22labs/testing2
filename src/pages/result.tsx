import React from "react";
import SearchedVillaCard from "src/stories/SearchedVillaCard";
import { SearchedresultVillaData } from "src/data/constants";

const result = () => {
  return (
    <div>
      <SearchedVillaCard
      bannerImage={SearchedresultVillaData.bannerImage}
      image={SearchedresultVillaData.image}
        amenities={SearchedresultVillaData.amenities}
        city={SearchedresultVillaData.city}
        state={SearchedresultVillaData.state}
        title={SearchedresultVillaData.title}
        description={SearchedresultVillaData.description}
        available={SearchedresultVillaData.available}
        availableDates={SearchedresultVillaData.availableDates}
        villaPrice={SearchedresultVillaData.villaPrice}
        roomPrice={SearchedresultVillaData.roomPrice}
      />
    </div>
  );
};

export default result;
