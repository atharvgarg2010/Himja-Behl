"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    sessionStorage.setItem('hasVisited', 'true');
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2800);

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
          className="fixed inset-0 z-[100] bg-[#1A0407] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle background gradient to match the brand */}
          <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 50% 50%, #4A151C 0%, #1A0407 80%)' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative z-10 flex flex-col items-center"
          >
            <h1 className="font-display text-4xl md:text-5xl tracking-[0.4em] uppercase text-dust-gold mb-6 ml-[0.4em]">
              Himja Behl
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
              className="w-16 h-[1px] bg-dust-gold/50 mb-6 origin-center"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-warm-white/60 ml-[0.3em]"
            >
              Curating The Edit
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
