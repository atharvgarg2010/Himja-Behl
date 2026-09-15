"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] bg-maroon overflow-hidden flex items-center pt-20">
      {/* Editorial PNG Placeholder */}
      <div className="absolute right-0 bottom-0 w-full md:w-[55%] h-[60%] md:h-[90%] opacity-80 md:opacity-100 pointer-events-none z-0 flex items-end justify-end md:pr-12">
        <div className="w-full max-w-2xl h-full bg-charcoal/20 border border-warm-white/10 flex items-center justify-center text-warm-white/30 font-sans text-sm tracking-widest">
          [ EDITORIAL PNG PLACEHOLDER ]
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-warm-white/70 font-sans text-xs md:text-sm tracking-[0.2em] mb-6 md:mb-8 uppercase">
              Wedding Styling · Wardrobe Curation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h1 className="text-warm-white font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight uppercase mb-8 md:mb-10">
              The wedding <br />
              begins with <br />
              what you wear.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-warm-white/80 font-sans text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-light">
              A wedding wardrobe is more than a collection of outfits. It is the
              visual language of the celebration — shaped by the people, the
              setting, the mood and every little detail that makes the occasion
              yours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              href="#enquire"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-warm-white text-maroon font-sans text-xs tracking-[0.15em] transition-all hover:bg-ivory"
            >
              <span>START YOUR EDIT</span>
            </Link>
            <Link
              href="#journeys"
              className="inline-flex items-center justify-center px-8 py-4 border border-warm-white/30 text-warm-white font-sans text-xs tracking-[0.15em] transition-all hover:bg-warm-white/10"
            >
              <span>EXPLORE THE JOURNEYS</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 md:mt-32"
          >
            <p className="text-warm-white/50 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase">
              From the first look to the last function.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
