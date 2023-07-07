import {
  Atom,
  Bathtub,
  BatteryChargingVertical,
  Bed,
  Broom,
  Car,
  Champagne,
  Clock,
  CookingPot,
  Drop,
  ForkKnife,
  Lightning,
  Plant,
  Thermometer,
  UserCircle,
  UsersThree,
  WifiHigh,
} from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import { IImageTag } from "src/Interface";

interface IAmenitiesSection {
  heading: string;
  iconsArray: {
    image: IImageTag;
    text: string;
  }[];
}


export const AmenitiesSection = ({
  heading,
  iconsArray,
}: IAmenitiesSection) => {
  const maxEightIcons =
    iconsArray.length > 9 ? iconsArray.slice(0, 9) : iconsArray;

  return (
    <div className="flex justify-between h-auto py-10 mx-5 xl:py-20 xl:mx-auto xl:max-w-7xl">
      <div>
        <div className="uppercase pb-7">
          <p className="text-sm text-[#8A1E61] pb-2 tracking-wider">
            {heading}
          </p>
          <p className="text-3xl font-light">Amenities</p>
        </div>
        <div className="space-y-7 xl:hidden text-[#545456]">
          {maxEightIcons.map((icon, index) => (
            <p key={index} className="flex">
              {/* {icons[icon.icon]}{" "} */}
              <Image src={icon.image.image} width={20} height={20} alt={icon.image.alt}/>
              <span className="pl-3 text-base font-centaur">{icon.text}</span>
            </p>
          ))}
        </div>
        <div className="hidden xl:grid md:grid-cols-2 gap-y-6 md:max-w-3xl md:min-w-[700px] text-[#545456]">
          {iconsArray.map((icon, index) => (
            <p key={index} className="flex items-center ">
              {/* {icons[icon.icon]}{" "} */}
              <Image src={icon.image.image} width={20} height={20} alt={icon.image.alt}/>
              <span className="pl-3 text-base font-centaur max-w-[288px]">
                {icon.text} 
              </span>
            </p>
          ))}
        </div>
        <div className="uppercase text-xs text-[#8A1E61] xl:hidden mt-5">
          VIEW ALL 20 AMENITIES
        </div>
      </div>
      <div className="hidden md:block relative h-[673px]">
        <Image
          src="/images/Amenities1.png"
          alt="amenities1"
          width={462}
          height={673}
        />
        <Image
          src="/images/Amenities2.png"
          alt="amenities2"
          width={300}
          height={200}
          className="absolute 2xl:-right-[15%] right-0 top-[403px]"
        />
      </div>
    </div>
  );
};
