"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-white mb-4">Coming Soon</h1>
      <p className="text-lg text-white/80 max-w-md mb-6">
        This page isn’t available yet. Don’t worry, it will be ready soon. Stay
        tuned! 😉
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition"
      >
        Back to Home
      </Link>

      {/* Social Media */}
      <div className="flex items-center space-x-6 mt-8 text-white">
        <a
          href="https://www.instagram.com/fesnotyours/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <FaInstagram size={28} />
          <span className="sr-only">Instagram</span>
        </a>

        <a
          href="https://www.tiktok.com/@fesnotyours"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <FaTiktok size={28} />
          <span className="sr-only">TikTok</span>
        </a>
      </div>
    </div>
  );
}
