import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import type { NextPage } from "next";
import { HomeBannerimages } from "src/data/constants";
import Carousel from "src/stories/Carousel";
import Map from "src/stories/Map";
import SearchedVillaCard from "src/stories/SearchedVillaCard";
import { SearchedresultVillaData } from "src/data/constants";
import { locations } from "src/data/constants";
import SortVilla from "src/stories/SortVilla";
import { mediaImages } from "src/data/constants";
import MediaListing from "src/stories/MediaListing";

const Result: NextPage = () => {
  const bannerImageStyle = "h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]";
  const bannerTextStyle =
    "hidden sm:block text-[#F8F8F9] absolute top-[35%] sm:top-[30%] left-[35%] z-[48] w-1/2 text-left text-5xl ";

  const bannerText = ["UNLOCK", <br key={10} />, "OUR DESTINATIONS"];
  const [cardTopPosition, setCardTopPosition] = useState(0);

  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const card = cardRef.current.getBoundingClientRect();

      if(Math.abs(card.top / 800) === 0.5){
        setCardTopPosition(1);
      }else{
        let cardPosition = Math.floor(Math.abs(card.top / 670));
        
        setCardTopPosition(cardPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: number) => {

    const scrollToElement = document.getElementById(
      `searched-villa-card-${id}`
    );

    window.scrollTo({
      top: scrollToElement.offsetTop - 84,
      behavior: "smooth",
    });
  };

  

  return (
    <Layout title="luxunlock">
      <div>
        <Carousel
          images={HomeBannerimages}
          bannerImageStyle={bannerImageStyle}
          bannerTextStyle={bannerTextStyle}
          bannerText={bannerText}
        />
        <div className="w-11/12 m-auto xl:max-w-[1440px] xl:m-auto">
          <SortVilla />
          <div className="w-11/12 m-auto">
          <h1 className="text-5xl font-[Brandon Grotesque] mb-10">10 STAYS</h1>
          </div>

          <div className="flex flex-col-reverse justify-between xl:flex-row ">
            <div className="w-full xl:w-[60%] " ref={cardRef}>
              {locations.map((ele, idx) => {
                return (
                  <div
                    className="w-full m-auto sm:max-w-2xl"
                    key={idx}
                    id={`searched-villa-card-${idx}`}
                  >
                    <SearchedVillaCard
                      bannerImage={SearchedresultVillaData.bannerImage}
                      image={SearchedresultVillaData.image}
                      amenities={SearchedresultVillaData.amenities}
                      city={SearchedresultVillaData.city}
                      state={SearchedresultVillaData.state}
                      title={ele.address}
                      description={SearchedresultVillaData.description}
                      available={SearchedresultVillaData.available}
                      availableDates={SearchedresultVillaData.availableDates}
                      villaPrice={SearchedresultVillaData.villaPrice}
                      roomPrice={SearchedresultVillaData.roomPrice}
                    />
                  </div>
                );
              })}
            </div>
            <div
              className="hidden w-full h-[400px] xl:block xl:w-[48%] xl:h-[700px] xl:sticky top-20"
            >
              <Map
                markers={locations}
                highlight={cardTopPosition}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
        <MediaListing mediaImages={mediaImages}/>
      </div>
    </Layout>
  );
};

export default Result;
