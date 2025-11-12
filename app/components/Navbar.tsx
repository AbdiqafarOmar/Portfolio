"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/40 border-b border-blue-500/30 shadow-lg shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-white tracking-wide hover:text-blue-400 transition-all"
        >
          AO<span className="text-blue-400">.</span>
        </a>

        {/* Nav links */}
        <div className="flex space-x-6 text-sm md:text-base">
          <a href="#hero" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
