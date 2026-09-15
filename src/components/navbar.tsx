"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "STORY", href: "#story" },
    { name: "JOURNEYS", href: "#journeys" },
    { name: "PROCESS", href: "#process" },
    { name: "ENQUIRE", href: "#enquire" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-warm-white/95 backdrop-blur-md py-4 shadow-sm border-b border-dust-gold/20"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "font-display text-2xl md:text-3xl tracking-widest uppercase font-medium transition-colors duration-500",
              isScrolled ? "text-[#1A0407]" : "text-warm-white"
            )}
          >
            Himja Behl
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors text-xs font-sans tracking-[0.15em] duration-500",
                  isScrolled ? "text-[#1A0407]/70 hover:text-dust-gold" : "text-warm-white/80 hover:text-warm-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#enquire"
              className={cn(
                "text-xs font-sans tracking-[0.15em] border px-5 py-2.5 transition-all duration-500",
                isScrolled 
                  ? "text-[#1A0407] border-[#1A0407]/30 hover:bg-[#1A0407] hover:text-warm-white" 
                  : "text-dust-gold border-dust-gold/30 hover:bg-dust-gold hover:text-maroon-dark"
              )}
            >
              LET'S TALK
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors duration-500",
              isScrolled ? "text-[#1A0407]" : "text-warm-white"
            )}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col justify-center items-center bg-[#4A151C]"
          >
            <button
              className="absolute top-6 right-6 p-2 text-warm-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-warm-white font-display text-4xl tracking-widest uppercase hover:text-dust-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="#enquire"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 inline-block text-dust-gold text-xs font-sans tracking-[0.2em] border border-dust-gold/40 px-8 py-4 hover:bg-dust-gold hover:text-[#1A0407] transition-all duration-300 uppercase"
                >
                  LET'S TALK
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
