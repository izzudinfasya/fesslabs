import { useState, useEffect } from "react";
import ProductCard from "./ProductCard"; // pastikan path sesuai
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProductGrid({ filteredProducts }) {
  const { language } = useLanguage(); // ambil language context
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Scroll ke atas saat ganti halaman
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // Texts multi-language
  const texts = {
    ID: "Produk tidak ditemukan",
    EN: "No products found",
  };

  return (
    <div>
      {/* Produk Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-muted-foreground py-10">
            {texts[language] || texts.ID}
          </div>
        )}
      </section>

      {/* Pagination Controls */}
      {currentProducts.length > 0 && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded-lg bg-muted text-foreground 
               disabled:opacity-40 disabled:cursor-not-allowed 
               hover:bg-muted/80 hover:scale-105 hover:brightness-110 hover:shadow-sm 
               cursor-pointer transition-transform transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer 
        ${
          currentPage === i + 1
            ? "bg-primary text-white shadow-md"
            : "bg-muted text-foreground hover:bg-muted/80"
        } hover:scale-105 hover:brightness-110 hover:shadow`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-2 py-1 rounded-lg bg-muted text-foreground 
               disabled:opacity-40 disabled:cursor-not-allowed 
               hover:bg-muted/80 hover:scale-105 hover:brightness-110 hover:shadow-sm 
               cursor-pointer transition-transform transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
