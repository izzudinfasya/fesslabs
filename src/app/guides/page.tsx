"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GuideCard from "../components/GuideCard";
import guides from "../data/guides";
import { useLanguage } from "../context/LanguageContext";

export default function GuidePage() {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-8rem-4rem)] max-w-7xl mx-auto px-6 xl:px-0 py-10">
        <h1 className="text-2xl font-bold mb-8">
          {language === "ID" ? "Panduan & Tips" : "Guides & Tips"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <GuideCard key={idx} guide={guide} language={language} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
