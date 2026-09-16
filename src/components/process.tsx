"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "Discover",
    description: "We begin by unpacking your vision, your story, and the precise aesthetic you wish to project across your celebrations. This is about understanding who you are before deciding what you will wear.",
  },
  {
    number: "02",
    title: "Curate",
    description: "Filtering out the noise. We source specific silhouettes, fabrics, and designers from across the country, building a cohesive, intentional wardrobe that aligns perfectly with your brief and environment.",
  },
  {
    number: "03",
    title: "Refine",
    description: "The difference between good and immaculate is in the tailoring. We focus heavily on fit and detail, working with specialized ateliers to ensure every single garment drapes flawlessly on your frame.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "The final wardrobe is presented, meticulously organized, styled, and ready for your celebration. No last-minute adjustments, no uncertainty—just absolute confidence.",
  }
];

export function Process() {
  return (
    <section id="process" className="bg-warm-white pt-12 md:pt-24 pb-24 md:pb-48 text-[#1A0407] selection:bg-dust-gold selection:text-maroon">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row relative">
        
        {/* Sticky Left Column */}
        <div className="w-full md:w-1/3 mb-16 md:mb-0">
          <div className="sticky top-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-dust-gold text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 block font-semibold"
            >
              The Methodology
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.9]"
            >
              How We Work
            </motion.h2>
          </div>
        </div>

        {/* Scrolling Right Column (The Stages) */}
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="border-t border-[#1A0407]/20 w-full" />
          
          {stages.map((stage, index) => (
            <motion.div 
              key={stage.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col md:flex-row gap-6 md:gap-12 py-16 md:py-24 border-b border-[#1A0407]/20"
            >
              {/* Massive Stage Number */}
              <div className="w-full md:w-1/4 flex-shrink-0">
                <span className="font-display text-6xl md:text-7xl lg:text-8xl text-dust-gold/40 group-hover:text-dust-gold transition-colors duration-500 leading-none block">
                  {stage.number}
                </span>
              </div>
              
              {/* Stage Content */}
              <div className="w-full md:w-3/4 flex flex-col justify-center">
                <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-6">
                  {stage.title}
                </h3>
                <p className="font-sans font-light text-base md:text-lg leading-[1.8] text-[#1A0407]/70 max-w-xl">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
