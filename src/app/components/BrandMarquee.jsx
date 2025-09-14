import React from "react";
import { useLanguage } from "../context/LanguageContext";

const brands = [
  { id: 1, src: "/gamen.png", alt: "Gamen" },
  { id: 2, src: "/ajazz.png", alt: "Ajazz" },
  { id: 3, src: "/aula.png", alt: "Aula" },
  { id: 4, src: "/vortex.png", alt: "Vortex Series" },
  { id: 5, src: "/zifriend.png", alt: "Zifriend" },
  { id: 6, src: "/pressplay.png", alt: "Press Play" },
  { id: 7, src: "/fantech.png", alt: "Fantech" },
  { id: 8, src: "/rexus.png", alt: "Rexus" },
  { id: 9, src: "/mofii.png", alt: "Mofii" },
  { id: 10, src: "/ipi.png", alt: "Ipi" },
];

export default function BrandMarquee() {
  const { language } = useLanguage();

  const texts = {
    EN: "Brands I Have Tried",
    ID: "Brand yang Sudah Aku Coba",
  };

  const marqueeItems = brands.concat(brands);

  return (
    <div className="overflow-hidden pb-12">
      {/* Title */}
      <div className="text-center mb-4">
        <span className="text-xs font-medium text-muted-foreground uppercase">
          {texts[language]}
        </span>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-8">
          {marqueeItems.map((brand, idx) => (
            <img
              key={idx}
              src={brand.src}
              alt={brand.alt}
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
