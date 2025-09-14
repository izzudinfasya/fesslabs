"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Home, BookOpen, Columns } from "lucide-react";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import TopBar from "../components/TopBar";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const menuItems = [
    { label: language === "ID" ? "Beranda" : "Home", href: "/", icon: Home },
    {
      label: language === "ID" ? "Panduan" : "Guides",
      href: "/guides",
      icon: BookOpen,
    },
    {
      label: language === "ID" ? "Bandingkan Produk" : "Compare Product",
      href: "/comparison",
      icon: Columns,
    },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/fesnotyours",
      icon: FaInstagram,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@fesnotyours",
      icon: FaTiktok,
    },
    {
      name: "Email",
      href: "mailto:izzudinfasya@gmail.com",
      icon: FaEnvelope,
    },
  ];

  // Theme and mobile detection
  useEffect(() => {
    setMounted(true);

    // Theme otomatis
    const userTheme = localStorage.getItem("theme-manual");
    if (!userTheme) {
      const now = new Date();
      const wibHour = (now.getUTCHours() + 7) % 24;

      if (wibHour >= 6 && wibHour < 18) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    } else {
      setTheme(userTheme);
    }

    // Mobile detection
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Hapus theme manual saat user menutup tab/browser
    const handleBeforeUnload = () => {
      if (localStorage.getItem("theme-manual")) {
        localStorage.removeItem("theme-manual");
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [setTheme]);

  // Handle click outside for closing sidebar (attach cuma pas open)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme-manual", newTheme);
  };

  const toggleLanguage = () => {
    setLanguage(language === "ID" ? "EN" : "ID");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavClick = (href) => {
    console.log(`Navigating to: ${href}`); // Debugging
    setDropdownOpen(false); // Auto close sidebar setelah klik
  };

  const logoSrc = theme === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <>
      <TopBar />
      <nav className="sticky top-0 sm:top-10 z-50 px-6 py-4 bg-muted text-foreground transition-colors duration-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo untuk Desktop, Hamburger untuk Mobile */}
          {isMobile ? (
            <div className="sm:hidden relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="rounded-full hover:bg-muted transition-colors duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {dropdownOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          ) : (
            <Link href="/" className="cursor-pointer">
              <Image
                src={logoSrc}
                alt="FessLabs Logo"
                width={200}
                height={40}
                className="object-contain"
              />
            </Link>
          )}

          {/* Menu kanan */}
          <div className="flex items-center gap-4">
            {/* Menu Items untuk Desktop */}
            <div className="hidden sm:flex items-center gap-6">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className={`relative group transition-colors duration-200 font-medium ${
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-primary transform transition-transform duration-200 origin-left ${
                      pathname === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition cursor-pointer"
            >
              <ReactCountryFlag
                countryCode={language === "ID" ? "ID" : "US"}
                svg
                style={{ width: "1.25em", height: "1.25em" }}
                title={language === "ID" ? "Indonesia" : "United States"}
              />
              <span className="ml-1">{language}</span>
            </button>
          </div>
        </div>

        {/* Overlay - Kondisional, cuma muncul pas open */}
        {dropdownOpen && isMobile && (
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
              dropdownOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleDropdown}
            style={{ pointerEvents: dropdownOpen ? "auto" : "none" }}
          ></div>
        )}

        {/* Sidebar Menu untuk Mobile - Selalu render buat animasi smooth */}
        {isMobile && (
          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 h-full w-[80%] bg-muted shadow-lg z-50 p-6 rounded-r-xl transform transition-all duration-300 ease-in-out flex flex-col
              ${
                dropdownOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            style={{ pointerEvents: dropdownOpen ? "auto" : "none" }}
          >
            {/* Header */}
            <div className="flex justify-between mb-8">
              <Link href="/" onClick={() => handleNavClick("/")}>
                <Image
                  src={
                    theme === "dark"
                      ? "/logo-mobile-dark.png"
                      : "/logo-mobile-light.png"
                  }
                  alt="FessLabs Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={toggleDropdown}
                className="rounded-full hover:bg-muted transition-colors duration-200 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu items */}
            <div className="flex flex-col gap-2 mb-6">
              {menuItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`flex flex-row items-center gap-3 font-medium text-sm py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-muted/70 hover:text-primary"
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <div
                      className={`p-2 ${
                        isActive
                          ? "border-primary bg-primary/20"
                          : "border-foreground/20"
                      }`}
                    >
                      <item.icon size={20} />
                    </div>
                    <span className="text-base">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Social Media Icons di bawah */}
            <div className="mt-auto flex justify-center gap-2">
              {socialMedia.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                  onClick={() => handleNavClick(social.href)}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
