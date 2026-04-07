import React, { useState } from 'react';
import { motion, AnimatePresence, useTransform, useMotionValueEvent } from 'framer-motion';

const Overlay = ({ scrollYProgress }) => {
  // Phase controls which section is mounted — eliminates any ghost rendering
  // 1 = name card, 2 = projects, 3 = internship, 0 = none
  const [phase, setPhase] = useState(1);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v < 0.18) setPhase(1);
    else if (v < 0.56) setPhase(2);
    else if (v < 0.92) setPhase(3);
    else setPhase(0);
  });

  // ── Section 1 transforms ─────────────────────────────────────────────
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -70]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);

  // ── Section 2 transforms ─────────────────────────────────────────────
  const y2 = useTransform(scrollYProgress, [0.22, 0.32, 0.50], [80, 0, -80]);
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.30, 0.44, 0.52], [0, 1, 1, 0]);

  // ── Section 3 transforms ─────────────────────────────────────────────
  const y3 = useTransform(scrollYProgress, [0.58, 0.68, 0.84], [80, 0, -80]);
  const opacity3 = useTransform(scrollYProgress, [0.58, 0.66, 0.78, 0.88], [0, 1, 1, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      <AnimatePresence>

        {/* ── Section 1 — Name card (0 → 18%) ─────────────────────── */}
        {phase === 1 && (
          <motion.div
            key="s1"
            style={{ y: y1, opacity: opacity1 }}
            className="absolute inset-0 px-6 flex items-start justify-center text-center text-slate-100 pt-14 md:pt-16"
          >
            <div className="max-w-4xl">
              <p
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: 'clamp(2rem, 5.5vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: '0.02em',
                  background: 'linear-gradient(135deg, #fff9f0 0%, #f5d89c 40%, #ffffff 70%, #e8c97a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.55))',
                }}
              >
                T Deepak Kumar Patro
              </p>
              <div style={{ width: '80px', height: '1.5px', background: 'linear-gradient(90deg, transparent, #f5d89c, transparent)', margin: '18px auto 14px' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 'clamp(0.78rem, 1.4vw, 1rem)', letterSpacing: '0.1em', color: 'rgba(241,235,219,0.85)', textTransform: 'uppercase' }}>
                B.Tech CSE&nbsp;@&nbsp;KL University&nbsp;·&nbsp;CGPA 9.23/10
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 'clamp(0.72rem, 1.2vw, 0.9rem)', letterSpacing: '0.06em', color: 'rgba(200,193,179,0.75)', marginTop: '8px' }}>
                Web &amp; Python Developer&nbsp;·&nbsp;AI/ML Enthusiast
              </p>
            </div>
          </motion.div>
        )}

        {/* ── Section 2 — Projects (22 → 52%) ─────────────────────── */}
        {phase === 2 && (
          <motion.div
            key="s2"
            style={{ y: y2, opacity: opacity2 }}
            className="absolute inset-0 flex items-center px-8 md:px-24 text-slate-100"
          >
            <div className="max-w-xl">
              <h2
                style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}
                className="text-3xl md:text-5xl tracking-tight leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
              >
                Projects in{' '}
                <span className="text-emerald-300">React</span> and{' '}
                <span className="text-emerald-300">Python</span>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="mt-4 text-base md:text-lg text-slate-300">
                To-Do App, Portfolio Site, NutriLabel Recipe Validator
              </p>
            </div>
          </motion.div>
        )}

        {/* ── Section 3 — Internship (58 → 88%) ───────────────────── */}
        {phase === 3 && (
          <motion.div
            key="s3"
            style={{ y: y3, opacity: opacity3 }}
            className="absolute inset-0 flex items-center justify-end px-8 md:px-24 text-slate-100"
          >
            <div className="max-w-xl text-right">
              <h2
                style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}
                className="text-3xl md:text-5xl tracking-tight leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
              >
                Passionate about{' '}
                <span className="text-violet-400">AI / ML</span>{' '}
                and building intelligent products
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="mt-4 text-base md:text-lg text-slate-300">
                Eager to learn and explore machine learning, deep learning, and AI — turning curiosity into real-world solutions
              </p>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default Overlay;
