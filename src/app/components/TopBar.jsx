import React from "react";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function TopBar() {
  const { language } = useLanguage();

  const texts = {
    EN: "Explore the Best Peripherals for Your Setup",
    ID: "Jelajahi Peripheral Terbaik buat Setup-mu",
  };

  return (
    <div className="sticky top-0 z-50 bg-primary text-white hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/fesnotyours/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FaInstagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@fesnotyours"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <FaTiktok size={20} />
            <span className="sr-only">TikTok</span>
          </a>

          <a
            href="mailto:izzudinfasya@gmail.com"
            className="hover:text-gray-200 transition-colors"
          >
            <FaEnvelope size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        {/* Center Title */}
        <div className="text-center flex-1">
          <span className="text-xs sm:text-sm font-bold">
            {texts[language]}
          </span>
        </div>

        {/* Right empty space to balance flex */}
        <div className="w-8" />
      </div>
    </div>
  );
}
