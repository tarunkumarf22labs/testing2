import Image from 'next/image';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { knowMore, listYourPropertySection } from 'src/data/constants';
import { Container } from './Container';
import { useRouter } from 'next/router';
import useGsapAnimations from '@/hooks/useGsapAnimations';
import { gsap_animation_sections } from 'src/types/enum';

const ListYourPropertySection = () => {
  const navigation = useRouter();

  useGsapAnimations(gsap_animation_sections.list_your_property);

  return (
    <div className="gsap-list-your-property-section">
      <Container bgWhite={false}>
        <div className="flex gap-[65px] flex-col md:flex-row items-center md:items-start">
          <div>
            <div className="text-[#8A1E61] text-center md:text-left uppercase text-sm font-[450] md:tracking-[4.2px] overflow-hidden">
              <p className="gsap-list-your-property-section-heading-text opacity-0">
                {listYourPropertySection.homeOwners}
              </p>
            </div>
            <div className="text-[#1C1917] text-center md:text-left uppercase text-[28px] lg:text-[52px] font-[330] tracking-[1.04px] mt-5 overflow-hidden">
              <h1 className="gsap-list-your-property-section-heading-text opacity-0">
                {listYourPropertySection.heading}
              </h1>
            </div>
            <p className="gsap-list-your-property-section-content opacity-0 font-[400] text-center md:text-left text-lg text-[#545456] font-centaur mt-3">
              {listYourPropertySection.para}
            </p>
            <div className="flex gap-[76px] justify-center md:justify-start">
              <PrimaryButton
                className="gsap-list-your-property-section-button opacity-0 w-[317px] justify-center mt-10 self-start"
                title={knowMore}
                onClick={() => navigation.push('/home-owners')}
              />
              <div className="hidden xl:block w-[298px] h-[242px] relative mt-20 shadow-xl overflow-hidden">
                <Image
                  src={
                    'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Lower_Verandah_at_Breakfast_e5e907f6b2.jpg'
                  }
                  alt=""
                  sizes="100vw"
                  height={0}
                  width={0}
                  className="gsap-list-your-prop-img-1 w-full h-full absolute object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-[302px] h-[418px] relative shadow-xl">
              <div className="w-[302px] h-[418px] relative overflow-hidden">
                <Image
                  src={
                    'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Lower_Verandah_at_Breakfast_e5e907f6b2.jpg'
                  }
                  alt=""
                  sizes="100vw"
                  height={0}
                  width={0}
                  className="gsap-list-your-prop-img-2 absolute w-full h-full object-cover"
                />
              </div>
              <div className="gsap-list-your-prop-img-3-parallax w-[211px] h-[170px] absolute top-[40%] md:top-[58px] left-[40%] xl:left-[80%] shadow-xl overflow-hidden">
                <Image
                  src={
                    'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Picnic_on_the_Lawns_b4a2953158.jpg'
                  }
                  alt=""
                  sizes="100vw"
                  height={0}
                  width={0}
                  className="gsap-list-your-prop-img-3 w-[211px] h-[170px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ListYourPropertySection;
