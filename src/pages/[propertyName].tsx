import { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Layout from "@/components/Layout";

import { heading, ReviewCardsCollection, faqs } from "../data/constants";

import {
  AmenitiesSection,
  GallerySection,
  InclusionsExclusionsSection,
  RoomSection,
  StorySection,
  DetailedDescriptionSection,
  FloorSection,
  PropertyReviewSection,
  FaqsSection,
  BeforeYouBook,
  HomeTruthsSection,
  PropertyOverview,
  ExperiencesSection,
  PropertyDetailsHeroSection,
  SimilarStaysSection,
  ReserveAndLocationDetailsSection,
} from "src/stories";

import { ImagesBig, ImagesSmall } from "src/stories/GallerySection";
import MediaListing from "src/stories/MediaListing";
import { mediaImages } from "src/data/constants";
import Modal from "src/stories/Modal/Modal";
import { CuratedExpModal } from "src/stories/CuratedExpModal";
import NetWrapper from "src/Network/netWrapper";
import { villaInterface, IHomeInterface } from "src/Interface";
import useIsMobile from "@/hooks/useIsMobile";
import {
  VillaOverviewProps,
  ReserveAndLocationDetailsSectionProps,
  InclusionsExclusionsSectionProps,
  HomeTruthProps,
  BeforeYouBookProps,
  HomeStoryProps,
  DetailedDescriptionSectionProps,
  PropertyDetailsHeroSectionProps,
  SimilarStaysSectionProps,
  AmenitiesSectionProps,
  ExperiencesSectionProps,
  AccordionProps1,
  AccordionProps2,
} from "src/Props";
import { Accordion } from "src/stories/Accordion";

const Home: NextPage = (data: IHomeInterface) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [elementNo, setElementNo] = useState<number>(0);
  const villaData = data?.data?.data;
  const isMobile = useIsMobile();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const setItemNo = (id) => {
    setElementNo(id);
  };
  return (
    <Layout title="LuxUnlock">
      {data.error === null ? (
        <div className="bg-[#f8f8f9]">
          <PropertyDetailsHeroSection
            {...PropertyDetailsHeroSectionProps(villaData)}
          />
          <div className="relative z-10 flex flex-col md:px-5 md:flex-row md:justify-between md:max-w-7xl md:mx-auto md:gap-x-5 xl:px-0">
            <div className="flex flex-col flex-1 lg:flex-[2]">
              <PropertyOverview {...VillaOverviewProps(villaData)} />
              {/* Mobile */}
              <div className="flex flex-col flex-1 h-fit md:hidden">
                <ReserveAndLocationDetailsSection
                  {...ReserveAndLocationDetailsSectionProps(villaData)}
                />
              </div>
              <RoomSection heading={heading} />
            </div>
            {/* Desktop */}
            <div className="hidden flex-1 flex-col mt-[60px] max-w-[350px] h-fit md:flex">
              <ReserveAndLocationDetailsSection
                {...ReserveAndLocationDetailsSectionProps(villaData)}
              />
            </div>
          </div>
          <AmenitiesSection {...AmenitiesSectionProps(villaData)} />
          {!isMobile ? (
            <>
              <InclusionsExclusionsSection
                {...InclusionsExclusionsSectionProps(villaData)}
              />
              <div className="mb-20"></div>
              {/* HOME TRUTHS */}
              {HomeTruthProps(villaData).story && (
                <StorySection {...HomeTruthProps(villaData)} />
              )}
            </>
          ) : (
            <Accordion {...AccordionProps1(villaData)} />
          )}

          <BeforeYouBook
            beforeYouBook={BeforeYouBookProps(villaData)}
            title={villaData.attributes.name}
          />
          <ExperiencesSection
            setItemNo={setItemNo}
            toggleModal={toggleModal}
            {...ExperiencesSectionProps(villaData)}
          />
          {!isMobile ? (
            <>
              {HomeStoryProps(villaData).story && (
                <StorySection {...HomeStoryProps(villaData)} />
              )}
              {DetailedDescriptionSectionProps(villaData).detailedDescription
                .list && (
                <DetailedDescriptionSection
                  {...DetailedDescriptionSectionProps(villaData)}
                />
              )}
            </>
          ) : (
            <Accordion {...AccordionProps2(villaData)} />
          )}
          <PropertyReviewSection
            reviewCardsCollection={ReviewCardsCollection}
          />
          <FaqsSection faqs={faqs} />
          <SimilarStaysSection {...SimilarStaysSectionProps(villaData)} />
          <MediaListing mediaImages={mediaImages} />
          <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
            square={true}
            className="max-w-[560px]"
            segregated={false}
            parentDivStyle="fixed top-0 left-0 z-50 flex items-start justify-center w-full h-screen px-6 overflow-y-scroll bg-gray-900 bg-opacity-50 md:px-0"
          >
            <CuratedExpModal
              id={elementNo}
              {...ExperiencesSectionProps(villaData)}
            />
          </Modal>
        </div>
      ) : (
        <div className="w-full h-[500px] flex justify-center items-center">
          <h1 className="text-2xl">{data.error}</h1>
        </div>
      )}
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  data: IHomeInterface | null;
  error: string | null;
}> = async (): Promise<any> => {
  const { data, error, status } = await NetWrapper(
    "api/properties/2?populate=deep"
  );

  return { props: { data, error } };
};
