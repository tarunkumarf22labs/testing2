import Layout from "@/components/Layout";
import type { GetServerSideProps, NextPage } from "next";
import Carousel from "src/stories/Carousel";
import { HomeBannerimages } from "src/data/constants";
import MediaListing from "src/stories/MediaListing";
import { mediaImages } from "src/data/constants";
import { ISearchInterface } from "src/Interface/Search";
import NetWrapper from "src/Network/netWrapper";
import { SearchLocationProps } from "src/Props/Search";
import AutoScrollingVillaCard from "src/stories/AutoScrollingVillaCard";
import { ListYourPropertySection } from "src/stories/ListYourPropertySection";
import { ReviewSection } from "src/stories/ReviewSection";
import OurDestinations from "@/components/OurDestinations";

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
          {
            data.villa.data?.data.length > 0 &&
          <OurDestinations OurDestinations={data.villa.data?.data}/>
          }
          <ListYourPropertySection />
          <ReviewSection />
          <MediaListing mediaImages={mediaImages} />
          <AutoScrollingVillaCard />
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

  const states = await NetWrapper("api/states");
  const cities = await NetWrapper("api/cities");
  const countries = await NetWrapper("api/countries");

  const villa = await NetWrapper(
    "api/properties?populate=deep"
  );

  let error = null;
  if (states.error) error = states.error;
  if (cities.error) error = cities.error;
  if (countries.error) error = countries.error;
  if (villa.error) error = villa.error;


  return {
    props: {
      states: states?.data,
      countries: countries?.data,
      cities: cities?.data,
      villa: villa,
      error,
    },
  };
};
