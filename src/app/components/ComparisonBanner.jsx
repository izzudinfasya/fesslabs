"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function ComparisonBanner() {
  const { language } = useLanguage();

  const texts = {
    EN: {
      title: "Compare Your Favorite Products",
      description:
        "Quickly compare product specifications side by side on a single page to see which one fits you best.",
      button: "Try Feature",
    },
    ID: {
      title: "Bandingkan Produk Favoritmu",
      description:
        "Bandingkan spesifikasi produk secara berdampingan dalam satu halaman untuk menemukan yang paling cocok buat kalian.",
      button: "Coba Fitur",
    },
  };

  const t = (key) => texts[language]?.[key] || texts.ID[key];

  return (
    <div className="max-w-7xl mx-auto my-8 px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-6 bg-muted rounded-lg p-6 bg-muted">
        {/* Kiri: Text */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            {t("description")}
          </p>
          <Link
            href="/comparison"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors hover:opacity-90"
          >
            {t("button")}
          </Link>
        </div>

        {/* Kanan: Image */}
        <div className="flex-1 order-1 lg:order-2">
          <Image
            src="/comparison.png"
            alt="Product Comparison"
            width={500}
            height={400}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
