"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journeys } from "@/lib/data";

export function Journeys() {
  return (
    <section className="bg-warm-white py-24 md:py-40 text-[#1A0407] selection:bg-dust-gold selection:text-maroon overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-40 flex flex-col items-center text-center"
        >
          <span className="text-dust-gold text-xs tracking-[0.3em] uppercase mb-4 block font-semibold">
            Social Proof
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9]">
            The Journeys
          </h2>
          <p className="mt-8 max-w-xl text-sm md:text-base font-light text-[#1A0407]/70 leading-relaxed font-sans">
            Every client is a different story. Every wardrobe is a different language. 
            Here is a look at some of the celebrations we have styled recently.
          </p>
        </motion.div>

        {/* Structured Alternating Grid */}
        <div className="flex flex-col gap-24 md:gap-48">
          {journeys.map((journey, index) => {
            const isEven = index % 2 !== 0;
            return (
              <motion.div 
                key={journey.id}
                className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-0 md:gap-24 group relative`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <Link href={`/journeys/${journey.slug}`} className={`relative w-full overflow-hidden block ${journey.aspectRatio} shadow-lg md:shadow-none`}>
                    <motion.div 
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={journey.image}
                        alt={journey.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                    
                    {/* Overlay Label (Desktop only or adjusted for mobile) */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 text-warm-white/90 font-sans text-[10px] md:text-xs tracking-[0.2em] mix-blend-difference">
                      {journey.id}
                    </div>
                  </Link>
                </div>

                {/* Text Side (Overlapping Editorial Card on Mobile) */}
                <div className="w-[90%] md:w-1/2 flex flex-col justify-center bg-warm-white md:bg-transparent relative z-10 p-8 md:p-0 -mt-20 md:mt-0 md:ml-0 shadow-2xl md:shadow-none border border-dust-gold/15 md:border-none self-end md:self-auto mr-4 md:mr-0">
                  <span className="text-dust-gold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 font-semibold block">
                    {journey.client} &mdash; {journey.context}
                  </span>
                  
                  <Link href={`/journeys/${journey.slug}`} className="group-hover:text-dust-gold transition-colors duration-500 w-fit block">
                    <h3 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-none">
                      {journey.title}
                    </h3>
                  </Link>
                  
                  <div className="pl-4 md:pl-6 border-l border-dust-gold/40 mb-8 md:mb-10">
                    <p className="font-quote italic text-lg md:text-2xl text-[#1A0407]/90 leading-relaxed">
                      "{journey.quote}"
                    </p>
                  </div>
                  
                  <Link 
                    href={`/journeys/${journey.slug}`} 
                    className="inline-flex items-center text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans text-maroon hover:text-dust-gold transition-colors w-fit border-b border-maroon/20 hover:border-dust-gold pb-1 font-semibold group/btn"
                  >
                    Read Full Story 
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="mt-40 flex justify-center">
           <Link 
            href="/journeys" 
            className="inline-flex shrink-0 items-center justify-center px-10 py-5 bg-[#1A0407] text-warm-white font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-500 hover:bg-dust-gold shadow-lg hover:shadow-xl"
          >
            View Full Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
