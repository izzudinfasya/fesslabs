"use client";
import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react"; // Icon Lucide

export default function FloatingButton() {
  const [showScroll, setShowScroll] = useState(false);

  // Tampilkan tombol scroll saat user scroll > 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-8 h-8 rounded-full border flex items-center justify-center shadow-lg 
    transform transition-all duration-300 cursor-pointer
    ${
      showScroll
        ? "opacity-100 scale-100"
        : "opacity-0 scale-75 pointer-events-none"
    } hidden sm:flex`}
        title="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 text-foreground" />
      </button>

      {/* Chat TikTok Button */}
      <div className="relative group">
        <a
          href="https://www.tiktok.com/@fesnotyours"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center overflow-hidden w-14 h-14 rounded-full bg-primary shadow-lg transition-all duration-300 cursor-pointer group-hover:w-50"
        >
          {/* Icon */}
          <MessageCircle className="w-6 h-6 text-white flex-shrink-0 mx-4" />

          {/* Label */}
          <span className="text-white font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Chat via TikTok
          </span>
        </a>
      </div>
    </div>
  );
}
