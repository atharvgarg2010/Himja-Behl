"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

interface HimjaEditProps {
  data: any;
}

const ARCHETYPES: Record<string, any> = {
  "Traditional": {
    name: "THE HERITAGE ROMANTIC",
    tags: ["CLASSIC", "OPULENT", "TIMELESS"],
    description: "Deeply rooted in tradition yet refined for the modern celebration. This edit embraces heavy embroideries, rich textiles, and heirloom jewelry, creating a look that feels deeply historic and undeniably regal.",
    colors: ["#641D26", "#CFA052", "#4A151C"],
    direction: "Focus on heavy silks, intricate zardozi, and classic silhouettes like the traditional lehenga or achkan. We will source from heritage weavers and pair with uncut diamonds.",
  },
  "Contemporary": {
    name: "THE MODERNIST",
    tags: ["CLEAN", "SCULPTURAL", "BOLD"],
    description: "A masterclass in restraint and structure. This edit strips away the excessive, focusing instead on architectural silhouettes, crisp tailoring, and a strong, confident presence.",
    colors: ["#F6F3EE", "#1A0407", "#CFA052"],
    direction: "Prioritize sharp tailoring, fluid crepe silks, and monochromatic styling. We will explore structured gowns, tailored bandhgalas, and minimalist geometric jewelry.",
  },
  "Fusion": {
    name: "THE GLOBAL NOMAD",
    tags: ["ECLECTIC", "FLUID", "EXPRESSIVE"],
    description: "Where worlds collide. This edit seamlessly blends traditional craftsmanship with global silhouettes, perfect for the celebration that refuses to be boxed into one culture.",
    colors: ["#2B4C59", "#CFA052", "#D9C5B2"],
    direction: "We will look at draped concept sarees, embroidered jackets over fluid trousers, and a mix of vintage and contemporary jewelry to create a layered, traveled aesthetic.",
  },
  "Minimal": {
    name: "THE QUIET LUXURY",
    tags: ["UNDERSTATED", "REFINED", "EFFORTLESS"],
    description: "Luxury that speaks in whispers. This edit is for those who value fabric purity and impeccable drape over heavy embellishment. Every detail is intentional, nothing is overdone.",
    colors: ["#F6F3EE", "#E5DCC5", "#CFA052"],
    direction: "We will source the finest organzas, soft silks, and lightweight linens. Styling will be completely tonal with delicate, barely-there jewelry and dewy, natural grooming.",
  },
  "Regal": {
    name: "THE IMPERIAL",
    tags: ["MAJESTIC", "GRAND", "UNAPOLOGETIC"],
    description: "A wardrobe designed to command the room. This edit is unapologetically grand, utilizing velvets, heavy brocades, and maximalist styling to create a presence that is truly imperial.",
    colors: ["#4A151C", "#CFA052", "#0F2520"],
    direction: "Expect velvet lehengas, heavy Banarasi silks, and layered Kundan jewelry. The grooming will be sharp, and the styling will embrace a 'more is more' philosophy done with absolute taste.",
  },
  "Experimental": {
    name: "THE AVANT-GARDE",
    tags: ["FEARLESS", "ARTISTIC", "UNCONVENTIONAL"],
    description: "For the celebration that breaks the rules. This edit pushes boundaries with unexpected colors, unconventional silhouettes, and a fearless approach to wedding fashion.",
    colors: ["#8B3A43", "#1A0407", "#E0D5C1"],
    direction: "We will explore emerging designers, dramatic asymmetric cuts, and non-traditional color palettes. This is high fashion applied to the wedding context.",
  }
};

export function HimjaEdit({ data }: HimjaEditProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const styleDirection = data?.styleDirection || "Contemporary";

  // Fallback to Contemporary if for some reason it's missing
  const edit = ARCHETYPES[styleDirection] || ARCHETYPES["Contemporary"];

  const submitLead = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (e) {
      console.error(e);
    }
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-24 flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-full bg-dust-gold/20 flex items-center justify-center mb-8">
          <CheckCircle2 className="w-8 h-8 text-dust-gold" />
        </div>
        <h3 className="font-display text-4xl mb-6 text-warm-white">Consultation Confirmed</h3>
        <p className="font-sans text-warm-white/70 max-w-md mx-auto leading-relaxed">
          Thank you for sharing your vision. Your Edit has been saved, and Himja will personally review it before reaching out to you.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full text-warm-white py-8 md:py-12"
    >
      <div className="text-center mb-10 md:mb-16">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-dust-gold mb-4 block font-semibold">
          Your Style Direction
        </span>
        <h3 className="font-display text-5xl md:text-7xl uppercase tracking-tight mb-6">
          {edit.name}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {edit.tags.map((tag: string, i: number) => (
            <span key={i} className="font-sans text-xs tracking-widest text-warm-white/70 uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left Col: Description & Colors */}
        <div className="space-y-10">
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-dust-gold mb-4 font-semibold">
              The Aesthetic
            </h4>
            <p className="font-sans font-light text-lg md:text-xl leading-[1.6] text-warm-white/90">
              {edit.description}
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-dust-gold mb-4 font-semibold">
              Palette
            </h4>
            <div className="flex items-center gap-4">
              {edit.colors.map((color: string, i: number) => (
                <motion.div 
                  key={color}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.6 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 shadow-lg"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Direction & CTA */}
        <div className="space-y-10">
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-dust-gold mb-4 font-semibold">
              Styling Direction
            </h4>
            <p className="font-sans font-light text-base md:text-lg leading-[1.6] text-warm-white/70">
              {edit.direction}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h4 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-6">
              Let's Bring It To Life
            </h4>
            <button
              onClick={submitLead}
              disabled={isSubmitting}
              className="inline-flex items-center gap-4 bg-dust-gold text-[#1A0407] px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending Edit..." : "Confirm Consultation"}
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
