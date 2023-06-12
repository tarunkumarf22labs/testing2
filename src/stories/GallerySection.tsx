import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { ScrollButton } from "./ScrollButton";

interface IGallery {
  heading: {
    heading: string;
    subHeading: string;
  };
  bigImages: string[];
  smallImages: string[];
}

export const ImagesBig = [
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
  "/images/GalleryRoom1.png",
  "/images/GalleryRoom2.png",
];

export const ImagesSmall = [
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
  "/images/GallerySmallRoom1.png",
];

export const GallerySection = ({
  heading,
  bigImages = ImagesBig,
  smallImages = ImagesSmall,
}: IGallery) => {
  return (
    <div className="mt-10 lg:mt-20 relative md:ml-[max(0px,(100%_-_80rem)/2)]">
      <div className="uppercase pb-6 pl-5 xl:pl-0 sm:pb-10">
        <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
          {heading.subHeading}
        </p>
        <p className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light">
          {heading.heading}
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex overflow-x-scroll space-x-5 w-screen mb-6 pl-5 xl:pl-0 no-scrollbar">
          {bigImages.map((image, index) => (
            <div key={index} className="min-w-[290px] sm:min-w-[530px]">
              <Image src={image} alt={String(index)} width={530} height={354} />
            </div>
          ))}
        </div>
        <div className="absolute top-40 right-5 sm:top-72 sm:right-20">
          <ScrollButton />
        </div>
        <div className="hidden max-w-7xl h-[106px] pr-5 md:flex xl:pr-0">
          <div className="flex h-full w-[calc(100%_-_91px)] overflow-x-scroll space-x-3 pl-5 no-scrollbar xl:pl-0">
            {smallImages.map((image, index) => (
              <div
                key={index}
                className={classNames(
                  index > 0 && "opacity-40",
                  "h-full min-w-[160px] "
                )}
              >
                <Image
                  src={image}
                  alt={String(index)}
                  width={160}
                  height={106}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
            className={
              "h-full w-[91px] bg-white flex items-center justify-center ml-4 cursor-pointer"
            }
          >
            <p className="uppercase text-[#8A1E61] text-xs font-medium">
              View All
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
