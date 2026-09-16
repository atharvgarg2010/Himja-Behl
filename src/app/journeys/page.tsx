import { Journeys } from "@/components/journeys";
import { Navbar } from "@/components/navbar";

export default function JourneysArchive() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <Journeys />
      </div>
    </main>
  );
}
