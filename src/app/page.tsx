/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ComparisonBanner from "./components/ComparisonBanner";
import FloatingButton from "./components/FloatingButton";
import ProductGrid from "./components/ProductGrid";
import products from "./data/products";
import FilterDropdown from "./components/FilterDropdown";
import SortDropdown from "./components/SortDropdown";
import BusinessInquiries from "./components/BusinessInquiries";
import BrandMarquee from "./components/BrandMarquee";
import { useLanguage } from "./context/LanguageContext";

function shuffleArray(array: any[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [filter, setFilter] = useState({
    brand: "",
    category: "",
    priceRange: { min: "", max: "" },
  });

  const [shuffledProducts, setShuffledProducts] = useState(products);

  useEffect(() => {
    setShuffledProducts(shuffleArray(products));
  }, []);

  const { language } = useLanguage();

  // Ambil daftar brand
  const brands = Array.from(new Set(products.map((p) => p.brand)));

  // Ambil daftar kategori
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Filter & sort produk
  const filteredProducts = shuffledProducts
    .filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesBrand = filter.brand === "" || p.brand === filter.brand;
      const matchesCategory =
        filter.category === "" || p.category === filter.category;

      const min = Number(filter.priceRange.min || 0);
      const max = Number(filter.priceRange.max || Infinity);
      const matchesPrice = p.maxPrice >= min && p.minPrice <= max;

      return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sort === "low") return a.minPrice - b.minPrice;
      if (sort === "high") return b.maxPrice - a.maxPrice;
      return 0;
    });

  const texts = {
    ID: {
      search: "Cari produk...",
    },
    EN: {
      search: "Search products...",
    },
  } as const;

  const sortOptions = {
    ID: {
      default: "Urutkan",
      low: "Harga Termurah",
      high: "Harga Termahal",
    },
    EN: {
      default: "Sort",
      low: "Lowest Price",
      high: "Highest Price",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-0 py-6 lg:py-10">
        {/* Search + Filter + Sort */}
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-[60%]">
            <input
              type="text"
              placeholder={texts[language].search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              style={{
                backgroundColor: "var(--color-muted)",
                borderColor: "var(--color-border)",
                color: "var(--color-foreground)",
              }}
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                ×
              </button>
            )}
          </div>

          {/* Filter + Sort */}
          <div className="flex flex-row gap-2 w-full sm:w-[40%]">
            <div className="w-[50%] sm:w-[50%]">
              <FilterDropdown
                brands={brands}
                categories={categories}
                onFilter={setFilter}
              />
            </div>
            <div className="w-[50%] sm:w-[50%]">
              <SortDropdown
                sort={sort}
                setSort={setSort}
                sortOptions={sortOptions}
              />
            </div>
          </div>
        </section>

        {/* Hasil Filter */}
        <p className="text-sm text-foreground mb-5">
          {language === "ID" ? (
            <>
              {!filter.category &&
              !filter.brand &&
              (!filter.priceRange.min || !filter.priceRange.max)
                ? "Menampilkan semua produk"
                : (() => {
                    const parts: string[] = ["Menampilkan produk"];
                    if (filter.category && filter.category !== "Semua")
                      parts.push(filter.category);
                    if (filter.brand && filter.brand !== "Semua")
                      parts.push(`dari ${filter.brand}`);
                    if (filter.priceRange.min && filter.priceRange.max) {
                      parts.push(
                        `di rentang harga IDR ${Number(
                          filter.priceRange.min
                        ).toLocaleString()} - IDR ${Number(
                          filter.priceRange.max
                        ).toLocaleString()}`
                      );
                    }
                    return parts.join(" ");
                  })()}
            </>
          ) : (
            <>
              {!filter.category &&
              !filter.brand &&
              (!filter.priceRange.min || !filter.priceRange.max)
                ? "Showing all products"
                : (() => {
                    const parts: string[] = ["Showing products"];
                    if (filter.category && filter.category !== "All")
                      parts.push(filter.category);
                    if (filter.brand && filter.brand !== "All")
                      parts.push(`from ${filter.brand}`);
                    if (filter.priceRange.min && filter.priceRange.max) {
                      parts.push(
                        `in the price range ${Number(
                          filter.priceRange.min
                        ).toLocaleString()} - ${Number(
                          filter.priceRange.max
                        ).toLocaleString()}`
                      );
                    }
                    return parts.join(" ");
                  })()}
            </>
          )}
        </p>

        {/* Produk Grid */}
        <ProductGrid filteredProducts={filteredProducts} />
      </main>

      <ComparisonBanner />
      <BusinessInquiries />
      <BrandMarquee />
      <FloatingButton />

      <Footer />
    </div>
  );
}
