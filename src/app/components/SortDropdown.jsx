"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function SortDropdown({ sort, setSort, sortOptions }) {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const dropdownRef = useRef(null);

  const options = [
    { value: "default", label: sortOptions[language].default },
    { value: "low", label: sortOptions[language].low },
    { value: "high", label: sortOptions[language].high },
  ];

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
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-primary text-white px-4 py-2 rounded-lg flex justify-between items-center hover:opacity-90 transition cursor-pointer"
      >
        {options.find((o) => o.value === sort)?.label}
        <span className="ml-2">
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-muted border border-border rounded-lg shadow-md text-white">
          {options.map((o) => (
            <li
              key={o.value}
              onClick={() => {
                setSort(o.value);
                setOpen(false);
              }}
              className="px-4 py-2 text-foreground cursor-pointer transition"
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
