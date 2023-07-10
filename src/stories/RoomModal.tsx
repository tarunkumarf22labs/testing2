import React from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface IRoomModal {
  showOrHide: () => void;
}

const RoomModal = ({ showOrHide }: IRoomModal) => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="fixed left-0 w-full overflow-auto h-[100vh] top-20 ease-in-out ">
      <div
        className="fixed top-0 left-0 w-full h-screen "
        style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
        onClick={showOrHide}
      >
      </div>
      <div className="relative w-11/12 px-4 py-6 m-auto capitalize bg-white md:w-2/3 md:p-8">
        <button className="absolute top-10 right-[5%]" onClick={showOrHide}>
          <XMarkIcon className="w-7 h-7" />
        </button>
        <div className="flex flex-col-reverse items-start w-full gap-4 md:w-2/3 md:flex-row ">
          <div className="w-full h-52 md:h-36 md:w-52">
            <Image
              src={
                "https://luxunlockdev.s3.ap-south-1.amazonaws.com/thumbnail_Lower_Verandah_at_Breakfast_e5e907f6b2.jpg"
              }
              width={100}
              height={100}
              alt="thumbnail"
              className="w-full h-full"
            />
          </div>
          <div className="text-xs font-[Centaur] ">
            <p className="text-[#18181B] text-xl font-bold capitalize mb-4 md:mb-0">
              Master Bedroom
            </p>
            <div className="flex items-center justify-between gap-2 mb-6">
              <p className="capitalize">2-3 Guest</p>
              <div className="w-1 h-1 bg-[#7B8084] rounded-full "></div>
              <p className="capitalize">Personal Bathroom</p>
            </div>
            <p>
              <span className="text-sm font-bold">₹12,589 </span>{" "}
              <span className="text-[#545456] text-opacity-[0.8]">/ night</span>
            </p>
          </div>
        </div>
        <p className="text-[#545456] text-xl mt-8">master Bedroom Details</p>
        <p className="text-lg mt-5 text-[#545456] font-[Centaur] leading-8">
          Deja View is a beautiful 2-bedroom plantation-style luxury villa with
          locally-inspired design and contemporary interiors that makes it one
          of the most romantic vacation homes in South India. The villa is part
          of a private community of six homes set on top of a hill in a 14-acre
          coffee & cardamom plantation in Eastern Wayanad, Kerala. From your
          verandah enjoy sweeping and unhindered views of rainforest clad hills.
          Indoors, an open plan design comprising two tastefully furnished
          bedrooms and a gorgeous loft make for an intimate & enjoyable holiday.{" "}
        </p>
        <p className="mt-8 text-[#545456] text-xl mb-5">
          master Bedroom Amenities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-[#545456]">
          {array.map((icon, index) => {
            return (
              <p key={index} className="flex">
                {/* {icons[icon.icon]}{" "} */}
                <Image
                  src={
                    "https://luxunlockdev.s3.ap-south-1.amazonaws.com/wifi_high_824f7b47f3.svg"
                  }
                  width={20}
                  height={20}
                  alt={"icon"}
                />
                <span className="pl-3 text-base font-centaur">
                  {
                    "Authentic local South Indian cuisine with suggested daily set menus for meals."
                  }
                </span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
