import Image from 'next/image';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { knowMore, listYourPropertySection } from 'src/data/constants';

const ListYourPropertySection = () => {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        height={0}
        width={0}
        src={
          'https://luxunlockdev.s3.ap-south-1.amazonaws.com/02_Exterior_1_1_60c6270c38.jpg'
        }
        alt="list_your_property_bg"
        sizes="100vw"
        className="absolute w-full h-full object-cover inset-0"
      />
      <div className="absolute bg-black/20 inset-0 w-full h-full" />
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
        <p className="text-white uppercase text-sm font-[450] md:tracking-[4.2px] text-center">
          {listYourPropertySection.homeOwners}
        </p>
        <h1 className="text-white uppercase text-[28px] lg:text-[52px] font-[330] tracking-[1.04px] text-center mt-5">
          {listYourPropertySection.heading}
        </h1>
        <p className="font-[400] text-lg text-white font-centaur text-center mt-3">
          {listYourPropertySection.para}
        </p>
        <PrimaryButton
          className="mt-10 w-[317px] justify-center"
          title={knowMore}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ListYourPropertySection;
