import Layout from "@/components/Layout";
import React from "react";
import { mediaImages } from "src/data/constants";
import MediaListing from "src/stories/MediaListing";
import Image from "next/image";
import {
  DeviceMobile,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import InquiryForm from "src/stories/InquiryForm";
import { GetServerSideProps } from "next";
import { IHomeInterface } from "src/Interface";
import NetWrapper from "src/Network/netWrapper";
import { IvillaList } from "src/Interface/inquiry";
import { InquiryFormProps } from "src/Props/inquiry";

interface IInquiry {
  data: IvillaList;
  error: string | null;
}

const Inquiry = (data: IInquiry) => {
  console.log(data.data);
  let villaList = data.data;

  return (
    <>
      <Layout title="inquiry">
        {data.error === null ? (
        <div className="bg-[#F8F8F9] ">
          <div className="flex flex-col items-start justify-between m-auto md:flex-row lg:max-w-6xl xl:max-w-7xl">
            <div className="pl-5 m-auto md:m-0">
              <p className="text-[#8A1E61] text-sm font-medium uppercase tracking-[4.20] mb-5 mt-20 text-center md:text-left">
                RENT A VILLA
              </p>
              <p className="text-[#171717] text-5xl font-light uppercase tracking-[1] mb-8 md:mb-16 text-center md:text-left">
                BOOKING INQUIRY
              </p>
              <div className="w-11/12 m-auto md:w-96">
                <p className="text-[#545456] text-xl font-[Centaur] text-center md:text-left ">
                  To make a booking inquiry, please take the time to fill out
                  the information below.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-2 mt-10">
                  <DeviceMobile size={24} color="#8A1E61" />
                  <p>+91 98988 55663 | +91 89898 60606</p>
                </div>
                <div className="flex items-center gap-2 mt-10">
                  <EnvelopeSimple size={24} color="#8A1E61" />
                  <p>reservations@luxunlock.com</p>
                </div>
                <div className="flex gap-6 mt-12">
                  <div>
                    <FacebookLogo size={24} color="#8A1E61" />
                  </div>
                  <div>
                    <TwitterLogo size={24} color="#8A1E61" />
                  </div>
                  <div>
                    <InstagramLogo size={24} color="#8A1E61" />
                  </div>
                  <div>
                    <LinkedinLogo size={24} color="#8A1E61" />
                  </div>
                  <div>
                    <PinterestLogo size={24} color="#8A1E61" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-11/12 m-auto h-auto md:w-[700px] md:h-[1200px] ">
              <div className="relative md:h-[1200px]">
              <Image
                src={
                  "https://luxunlockdev.s3.ap-south-1.amazonaws.com/Lower_Living_Area_ba80626760.jpg"
                }
                width={700}
                height={475}
                alt="banner"
                className="hidden w-full  h-[450px] -z-10 md:block"
              />
             <InquiryForm props={InquiryFormProps(villaList)} />
             </div>
           
             
            </div>
            <div className="m-auto md:hidden">
                <div className="flex items-center justify-center gap-2 mt-10">
                  <DeviceMobile size={24} color="#8A1E61" />
                  <p>+91 98988 55663 | +91 89898 60606</p>
                </div>
                <div className="flex items-center justify-center gap-2 mt-10">
                  <EnvelopeSimple size={24} color="#8A1E61" />
                  <p>reservations@luxunlock.com</p>
                </div>
                <div className="flex items-center justify-center gap-6 mt-12">
                  <div>
                    <FacebookLogo size={24} color="#8A1E61" />
                  </div>
                  <div>
                    <TwitterLogo size={24} color="#8A1E61" />
                  </div>
                  <div>
                    <InstagramLogo size={24} color="#8A1E61" />
                  </div>
                  <div>
                    <LinkedinLogo size={24} color="#8A1E61" />
                  </div>
                  <div>
                    <PinterestLogo size={24} color="#8A1E61" />
                  </div>
                </div>
              </div>
          </div>
          <MediaListing mediaImages={mediaImages} />
        </div>
         ) : (
          <div className="w-full h-[500px] flex justify-center items-center">
            <h1 className="text-2xl">{data.error}</h1>
          </div>
        )} 
      </Layout>
    </>
  );
};

export default Inquiry;

export const getServerSideProps: GetServerSideProps<{
  data: IvillaList | null;
  error: string | null;
}> = async (): Promise<any> => {
  const { data, error, status } = await NetWrapper(
    "api/properties?populate=deep"
  );

  return { props: { data, error } };
};
