import { useState } from "react";
import type { NextPage } from "next";
import { DatePickerStateProvider } from "@rehookify/datepicker";
import Layout from "@/components/Layout";

import {
  heading,
  storySection,
  inclusions,
  exclusions,
  detailedDescription,
  floorPlanImages,
  ReviewCardsCollection,
  faqs,
  beforeYouBook,
  homeTruths,
} from "../data/constants";

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

import { iconsArray as amenitiesIconsArray } from "src/stories/AmenitiesSection";
import { ImagesBig, ImagesSmall } from "src/stories/GallerySection";
import MediaListing from "src/stories/MediaListing";
import { mediaImages } from "src/data/constants";
import Modal from "src/stories/Modal/Modal";
import { CuratedExpModal } from "src/stories/CuratedExpModal";
import classNames from "classnames";
import Datepicker from "src/stories/DatePicker";

const Home: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [elementNo, setElementNo] = useState<number>(0);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const setItemNo = (id) => {
    setElementNo(id);
  };

  return (
    <Layout title="LuxUnlock">
      <div className="bg-[#f8f8f9]">
        <PropertyDetailsHeroSection />
        <div className="relative z-10 flex flex-col md:px-5 md:flex-row md:justify-between md:max-w-7xl md:mx-auto md:gap-x-5 xl:px-0">
          <div className="flex flex-col flex-1 lg:flex-[2]">
            <PropertyOverview />
            {/* Mobile */}
            <div className="flex flex-col flex-1 h-fit md:hidden">
              <ReserveAndLocationDetailsSection />
            </div>
            <RoomSection heading={heading} />
          </div>
          {/* Desktop */}
          <div className="hidden flex-1 flex-col mt-[60px] max-w-[350px] h-fit md:flex">
            <ReserveAndLocationDetailsSection />
          </div>
        </div>
        <AmenitiesSection
          heading="DEJA VIEW’S"
          iconsArray={amenitiesIconsArray}
        />
        <InclusionsExclusionsSection
          heading="Deja View's"
          inclusions={inclusions}
          exclusions={exclusions}
        />
        <div className="mb-20"></div>
        {/* HOME TRUTHS */}
        <StorySection
          secondheading={"HOME TRUTHS"}
          heading={homeTruths.heading}
          story={homeTruths.story}
          image={"/images/StoryImage.png"}
        />
        <BeforeYouBook beforeYouBook={beforeYouBook} />
        <ExperiencesSection setItemNo={setItemNo} toggleModal={toggleModal} />
        <StorySection
          secondheading={"STORY"}
          heading={storySection.heading}
          story={storySection.story}
          image={"/images/StoryImage.png"}
        />
        <DetailedDescriptionSection
          image={"/images/StoryImage.png"}
          detailedDescription={detailedDescription}
        />
        <PropertyReviewSection reviewCardsCollection={ReviewCardsCollection} />
        <FaqsSection faqs={faqs} />
        <SimilarStaysSection />
        <MediaListing mediaImages={mediaImages} />
        <Modal
          isOpen={isModalOpen}
          onClose={toggleModal}
          square={true}
          className="max-w-[560px]"
          segregated={false}
        >
          <CuratedExpModal id={elementNo} />
        </Modal>
      </div>
    </Layout>
  );
};

export default Home;
