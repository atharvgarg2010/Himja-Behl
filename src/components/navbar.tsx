"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
            ? "bg-maroon/95 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-warm-white font-display text-2xl md:text-3xl tracking-widest uppercase font-medium"
          >
            Himja Behl
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-warm-white/80 hover:text-warm-white transition-colors text-xs font-sans tracking-[0.15em]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#enquire"
              className="text-warm-white text-xs font-sans tracking-[0.15em] border border-warm-white/30 px-5 py-2.5 hover:bg-warm-white hover:text-maroon transition-all duration-300"
            >
              LET'S TALK
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-warm-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-maroon flex flex-col justify-center items-center">
          <button
            className="absolute top-6 right-6 p-2 text-warm-white"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" strokeWidth={1.5} />
          </button>
          
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-warm-white font-display text-4xl tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
