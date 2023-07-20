import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { journeySection } from 'src/data/constants';
import PrimaryButton from './PrimaryButton';
import { ISpotlightAndJourney } from 'src/Interface/home-page';

const JourneyDesktop = ({ data }: { data: ISpotlightAndJourney[] }) => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollerRef?.current,
          scrub: true,
          start: 'top 20%',
          end: 'bottom 20%',
          toggleActions: 'play none reverse none',
          invalidateOnRefresh: true
        }
      });

      data?.forEach((_, idx) => {
        if (idx === 0) {
          setSlideIndex(0);
        } else {
          gsap.set(`.text-content-${idx}`, {
            zIndex: idx,
            translateY: '100%'
          });
          gsap.set(`.preview-image-${idx}`, {
            zIndex: idx,
            translateY: '100%'
          });
          tl.to(`.preview-image-${idx}`, {
            translateY: 0,
            onComplete: () => setSlideIndex(idx),
            onReverseComplete: () => setSlideIndex(idx - 1)
          }).to(
            `.text-content-${idx}`,
            {
              translateY: 0
            },
            '<'
          );
        }
      });

      ScrollTrigger.create({
        trigger: scrollerRef?.current,
        scrub: true,
        markers: false,
        pin: true,
        start: 'top 20%',
        invalidateOnRefresh: true
      });
    }, scrollerRef);
    return () => ctx.revert();
  }, [data]);

  return (
    <div ref={scrollerRef} className="flex flex-col gap-y-5">
      <h1 className="uppercase text-4xl text-[#18181B] font-light md:text-5xl">
        {journeySection.heading}
      </h1>
      <div className="flex gap-x-[60px] justify-between mt-20">
        <div className="flex flex-1 items-center gap-8">
          <div className="flex flex-col items-center w-8">
            <div className="w-5 h-5 rounded-full bg-[#8A1E61] flex items-center justify-center">
              <div className="bg-white w-2 h-2 rounded-full" />
            </div>
            <div className="w-[1.5px] border border-dashed border-[#7B8084] opacity-40 h-28" />
            <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center overflow-hidden border border-[#8A1E61]">
              <Image
                alt="preview"
                src={
                  data?.[slideIndex]?.images?.data?.[0]?.attributes
                    ?.previewUrl ||
                  data?.[slideIndex]?.images?.data?.[0]?.attributes?.url
                }
                width={32}
                height={32}
                className="rounded-full w-8 h-8"
              />
            </div>
            <div className="w-[1.5px] border border-dashed border-[#7B8084] opacity-40 h-28" />
            <div className="w-5 h-5 rounded-full bg-[#8A1E61] flex items-center justify-center">
              <div className="bg-white w-2 h-2 rounded-full" />
            </div>
          </div>
          <div className="w-full max-w-[559px] h-[369px] relative overflow-hidden">
            {data?.map((el, idx) => {
              return (
                <Image
                  key={`${idx}`}
                  src={el?.images?.data?.[0]?.attributes?.url}
                  alt="journey"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`absolute w-full h-full object-cover preview-image-${idx} shadow-xl`}
                />
              );
            })}
          </div>
        </div>
        <div className="relative flex-1 flex flex-col max-w-xl overflow-hidden">
          {data?.map((el, idx) => {
            return (
              <div
                key={`${idx}`}
                className={`flex flex-col gap-y-4 flex-1 py-10 absolute text-content h-full w-full bg-white text-content-${idx}`}
              >
                <h2 className="text-[#1C1917] text-[42px] font-light capitalize">
                  {el?.title}
                </h2>
                <p className="text-base md:text-[22px] leading-[34px] text-[#545456] font-centaur">
                  {el?.description}
                </p>
                <PrimaryButton
                  title="Know More"
                  onClick={() => {}}
                  className="self-start w-[317px] p-0 py-4 items-center justify-center mt-2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneyDesktop;
