import React, { useEffect } from 'react';
import { Container } from './Container';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ListYourPropertySection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    console.log('inView: ', inView);
    if (inView) {
      animation.start({
        scale: 1,
        transition: { duration: 1 }
      });
    } else {
      animation.start({ scale: 1.5, transition: { duration: 1 } });
    }
  }, [inView, animation]);

  return (
    <Container bgWhite={false}>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between md:space-x-16">
        <div className="text-center md:text-left md:mt-10 md:relative md:flex-1 flex flex-col space-y-10">
          <div>
            <p className="uppercase text-xs text-[#8A1E61] mb-3 md:text-sm md:mb-5">
              Home Owners
            </p>
            <p className="uppercase text-4xl text-[#18181B] font-light mb-8 md:text-5xl md:mb-3">
              LIST YOUR Property
            </p>
            <p className="text-base text-[#545456] font-centaur mb-4 md:text-lg md:mb-10">
              Unlock the value if your luxury vacation home.
            </p>
            <button className="text-xs text-white w-[250px] h-[48px] bg-[#8A1E61] uppercase">
              Know More
            </button>
          </div>
          <div className="hidden xl:absolute right-10 bottom-0 lg:block h-[242px] overflow-hidden">
            <motion.div animate={animation}>
              <Image
                src="/images/ListYourPropertyImage33.webp"
                alt="List your Property 1"
                width={298}
                height={242}
              />
            </motion.div>
          </div>
        </div>
        <div className="relative h-[452px] w-[350px] mx-auto md:mx-0 md:w-[484px]">
          <div className="absolute left-0 overflow-hidden">
            <motion.div animate={animation} ref={ref}>
              <Image
                src="/images/ListYourPropertyImage11.webp"
                alt="List your Property 1"
                width={302}
                height={416}
              />
            </motion.div>
          </div>
          <div className="overflow-hidden absolute right-0 top-[168px]">
            <motion.div animate={animation}>
              <Image
                src="/images/ListYourPropertyImage22.webp"
                alt="List your Property 2"
                width={211}
                height={202}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};
