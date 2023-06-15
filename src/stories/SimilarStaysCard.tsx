import Image from "next/image";
import React from "react";

type SimilarStaysCardTypes = {
  imageUrl: string;
  subHeading?: string;
  heading: string;
  paragraph: string;
};

const amenities = [
  "6 Guest",
  "3 Bedrooms",
  "2 Bathrooms",
  "English-Style Cottage",
];

const SimilarStays = ({
  imageUrl,
  heading,
  paragraph,
  subHeading,
}: SimilarStaysCardTypes) => {
  return (
    <div className="min-w-[min(100%,373px)]">
      <Image
        src={imageUrl}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[373px] h-[234px] bg-red-500 object-cover aspect-video"
        alt="experience_image"
      />
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[#8A1E61] font-medium text-xs leading-4">2 Nights</p>
        <p className="text-[#8A1E61] font-medium text-xs leading-4">
          ₹12,589 night
        </p>
      </div>
      <h1 className="text-[#18181B] font-medium text-xl leading-7 mt-[10px]">
        Sultan’s Battery
      </h1>
      <div className="flex items-center mt-[6px]">
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
