import { useState } from "react";
import Layout from "@/components/Layout";
import type { NextPage } from "next";
import { DatePickerStateProvider } from "@rehookify/datepicker";

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
import ExperiencesSections from "src/stories/ExperiencesSections";
import PropertyDetailsHeroSection from "src/stories/PropertyDetailsHeroSection";
import SimilarStaysSection from "src/stories/SimilarStaysSection";
import ReserveAndLocationDetailsSection from "src/stories/ReserveAndLocationDetailsSection";

const Home: NextPage = () => {
  const now = new Date();
  const M = now.getMonth();
  const Y = now.getFullYear();
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  return (
    <Layout title="LuxUnlock">
      <div className="bg-[#f8f8f9]">
        <PropertyDetailsHeroSection />
        <div className="relative z-10 flex flex-col md:px-5 md:flex-row md:justify-between md:max-w-7xl md:mx-auto md:gap-x-5 xl:px-0">
          <div className="flex flex-col flex-1 lg:flex-[2]">
            <DatePickerStateProvider
              config={{
                selectedDates,
                onDatesChange,
                dates: {
                  mode: "range",
                  minDate: new Date(Y, M - 2, 1),
                  maxDate: new Date(Y, M + 2, 0),
                },
                calendar: {
                  offsets: [-1, 1],
                },
              }}
            >
              <PropertyOverview />
            </DatePickerStateProvider>
            {/* Mobile */}
            <div className="flex flex-1 flex-col h-fit md:hidden">
              <ReserveAndLocationDetailsSection />
            </div>
            <RoomSection heading={heading} />
          </div>
          {/* Desktop */}
          <div className="hidden flex-1 flex-col mt-[60px] max-w-[350px] h-fit md:flex">
            <ReserveAndLocationDetailsSection />
          </div>
        </div>
        <GallerySection
          heading={{ heading: "Gallery", subHeading: "Deja View's" }}
          bigImages={ImagesBig}
          smallImages={ImagesSmall}
        />
        <ExperiencesSections />
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
          image={"/images/StoryImage.png"}
          detailedDescription={detailedDescription}
        />
        <FloorSection floorPlanImages={floorPlanImages} />
        <PropertyReviewSection reviewCardsCollection={ReviewCardsCollection} />
        <FaqsSection faqs={faqs} />
        <BeforeYouBook beforeYouBook={beforeYouBook} />
        <SimilarStaysSection />
      </div>
    </Layout>
  );
};

export default Home;
