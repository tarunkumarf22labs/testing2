import Image from 'next/image';
import React, { useState } from 'react';
import { IImageTag } from 'src/Interface';
import AmenitiesPopup from './AmenitiesPopup';
import useIsMobile from '@/hooks/useIsMobile';
import { Container } from './Container';

interface IAmenitiesSection {
  heading: string;
  iconsArray: {
    image: IImageTag;
    text: string;
  }[];
  portraitImage: string;
  thumbnailImage: string;
}

export const AmenitiesSection = ({
  heading,
  iconsArray,
  portraitImage,
  thumbnailImage
}: IAmenitiesSection) => {
  const isMobile = useIsMobile();
  const maxItemsToShow = isMobile ? 9 : 18;
  const [showAmenities, setShowAmenites] = useState(false);

  return (
    <Container bgWhite={false}>
      <div className="flex justify-between">
        <div className="flex-1 lg:mt-[60px]">
          <div className="uppercase pb-7">
            <p className="text-sm text-[#8A1E61] pb-2 md:tracking-[4.2px] md:font-[450]">
              {heading && heading}
            </p>
            <p className="text-[26px] lg:text-[52px] font-light">Amenities</p>
          </div>
          <div className="flex-1 mt-0 lg:mt-[32px] grid lg:grid-cols-2 lg:auto-rows-min gap-y-6 text-[#545456]">
            {(iconsArray?.length > maxItemsToShow
              ? iconsArray?.slice(0, maxItemsToShow)
              : iconsArray
            )?.map((icon, index) => {
              return (
                <p key={index} className="flex items-start">
                  <Image
                    src={icon.image.image}
                    width={20}
                    height={20}
                    alt={icon.image.alt}
                    className="relative top-[2px]"
                  />
                  <span className="pl-3 text-base font-centaur flex-1">
                    {icon.text}
                  </span>
                </p>
              );
            })}
            {iconsArray?.length > maxItemsToShow ? (
              <div
                className="uppercase text-xs text-[#8A1E61] mt-5"
                onClick={() => setShowAmenites(!showAmenities)}
              >
                VIEW ALL {iconsArray?.length} AMENITIES
              </div>
            ) : null}
          </div>
        </div>
        <div className="hidden lg:block relative h-[673px]">
          <Image
            src={portraitImage}
            alt="amenities1"
            width={462}
            height={673}
            className="max-w-[462px] w-full h-[673px] object-cover"
          />
          <Image
            src={thumbnailImage}
            alt="amenities2"
            width={300}
            height={200}
            className="absolute w-[300px] h-[200px] bottom-[70px] -right-14"
          />
        </div>
      </div>
      {showAmenities && (
        <AmenitiesPopup
          iconsArray={iconsArray}
          hidePopup={() => setShowAmenites(!showAmenities)}
        />
      )}
    </Container>
  );
};
