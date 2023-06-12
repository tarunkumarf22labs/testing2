import Layout from "@/components/Layout";
import type { NextPage } from "next";
import { useRef } from "react";
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
import Image from "next/image";

const Home: NextPage = () => {
  let x = useRef(0);

  return (
    <>
      <Layout title="LuxUnlock">
        <div className="bg-[#f8f8f9]">
          <div className="mt-16 bg-red-500 h-[219px] md:h-[min(80vh,810px)] md:-mt-16">
            <Image
              width={0}
              height={0}
              className="w-full h-full"
              src={""}
              alt="property_images"
            />
          </div>
          <div className="flex flex-col md:px-5 md:flex-row md:justify-between md:max-w-7xl md:mx-auto md:gap-x-5 xl:px-0">
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
          <DetailedDescriptionSection
            detailedDescription={detailedDescription}
          />
          <FloorSection floorPlanImages={floorPlanImages} />
          <PropertyReviewSection
            reviewCardsCollection={ReviewCardsCollection}
          />
          <FaqsSection faqs={faqs} />
          <BeforeYouBook beforeYouBook={beforeYouBook} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
