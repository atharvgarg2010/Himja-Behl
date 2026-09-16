import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { journeys } from "@/lib/data";

// Generate static params so the pages are pre-rendered at build time
export function generateStaticParams() {
  return journeys.map((journey) => ({
    slug: journey.slug,
  }));
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const journeyIndex = journeys.findIndex((j) => j.slug === resolvedParams.slug);
  
  if (journeyIndex === -1) {
    notFound();
  }

  const journey = journeys[journeyIndex];
  
  // Find next journey for the bottom navigation
  const nextJourney = journeys[journeyIndex + 1] || journeys[0]; // Loop back to first if at the end

  return (
    <main className="min-h-screen bg-warm-white text-[#1A0407] selection:bg-dust-gold selection:text-maroon">
      
      {/* Navigation Bar (Transparent overlay for hero) */}
      <div className="absolute top-0 w-full z-50 p-6 md:p-12 flex justify-between items-center mix-blend-difference text-warm-white">
        <Link 
          href="/#story" 
          className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-sans hover:text-dust-gold transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Archive
        </Link>
      </div>

      {/* Full Bleed Hero */}
      <section className="relative w-full h-[80vh] md:h-[90vh]">
        <Image
          src={journey.image}
          alt={journey.client}
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Subtle darkening gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0407]/80 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12 md:pb-20 text-warm-white flex flex-col items-start md:items-center text-left md:text-center">
          <span className="text-dust-gold text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 md:mb-6 font-semibold block">
            {journey.context}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl uppercase tracking-tight leading-[0.9]">
            {journey.client}
          </h1>
        </div>
      </section>

      {/* Content Body */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-40">
        
        {/* Style Direction Tags */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20 md:mb-32">
          {journey.tags.map(tag => (
            <span key={tag} className="text-[#1A0407] border border-[#1A0407]/20 px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-semibold">
              {tag}
            </span>
          ))}
        </div>

        {/* Editorial Introduction */}
        <div className="mb-24 md:mb-40">
          <p className="font-sans font-light text-lg md:text-2xl leading-[1.8] md:leading-[2] text-[#1A0407]/80 text-center">
            {journey.description}
          </p>
        </div>

        {/* The Detail Sections */}
        <div className="space-y-24 md:space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-dust-gold font-semibold mb-4 md:mt-2">
                The Brief
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-sans font-light text-base md:text-lg leading-relaxed text-[#1A0407]/80">
                {journey.brief}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-dust-gold font-semibold mb-4 md:mt-2">
                The Process
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-sans font-light text-base md:text-lg leading-relaxed text-[#1A0407]/80">
                {journey.process}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-dust-gold font-semibold mb-4 md:mt-2">
                The Result
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="font-sans font-light text-base md:text-lg leading-relaxed text-[#1A0407]/80">
                {journey.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial / Quote */}
      <section className="w-full bg-[#1A0407] text-warm-white py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-dust-gold text-[10px] md:text-xs tracking-[0.3em] uppercase mb-12 block font-semibold">
            Client Words
          </span>
          <p className="font-quote italic text-3xl md:text-5xl lg:text-6xl leading-[1.3] md:leading-[1.2] text-warm-white mb-12">
            "{journey.quote}"
          </p>
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-warm-white/60">
            &mdash; {journey.client}
          </span>
        </div>
      </section>

      {/* Next Journey Navigation */}
      <Link href={`/journeys/${nextJourney.slug}`} className="group block">
        <section className="w-full relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={nextJourney.image}
              alt={nextJourney.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-40 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-maroon/80 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <span className="text-dust-gold text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 block font-semibold">
              Next Journey
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-warm-white flex items-center gap-6">
              {nextJourney.client}
              <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-dust-gold group-hover:translate-x-4 transition-transform duration-500" />
            </h2>
          </div>
        </section>
      </Link>
    </main>
  );
}
