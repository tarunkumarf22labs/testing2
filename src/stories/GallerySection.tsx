import classNames from "classnames";
import Image from "next/image";
import React, { useEffect } from "react";
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
];

export const GallerySection = ({
  heading,
  bigImages = ImagesBig,
  smallImages = ImagesSmall,
}: IGallery) => {
  return (
    <div className="my-10 relative md:ml-[max(0px,(100%_-_80rem)/2)]">
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
        <div className="hidden md:flex overflow-x-scroll space-x-3 pl-5 xl:pl-0 no-scrollbar">
          {smallImages.map((image, index) => (
            <div
              key={index}
              className={classNames(
                "sm:min-w-[160px]",
                index > 0 ? "opacity-40" : ""
              )}
            >
              <Image src={image} alt={String(index)} width={160} height={106} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
