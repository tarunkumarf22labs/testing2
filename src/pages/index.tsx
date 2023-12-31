import Layout from '@/components/Layout';
import type { GetServerSideProps, NextPage } from 'next';
import Carousel from 'src/stories/Carousel';
import MediaListing from 'src/stories/MediaListing';
import {
  curatedCollectionSection,
  destinationsSection,
  journeySection,
  mediaImages
} from 'src/data/constants';
import { ISearchInterface } from 'src/Interface/Search';
import NetWrapper from 'src/Network/netWrapper';
import { SearchLocationProps } from 'src/Props/Search';
import AutoScrollingVillaCard from 'src/stories/AutoScrollingVillaCard';
import ListYourPropertySection from 'src/stories/ListYourPropertySection';
import Spotlight from 'src/stories/Spotlight';
import CuratedCollection from 'src/stories/CuratedCollection';
import JourneysSection from 'src/stories/JourneysSection';
import AboutSection from 'src/stories/PhotoCollage/AboutSection';
import DestinationsSection from 'src/stories/DestinationsSection';
import { IHomePageData, ITestimonials } from 'src/Interface/home-page';
import { Container } from 'src/stories/Container';
import HomeTestimonialsSection from 'src/stories/HomeTestimonialsSection';
import { ReactLenis } from '@studio-freight/react-lenis';

const Home: NextPage = ({
  homePageData,
  testimonialsData,
  searchData
}: {
  homePageData: IHomePageData;
  testimonialsData: ITestimonials;
  searchData: ISearchInterface;
}) => {
  const bannerImageStyle = 'w-full h-full object-cover';
  const bannerTextStyle = 'text-[#F8F8F9]';
  const bannerText = `UNLOCK THE LUXURY WITH LUXUNLOCK`;

  return (
    <ReactLenis
      root
      options={{
        duration: 2.2
      }}
    >
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
          <Container className="block md:hidden" innerContainerClassName="pb-0">
            <div
              className={`capitalize text-center leading-[68px] font-[330] text-[#18181B] text-4xl overflow-hidden`}
            >
              <h1 className={'gsap-hero-text opacity-0 '}>{bannerText}</h1>
            </div>
            <hr className="mt-7" />
          </Container>
          {homePageData?.data?.attributes?.destination?.length ? (
            <DestinationsSection
              destinationSectionheading={destinationsSection.heading}
              destinations={homePageData?.data?.attributes?.destination}
              villas={searchData?.villa?.data?.data}
            />
          ) : null}
          {homePageData?.data?.attributes?.curatedCollection?.length ? (
            <CuratedCollection
              curatedCollectionSectionheading={curatedCollectionSection.heading}
              collections={homePageData?.data?.attributes?.curatedCollection}
            />
          ) : null}
          {homePageData?.data?.attributes?.spotlight?.length ? (
            <Spotlight data={homePageData?.data?.attributes?.spotlight} />
          ) : null}
          {homePageData?.data?.attributes?.Journey?.length ? (
            <JourneysSection
              data={homePageData?.data?.attributes?.Journey}
              journeySectionheading={journeySection.heading}
            />
          ) : null}
          <ListYourPropertySection />
          {testimonialsData?.data?.length ? (
            <HomeTestimonialsSection data={testimonialsData?.data} />
          ) : null}
          {homePageData?.data?.attributes?.about ? (
            <AboutSection data={homePageData?.data?.attributes?.about} />
          ) : null}
          <MediaListing mediaImages={mediaImages} />
          {searchData?.villa?.data?.data?.length ? (
            <AutoScrollingVillaCard data={searchData?.villa?.data?.data} />
          ) : null}
        </>
      </Layout>
    </ReactLenis>
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
  const testimonials = await NetWrapper('api/testimonials?populate=deep');

  let error = null;
  if (states.error) error = states.error;
  if (cities.error) error = cities.error;
  if (countries.error) error = countries.error;
  if (villa.error) error = villa.error;
  if (homePage.error) error = homePage.error;
  if (testimonials.error) error = testimonials.error;

  return {
    props: {
      homePageData: homePage?.data,
      testimonialsData: testimonials?.data,
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
