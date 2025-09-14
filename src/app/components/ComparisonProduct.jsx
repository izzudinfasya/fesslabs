"use client";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { Mouse, Keyboard, Gamepad2 } from "lucide-react";

export default function ComparisonProduct({ products }) {
  const { language } = useLanguage();

  const categoryIcons = {
    Mouse: Mouse,
    Keyboard: Keyboard,
    Gamepad: Gamepad2,
  };

  const translations = {
    EN: {
      selectCategory: "Select Product Category",
      noCategories: "No Categories Available",
      noCategoriesDesc:
        "There are no product categories available at this time.",
      selectProducts: "Select 2 Products from Category",
      changeCategory: "Change Category",
      selectionProgress:
        "Selected {count} product(s). Choose {remaining} more to continue.",
      compare: "View Comparison",
      noProducts: "No Products Available",
      noProductsDesc: "There are no products available in this category.",
      comparison: "Product Comparison",
      backToProducts: "Back to Product Selection",
      changeProducts: "Change Products",
      productName: "Product Name",
      brand: "Brand",
      price: "Price",
      sensor: "Sensor",
      shape: "Shape",
      fit: "Fit",
      size: "Size",
      type: "Keyboard Type",
      pollingRate: "Polling Rate",
      weight: "Weight",
      connection: "Connection",
      battery: "Battery",
      software: "Software",
      switch: "Switch",
      layout: "Layout",
      keycaps: "Keycaps",
      hotswap: "Hotswap",
      structure: "Structure",
      backlight: "Backlight",
      compatible: "Compatibility",
      buttons: "Buttons",
      grip: "Grip",
      antiDrifting: "Anti Drifting",
      triggerLock: "Trigger Lock",
      hallEffect: "Hall Effect",
      motionSensor: "Motion Sensor",
      selectPrompt: "Select to compare",
    },
    ID: {
      selectCategory: "Pilih Kategori Produk",
      noCategories: "Tidak Ada Kategori",
      noCategoriesDesc: "Tidak ada kategori produk yang tersedia saat ini.",
      selectProducts: "Pilih 2 Produk dari Kategori",
      changeCategory: "Ganti Kategori",
      selectionProgress:
        "Sudah memilih {count} produk. Pilih {remaining} lagi untuk melanjutkan.",
      compare: "Lihat Perbandingan",
      noProducts: "Tidak Ada Produk",
      noProductsDesc: "Tidak ada produk yang tersedia dalam kategori ini.",
      comparison: "Perbandingan Produk",
      backToProducts: "Kembali ke Pilihan Produk",
      changeProducts: "Ganti Produk",
      productName: "Nama Produk",
      brand: "Merek",
      price: "Harga",
      sensor: "Sensor",
      shape: "Bentuk",
      fit: "Cocok untuk",
      size: "Ukuran",
      type: "Tipe Keyboard",
      pollingRate: "Polling Rate",
      weight: "Berat",
      connection: "Koneksi",
      battery: "Baterai",
      software: "Software",
      switch: "Switch",
      layout: "Layout",
      keycaps: "Keycaps",
      hotswap: "Hotswap",
      structure: "Struktur",
      backlight: "Backlight",
      compatible: "Kompatibilitas",
      buttons: "Tombol",
      grip: "Grip",
      antiDrifting: "Anti Drifting",
      triggerLock: "Trigger Lock",
      hallEffect: "Hall Effect",
      motionSensor: "Motion Sensor",
      selectPrompt: "Pilih untuk membandingkan",
    },
  };

  const t = (key, params = {}) => {
    let text = translations[language][key] || translations.ID[key] || key;
    for (const [param, value] of Object.entries(params)) {
      text = text.replace(`{${param}}`, value);
    }
    return text;
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selected, setSelected] = useState([]);
  const [step, setStep] = useState(1); // 1: Category, 2: Product Selection, 3: Comparison

  // Extract unique categories from products
  const categories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );
  const allowedCategories = ["Mouse", "Keyboard", "Gamepad"];
  const filteredCategories = categories.filter((cat) =>
    allowedCategories.includes(cat)
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelected([]); // Reset product selection when category changes
    setStep(2);
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((p) => p !== id)
        : prev.length < 2
        ? [...prev, id]
        : prev
    );
  };

  const handleProceed = () => {
    if (selected.length === 2) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
      setSelectedCategory(null);
      setSelected([]);
    }
  };

  const handleReset = () => {
    setSelected([]);
    setSelectedCategory(null);
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : [];
  const selectedProducts = products.filter((p) => selected.includes(p.id));

  const specsByCategory = {
    Mouse: [
      "sensor",
      "shape",
      "fit",
      "size",
      "pollingRate",
      "weight",
      "connection",
      "battery",
      "software",
    ],
    Keyboard: [
      "connection",
      "type",
      "switch",
      "layout",
      "keycaps",
      "hotswap",
      "structure",
      "battery",
      "backlight",
      "software",
    ],
    Gamepad: [
      "compatible",
      "connection",
      "pollingRate",
      "circularityError",
      "buttons",
      "grip",
      "antiDrifting",
      "triggerLock",
      "hallEffect",
      "motionSensor",
      "software",
    ],
  };

  const SpecRow = ({ label, keyName, renderValue }) => (
    <tr className={selectedProducts.length === 2 ? "border-border" : ""}>
      <td className="p-3 md:p-5 font-semibold text-foreground bg-muted sticky left-0 w-22 md:w-60 border-r border-border">
        {label}
      </td>
      {selectedProducts.map((product) => (
        <td key={product.id} className="p-3 text-center border-l border-border">
          {renderValue ? renderValue(product) : product[keyName] || "-"}
        </td>
      ))}
    </tr>
  );

  // Stepper Component
  const Stepper = () => (
    <div className="mb-8">
      <div className="flex items-center justify-start space-x-4 sm:space-x-8">
        <div className="flex items-center space-x-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
              step >= 1 ? "bg-primary text-white" : "bg-muted text-white/60"
            }`}
          >
            1
          </div>
          <span className="hidden sm:block text-sm font-medium text-foreground">
            {t("selectCategory")}
          </span>
        </div>
        <div className={`w-12 h-1 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
        <div className="flex items-center space-x-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
              step >= 2
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground"
            }`}
          >
            2
          </div>
          <span className="hidden sm:block text-sm font-medium text-foreground">
            {t("selectProducts", { category: "" })}
          </span>
        </div>
        <div className={`w-12 h-1 ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
        <div className="flex items-center space-x-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
              step >= 3
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground"
            }`}
          >
            3
          </div>
          <span className="hidden sm:block text-sm font-medium text-foreground">
            {t("comparison")}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto mb-8 max-w-7xl pt-8">
      <Stepper />
      {/* Step 1: Category Selection */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="block sm:hidden text-lg font-semibold text-foreground">
            {t("selectCategory")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category] || null;
              return (
                <div
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className="group cursor-pointer p-6 bg-muted rounded-xl hover:shadow-lg hover:bg-primary/10 transition text-center border border-transparent hover:border-white hover:border-2"
                >
                  {Icon && (
                    <Icon className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-200" />
                  )}
                  <h3 className="font-semibold text-lg text-foreground capitalize group-hover:text-primary">
                    {category}
                  </h3>
                </div>
              );
            })}
          </div>
          {categories.length === 0 && (
            <div className="text-center py-12 bg-muted rounded-2xl border-2 border-dashed border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-card rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("noCategories")}
              </h3>
              <p className="text-muted-foreground">{t("noCategoriesDesc")}</p>
            </div>
          )}
        </div>
      )}
      {/* Step 2: Product Selection */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between sm:justify-between">
            <h2 className="block sm:hidden text-lg font-semibold text-foreground">
              {t("selectProducts", { category: selectedCategory })}
            </h2>
            <button
              onClick={handleBack}
              className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors flex items-center space-x-1 cursor-pointer ml-auto sm:ml-0"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{t("changeCategory")}</span>
            </button>
          </div>

          {/* Selection Progress */}
          {selected.length > 0 && selected.length < 2 && (
            <div className="text-center py-3 bg-muted border border-border rounded-lg mb-8">
              <p className="text-sm text-muted-foreground font-medium">
                {t("selectionProgress", {
                  count: selected.length,
                  remaining: 2 - selected.length,
                })}
              </p>
            </div>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelect(product.id)}
                className={`block bg-muted rounded-lg flex flex-col transition-transform duration-300 hover:scale-102 hover:shadow-xl overflow-hidden cursor-pointer ${
                  selected.includes(product.id) ? "ring-2 ring-primary" : ""
                }`}
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
                  {selected.includes(product.id) && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      ✓
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 text-foreground break-words line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground capitalize mb-2">
                    {product.category}
                  </p>
                  {/* Jika masih bisa pilih */}
                  {selected.length < 2 && !selected.includes(product.id) && (
                    <p className="text-xs text-primary font-medium mt-auto">
                      {t("selectPrompt")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Proceed Button */}
          {selected.length === 2 && (
            <div className="text-center">
              <button
                onClick={handleProceed}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
              >
                {t("compare")}
              </button>
            </div>
          )}
          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-muted rounded-2xl border-2 border-dashed border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-card rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("noProducts")}
              </h3>
              <p className="text-muted-foreground">{t("noProductsDesc")}</p>
            </div>
          )}
        </div>
      )}
      {/* Step 3: Comparison */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="block sm:hidden text-lg font-semibold text-foreground">
              {t("comparison")}
            </h2>
            <button
              onClick={handleBack}
              className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{t("backToProducts")}</span>
            </button>
          </div>
          <div className="rounded-2xl border border-border overflow-hidden bg-muted">
            {/* Products Header -> hanya gambar */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 bg-white border-b border-border">
              {selectedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="relative flex items-center justify-center p-6 bg-white"
                >
                  <div className="w-[300px] h-[250px] overflow-hidden relative">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* VS di tengah */}
              {selectedProducts.length === 2 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xl font-semibold text-black">VS</span>
                </div>
              )}
            </div>
            {/* Tabel Spesifikasi */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-t border-border">
                <tbody className="divide-y divide-border">
                  {/* Nama Produk */}
                  <SpecRow
                    label={t("productName")}
                    keyName="name"
                    renderValue={(product) => (
                      <span className="font-medium text-foreground">
                        {product.name}
                      </span>
                    )}
                  />
                  {/* Brand Produk */}
                  <SpecRow
                    label={t("brand")}
                    keyName="brand"
                    renderValue={(product) => (
                      <span className="font-medium text-foreground">
                        {product.brand}
                      </span>
                    )}
                  />
                  {/* Harga Produk */}
                  <SpecRow
                    label={t("price")}
                    keyName="price"
                    renderValue={(product) => (
                      <span className="font-medium text-foreground">
                        Rp {product.minPrice.toLocaleString()} - Rp{" "}
                        {product.maxPrice.toLocaleString()}
                      </span>
                    )}
                  />
                  {/* Spesifikasi Berdasarkan Kategori */}
                  {selectedCategory &&
                    specsByCategory[selectedCategory]?.map((spec) => (
                      <SpecRow
                        key={spec}
                        label={t(spec)}
                        keyName={spec}
                        renderValue={(product) => (
                          <span className="font-medium text-foreground">
                            {spec === "software"
                              ? language === "ID"
                                ? product.software && product.software !== ""
                                  ? "Ada"
                                  : "Gaada"
                                : product.software && product.software !== ""
                                ? "Yes"
                                : "No"
                              : Array.isArray(product[spec])
                              ? product[spec].join(", ")
                              : product[spec] || "-"}
                          </span>
                        )}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-end">
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
            >
              {t("changeProducts")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
