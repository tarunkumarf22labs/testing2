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

interface IAmenitiesSection {
  heading: string;
  iconsArray: {
    icon: string;
    text: string;
  }[];
}

const icons = {
  wifi: <WifiHigh size={20} color="#8a1e61" />,
  broom: <Broom size={20} color="#8a1e61" />,
  fork: <ForkKnife size={20} color="#8a1e61" />,
  bed: <Bed size={20} color="#8a1e61" />,
  bathtub: <Bathtub size={20} color="#8a1e61" />,
  thermometer: <Thermometer size={20} color="#8a1e61" />,
  flash: <Lightning size={20} color="#8a1e61" />,
  drop: <Drop size={20} color="#8a1e61" />,
  battery: <BatteryChargingVertical size={20} color="#8a1e61" />,
  car: <Car size={20} color="#8a1e61" />,
  cookingPot: <CookingPot size={20} color="#8a1e61" />,
  userCircle: <UserCircle size={20} color="#8a1e61" />,
  clock: <Clock size={20} color="#8a1e61" />,
  atom: <Atom size={20} color="#8a1e61" />,
  usersThree: <UsersThree size={20} color="#8a1e61" />,
  champagne: <Champagne size={20} color="#8a1e61" />,
  plant: <Plant size={20} color="#8a1e61" />,
};

export const iconsArray = [
  { icon: "wifi", text: "High-speed Wi-Fi." },
  { icon: "thermometer", text: "Heating in all rooms." },
  { icon: "battery", text: "100% Power back up." },
  { icon: "drop", text: "Pure drinking water in all faucets of the house." },
  { icon: "broom", text: "Daily housekeeping & full-time cook." },
  { icon: "flash", text: "100% solar and battery power backup.*" },
  { icon: "car", text: "Transportation services.*" },
  { icon: "clock", text: "Laundry service available - 24 hrs turnaround." },
  { icon: "fork", text: "Breakfast included. Other meals are available." },
  { icon: "atom", text: "Curated experiences of the Nilgiris." },
  {
    icon: "cookingPot",
    text: "Authentic local South Indian cuisine with suggested daily set menus for meals.",
  },
  { icon: "usersThree", text: "LUX Concierge & Guest Relations Service.*" },
  {
    icon: "userCircle",
    text: "Services of a dedicated chef and housekeeper.*",
  },
  { icon: "champagne", text: "Intimate dining space with scenic views.*" },
  { icon: "bed", text: "High-quality bed & bath linen." },
  { icon: "fork", text: "Dreamy open-plan kitchen for DIY cooking.*" },
  { icon: "bathtub", text: "Luxury bath amenities by Inara." },
  { icon: "plant", text: "Beautiful lawn with outdoor seating." },
];

export const AmenitiesSection = ({
  heading,
  iconsArray,
}: IAmenitiesSection) => {
  const maxEightIcons =
    iconsArray.length > 9 ? iconsArray.slice(0, 9) : iconsArray;

  return (
    <div className="flex justify-between py-8 xl:py-20 mx-5 xl:mx-auto h-auto xl:max-w-7xl">
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
              {icons[icon.icon]}{" "}
              <span className="pl-3 text-base font-centaur">{icon.text}</span>
            </p>
          ))}
        </div>
        <div className="hidden xl:grid md:grid-cols-2 gap-y-6 md:max-w-3xl md:min-w-[700px] text-[#545456]">
          {iconsArray.map((icon, index) => (
            <p key={index} className="flex">
              {icons[icon.icon]}{" "}
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
