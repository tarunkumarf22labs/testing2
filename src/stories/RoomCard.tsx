import {
  WifiHigh,
  ForkKnife,
  Bed,
  Bathtub,
  Thermometer,
  Lightning,
  Drop,
  Broom,
} from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

interface IRoomCard {
  image: string;
  roomName: string;
  amenities?: string[];
  icons?: string[];
}

export const iconsArr = [
  "wifi",
  "broom",
  "fork",
  "bed",
  "bathtub",
  "thermometer",
  "flash",
  "drop",
  "drop2",
];

const icons = {
  wifi: <WifiHigh size={20} color="#8a1e61" />,
  broom: <Broom size={20} color="#8a1e61" />,
  fork: <ForkKnife size={20} color="#8a1e61" />,
  bed: <Bed size={20} color="#8a1e61" />,
  bathtub: <Bathtub size={20} color="#8a1e61" />,
  thermometer: <Thermometer size={20} color="#8a1e61" />,
  flash: <Lightning size={20} color="#8a1e61" />,
  drop: <Drop size={20} color="#8a1e61" />,
  drop2: <Drop size={20} color="#8a1e61" />,
};

export const RoomCard = ({ image, roomName, amenities }: IRoomCard) => {
  const maxEightIcons = iconsArr.length > 8 ? iconsArr.slice(0, 8) : iconsArr;
  const maxFourIcons = iconsArr.length > 4 ? iconsArr.slice(0, 4) : iconsArr;

  return (
    <div className="p-3 flex flex-col sm:p-4 border border-[#7B8084] sm:flex-row sm:max-w-3xl">
      <div className="w-full mb-2 sm:mb-0 sm:min-w-[290px] sm:mr-4 sm:w-72 sm:max-w-[290px]">
        <Image src={image} alt={roomName} width={326} height={209} />
      </div>
      <div className="flex flex-col justify-between capitalize min-h-full w-full max-w-[410px]">
        <div className="mb-8">
          <div className="text-xl font-bold mb-1">{roomName}</div>
          <div className="text-xs text-[#545456] mb-4">
            2-3 Guest . Personal Bedroom
          </div>
          <div className="hidden sm:block">
            <input type="text" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex sm:space-x-6">
            <div className="hidden space-x-6 sm:flex sm:flex-row">
              {maxEightIcons.map((icon, index) => (
                <div key={index}> {icons[icon]}</div>
              ))}
            </div>
            <div className="flex space-x-6 sm:hidden">
              {maxFourIcons.map((icon, index) => (
                <div key={index}> {icons[icon]}</div>
              ))}
            </div>
          </div>
          {iconsArr.length > 8 && (
            <div className="text-xs text-[#8A1E61]">+15 More</div>
          )}
        </div>
      </div>
    </div>
  );
};
