import React, { useContext, useEffect, useRef, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import NetWrapper from "src/Network/netWrapper";
import { AppContext } from "src/Context";
import Layout from "@/components/Layout";
import Carousel from "src/stories/Carousel";
import Map from "src/stories/Map";
import SearchedVillaCard from "src/stories/SearchedVillaCard";
import SortVilla from "src/stories/SortVilla";
import { mediaImages } from "src/data/constants";
import MediaListing from "src/stories/MediaListing";
import { IHomeInterface } from "src/Interface";
import {
  ILocations,
  ISearchInterface,
  IVillaResultInterface,
} from "src/Interface/Search";
import {
  SearchLocationProps,
  SearchedLocationsProps,
  SearchedVillaCardProps,
} from "src/Props/Search";
import { StatusSvg } from "src/assets";
import { HomeBannerimages } from "src/data/constants";

const Result: NextPage = (data: ISearchInterface) => {
  const router = useRouter();
  const {
    locationtype,
    location,
    locationid,
    checkin,
    checkout,
    numberofguests,
  } = router.query;

  const [villasResult, setVillasResult] = useState<IVillaResultInterface>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const cardRef = useRef(null);

  const handleScroll = () => {
    const card = cardRef?.current?.getBoundingClientRect();

    if (Math.abs(card?.top / 800) === 0.5) {
      setCardTopPosition(1);
    } else {
      let cardPosition = Math.floor(Math.abs(card?.top / 670));

      setCardTopPosition(cardPosition);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bannerImageStyle = "h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]";
  const bannerTextStyle =
    "hidden sm:block text-[#F8F8F9] absolute top-[35%] sm:top-[30%] left-[35%] z-[48] w-1/2 text-left text-5xl ";
  const bannerText = ["UNLOCK", <br key={10} />, "OUR DESTINATIONS"];
  const [cardTopPosition, setCardTopPosition] = useState(0);

  const handleClick = (id: number) => {
    const scrollToElement = document.getElementById(
      `searched-villa-card-${id}`
    );

    window.scrollTo({
      top: scrollToElement.offsetTop - 84,
      behavior: "smooth",
    });
  };

  async function fetchVillaData() {
    let query = [];
    if (locationtype && locationid) {
      query.push(`&filters[address][${locationtype}][id][$eq]=${locationid}`);
    }
    if (numberofguests) {
      query.push(
        `&filters[guestCapacity][maxAdultAndChildren][$gte]=${numberofguests}`
      );
    }
    try {
      let url =
        query.length > 0
          ? `api/properties?populate=deep${query.join("")}`
          : `api/properties?populate=deep`;
      const { data, error } = await NetWrapper(url);
      if (error) {
        setError(error);
      } else {
        setVillasResult(data as IVillaResultInterface);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVillaData();
    // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  }, [locationtype, location, locationid, checkin, checkout, numberofguests]);
  return (
    <Layout title="luxunlock">
      {error ? (
        <div className="w-full h-[500px] flex justify-center items-center">
          <h1 className="text-2xl">{"Some Error Occured"}</h1>
        </div>
      ) : (
        <div>
          <Carousel
            images={HomeBannerimages}
            bannerImageStyle={bannerImageStyle}
            bannerTextStyle={bannerTextStyle}
            bannerText={bannerText}
            locations={SearchLocationProps(
              data.states,
              data.countries,
              data.cities
            )}
          />
          {loading ? (
            <div className="text-center w-full h-[500px] flex justify-center items-center">
              <div role="status">
                <StatusSvg />
              </div>
            </div>
          ) : (
            <div className="w-11/12 m-auto xl:max-w-[1440px] xl:m-auto">
              <SortVilla />
              <div className="w-11/12 m-auto">
                <h1 className="text-5xl font-[Brandon Grotesque] mb-10">
                  {villasResult.data.length}{" "}
                  {villasResult.data.length > 1 ? "STAYS" : "STAY"}
                </h1>
              </div>

              <div className="flex flex-col-reverse justify-between xl:flex-row ">
                <div className="w-full xl:w-[60%] " ref={cardRef}>
                  {villasResult.data.length === 0 ? (
                    <div className="w-full h-[500px] flex justify-center items-center">
                      <h1>No record Found</h1>
                    </div>
                  ) : (
                    villasResult.data &&
                    villasResult.data.map((ele, idx) => {
                      return (
                        <div
                          className="w-full m-auto sm:max-w-2xl"
                          key={idx}
                          id={`searched-villa-card-${idx}`}
                        >
                          <SearchedVillaCard
                            {...SearchedVillaCardProps(ele as any)}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
                <div className="hidden w-full h-[400px] xl:block xl:w-[48%] xl:h-[700px] xl:sticky top-20">
                  <Map
                    markers={SearchedLocationsProps(villasResult)}
                    highlight={cardTopPosition}
                    handleClick={handleClick}
                    zoomdata={4.8}
                  />
                </div>
              </div>
            </div>
          )}

          <MediaListing mediaImages={mediaImages} />
        </div>
      )}
    </Layout>
  );
};

export default Result;

export const getServerSideProps: GetServerSideProps<{
  data: ISearchInterface | null;
  error: string | null;
}> = async (): Promise<any> => {
  const states = await NetWrapper("api/states");
  const cities = await NetWrapper("api/cities");
  const countries = await NetWrapper("api/countries");
  let error = null;
  if (states.error) error = states.error;
  if (cities.error) error = cities.error;
  if (countries.error) error = countries.error;

  return {
    props: {
      states: states?.data,
      countries: countries?.data,
      cities: cities?.data,
      error,
    },
  };
};
