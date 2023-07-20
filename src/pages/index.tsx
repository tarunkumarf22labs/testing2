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
import { ListYourPropertySection } from 'src/stories/ListYourPropertySection';
import { ReviewSection } from 'src/stories/ReviewSection';
import Spotlight from 'src/stories/Spotlight';
import OurDestinations from '@/components/OurDestinations';
import CuratedCollection from 'src/stories/CuratedCollection';
import JourneysSection from 'src/stories/JourneysSection';
import PhotoCollage from 'src/stories/PhotoCollage';

const Home: NextPage = (data: ISearchInterface) => {
  const bannerImageStyle =
    'h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px] object-cover w-full';
  const bannerTextStyle =
    'text-[#F8F8F9] absolute top-[35%] sm:top-[30%] left-[50%] z-[48] w-1/2 md:w-[50%] xl:w-[45%]';
  const bannerText = 'UNLOCK THE LUXURY WITH LUXUNLOCK';
  const descriptiontext = "LuxUnlock does exactly what it means - we unlock exclusive access to the most unique, finest and in some cases the most iconic, private luxury homes for your pleasure. They are being offered to you and the world for the first time, made possible only by owners who are willing to share their beautifully & uniquely designed homes with discerning luxury travellers."
  const PhotoCollageprops = () => {
    return {
      title: "LUXUNLOCK",
      description: descriptiontext,
      centerimage: "/images/CurratedCollectionsModelImage1.webp",
      leftimage: "/images/CurratedCollectionsModelImage1.webp",
      rightimage: "/images/CurratedCollectionsModelImage1.webp"
    }
  }
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
          <CuratedCollection />
          <Spotlight />
          <JourneysSection />
          {data.villa.data?.data.length > 0 && (
            <OurDestinations OurDestinations={data.villa.data?.data} />
          )}
          <ListYourPropertySection />
          <ReviewSection />
          <div className="pt-4">
            <PhotoCollage  {...PhotoCollageprops()} />
          </div>
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
  const states = await NetWrapper('api/states');
  const cities = await NetWrapper('api/cities');
  const countries = await NetWrapper('api/countries');

  const villa = await NetWrapper('api/properties?populate=deep');

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
      error
    }
  };
};
