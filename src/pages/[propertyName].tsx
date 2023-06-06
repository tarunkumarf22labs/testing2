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
import { RoomSection } from "src/stories/RoomSection";
import { StorySection } from "src/stories/StorySection";

const heading = {
  heading: "Rooms",
  subHeading: "Deja View's",
};

const storySection = {
  heading: "Deja View's",
  story:
    "Deja View is set on top of a hill in a 14-acre plantation called Elamala Estate, about 20 minutes from the town of Sultan’s Battery in Wayanad, Kerala & 2.5-3 hours from Mysore, Kannur & Calicut Airports. The villa is part of a private community of six homes, the result of a shared vision of a group of friends to create a utopian world - a return to a remembered past of communal living amongst nature. This ideal is embedded in the design of the home - an open plan layout that brings everyone together and the way that spaces commune with the natural surroundings. From its exterior, this is very much a classical Kerala planter-villa with sloping roofs & Calicut terracotta tiling, a rear sit-out & the piece-de-resistance, a long east-facing verandah with sweeping views of rainforest-clad hills.",
};

const Home: NextPage = () => {
  let x = useRef(0);

  return (
    <>
      <Layout title="LuxUnlock">
        <div className="bg-[#f8f8f9]">
          <div
            className="sm:flex sm:flex-col sm:justify-between sm:max-w-7xl sm:m-auto"
            id="container"
          >
            <div>
              <RoomSection heading={heading} />
            </div>
            <div className="sm:w-[350px] sm:h-[518px] sm:text-right bg-white">
              Sometext
            </div>
          </div>
          <div>
            <GallerySection
              heading={{ heading: "Gallery", subHeading: "Deja View's" }}
              bigImages={ImagesBig}
              smallImages={ImagesSmall}
            />
          </div>
          <StorySection
            heading={storySection.heading}
            story={storySection.story}
          />
          <AmenitiesSection
            heading="DEJA VIEW’S"
            iconsArray={amenitiesIconsArray}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
