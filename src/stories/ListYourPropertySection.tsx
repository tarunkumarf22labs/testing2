import Image from 'next/image';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { knowMore, listYourPropertySection } from 'src/data/constants';
import { Container } from './Container';

const ListYourPropertySection = () => {
  return (
    <Container bgWhite={false}>
      <div className="flex gap-[65px] flex-col md:flex-row items-center md:items-start">
        <div>
          <p className="text-[#8A1E61] text-center md:text-left uppercase text-sm font-[450] md:tracking-[4.2px]">
            {listYourPropertySection.homeOwners}
          </p>
          <h1 className="text-[#1C1917] text-center md:text-left uppercase text-[28px] lg:text-[52px] font-[330] tracking-[1.04px] mt-5">
            {listYourPropertySection.heading}
          </h1>
          <p className="font-[400] text-center md:text-left text-lg text-[#545456] font-centaur mt-3">
            {listYourPropertySection.para}
          </p>
          <div className="flex gap-[76px] justify-center md:justify-start">
            <PrimaryButton
              className="w-[317px] justify-center mt-10 self-start"
              title={knowMore}
              onClick={() => {}}
            />
            <div className="hidden xl:block w-[298px] h-[242px] relative mt-20 shadow-xl">
              <Image
                src={
                  'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Lower_Verandah_at_Breakfast_e5e907f6b2.jpg'
                }
                alt=""
                sizes="100vw"
                height={0}
                width={0}
                className="w-full h-full absolute object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="w-[302px] h-[418px] relative shadow-xl">
            <Image
              src={
                'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Lower_Verandah_at_Breakfast_e5e907f6b2.jpg'
              }
              alt=""
              sizes="100vw"
              height={0}
              width={0}
              className="absolute w-full h-full object-cover"
            />
            <Image
              src={
                'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Picnic_on_the_Lawns_b4a2953158.jpg'
              }
              alt=""
              sizes="100vw"
              height={0}
              width={0}
              className="absolute w-[211px] h-[170px] object-cover top-[40%] md:top-[58px] left-[40%] xl:left-[80%] shadow-xl"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListYourPropertySection;
