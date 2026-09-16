"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section 
      className="relative w-full min-h-[100svh] overflow-hidden flex flex-col items-center justify-center pt-24 pb-12"
      style={{
        background: 'radial-gradient(circle at 50% 45%, #58171f 0%, #4A151C 40%, #1A0407 100%)'
      }}
    >
      {/* Faint Background Illustration */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div 
          className="relative w-full max-w-[800px] aspect-[3/2] opacity-20 mix-blend-screen"
          style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
        >
          <Image
            src="/hero-illustration.jpg"
            alt="Wedding Illustration"
            fill
            className="object-cover invert sepia saturate-200 hue-rotate-[-15deg]"
            priority
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-dust-gold font-sans text-xs md:text-sm tracking-[0.25em] mb-6 md:mb-8 uppercase">
            Wedding Styling · Wardrobe Curation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h1 className="text-warm-white font-display text-[clamp(4rem,8vw,8rem)] leading-[1.05] tracking-tight mb-8 md:mb-12 uppercase">
            Style the <br />
            celebration.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-warm-white/90 font-sans text-sm md:text-base leading-relaxed mb-12 font-light">
            A wedding wardrobe is more than a collection of outfits. It is the
            visual language of the celebration — shaped by the people, the
            setting, the mood and every little detail that makes the occasion
            yours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl"
        >
          <Link
            href="#enquire"
            className="group relative inline-flex items-center justify-center px-12 py-4 bg-dust-gold text-[#1A0407] font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-500 hover:bg-warm-white w-full sm:w-auto"
          >
            <span>Start Your Edit</span>
          </Link>
          <Link
            href="#journeys"
            className="inline-flex items-center justify-center px-10 py-4 border border-dust-gold/40 text-dust-gold font-sans text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-dust-gold/10 w-full sm:w-auto"
          >
            <span>Explore The Journeys</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
