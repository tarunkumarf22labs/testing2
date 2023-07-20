import Layout from '@/components/Layout';
import type { GetServerSideProps, NextPage } from 'next';
import Carousel from 'src/stories/Carousel';
import { HomeBannerimages } from 'src/data/constants';
import MediaListing from 'src/stories/MediaListing';
import { mediaImages } from 'src/data/constants';
import { ISearchInterface } from 'src/Interface/Search';
import NetWrapper from 'src/Network/netWrapper';
import { SearchLocationProps } from 'src/Props/Search';
import AutoScrollingVillaCard from 'src/stories/AutoScrollingVillaCard';
import ListYourPropertySection from 'src/stories/ListYourPropertySection';
import { ReviewSection } from 'src/stories/ReviewSection';
import Spotlight from 'src/stories/Spotlight';
import CuratedCollection from 'src/stories/CuratedCollection';
import JourneysSection from 'src/stories/JourneysSection';
import DestinationsSection from 'src/stories/DestinationsSection';
import { IHomePageData } from 'src/Interface/home-page';

const Home: NextPage = ({
  homePageData,
  searchData
}: {
  homePageData: IHomePageData;
  searchData: ISearchInterface;
}) => {
  const bannerImageStyle =
    'h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px] object-cover w-full';
  const bannerTextStyle =
    'text-[#F8F8F9] absolute top-[35%] sm:top-[30%] left-[50%] z-[48] w-1/2 md:w-[50%] xl:w-[45%]';
  const bannerText = 'UNLOCK THE LUXURY WITH LUXUNLOCK';

  return (
    <>
      <Layout title="LuxUnlock">
        <>
          <Carousel
            images={homePageData?.data?.attributes?.carousal?.images?.data?.map(
              (el) => el?.attributes?.url
            )}
            bannerImageStyle={bannerImageStyle}
            bannerTextStyle={bannerTextStyle}
            bannerText={bannerText}
            locations={SearchLocationProps(
              searchData.states,
              searchData.countries,
              searchData.cities
            )}
          />
          {homePageData?.data?.attributes?.destination?.length ? (
            <DestinationsSection
              destinations={homePageData?.data?.attributes?.destination}
              villas={searchData?.villa?.data?.data}
            />
          ) : null}
          {homePageData?.data?.attributes?.curatedCollection?.length ? (
            <CuratedCollection
              collections={homePageData?.data?.attributes?.curatedCollection}
            />
          ) : null}
          {homePageData?.data?.attributes?.spotlight?.length ? (
            <Spotlight data={homePageData?.data?.attributes?.spotlight} />
          ) : null}
          {homePageData?.data?.attributes?.Journey?.length ? (
            <JourneysSection data={homePageData?.data?.attributes?.Journey} />
          ) : null}
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
  homePageData: IHomePageData;
  searchData: ISearchInterface;
  error: string | null;
}> = async (): Promise<any> => {
  const states = await NetWrapper('api/states');
  const cities = await NetWrapper('api/cities');
  const countries = await NetWrapper('api/countries');
  const villa = await NetWrapper('api/properties?populate=deep');

  const homePage = await NetWrapper('api/homepage?populate=deep,5');

  let error = null;
  if (states.error) error = states.error;
  if (cities.error) error = cities.error;
  if (countries.error) error = countries.error;
  if (villa.error) error = villa.error;
  if (homePage.error) error = homePage.error;

  return {
    props: {
      homePageData: homePage?.data,
      searchData: {
        states: states?.data,
        countries: countries?.data,
        cities: cities?.data,
        villa: villa,
        error
      }
    }
  };
};
