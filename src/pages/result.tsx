import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import type { NextPage } from "next";
import { HomeBannerimages } from "src/data/constants";
import Carousal from "src/stories/Carousal";
import Map from "src/stories/Map";
import SearchedVillaCard from "src/stories/SearchedVillaCard";
import { SearchedresultVillaData } from "src/data/constants";

const locations = [
  { address: "Address1", lat: 18.5204, lng: 73.8567 },
  { address: "Address2", lat: 18.5314, lng: 73.8446 },
  { address: "Address3", lat: 18.5642, lng: 73.7769 },
  { address: "Delhi", lat: 28.6139, lng: 77.209 },
  { address: "Chennai", lat: 13.0827, lng: 80.2707 },
];
//   28.6139°

const Result: NextPage = () => {
  const bannerImageStyle = "h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]";
  const bannerTextStyle =
    "hidden sm:block text-[#F8F8F9] absolute top-[35%] sm:top-[30%] left-[35%] z-[48] w-1/2 text-left text-5xl ";
  // const bannerText = "UNLOCK \n OUR DESTINATIONS";
  const bannerText = ["UNLOCK", <br key={10} />, "OUR DESTINATIONS"];
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [cardTopPosition, setCardTopPosition] = useState(0);

  const divRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const card = cardRef.current.getBoundingClientRect();
      const div = divRef.current.getBoundingClientRect();

      let a = Math.floor(Math.abs(card.top / 800));

      // console.log(card.top / 800);
      setCardTopPosition(a);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(cardTopPosition);
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

export default Result;
