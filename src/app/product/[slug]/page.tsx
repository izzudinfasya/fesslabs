/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MediaPreview from "../../components/MediaPreview";
import OtherRecommendation from "../../components/OtherRecommendation";
import products, { slugify } from "../../data/products";
import { useLanguage } from "../../context/LanguageContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ChevronLeft } from "lucide-react";
import { Toaster } from "react-hot-toast";

export default function ProductDetail() {
  const pathname = usePathname();
  const { language } = useLanguage();

  const texts = {
    ID: {
      checkout: "Beli Sekarang",
      review: "Review Pribadi",
      specifications: "Spesifikasi",
      notFound: "Produk tidak ditemukan",
      checkSoftware: "Cek Disini",
      noLinkReview: "Video review tidak tersedia",
      reviewVideo: "Lihat Review",
    },
    EN: {
      checkout: "Buy Now",
      review: "Personal Review",
      specifications: "Specifications",
      notFound: "Product not found",
      noLinkReview: "Review Video not available",
      checkSoftware: "Check This",
      reviewVideo: "Watch Review",
    },
  };

  const slug = pathname.split("/").pop() || "";
  const product = products.find((p) => slugify(p.name) === slug);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">{texts[language].notFound}</p>
      </div>
    );
  }

  // Mapping field ke label custom per kategori
  const customLabels: Record<string, Record<string, string>> = {
    Mouse: {
      shape: language === "ID" ? "Bentuk" : "Shape",
      sensor: "Sensor",
      pollingRate: "Polling Rate",
      size: language === "ID" ? "Ukuran" : "Size",
      fit: language === "ID" ? "Cocok untuk" : "Fit to",
      weight: language === "ID" ? "Berat" : "Weight",
      connection: language === "ID" ? "Koneksi" : "Connection",
      battery: "Battery",
      software: "Software",
    },
    Keyboard: {
      layout: "Layout",
      material: "Material",
      connection: language === "ID" ? "Koneksi" : "Connection",
      battery: language === "ID" ? "Baterai" : "Battery",
      keycaps: "Keycaps",
      switch: "Switch",
      hotswap: "Hotswap",
      backlight: "Backlight",
      software: "Software",
    },
    Gamepad: {
      //   material: "Material",
      pollingRate: "Polling Rate",
      compatible: "Compatible",
      battery: language === "ID" ? "Baterai" : "Battery",
      connection: language === "ID" ? "Koneksi" : "Connection",
      features: language === "ID" ? "Fitur" : "Feature",
      software: "Software",
    },
    Lighting: {
      material: "Material",
      color: language === "ID" ? "Warna" : "Color",
      features: language === "ID" ? "Fitur" : "Feature",
      compatibility: "Compatible",
      size: language === "ID" ? "Ukuran" : "Size",
    },
    Accessories: {
      material: "Material",
      color: language === "ID" ? "Warna" : "Color",
      //   weight: language === "ID" ? "Berat" : "Weight",
      features: language === "ID" ? "Fitur" : "Feature",
      loadCapacity: language === "ID" ? "Kemampuan Muatan" : "Load Capability",
      compatibility: "Compatible",
      finishing: "Finishing",
      size: language === "ID" ? "Ukuran" : "Size",
    },
  };

  const specsToShow = customLabels[product.category] || {};

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />

      <div className="w-full px-4 lg:px-8 pt-6 pb-12 lg:pt-10 lg:pb-16">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto mb-8">
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-foreground font-medium relative cursor-pointer transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="relative">
              {language === "ID" ? "Kembali" : "Back"}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 items-start mb-14">
          {/* Media Preview */}
          <MediaPreview product={product} />

          {/* Info */}
          <div className="flex flex-col">
            {/* Name & Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
              {/* Product Name */}
              <h1 className="text-2xl lg:text-3xl font-bold break-words">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <span className="text-foreground">Rating:</span>
                {Array.from({ length: 5 }).map((_, i) => {
                  const rating = Number(product.rating) || 0;
                  if (i < Math.floor(rating)) {
                    return <FaStar key={i} className="text-primary w-5 h-5" />;
                  }
                  if (i < rating) {
                    return (
                      <FaStarHalfAlt key={i} className="text-primary w-5 h-5" />
                    );
                  }
                  return <FaRegStar key={i} className="text-primary w-5 h-5" />;
                })}
              </div>
            </div>

            {/* Price */}
            <p className="text-xl lg:text-2xl font-semibold text-primary-gradient mb-6">
              {product.minPrice === product.maxPrice
                ? `IDR ${product.minPrice.toLocaleString()}`
                : `IDR ${product.minPrice.toLocaleString()} - IDR ${product.maxPrice.toLocaleString()}`}
            </p>

            {/* Specifications Card */}
            <div className="bg-muted rounded-xl p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">
                {texts[language].specifications}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-foreground text-md">
                {Object.entries(specsToShow).map(([field, label]) => {
                  const value = (product as any)[field];
                  if (!value || (Array.isArray(value) && value.length === 0))
                    return null;

                  // Skip features here, akan ditampilkan di card terpisah
                  if (field === "features") return null;

                  return (
                    <div key={field}>
                      <span className="font-semibold">{label}:</span>{" "}
                      {field === "software" ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-white px-2 py-1 ml-2 rounded-lg inline-block hover:brightness-110 transition text-sm font-semibold"
                        >
                          {language === "ID"
                            ? texts.ID.checkSoftware
                            : texts.EN.checkSoftware}
                        </a>
                      ) : Array.isArray(value) ? (
                        value.join(", ")
                      ) : (
                        value
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features Card */}
            {Array.isArray((product as any).features) &&
              (product as any).features.length > 0 && (
                <div className="bg-muted rounded-xl p-6 mb-6">
                  <h2 className="text-lg font-semibold mb-4">
                    {customLabels[product.category]?.features ||
                      (language === "ID" ? "Fitur" : "Features")}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(product as any).features.map(
                      (feat: { ID: string; EN: string }, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          {/* Icon kiri */}
                          <span className="flex-shrink-0 mt-1">
                            <svg
                              className="w-5 h-5 text-primary"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </span>
                          {/* Teks fitur */}
                          <p className="text-foreground">
                            {language === "ID" ? feat.ID : feat.EN}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

            {/* Personal Review */}
            {product.review?.[language] && (
              <div className="bg-muted rounded-xl p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">
                  {texts[language].review}
                </h2>
                <p className="text-foreground">{product.review[language]}</p>
              </div>
            )}
            {/* CTA Button */}
            {product.checkoutLink && (
              <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-2 justify-end">
                {/* Review Video Button */}
                {/* <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (product.link) window.open(product.link, "_blank");
                    else toast.error(texts[language].noLinkReview);
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-current text-foreground rounded-xl hover-foreground transition cursor-pointer"
                >
                  <Video className="w-5 h-5" />
                  {texts[language].reviewVideo}
                </button> */}

                {/* Checkout Button */}
                <a
                  href={product.checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl text-center font-medium hover:opacity-90 transition"
                >
                  {texts[language].checkout}
                </a>
              </div>
            )}
          </div>
        </div>

        <OtherRecommendation currentProductId={product.id} />
      </div>
      <Footer />
    </>
  );
}
