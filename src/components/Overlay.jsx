import React from 'react';
import { motion, useTransform } from 'framer-motion';

const Overlay = ({ scrollYProgress }) => {
  // Section 1: Center (0% -> 20%)
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  // Section 2: Left aligned (20% -> 30% -> 50%)
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [100, 0, -100]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);

  // Section 3: Right aligned (50% -> 60% -> 80%)
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [100, 0, -100]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col items-center justify-center">
      
      {/* Section 1 - 0% */}
      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="absolute w-full px-6 flex justify-center text-center text-white"
      >
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            John Doe.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Creative Developer.
          </p>
        </div>
      </motion.div>

      {/* Section 2 - 30% */}
      <motion.div 
        style={{ y: y2, opacity: opacity2 }}
        className="absolute w-full px-8 md:px-24 flex justify-start text-white"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            I build digital <span className="text-gray-400">experiences</span>.
          </h2>
        </div>
      </motion.div>

      {/* Section 3 - 60% */}
      <motion.div 
        style={{ y: y3, opacity: opacity3 }}
        className="absolute w-full px-8 md:px-24 flex justify-end text-white"
      >
        <div className="max-w-xl text-right">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Bridging design <br/> and <span className="text-gray-400">engineering</span>.
          </h2>
        </div>
      </motion.div>

    </div>
  );
};

export default Overlay;
