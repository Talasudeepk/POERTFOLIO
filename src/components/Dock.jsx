import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Custom Icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <circle cx="17.5" cy="6.5" r="1.5"></circle>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const Dock = () => {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      id: 'instagram',
      icon: InstagramIcon,
      label: 'Instagram',
      href: 'https://www.instagram.com/talasu_deepak/?hl=en',
      glowColor: 'from-pink-500 to-rose-500',
      hoverBg: 'rgba(236, 72, 153, 0.2)',
      hoverBorder: 'rgba(236, 72, 153, 0.5)',
      hoverIconBg: 'rgba(236, 72, 153, 0.3)'
    },
    {
      id: 'linkedin',
      icon: LinkedInIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/t-deepak-kumar-patro-230753367/',
      glowColor: 'from-blue-500 to-blue-600',
      hoverBg: 'rgba(59, 130, 246, 0.2)',
      hoverBorder: 'rgba(59, 130, 246, 0.5)',
      hoverIconBg: 'rgba(59, 130, 246, 0.3)'
    },
    {
      id: 'github',
      icon: GitHubIcon,
      label: 'GitHub',
      href: 'https://github.com/Talasudeepk',
      glowColor: 'from-slate-400 to-slate-600',
      hoverBg: 'rgba(148, 163, 184, 0.2)',
      hoverBorder: 'rgba(148, 163, 184, 0.5)',
      hoverIconBg: 'rgba(148, 163, 184, 0.3)'
    },
    {
      id: 'email',
      icon: EmailIcon,
      label: 'Email',
      href: 'mailto:talasudeepak06@gmail.com',
      glowColor: 'from-purple-500 to-pink-500',
      hoverBg: 'rgba(147, 51, 234, 0.2)',
      hoverBorder: 'rgba(147, 51, 234, 0.5)',
      hoverIconBg: 'rgba(147, 51, 234, 0.3)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    },
    exit: { opacity: 0, scale: 0.8, y: 20 }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="relative">
        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate={{
            backgroundColor: isOpen ? 'rgba(59, 130, 246, 0.25)' : 'rgba(255, 255, 255, 0.1)',
            borderColor: isOpen ? 'rgba(59, 130, 246, 0.6)' : 'rgba(255, 255, 255, 0.2)',
            boxShadow: isOpen 
              ? '0 0 30px rgba(59, 130, 246, 0.3)' 
              : '0 0 20px rgba(255, 255, 255, 0.1)'
          }}
          transition={{ duration: 0.2 }}
          className="relative px-5 py-3 rounded-full border backdrop-blur-xl flex items-center gap-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors group"
        >
          {/* Glow effect - Colorful gradient */}
          <motion.div
            animate={{
              opacity: isOpen ? 0.5 : 0.25,
              scale: isOpen ? 1.15 : 1
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full -z-10"
          />

          <span className="relative">
            {isOpen ? (
              <motion.div initial={{ rotate: 0 }} animate={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                <X className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </motion.div>
            )}
          </span>
          <span className="text-white font-semibold tracking-wide">
            {isOpen ? 'Close' : 'Want to Connect?'}
          </span>
        </motion.button>

        {/* Social Icons Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-20 right-0 flex flex-col gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl"
            >
              {items.map((item) => {
                const Icon = item.icon;
                const isItemHovered = hovered === item.id;

                return (
                  <motion.div key={item.id} variants={itemVariants}>
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        backgroundColor: isItemHovered ? item.hoverBg : 'rgba(255, 255, 255, 0.05)',
                        borderColor: isItemHovered ? item.hoverBorder : 'rgba(255, 255, 255, 0.1)'
                      }}
                      transition={{ duration: 0.2 }}
                      className={`relative group flex items-center justify-center w-12 h-12 rounded-lg border backdrop-blur-lg transition-all`}
                    >
                      {/* Glow background on hover */}
                      <motion.div
                        animate={{
                          opacity: isItemHovered ? 0.4 : 0,
                          scale: isItemHovered ? 1.05 : 0.95
                        }}
                        transition={{ duration: 0.2 }}
                        className={`absolute inset-0 blur-xl bg-gradient-to-br ${item.glowColor} rounded-lg -z-10`}
                      />

                      <motion.div 
                        className="relative w-8 h-8 rounded-lg flex items-center justify-center border text-white font-semibold"
                        style={{
                          backgroundColor: isItemHovered ? item.hoverIconBg : 'rgba(255, 255, 255, 0.08)',
                          borderColor: isItemHovered ? item.hoverBorder : 'rgba(255, 255, 255, 0.15)'
                        }}
                        animate={{
                          scale: isItemHovered ? 1.2 : 1
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        <Icon />
                      </motion.div>

                      {/* Label Tooltip on Hover - Left Side */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isItemHovered ? { opacity: 1, x: -42 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-full mr-2 whitespace-nowrap text-sm font-semibold text-white bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 pointer-events-none"
                      >
                        {item.label}
                      </motion.div>
                    </motion.a>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Dock;
