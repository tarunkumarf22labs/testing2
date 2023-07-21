import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import PrimaryButton from './PrimaryButton';
import { knowMore, listYourPropertySection } from 'src/data/constants';
import { Container } from './Container';
import { gsap } from 'gsap';

const ListYourPropertySection = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollerRef?.current,
          start: 'top 20%',
          end: 'top 20%',
          toggleActions: 'play none reverse none'
        }
      });

      timeline
        .fromTo('.list-your-prop-img-1', { scale: 1.5 }, { scale: 1 })
        .fromTo('.list-your-prop-img-2', { scale: 1.5 }, { scale: 1 }, '<')
        .fromTo('.list-your-prop-img-3', { scale: 1.5 }, { scale: 1 }, '<');
    }, scrollerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollerRef}>
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
              <div className="hidden xl:block w-[298px] h-[242px] relative mt-20 shadow-xl overflow-hidden">
                <Image
                  src={
                    'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Lower_Verandah_at_Breakfast_e5e907f6b2.jpg'
                  }
                  alt=""
                  sizes="100vw"
                  height={0}
                  width={0}
                  className="list-your-prop-img-1 w-full h-full absolute object-cover"
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
                  className="list-your-prop-img-2 absolute w-full h-full object-cover"
                />
              </div>
              <div className="w-[211px] h-[170px] absolute top-[40%] md:top-[58px] left-[40%] xl:left-[80%] overflow-hidden">
                <Image
                  src={
                    'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Picnic_on_the_Lawns_b4a2953158.jpg'
                  }
                  alt=""
                  sizes="100vw"
                  height={0}
                  width={0}
                  className="list-your-prop-img-3 w-[211px] h-[170px] object-cover shadow-xl"
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
