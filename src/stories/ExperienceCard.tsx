import Image from "next/image";
import React from "react";

type ExperienceCardTypes = {
  imageUrl: string;
  subHeading?: string;
  heading: string;
  paragraph: string;
};

const ExperienceCard = ({
  imageUrl,
  heading,
  paragraph,
  subHeading,
}: ExperienceCardTypes) => {
  return (
    <div className="min-w-[min(100%,373px)] max-w-[373px]">
      <Image
        src={imageUrl}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[373px] h-[234px] bg-red-500 object-cover aspect-video"
        alt="experience_image"
      />
      {subHeading && (
        <p className="text-[#8A1E61] font-medium text-xs leading-4 mt-4">
          2 Nights
        </p>
      )}
      <h1 className="text-[#18181B] font-medium text-xl leading-7 mt-[10px]">
        Sultan’s Battery
      </h1>
      <p className="text-[#545456] text-xs leading-4 font-centaur mt-[6px] flex flex-1">
        Deja View is set on top of a hill in a 14-acre plantation called Elamala
        Estate, about 20 minutes from the town of Sultan’s Battery in Wayanad,
        Kerala & 2.5-3 hours from Mysore, Kannur & Calicut Airports.
      </p>
    </div>
  );
};

export default ExperienceCard;
