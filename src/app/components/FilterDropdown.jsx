import { useState, useRef, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import { Sliders } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FilterDropdown({ brands, categories, onFilter }) {
  const [open, setOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // tambah category
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const { language } = useLanguage();
  const dropdownRef = useRef(null);

  const texts = {
    ID: {
      harga: "Harga",
      apply: "Terapkan",
      semua: "Semua",
      kategori: "Kategori",
    },
    EN: { harga: "Price", apply: "Apply", semua: "All", kategori: "Category" },
  };

  const STEP = 50000;
  const MIN = 0;
  const MAX = 1000000;

  const applyFilter = () => {
    onFilter({
      brand: selectedBrand,
      category: selectedCategory,
      priceRange: { min: priceRange[0], max: priceRange[1] },
    });
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Button utama */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition w-full w-1/3 cursor-pointer"
      >
        <Sliders size={16} /> Filter
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-full sm:w-72 right-0 bg-muted border border-border rounded-lg shadow-lg z-10 p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-muted-foreground">Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
            >
              <option value="">{texts[language].semua}</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Filter by Category */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-muted-foreground">
              {texts[language].kategori}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
            >
              <option value="">{texts[language].semua}</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Filter by Price Range */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-muted-foreground">
              {texts[language].harga}: IDR {priceRange[0].toLocaleString()} - Rp{" "}
              {priceRange[1].toLocaleString()}
            </label>

            <Range
              values={priceRange}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={setPriceRange}
              renderTrack={({ props, children }) => {
                const { key, ...restProps } = props; // destructure key out
                return (
                  <div
                    key={key} // pass key directly
                    {...restProps} // spread the rest
                    className="h-2 w-full rounded-lg"
                    style={{
                      ...restProps.style,
                      background: getTrackBackground({
                        values: priceRange,
                        colors: ["#ccc", "var(--color-primary)", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                    }}
                  >
                    {children}
                  </div>
                );
              }}
              renderThumb={({ props }) => {
                const { key, ...restProps } = props;
                return (
                  <div
                    key={key}
                    {...restProps}
                    className="h-4 w-4 bg-primary rounded-full shadow-md"
                  />
                );
              }}
            />
          </div>

          <button
            onClick={applyFilter}
            className="mt-2 bg-primary text-white rounded-lg py-2 hover:opacity-90 transition"
          >
            {texts[language].apply}
          </button>
        </div>
      )}
    </div>
  );
}
