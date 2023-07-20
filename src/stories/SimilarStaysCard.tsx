import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SimilarStaysCardTypes = {
  name: string;
  city: string;
  state: string;
  image: {
    image: string;
    width: number;
    height: number;
    alt: string;
  };
  amenities: string[];
  basicPrice: number;
  inVillaDetails: boolean;
  duration?: number;
};

const SimilarStaysCard = ({
  name,
  city,
  state,
  image,
  amenities,
  basicPrice,
  inVillaDetails,
  duration
}: SimilarStaysCardTypes) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const squareVariants = {
    visible: {
      y: [50, 0],
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: duration / 10 }
    },
    hidden: { opacity: 0, scale: 0 }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={`${
        inVillaDetails
          ? 'w-full max-w-[290px] md:max-w-[373px]'
          : 'w-full max-w-[284px] md:max-w-[500px] md:w-[500px] '
      }`}
      animate={controls}
      variants={squareVariants}
      //    animate={{ y: [150, 50], opacity: 1, scale: 1 }}
      //    transition={{
      //        duration: 2,
      //        delay: 0.3,
      //     //    ease: [0.5, 0.71, 1, 1.5],
      //    }}
      //    initial={{ opacity: 0, scale: 0.5 }}
      initial="hidden"
      ref={ref}
      //    whileHover={{ scale: 1.2 }}
    >
      <Image
        src={image.image}
        width={0}
        height={0}
        sizes="100vw"
        className={`object-cover aspect-video ${
          inVillaDetails
            ? 'w-[290px] h-[182px] md:w-[373px] md:h-[234px]'
            : 'w-full h-[180px] md:h-[300px]'
        }`}
        alt="experience_image"
      />
      <div className="flex items-center justify-between mt-4">
        <p className="text-[#8A1E61] font-medium text-xs leading-4">
          {city}
          {', '}
          {state}
        </p>
        <p className="text-[#8A1E61] font-medium text-xs leading-4">
          ₹{basicPrice} night
        </p>
      </div>
      <h1 className="text-[#18181B] font-medium text-xl leading-7 mt-[10px] md:text-base md:leading-[18px]">
        {name}
      </h1>
      <div className="flex items-center flex-wrap mt-[6px]">
        {amenities?.map((el, index) => (
          <div key={el} className="flex items-center">
            <p
              key={el}
              className="text-[#545456] text-xs leading-4 font-centaur flex flex-1"
            >
              {el}
            </p>
            {index === amenities?.length - 1 ? null : (
              <div className="w-[2px] h-[2px] rounded-full bg-[#7B8084] mx-[6px]" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SimilarStaysCard;
