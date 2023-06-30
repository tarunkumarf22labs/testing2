import Layout from "@/components/Layout";
import type { GetServerSideProps, NextPage } from "next";
import Carousel from "src/stories/Carousel";
import { HomeBannerimages } from "src/data/constants";
import Search from "src/stories/Search";
import { AppContext } from "src/Context";
import { useContext } from "react";
import MediaListing from "src/stories/MediaListing";
import { mediaImages } from "src/data/constants";
import { ISearchInterface } from "src/Interface/Search";
import NetWrapper from "src/Network/netWrapper";
import { SearchLocationProps } from "src/Props/Search";

const Home: NextPage = (data: ISearchInterface) => {
  const bannerImageStyle = "h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]";
  const bannerTextStyle =
    "text-[#F8F8F9] absolute top-[35%] sm:top-[30%] left-[50%] z-[48] w-1/2 md:w-[50%] xl:w-[45%]";
  const bannerText = "UNLOCK THE LUXURY WITH LUXUNLOCK";
  return (
    <>
      <Layout title="LuxUnlock">
        <>
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
          <MediaListing mediaImages={mediaImages} />
        </>
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  data: ISearchInterface | null;
  error: string | null;
}> = async (): Promise<any> => {
  // const { data, error, status } = await NetWrapper(
  //   "api/countries"
  // );
  const states = await NetWrapper("api/states");
  const cities = await NetWrapper("api/cities");
  const countries = await NetWrapper("api/countries");
  let error = null;
  console.log(states, cities, countries);
  if (states.error) error = states.error;
  if (cities.error) error = cities.error;
  if (countries.error) error = countries.error;

  return {
    props: {
      states: states.data,
      countries: countries.data,
      cities: cities.data,
      error,
    },
  };
};
