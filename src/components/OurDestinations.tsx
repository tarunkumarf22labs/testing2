import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { villaInterface } from 'src/Interface';
import { ourDestinationsProps } from 'src/Props/home';
import { SimilarStaysSection } from 'src/stories';
import Filter from 'src/stories/Filter/Filter';
import { Container } from 'src/stories/Container';

interface IOurDestinations {
  OurDestinations: villaInterface[];
}

const OurDestinations = ({ OurDestinations }: IOurDestinations) => {
  const [currentFilter, setCurrentFilter] = useState<string>();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: {
      y: [100, 0],
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 }
    },
    hidden: { opacity: 0, scale: 0 }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <Container>
      <p className="text-sm leading-none tracking-widest text-center text-pink-800 uppercase md:text-left">
        A LUXURY way of life
      </p>
      <h1 className="text-center md:text-left text-zinc-900 text-[52px] uppercase tracking-wider mt-5 leading-tight">
        EXPLORE OUR DESTINATIONS
      </h1>
      <motion.div
        className="mt-10"
        animate={{
          y: [150, 0],
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.3 }
        }}
      >
        <Filter
          options={[
            'all',
            'Interior',
            'Indoor Kitchen',
            'Exterior',
            'Living Room',
            'Master Bedroom',
            'Bathroom',
            'Interior',
            'Indoor Kitchen',
            'Exterior',
            'Living Room',
            'Master Bedroom',
            'Bathroom'
          ]}
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
          inGallery={false}
        />
      </motion.div>
      <motion.div
        animate={controls}
        variants={squareVariants}
        initial="hidden"
        ref={ref}
      >
        <SimilarStaysSection
          {...ourDestinationsProps(OurDestinations)}
          inVillaDetails={false}
        />
      </motion.div>
    </Container>
  );
};

export default OurDestinations;
