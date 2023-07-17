import Layout from "@/components/Layout";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import { IHomeOwners } from "src/Interface/home-owners";
import NetWrapper from "src/Network/netWrapper";
import { HomeOwnerReviewsCardProps, homeOwnersBannerImage, homeOwnersListProps } from "src/Props/home-owners";
import { mediaImages } from "src/data/constants";
import ContactDetails from "src/stories/ContactDetails";
import HomeOwnerReviews from "src/stories/HomeOwnerReviews";
import HomeOwnersList from "src/stories/HomeOwnersList";
import MediaListing from "src/stories/MediaListing";



const HomeOwners = ({data, error}) => {
  return (
    <Layout title="Home-Owners">
      <div>
        <div className="relative mt-16 bg-red-500 h-[219px] md:h-[min(72vh,810px)] md:-mt-[100px]">
          <Image
        width={500}
        height={500}
        className="object-cover w-full h-full brightness-50"
        src={data.data[0].attributes.image.data.attributes.url}
        alt={data.data[0].attributes.image.data.attributes.name}
      />
        </div>
        <h1 className="absolute top-[20vh] md:top-[30vh] left-1/2 -translate-x-[50%] -translate-y-[50%] text-2xl sm:text-4xl md:text-5xl text-[#F8F8F9] uppercase font-light">
          HOME OWNERS
        </h1>
        <p className="text-center text-[#8A1E61] text-sm uppercase mt-20 font-bold">
          HOME OWNERs
        </p>
        <p className="text-center text-[18181B] text-5xl mt-6 uppercase font-light">
          PARTNER WITH LUXUNLOCK
        </p>
        <div className="flex flex-col items-center justify-between m-auto mt-16 mb-20 md:flex-row md:max-w-7xl gap-14">
          <div className="w-11/12 pl-5 m-auto md:w-full">
            <HomeOwnersList homeOwnersListProps = {homeOwnersListProps(data)} />
          </div>
          <div className="w-11/12 pr-5 m-auto md:w-full">
            <ContactDetails />
          </div>
        </div>
        <div className="w-full bg-[#F8F8F9]">
          <div className="m-auto mt-16 mb-20 md:max-w-7xl bg-[#F8F8F9] pt-20 pb-20 pl-5">
            <p className="uppercase text-[#8A1E61] text-center md:text-left text-[10px] md:text-sm font-bold tracking-widest mb-5">
              {"Homeowner’s EXPERIENCE"}
            </p>
            <p className="text-center md:text-left text-4xl md:text-5xl uppercase text-[#1C1917] font-light">
              on luxunlock
            </p>
            <HomeOwnerReviews HomeOwnerReviewsCardProps={HomeOwnerReviewsCardProps(data)} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-11/12 pb-20 m-auto mt-20 pl-25 pr-25 md:max-w-7xl md:flex-row">
          <div className="w-full md:w-[35%]">
            <p className="uppercase text-[#8A1E61] text-center md:text-left text-[10px] md:text-sm font-bold tracking-widest mb-6">
              {"Home owners"}
            </p>
            <p className="text-center md:text-left text-4xl md:text-5xl uppercase text-[#1C1917] font-light leading-10">
              {"It's easy to List with LuxUnlock"}
            </p>
          </div>
          <div className="w-full md:w-[55%] mb-20">
            <p className="font-[Centaur]  text-lg md:text-xl text-center md:text-left">
              {"Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim."}
            </p>
            <div className="gap-2 mt-8 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              <div className="w-1/2 m-auto md:w-[16%] flex justify-center items-center gap-2 mb-8 md:mb-0 md:ml-10">
                <p className="text-[#8A1E61] text-5xl font-bold ">16</p>
                <p>AWESOME VILLAS</p>
              </div>
              <div className="w-1/2 m-auto md:w-[16%] flex justify-center items-center gap-2 mb-8 md:mb-0 md:ml-10">
                <p className="text-[#8A1E61] text-5xl font-bold">5</p>
                <p>AWESOME VILLAS</p>
              </div>
              <div className="w-1/2 m-auto md:w-[16%] flex justify-center items-center gap-2 mb-8 md:mb-0 md:ml-10">
                <p className="text-[#8A1E61] text-5xl font-bold">1K</p>
                <p className="text-[#545456] text-base tracking-[0.32] leading-6">
                  AWESOME VILLAS
                </p>
              </div>
            </div>
          </div>
        </div>
      <MediaListing mediaImages={mediaImages} />
      </div>
    </Layout>
  );
};

export default HomeOwners;

// IHomeOwners

export const getServerSideProps: GetServerSideProps<{
  data: IHomeOwners | null;
  error: string | null;
}> = async (): Promise<any> => {
  const { data, error, status } = await NetWrapper(
    "api/homeowners?populate=deep"
  );

  return { props: { data, error } };
};
