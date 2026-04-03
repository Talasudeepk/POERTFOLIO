import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import Projects from './components/Projects';

function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans antialiased">
      {/* 500vh container for the scrub animation */}
      <div ref={containerRef} className="relative h-[500vh]">
        {/* Sticky wrapper limiting canvas & overlay to viewport height */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>
      
      {/* Post-scroll content */}
      <Projects />
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-white/10 relative z-20 bg-background">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
