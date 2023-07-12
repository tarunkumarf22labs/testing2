import React, { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const data = [
  {
    big: "/images/CurratedCollectionsModelImage1.webp",
    small: "/images/GallerySmallRoom1.png",
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel illo, ad ex iure minus explicabo voluptatibus provident animi cupiditate deserunt earum repudiandae nam sunt! Magnam ea vero excepturi voluptates.",
  },
  {
    big: "/images/a01.png",
    small: "/images/Amenities1.png",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    big: "/images/ListYourPropertyImage33.webp",
    small: "/images/ListYourPropertyImage11.webp",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad nobis nemo quibusdam expedita commodi perferendis pariatur perspiciatis, laboriosam qui ipsa mollitia accusamus rerum fugit sapiente repudiandae, possimus facilis necessitatibus?",
  },
];

const Spotlight = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    gsap.set(".small-preview-image-container", {
      zIndex: data.length + 1,
    });
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref?.current,
          scrub: true,
          start: "top 20%",
          end: "bottom 20%",
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      data?.forEach((_, idx) => {
        if (idx === 0) {
          setSlideIndex(0);
        } else {
          gsap.set(`.text-content-${idx}`, {
            zIndex: idx,
            translateY: "100%",
          });
          gsap.set([`.preview-image-${idx}`, `.small-preview-image-${idx}`], {
            zIndex: idx,
            translateY: "100%",
          });
          tl.to([`.preview-image-${idx}`, `.small-preview-image-${idx}`], {
            translateY: 0,
            onComplete: () => setSlideIndex(idx),
            onReverseComplete: () => setSlideIndex(idx - 1),
          }).to(
            `.text-content-${idx}`,
            {
              translateY: 0,
            },
            "<"
          );
        }
      });

      ScrollTrigger.create({
        trigger: ref?.current,
        scrub: true,
        markers: false,
        pin: true,
        start: "top 20%",
        invalidateOnRefresh: true,
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <Container bgWhite={true}>
      <div ref={ref} className="flex flex-col gap-y-5 pb-20">
        <p className="text-sm text-[#8A1E61] tracking-widest">
          {"LuxUNLOCK’s"}
        </p>
        <h1 className="uppercase text-4xl text-[#18181B] font-light md:text-5xl">
          Spotlight
        </h1>
        <div className="flex gap-x-[60px] justify-between">
          <div className="relative flex-1 flex flex-col max-w-xl overflow-hidden">
            {data?.map((_, idx) => {
              return (
                <div
                  key={`${idx}`}
                  className={`flex flex-col gap-y-4 flex-1 py-10 absolute text-content h-full w-full bg-white text-content-${idx}`}
                >
                  <h2 className="text-[#1C1917] text-[42px] font-light">
                    New Villa In Sri Lanka
                  </h2>
                  <p className="text-[22px] leading-[34px] text-[#545456]">
                    {_.para}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-1 items-center gap-8">
            <div className="w-full max-w-[559px] h-[369px] relative">
              <div className="relative w-full h-full overflow-hidden">
                {data?.map((el, idx) => {
                  return (
                    <Image
                      key={`${idx}`}
                      src={el?.big}
                      alt="List your Property 1"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className={`absolute w-full h-full object-cover preview-image-${idx}`}
                    />
                  );
                })}
              </div>
              <div
                className={
                  "small-preview-image-container w-[229px] h-[152px] absolute -bottom-10 right-10 overflow-hidden"
                }
              >
                {data?.map((el, idx) => {
                  return (
                    <Image
                      key={`${idx}`}
                      src={el?.small}
                      alt="List your Property 1"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className={`absolute h-full w-full object-cover small-preview-image-${idx}`}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-center w-8">
              <ChevronUpIcon
                color="#7B8084"
                width={20}
                className="relative top-[12px]"
              />
              <div className="h-9 w-[1.5px] bg-[#7B8084]" />
              <p className="text-xs text-[#8A1E61] py-3">
                {slideIndex + 1} / {data?.length}
              </p>
              <div className="h-9 w-[1.5px] bg-[#7B8084]" />
              <ChevronUpIcon
                className="rotate-180 relative bottom-[12px]"
                color="#7B8084"
                width={20}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Spotlight;
