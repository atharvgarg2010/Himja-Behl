"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Story() {
  return (
    <section id="story" className="w-full bg-warm-white py-24 md:py-32 lg:py-40 text-[#1A0407] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* ROW 1: Headline, Quote, & Overlapping Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 md:mb-32">
           
           {/* Left Side: Typography */}
           <div className="lg:col-span-7 pt-12 lg:pt-24 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
              >
                <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#1A0407]/60 mb-8">
                  The Story
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] tracking-tight uppercase mb-16 md:mb-24">
                  Style isn't about <br />
                  choosing more. <br />
                  <span className="font-quote italic text-dust-gold tracking-normal lowercase">it's about choosing right.</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="pl-6 md:pl-10 border-l border-dust-gold/40"
              >
                <p className="font-quote italic text-2xl md:text-3xl leading-[1.5] text-[#1A0407]/90 mb-6 max-w-2xl">
                  "I don't believe in dressing people for a wedding. I believe in understanding the celebration first — and then finding the clothes that belong in it."
                </p>
                <p className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-dust-gold font-semibold">
                  — Himja Behl
                </p>
              </motion.div>
           </div>

           {/* Right Side: Image Pushed Up into the layout */}
           <motion.div 
             className="lg:col-span-5 h-[60vh] lg:h-[90vh] w-full border border-dust-gold/30 bg-ivory relative overflow-hidden shadow-2xl lg:-mt-12 group"
             initial={{ opacity: 0, clipPath: 'inset(10% 0 0 0)' }}
             whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           >
             <Image
               src="/himja-portrait.jpg"
               alt="Himja Behl Editorial Portrait"
               fill
               className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out"
               sizes="(max-width: 1024px) 100vw, 50vw"
             />
           </motion.div>
        </div>

        {/* ROW 2: The Magazine Copy + Direct CTA */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* 2-Column Magazine Text Format */}
          <div className="columns-1 md:columns-2 gap-12 md:gap-20 space-y-6 md:space-y-8 text-[#1A0407]/70 font-light font-sans text-xs md:text-base leading-[2] md:leading-[2.2] mb-16">
            <p>A wedding is never just one outfit. There is the ceremony, the evening, the smaller gathering before it, the photographs, the people standing beside you and the atmosphere that ties everything together.</p>
            <p>Himja's approach to styling begins with looking at the celebration as a whole. She works closely with her clients to understand who they are, what they want to feel like, what the occasion demands and how every look can exist within the larger visual story.</p>
            <p className="hidden md:block">From the bride and groom to their immediate family, every wardrobe is considered with intention — silhouettes, colours, fabrics, jewellery, accessories and the way everything will come together in the room.</p>
            <p className="hidden md:block">The process is personal. Sometimes that means discovering a designer you had never considered. Sometimes it means refining an outfit already in your wardrobe. Sometimes it means spending an afternoon moving from store to store, looking at fabrics under different lights and asking whether something really belongs to the celebration.</p>
            
            <div className="block md:hidden mt-4">
              <Link 
                href="/story" 
                className="inline-block text-dust-gold font-sans text-xs tracking-[0.2em] uppercase font-semibold border-b border-dust-gold/30 pb-1 hover:border-dust-gold transition-colors"
              >
                Read Full Philosophy &rarr;
              </Link>
            </div>
          </div>
          
          {/* Interruption CTA block */}
          <div className="flex flex-col lg:flex-row items-center justify-between border-t border-b border-dust-gold/20 py-10 md:py-16 gap-8">
            <h3 className="font-quote text-2xl md:text-3xl lg:text-4xl text-[#1A0407] italic max-w-2xl text-center lg:text-left leading-[1.4] md:leading-[1.3]">
              The goal is never to make everyone look the same. It is to make everyone look like they belong together.
            </h3>
            <Link
              href="#enquire"
              className="inline-flex shrink-0 items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-[#641D26] text-warm-white font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#7A232E] hover:text-warm-white shadow-lg hover:shadow-xl"
            >
              Start Your Edit
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
