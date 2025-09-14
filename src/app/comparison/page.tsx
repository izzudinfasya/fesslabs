"use client";

import ComparisonProduct from "../components/ComparisonProduct";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

interface Texts {
  EN: {
    title: string;
  };
  ID: {
    title: string;
  };
}

export default function ComparisonPage() {
  const { language } = useLanguage();

  const texts: Texts = {
    EN: {
      title: "Compare Products",
    },
    ID: {
      title: "Bandingkan Produk",
    },
  };

  const t = (key: keyof Texts["EN"]) => texts[language]?.[key] || texts.ID[key];

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-8rem-4rem)] max-w-7xl mx-auto px-6 xl:px-0 py-10">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <ComparisonProduct products={products} />
      </div>

      <Footer />
    </>
  );
}
