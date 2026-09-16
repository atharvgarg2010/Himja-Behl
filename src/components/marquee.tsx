"use client";

import { motion } from "framer-motion";

const words = [
  "FROM THE BRIDE TO THE FAMILY",
  "STYLE", 
  "EVERY LOOK CONSIDERED",
  "WARDROBE", 
  "FROM THE FIRST FUNCTION TO THE LAST",
  "CURATION", 
  "COLOUR", 
  "SILHOUETTE", 
  "DETAIL", 
  "OCCASION", 
  "CELEBRATION"
];

// Duplicate words enough times to ensure it fills even ultrawide screens
const repeatedWords = [...words, ...words, ...words, ...words];

export function Marquee() {
  const content = (
    <div className="flex items-center gap-10 md:gap-20 px-5 md:px-10">
      {repeatedWords.map((word, i) => (
        <div key={i} className="flex items-center gap-10 md:gap-20">
          <span className="text-dust-gold font-sans text-xs md:text-lg lg:text-xl tracking-[0.2em] md:tracking-[0.3em] font-medium uppercase whitespace-nowrap">
            {word}
          </span>
          <span className="text-dust-gold/40 text-[10px] md:text-sm">
            ✦
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-maroon py-8 md:py-12 overflow-hidden flex items-center">
      {/* Edge Fade Mask */}
      <div 
        className="w-full flex"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
        }}
      >
        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 240, // Significantly slower to compensate for the massive text width
          }}
        >
          {content}
          {content}
        </motion.div>
      </div>
    </section>
  );
}
