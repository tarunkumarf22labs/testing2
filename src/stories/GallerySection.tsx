import classNames from "classnames";
import Image from "next/image";
import React, { useEffect } from "react";

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
    <div className={classNames("my-10")}>
      <div className="uppercase sm:pl-60">
        <p className="sm:text-sm sm:text-[#8A1E61] sm:mb-5 sm:tracking-widest">
          {heading.subHeading}
        </p>
        <p className="sm:text-5xl sm:text-[#1C1917]">{heading.heading}</p>
      </div>
      <div>
        <div className="sm:flex sm:overflow-x-scroll sm:space-x-5 sm:w-screen sm:mb-6 sm:pl-60 no-scrollbar">
          {bigImages.map((image, index) => (
            <div key={index} className="sm:min-w-[530px]">
              <Image src={image} alt={String(index)} width={530} height={354} />
            </div>
          ))}
        </div>
        <div className="sm:flex sm:space-x-3 sm:pl-60 sm:overflow-x-scroll no-scrollbar">
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
