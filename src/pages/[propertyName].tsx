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
} from "../data/constants";
import { DetailedDescriptionSection } from "src/stories/DetailedDescriptionSection";
import { FloorSection } from "src/stories/FloorSection";
import { PropertyReviewSection } from "src/stories/PropertyReviewSection";
import Map from "src/stories/Map";
import { VillaBanner } from "src/stories/VillaBanner";

const locations = [
  { address: "Address1", lat: 18.5204, lng: 73.8567 },
  { address: "Address2", lat: 18.5314, lng: 73.8446 },
  { address: "Address3", lat: 18.5642, lng: 73.7769 }
]

const Home: NextPage = () => {
  let x = useRef(0);

  return (
    <>
      <Layout title="LuxUnlock">
        <>
      <VillaBanner 
      bannerText="DEJA-VIEW" 
      bannerTextStyle="hidden sm:block text-[#F8F8F9] capitalize absolute top-[50%] left-[50%] z-[48] w-1/2 md:w-[50%] xl:w-[45%]"
      bannerImageStyle = "h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]"
      VillaImage='/images/a01.png' />
        <div className="bg-[#f8f8f9]">
          <div className="my-10 sm:max-w-7xl sm:m-auto">
            <RoomSection heading={heading} />
          </div>
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
          <StorySection
            isStory={false}
            story={gettingThere}
            image={"/images/GettingThere.png"}
          />
          <DetailedDescriptionSection
            detailedDescription={detailedDescription}
          />
          <FloorSection floorPlanImages={floorPlanImages} />
          <PropertyReviewSection />
          <div className="h-[500px] px-5 py-10 lg:max-w-7xl lg:mx-auto">
          <Map markers = {locations}/>
          </div>
        </div>
        </>
      </Layout>
    </>
  );
};

export default Home;
