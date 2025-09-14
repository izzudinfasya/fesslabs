"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import EmailForm from "./EmailForm";

export default function BusinessInquiries() {
  const { language } = useLanguage();

  const texts = {
    EN: {
      title: "Let’s Collaborate!",
      description:
        "Interested in partnerships, collaborations, or other business opportunities?",
    },
    ID: {
      title: "Kerjasama Yuk!",
      description:
        "Tertarik dengan kerja sama, kolaborasi, atau peluang bisnis lainnya?",
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-0">
      <div className="text-foreground rounded-2xl flex flex-col items-center gap-6 p-8">
        {/* Teks Centered */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {texts[language].title}
          </h2>
          <p className="text-muted-foreground">{texts[language].description}</p>
        </div>

        {/* Form */}
        <EmailForm />
      </div>
    </section>
  );
}
