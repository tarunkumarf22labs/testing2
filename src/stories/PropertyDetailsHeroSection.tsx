import Image from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const PropertyDetailsHeroSection = () => {
  return (
    <div className="relative mt-16 bg-red-500 h-[219px] md:h-[min(72vh,810px)] md:-mt-[100px]">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full brightness-50 object-cover"
        src={"/images/GalleryRoom1.png"}
        alt="property_images"
      />
      <PrimaryButton
        title="View all photos"
        onClick={() => {}}
        disabled={false}
        className="hidden absolute bottom-12 right-[max(0px,(100%_-_80rem)/2)] w-[213px] md:block md:mr-5 xl:mr-0"
      />
    </div>
  );
};

export default PropertyDetailsHeroSection;
