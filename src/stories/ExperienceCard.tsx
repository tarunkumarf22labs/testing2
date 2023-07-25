import Image from 'next/image';
import React, { useState } from 'react';

type ExperienceCardTypes = {
  imageUrl: string;
  subHeading?: string;
  heading: string;
  shortDescription: string;
  longDescription: string;
  onClick?: () => void;
  toggleModal?: () => void;
  localExperience?: Boolean;
};

const ExperienceCard = ({
  imageUrl,
  heading,
  shortDescription,
  longDescription,
  subHeading,
  onClick,
  toggleModal,
  localExperience
}: ExperienceCardTypes) => {

  const handleOnClick = () => {
    if (!onClick) {
      return;
    }
    onClick();
    toggleModal();
  };

  return (
    <>
      <div
        className="w-full max-w-[290px] md:max-w-[373px]"
        onClick={handleOnClick}
      >
        <Image
          src={imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[290px] h-[182px] md:w-[373px] md:h-[234px] bg-red-500 object-cover aspect-video"
          alt="experience_image"
        />
        {subHeading && (
          <p className="text-[#8A1E61] font-medium text-xs leading-4 mt-4">
            2 Nights
          </p>
        )}
        <h1 className="text-[#18181B] font-medium text-xl leading-7 mt-[10px] md:text-base md:leading-[18px]">
          {heading}
        </h1>
        <p className="text-[#545456] text-xs leading-4 font-centaur mt-[6px] flex flex-1">
          {shortDescription}
        </p>
      </div>
    </>
  );
};

export default ExperienceCard;
