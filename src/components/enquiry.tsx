import { EnquiryForm } from "./enquiry-form";

export function Enquiry() {
  return (
    <section 
      id="enquire" 
      className="min-h-screen py-24 md:py-32 text-warm-white selection:bg-dust-gold selection:text-maroon relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 45%, #58171f 0%, #4A151C 40%, #1A0407 100%)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <span className="text-dust-gold text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 block font-semibold">
            Private Consultation
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-none mb-6">
            Begin Your <br className="hidden md:block" />
            <span className="text-dust-gold italic">Edit.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
