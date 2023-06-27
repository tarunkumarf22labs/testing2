import Image from "next/image";
import React from "react";

type SimilarStaysCardTypes = {
    name: string;
    city: string;
    state: string;
    image: {
        image: string;
        width: number;
        height: number;
        alt: string;
    };
    amenities: string[];
    basicPrice: number;
};

const SimilarStays = ({
  name, city, state, image, amenities, basicPrice
}: SimilarStaysCardTypes) => {
  
  return (
    <div className="w-full max-w-[290px] md:max-w-[373px]">
      <Image
        src={image.image}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[290px] h-[182px] md:w-[373px] md:h-[234px] bg-red-500 object-cover aspect-video"
        alt="experience_image"
      />
      <div className="flex items-center justify-between mt-4">
        <p className="text-[#8A1E61] font-medium text-xs leading-4">{city}{', '}{state}</p>
        <p className="text-[#8A1E61] font-medium text-xs leading-4">
          ₹{basicPrice} night
        </p>
      </div>
      <h1 className="text-[#18181B] font-medium text-xl leading-7 mt-[10px] md:text-base md:leading-[18px]">
        {name}
      </h1>
      <div className="flex items-center flex-wrap mt-[6px]">
        {amenities?.map((el, index) => (
          <div key={el} className="flex items-center">
            <p
              key={el}
              className="text-[#545456] text-xs leading-4 font-centaur flex flex-1"
            >
              {el}
            </p>
            {index === amenities?.length - 1 ? null : (
              <div className="w-[2px] h-[2px] rounded-full bg-[#7B8084] mx-[6px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarStays;
