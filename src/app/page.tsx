import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white selection:bg-maroon selection:text-warm-white">
      <Navbar />
      <Hero />
      
      {/* Rest of the page is intentionally empty for Phase 1 as per PHASES.md */}
      <section className="h-[40vh] flex items-center justify-center bg-warm-white">
        <p className="text-charcoal/40 font-sans tracking-[0.2em] text-xs uppercase">
          [ End of Phase 1 Preview ]
        </p>
      </section>
    </main>
  );
}
