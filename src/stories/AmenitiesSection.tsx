import Image from 'next/image';
import React, { useState } from 'react';
import { IImageTag } from 'src/Interface';
import AmenitiesPopup from './AmenitiesPopup';
import useIsMobile from '@/hooks/useIsMobile';
import { Container } from './Container';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

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

  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.amenities
  );

  return (
    <div className="gsap-pd-amenities-section">
      <Container bgWhite={false}>
        <div className="flex justify-between">
          <div className="flex-1 lg:mt-[60px]">
            <div className="uppercase pb-7">
              <div className="text-sm text-[#8A1E61] pb-2 md:tracking-[4.2px] md:font-[450] overflow-hidden">
                <p className="gsap-pd-amenities-section-heading-text opacity-0">
                  {heading && heading}
                </p>
              </div>
              <div className="text-[26px] lg:text-[52px] font-light overflow-hidden">
                <h1 className="gsap-pd-amenities-section-heading-text opacity-0">
                  Amenities
                </h1>
              </div>
            </div>
            <div className="flex-1 mt-0 lg:mt-[32px] grid lg:grid-cols-2 lg:auto-rows-min gap-y-6 text-[#545456]">
              {(iconsArray?.length > maxItemsToShow
                ? iconsArray?.slice(0, maxItemsToShow)
                : iconsArray
              )?.map((icon, index) => {
                return (
                  <p
                    key={index}
                    className="gsap-pd-amenities-section-item opacity-0 flex items-start"
                  >
                    <Image
                      src={icon.image.image}
                      width={20}
                      height={20}
                      alt={icon.image.alt}
                      className="relative top-[2px]"
                    />
                    <span className="flex-1 pl-3 text-base font-centaur">
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
              className="gsap-pd-amenities-section-img-1 opacity-0 max-w-[462px] w-full h-[673px] object-cover"
            />
            <Image
              src={thumbnailImage}
              alt="amenities2"
              width={300}
              height={200}
              className="gsap-pd-amenities-section-img-2 opacity-0 absolute w-[300px] h-[200px] bottom-[70px] -right-14"
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
    </div>
  );
};
