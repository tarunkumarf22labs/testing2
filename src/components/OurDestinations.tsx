import React, { useEffect, useState } from "react";
import { villaInterface } from "src/Interface";
import { ourDestinationsProps } from "src/Props/home";
import { SimilarStaysSection } from "src/stories";
import Filter from "src/stories/Filter/Filter";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IOurDestinations {
    OurDestinations: villaInterface[]
}

const OurDestinations = ({OurDestinations}:IOurDestinations) => {
  const [currentFilter, setCurrentFilter] = useState<string>();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: { y: [250, 0], opacity: 1, scale: 1 , transition: {  duration: 1,delay: 0.3 } },
    hidden: { opacity: 0, scale: 0 }
  };
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="lg:max-w-[1440px] m-auto mt-20">
      <p className="text-sm leading-none tracking-widest text-center text-pink-800 uppercase md:text-left">
      A LUXURY way of life
      </p>
      <h1 className="text-center md:text-left text-zinc-900 text-[52px] uppercase tracking-wider mt-5 leading-tight">
      EXPLORE OUR DESTINATIONS
      </h1>
      <motion.div className="mt-10"
      animate={{ y: [250, 0], opacity: 1, scale: 1 , transition: {  duration: 1,delay: 0.3 }}}>
        <Filter
          options={[
            "all",
            "Interior",
            "Indoor Kitchen",
            "Exterior",
            "Living Room",
            "Master Bedroom",
            "Bathroom",
            "Interior",
            "Indoor Kitchen",
            "Exterior",
            "Living Room",
            "Master Bedroom",
            "Bathroom",
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
       ref= {ref}
    >
        
      <SimilarStaysSection {...ourDestinationsProps(OurDestinations)} inVillaDetails={false}/>
      </motion.div>
    </div>
  );
};

export default OurDestinations;
