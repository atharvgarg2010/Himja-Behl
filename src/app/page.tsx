import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { Marquee } from "@/components/marquee";
import { Journeys } from "@/components/journeys";
import { Process } from "@/components/process";
import { Enquiry } from "@/components/enquiry";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white selection:bg-maroon selection:text-warm-white">
      <Navbar />
      <Hero />
      <Story />
      <Marquee />
      <Journeys />
      <Process />
      <Enquiry />
      
      {/* Rest of the page is intentionally empty for Phase 2 as per PHASES.md */}
      <section className="h-[20vh] flex items-center justify-center bg-warm-white">
        <p className="text-[#1A0407]/40 font-sans tracking-[0.2em] text-xs uppercase">
          [ End of Phase 2 Preview ]
        </p>
      </section>
    </main>
  );
}
