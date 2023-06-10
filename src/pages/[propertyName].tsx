import Layout from "@/components/Layout";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";
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

const Home: NextPage = () => {
  let x = useRef(0);

  return (
    <>
      <Layout title="LuxUnlock">
        <div className="bg-[#f8f8f9]">
          <div className="sm:max-w-7xl sm:m-auto my-10">
            <RoomSection heading={heading} />
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
