import React from 'react';
import { motion, useTransform } from 'framer-motion';

const Overlay = ({ scrollYProgress }) => {
  // Section 1: Top (0% -> 12%)
  const y1 = useTransform(scrollYProgress, [0, 0.12], [0, -60]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);

  // Section 2: Left aligned (18% -> 30% -> 52%)
  const y2 = useTransform(scrollYProgress, [0.18, 0.3, 0.52], [80, 0, -80]);
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.28, 0.42, 0.52], [0, 1, 1, 0]);

  // Section 3: Right aligned (56% -> 66% -> 86%)
  const y3 = useTransform(scrollYProgress, [0.56, 0.66, 0.86], [80, 0, -80]);
  const opacity3 = useTransform(scrollYProgress, [0.56, 0.64, 0.76, 0.86], [0, 1, 1, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex flex-col items-center justify-center">
      
      {/* Section 1 - 0% */}
      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="absolute inset-0 px-6 flex items-start justify-center text-center text-slate-100 pt-16 md:pt-20"
      >
        <div className="max-w-3xl">
          <p className="text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            T Deepak Kumar Patro
          </p>
          <p className="mt-3 text-base md:text-lg text-slate-300">
            B.Tech CSE @ KIIT University  •  CGPA 9.23/10
          </p>
          <p className="mt-2 text-sm md:text-base text-slate-400">
            Web & Python Developer  •  AI/ML Enthusiast
          </p>
        </div>
      </motion.div>

      {/* Section 2 - 30% */}
      <motion.div 
        style={{ y: y2, opacity: opacity2 }}
        className="absolute w-full px-8 md:px-24 flex justify-start text-slate-100"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            Projects in <span className="text-emerald-300">React</span> and <span className="text-emerald-300">Python</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            To-Do App, Portfolio Site, NutriLabel Recipe Validator
          </p>
        </div>
      </motion.div>

      {/* Section 3 - 60% */}
      <motion.div 
        style={{ y: y3, opacity: opacity3 }}
        className="absolute w-full px-8 md:px-24 flex justify-end text-slate-100"
      >
        <div className="max-w-xl text-right">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            Seeking a software or web development internship
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300">
            Focused on real-world impact and clean, scalable code
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default Overlay;
