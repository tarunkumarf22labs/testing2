import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ReviewCard } from './ReviewCard';
import { ScrollButton } from './ScrollButton';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ReviewSection = () => {
  return (
    <>
      <div className="flex justify-center text-center bg-white sm:text-left">
        <div className="flex flex-col justify-between px-5 py-16 sm:py-24 sm:pr-20 ">
          <div className="mb-4 text-center uppercase sm:text-left">
            <p className="text-xs sm:text mb-3 text-[#8A1E61] sm:text-sm sm:pb-5">
              THEIR EXPERIENCE
            </p>
            <p className="text-4xl font-medium text-[#1C1917]">ON luxunloCk</p>
          </div>
          <ReviewCard
            reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            name="Atul Malhotra"
            state="Maharashtra"
            img="/images/Avatar_image.png"
            top={false}
          />
          <div className="mt-3">
            <ScrollButton onPrevPress={() => {}} onNextPress={() => {}} />
          </div>
        </div>
        <div className="hidden lg:block lg:h-full">
          <ImageDiv />
        </div>
      </div>
    </>
  );
};

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.5 }
};

const ImageDiv = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      <Image
        src="/images/ReviewImage.png"
        alt="Review Image"
        width={721}
        height={742}
        className="h-full"
      />
    </motion.div>
  );
};
