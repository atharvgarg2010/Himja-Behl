import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A0407] text-warm-white border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      {/* Massive Background Typography */}
      <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center pointer-events-none select-none opacity-5">
        <span className="font-display text-[12vw] leading-none tracking-tight uppercase whitespace-nowrap translate-y-8">
          HIMJA BEHL
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-3xl md:text-4xl tracking-widest uppercase mb-6">Himja Behl</h3>
              <p className="font-sans font-light text-sm md:text-base leading-relaxed text-warm-white/70 max-w-sm">
                Curated, intentional wedding wardrobes. Not just clothes for an occasion, but a visual language for your celebration.
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-dust-gold font-semibold mb-8">Navigation</h4>
            <ul className="space-y-4 font-sans text-xs tracking-widest uppercase text-warm-white/80">
              <li><Link href="/" className="hover:text-dust-gold transition-colors">Home</Link></li>
              <li><Link href="#story" className="hover:text-dust-gold transition-colors">Story</Link></li>
              <li><Link href="#journeys" className="hover:text-dust-gold transition-colors">Journeys</Link></li>
              <li><Link href="#process" className="hover:text-dust-gold transition-colors">Process</Link></li>
            </ul>
          </div>
          
          {/* Contact & Socials */}
          <div className="md:col-span-4">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-dust-gold font-semibold mb-8">Connect</h4>
            <ul className="space-y-4 font-sans text-xs tracking-widest uppercase text-warm-white/80">
              <li>
                <Link href="#enquire" className="hover:text-dust-gold transition-colors">
                  Begin Your Edit
                </Link>
              </li>
              <li>
                <a href="mailto:gargatharv2010@gmail.com" className="inline-flex items-center gap-2 hover:text-dust-gold transition-colors">
                  Email Studio <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-dust-gold transition-colors">
                  Instagram <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-sans tracking-widest text-warm-white/40 uppercase">
          <p>&copy; {new Date().getFullYear()} Himja Behl. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-warm-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-warm-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
