import Image from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { viewAllPhotos } from "src/data/constants";
import Link from "next/link";

interface IPropertyDetailsHeroSection {
  image:  string;
  width:  number;
  height:  number;
  alt: string;
}

const PropertyDetailsHeroSection = ({image,width,height,alt}:IPropertyDetailsHeroSection) => {
  return (
    <div className="relative mt-16 bg-red-500 h-[219px] md:h-[min(72vh,810px)] md:-mt-[100px]">
      <Image
        width={width}
        height={height}
        className="object-cover w-full h-full brightness-50"
        src={image}
        alt={alt}
      />
      <Link href={'/gallery'}>
      <PrimaryButton
        title={viewAllPhotos}
        onClick={() => {}}
        disabled={false}
        className="hidden absolute bottom-12 right-[max(0px,(100%_-_80rem)/2)] w-[213px] md:block md:mr-5 xl:mr-0"
      />
      </Link>
    </div>
  );
};

export default PropertyDetailsHeroSection;
