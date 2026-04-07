import React, { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import Projects from './components/Projects';

function App() {
  const containerRef = useRef(null);
  const [overlayHidden, setOverlayHidden] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setOverlayHidden((prev) => {
      const next = latest >= 0.9;
      return prev === next ? prev : next;
    });
  });

  return (
    <main className="bg-[#0b0b10] min-h-screen text-white font-sans antialiased">
      {/* 500vh container for the scrub animation */}
      <div ref={containerRef} className="relative h-[500vh]">
        {/* Sticky wrapper limiting canvas & overlay to viewport height */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          {!overlayHidden && <Overlay scrollYProgress={scrollYProgress} />}
        </div>
      </div>
      
      {/* Post-scroll content */}
      <Projects />
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-white/10 relative z-20 bg-background">
        <p>(c) {new Date().getFullYear()} T Deepak Kumar Patro. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;


