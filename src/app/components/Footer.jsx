"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext"; // pastikan path sesuai

export default function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted
    ? theme === "dark"
      ? "/logo-dark.png"
      : "/logo-light.png"
    : "";

  // Teks multilingual
  const texts = {
    ID: {
      mainDescription:
        "FessLabs adalah website rekomendasi peripheral buat kamu yang pengen bikin setup sendiri.",
      disclaimer:
        "Semua barang di sini pernah aku pakai sendiri, dan review yang ada di website ini cuma opini pribadiku, bisa jadi berbeda sama pengalaman kamu.",
      quickLinks: "Tautan Cepat",
      followMe: "Ikuti Saya",
      home: "Beranda",
      guides: "Panduan",
      comparison: "Bandingkan Produk",
    },
    EN: {
      mainDescription:
        "FessLabs is a website recommending peripherals for anyone looking to build their own setup.",
      disclaimer:
        "All items here are ones I’ve personally used, and the reviews on this site reflect my own opinions, which might differ from your experience.",
      quickLinks: "Quick Links",
      followMe: "Follow Me",
      home: "Home",
      about: "Guides",
      comparison: "Compare Product",
    },
  };

  const t = texts[language] || texts.EN;

  return (
    <footer className="bg-muted py-6 rounded-t-xl">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mb-8">
          {/* Logo + Deskripsi */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="cursor-pointer">
              {mounted && (
                <Image
                  src={logoSrc}
                  alt="FessLabs Logo"
                  width={200}
                  height={40}
                  className="object-contain mx-auto md:mx-0"
                />
              )}
            </Link>

            {/* Deskripsi utama */}
            <p className="text-sm mt-4 max-w-md text-foreground">
              {t.mainDescription}
            </p>

            {/* Disclaimer */}
            <p className="text-[10px] mt-2 max-w-md text-gray-400 italic">
              *{t.disclaimer}
            </p>
          </div>

          {/* Quick Links + Social → grid hanya muncul di mobile */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-3">{t.quickLinks}</h3>
              <ul className="space-y-2 text-center md:text-left text-sm">
                <li>
                  <Link
                    href="/"
                    className="relative group text-foreground hover:text-primary transition-colors"
                  >
                    {t.home}
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="relative group text-foreground hover:text-primary transition-colors"
                  >
                    {t.guides}
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/comparison"
                    className="relative group text-foreground hover:text-primary transition-colors"
                  >
                    {t.comparison}
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-3">{t.followMe}</h3>
              <div className="flex gap-6 text-xl justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/fesnotyours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@fesnotyours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-border pt-4">
          &copy; {new Date().getFullYear()} FessLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
