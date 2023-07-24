import React from 'react'
import Layout from '@/components/Layout'
import { IHomePageData, ITestimonials } from 'src/Interface/home-page';
import { ISearchInterface } from 'src/Interface/Search';
import NetWrapper from 'src/Network/netWrapper';
import { GetServerSideProps } from 'next';
import AboutSection from 'src/stories/PhotoCollage/AboutSection';
import JourneysSection from 'src/stories/JourneysSection';
import DestinationsSection from 'src/stories/DestinationsSection';
import CuratedCollection from 'src/stories/CuratedCollection';
import { faqs, mediaImages } from 'src/data/constants';
import MediaListing from 'src/stories/MediaListing';
import AutoScrollingVillaCard from 'src/stories/AutoScrollingVillaCard';
import Image from 'next/image';
import PrimaryButton from 'src/stories/PrimaryButton';
import CelebrationForm from 'src/stories/celebrationform';
function Celebration({
    homePageData,
    searchData
}: {
    homePageData: IHomePageData;
    searchData: ISearchInterface;
}) {

    let constantData = "Deja View is a beautiful 2-bedroom plantation-style luxury villa with locally-inspired design and contemporary interiors that makes it one of the most romantic vacation homes in South India. The villa is part of a private community of six homes set on top of a hill in a 14-acre coffee & cardamom plantation in Eastern Wayanad, Kerala. From your verandah enjoy sweeping and unhindered views of rainforest clad hills. Indoors, an open plan design comprising two tastefully furnished bedrooms and a gorgeous loft make for an intimate & enjoyable holiday. "
    return (
        <Layout title="LuxUnlock">
            <>
                <div className="relative text-center md:-mt-[100px] h-[480px] md:h-screen" >
                    <Image
                        alt='baannerimage'
                        width={0}
                        height={0}
                        src="https://luxunlockdev.s3.ap-south-1.amazonaws.com/Picnic_on_the_Lawns_b4a2953158.jpg"
                        className="shadow-xl w-full h-full object-cover"
                        sizes="100vw"

                    />
                    <div className="flex  top-[45%] justify-center absolute flex-col mx-auto sm:top-[35%] inset-x-0 max-w-[830px]">

                        <p className='uppercase text-base font-light  md:text-[24px] md:leading-[28px] lg:text-[52px] lg:leading-[68px] text-white animate-slide-down' >
                            Experience unforgettable moments at enchanting destinations.
                        </p>
                        <div className="w-full text-center pt-5 ">
                            <button className='max-w-[207px] text-xs  bg-[#8A1E61] px-6 py-3 text-white' >CONTACT US</button>
                        </div>
                    </div>
                </div>
                {homePageData?.data?.attributes?.about ? (
                    <AboutSection data={homePageData?.data?.attributes?.about} />
                ) : null}
                {homePageData?.data?.attributes?.Journey?.length ? (
                    <JourneysSection data={homePageData?.data?.attributes?.Journey} journeySectionheading='Commemorate every occasion'  isbuttonvisible = {false} />
                ) : null}
                {homePageData?.data?.attributes?.destination?.length ? (
                    <DestinationsSection
                        destinations={homePageData?.data?.attributes?.destination}
                        villas={searchData?.villa?.data?.data}
                        destinationSectionheading="Create picture-perfect moments"
                        destinationSectiontext={constantData}
                        istagsdisable={false}
                    />
                ) : null}

                <div className="w-full min-h-fit  bg-[#8A1E61] ">
                    <div className="flex w-full p-2 md:p-[2rem] flex-col lg:justify-between lg:flex-row lg:py-[5rem] lg:px-[6rem] ">
                        <div className=" pb-2 lg:pb-0 justify-normal  flex lg:justify-center items-center  ">
                            <p className='text-[16px]  lg:text-[52px]  max-w-[550px] text-white uppercase font-light ' >Plan your celebrations and corporate retreats with the help of our Experiences team</p>
                        </div>
                        <CelebrationForm onSubmit={() => { }} />
                    </div>
                </div>
                {homePageData?.data?.attributes?.curatedCollection?.length ? (
                    <CuratedCollection
                        curatedCollectionSectionheading={'Trending this season'}
                        collections={homePageData?.data?.attributes?.curatedCollection}
                    />
                ) : null}
                <MediaListing mediaImages={mediaImages} />
                {searchData?.villa?.data?.data?.length ? (
                    <AutoScrollingVillaCard data={searchData?.villa?.data?.data} />
                ) : null}
            </>
        </Layout>
    )
}

export default Celebration

export const getServerSideProps: GetServerSideProps<{
    homePageData: IHomePageData;
    searchData: ISearchInterface;
    error: string | null;
}> = async (): Promise<any> => {
    const promises = [NetWrapper('api/states'), NetWrapper('api/cities'), NetWrapper('api/countries'), NetWrapper('api/properties?populate=deep'), NetWrapper('api/homepage?populate=deep,5'), NetWrapper('api/testimonials?populate=deep')];
    const [states, cities, countries, villa, homePage] = await Promise.all(promises);
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