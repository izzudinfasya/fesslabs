import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useLanguage } from "../context/LanguageContext";

export default function RelatedProducts({ currentProductId }) {
  const currentProduct = products.find((p) => p.id === currentProductId);
  const { language } = useLanguage();

  const relatedProducts = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProductId
  );

  const shuffledProducts = [...relatedProducts];
  for (let i = shuffledProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledProducts[i], shuffledProducts[j]] = [
      shuffledProducts[j],
      shuffledProducts[i],
    ];
  }

  if (shuffledProducts.length === 0) return null;

  const texts = {
    ID: { title: "Kamu Mungkin Juga Suka" },
    EN: { title: "You Might Also Like" },
  };

  return (
    <section className="max-w-7xl mx-auto my-6">
      <h2 className="text-2xl font-bold mb-8">{texts[language].title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shuffledProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
