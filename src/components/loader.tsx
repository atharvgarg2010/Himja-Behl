"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      // For development/experimenting, let's allow the loader to always show so we can see it!
      // In production, you would uncomment this to only show once per session:
      // setIsLoading(false);
      // return;
    }

    sessionStorage.setItem('hasVisited', 'true');
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 3200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="fixed inset-0 z-[100] bg-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Line Art Background Element */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <motion.svg
              viewBox="0 0 200 300"
              className="w-full max-w-md h-full text-[#58171f]"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Elegant Arch representing the atelier */}
              <motion.path
                d="M 40 300 L 40 100 A 60 60 0 0 1 160 100 L 160 300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              {/* Inner delicate frame */}
              <motion.path
                d="M 60 300 L 60 110 A 40 40 0 0 1 140 110 L 140 300"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              />
            </motion.svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h1 className="font-display text-4xl md:text-5xl tracking-[0.4em] uppercase text-[#58171f] mb-6 ml-[0.4em]">
              Himja Behl
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 1.2 }}
              className="w-24 h-[1px] bg-[#58171f]/40 mb-6 origin-center"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
              className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#58171f]/70 ml-[0.3em]"
            >
              The Editorial Wardrobe
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
