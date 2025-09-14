"use client";

import { Video } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { language } = useLanguage();
  const router = useRouter();

  const texts = {
    ID: {
      review: "Review",
      checkout: "Beli Sekarang",
      noLinkReview: "Link review tidak tersedia",
      noLinkCheckout: "Link beli tidak tersedia",
    },
    EN: {
      review: "Review",
      checkout: "Buy Now",
      noLinkReview: "Review link not available",
      noLinkCheckout: "Checkout link not available",
    },
  };

  function slugify(name) {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  }

  const productSlug = slugify(product.name);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            boxShadow: "none",
            border: "1px solid #e0e0e0",
          },
        }}
      />

      <div
        className="block bg-muted rounded-lg flex flex-col transition-transform duration-300 hover:scale-102 hover:shadow-xl overflow-hidden cursor-pointer"
        onClick={() => router.push(`/product/${productSlug}`)}
      >
        {/* Image */}
        <div className="w-full h-35 sm:h-60 relative">
          <img
            src={
              product.images && product.images.length > 0
                ? product.images[0]
                : "/placeholder-img.png"
            }
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Nama produk */}
          <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground break-words line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => {
              const rating = Number(product.rating) || 0;
              if (i < Math.floor(rating)) {
                return <FaStar key={i} className="text-primary w-4 h-4" />;
              }
              if (i < rating) {
                return (
                  <FaStarHalfAlt key={i} className="text-primary w-4 h-4" />
                );
              }
              return <FaRegStar key={i} className="text-primary w-4 h-4" />;
            })}
          </div>

          {/* Harga */}
          <p className="text-sm sm:text-base text-muted-foreground">
            {product.minPrice === product.maxPrice
              ? `IDR ${product.minPrice.toLocaleString("id-ID")}`
              : `IDR ${product.minPrice.toLocaleString(
                  "id-ID"
                )} - IDR ${product.maxPrice.toLocaleString("id-ID")}`}
          </p>
        </div>

        {/* Buttons */}
        <div className="p-4 hidden sm:flex gap-3 w-full">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (product.link) window.open(product.link, "_blank");
              else toast.error(texts[language].noLinkReview);
            }}
            className="flex-1 flex items-center justify-center gap-2 border border-current text-foreground hover-foreground py-2 rounded-xl transition cursor-pointer"
          >
            <Video className="w-5 h-5" />
            {texts[language].review}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (product.checkoutLink)
                window.open(product.checkoutLink, "_blank");
              else toast.error(texts[language].noLinkCheckout);
            }}
            className="bg-primary text-white flex-1 flex items-center justify-center gap-2 py-2 rounded-xl hover:bg-primary/90 transition-colors hover:opacity-90 cursor-pointer"
          >
            {texts[language].checkout}
          </button>
        </div>
      </div>
    </>
  );
}
