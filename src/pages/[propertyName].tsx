import { useRef } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import type { NextPage } from "next";
import {
  AmenitiesSection,
  iconsArray as amenitiesIconsArray,
} from "src/stories/AmenitiesSection";
import {
  GallerySection,
  ImagesBig,
  ImagesSmall,
} from "src/stories/GallerySection";
import { InclusionsExclusionsSection } from "src/stories/InclusionsExclusionsSection";
import { RoomSection } from "src/stories/RoomSection";
import { StorySection } from "src/stories/StorySection";
import {
  heading,
  storySection,
  gettingThere,
  inclusions,
  exclusions,
  detailedDescription,
  floorPlanImages,
  ReviewCardsCollection,
  faqs,
  beforeYouBook,
  homeTruths,
} from "../data/constants";
import { DetailedDescriptionSection } from "src/stories/DetailedDescriptionSection";
import { FloorSection } from "src/stories/FloorSection";
import { PropertyReviewSection } from "src/stories/PropertyReviewSection";
import { FaqsSection } from "src/stories/FaqsSection";
import { BeforeYouBook } from "src/stories/BeforeYouBook";
import { HomeTruthsSection } from "src/stories/HomeTruthsSection";
import PropertyOverview from "src/stories/PropertyOverview";
import Map from "src/stories/Map";
import PrimaryButton from "src/stories/PrimaryButton";

const locations = [
  { address: "Address1", lat: 18.5204, lng: 73.8567 },
  { address: "Address2", lat: 18.5314, lng: 73.8446 },
  { address: "Address3", lat: 18.5642, lng: 73.7769 },
];

const Home: NextPage = () => {
  let x = useRef(0);

  return (
    <Layout title="LuxUnlock">
      <div className="bg-[#f8f8f9]">
        <div className="relative mt-16 bg-red-500 h-[219px] md:h-[min(80vh,810px)] md:-mt-16">
          <Image
            width={0}
            height={0}
            className="w-full h-full"
            src={""}
            alt="property_images"
          />
          <PrimaryButton
            title="View all photos"
            onClick={() => {}}
            disabled={true}
            className="hidden absolute bottom-12 right-[max(0px,(100%_-_80rem)/2)] w-[213px] md:block md:mr-5 xl:mr-0"
          />
        </div>
        <div className="relative z-10 flex flex-col md:px-5 md:flex-row md:justify-between md:max-w-7xl md:mx-auto md:gap-x-5 xl:px-0">
          <div className="flex flex-col flex-1 lg:flex-[2]">
            <PropertyOverview />
            <div className="bg-white md:hidden flex flex-1">
              Booking and Map
            </div>
            <RoomSection heading={heading} />
          </div>
          <div className="bg-white hidden md:flex flex-1 mt-[60px] max-w-[350px]">
            Booking and Map
          </div>
        </div>
        <StorySection
          isStory={false}
          story={gettingThere}
          image={"/images/GettingThere.png"}
        />
        <GallerySection
          heading={{ heading: "Gallery", subHeading: "Deja View's" }}
          bigImages={ImagesBig}
          smallImages={ImagesSmall}
        />
        <StorySection
          heading={storySection.heading}
          story={storySection.story}
          image={"/images/StoryImage.png"}
        />
        <AmenitiesSection
          heading="DEJA VIEW’S"
          iconsArray={amenitiesIconsArray}
        />
        <InclusionsExclusionsSection
          heading="Deja View's"
          inclusions={inclusions}
          exclusions={exclusions}
        />
        <HomeTruthsSection homeTruths={homeTruths} />
        <DetailedDescriptionSection detailedDescription={detailedDescription} />
        <FloorSection floorPlanImages={floorPlanImages} />
        <PropertyReviewSection reviewCardsCollection={ReviewCardsCollection} />
        <div className="h-[500px] px-5 py-10 lg:max-w-7xl lg:mx-auto">
          <Map markers={locations} />
        </div>
        <FaqsSection faqs={faqs} />
        <BeforeYouBook beforeYouBook={beforeYouBook} />
      </div>
    </Layout>
  );
};

export default Home;
