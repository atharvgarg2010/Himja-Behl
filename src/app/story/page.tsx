import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-warm-white pt-24 md:pt-32 pb-24 px-6 md:px-12 text-[#1A0407] selection:bg-dust-gold selection:text-maroon">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/#story" 
          className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-sans text-dust-gold hover:text-maroon transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-8 leading-[1.1]">
          The Philosophy
        </h1>

        <div className="relative w-full aspect-[3/4] md:aspect-video mb-12 overflow-hidden border border-dust-gold/20 shadow-xl">
          <Image
            src="/himja-portrait.jpg"
            alt="Himja Behl Editorial Portrait"
            fill
            className="object-cover object-[center_30%]"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        <div className="space-y-8 font-light font-sans text-sm md:text-base leading-[2] md:leading-[2.2] text-[#1A0407]/80">
          <p>
            A wedding is never just one outfit. There is the ceremony, the evening, the smaller gathering before it, the photographs, the people standing beside you and the atmosphere that ties everything together.
          </p>
          <p>
            Himja's approach to styling begins with looking at the celebration as a whole. She works closely with her clients to understand who they are, what they want to feel like, what the occasion demands and how every look can exist within the larger visual story.
          </p>
          <p>
            From the bride and groom to their immediate family, every wardrobe is considered with intention — silhouettes, colours, fabrics, jewellery, accessories and the way everything will come together in the room.
          </p>
          <p>
            The process is personal. Sometimes that means discovering a designer you had never considered. Sometimes it means refining an outfit already in your wardrobe. Sometimes it means spending an afternoon moving from store to store, looking at fabrics under different lights and asking whether something really belongs to the celebration.
          </p>
        </div>
        
        <div className="mt-20 pt-10 border-t border-dust-gold/20">
          <Link
            href="/#enquire"
            className="inline-flex shrink-0 items-center justify-center px-8 py-4 bg-[#641D26] text-warm-white font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#7A232E] shadow-lg hover:shadow-xl"
          >
            Start Your Edit
          </Link>
        </div>
      </div>
    </main>
  );
}
