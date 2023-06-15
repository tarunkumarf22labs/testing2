import React from "react";
import { NameTitle } from "./NameTitle";
import Image from "next/image";

export interface IFloorPlanImages {
  floorPlanImages: { src: string; w: number; h: number }[];
}

export const FloorSection = ({ floorPlanImages }: IFloorPlanImages) => {
  return (
    <div className="bg-white lg:py-20 lg:mt-20">
      <div className="px-5 xl:px-0 lg:max-w-7xl lg:mx-auto">
        <NameTitle propertyName={"Deja View's"} title={"Floor Plan"} />
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 items-center justify-center">
          {floorPlanImages.map((image, index) => {
            return (
              <Image
                src={image.src}
                alt={"Floor Plan Image"}
                width={image.w}
                height={image.h}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
