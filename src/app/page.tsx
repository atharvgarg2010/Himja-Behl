import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { Marquee } from "@/components/marquee";
import { Journeys } from "@/components/journeys";
import { Process } from "@/components/process";
import { Enquiry } from "@/components/enquiry";
import { Footer } from "@/components/footer";

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
      <Footer />
    </main>
  );
}
