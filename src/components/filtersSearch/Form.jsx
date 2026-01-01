import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useSearchStore from "../../store/useSearchStore";
import businesses from "../../data/data.json";

const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    search,
    category,
    minRating,
    sortBy,
    setSearch,
    setCategory,
    setMinRating,
    setSortBy,
  } = useSearchStore();

  const categories = [
    "All",
    ...Array.from(new Set(businesses.map((b) => b.category).filter(Boolean))),
  ];

  const ratingOptions = [
    { label: "Any Rating", value: 0 },
    { label: "4+ Stars", value: 4 },
    { label: "4.5+ Stars", value: 4.5 },
    { label: "4.7+ Stars", value: 4.7 },
  ];

  const sortOptions = [
    { label: "Name (A-Z)", value: "name" },
    { label: "Highest Rated", value: "rating" },
    { label: "Price (Low → High)", value: "price-low" },
    { label: "Price (High → Low)", value: "price-high" },
  ];

  // --- URL → store on mount ---
  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setCategory(searchParams.get("category") || "All");
    setMinRating(Number(searchParams.get("minRating") || 0));
    setSortBy(searchParams.get("sortBy") || "name");
  }, []);

  // --- Store → URL whenever store changes ---
  useEffect(() => {
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (category !== "All") params.set("category", category);
    if (minRating > 0) params.set("minRating", minRating);
    if (sortBy !== "name") params.set("sortBy", sortBy);
    setSearchParams(params);
  }, [search, category, minRating, sortBy]);

  const Field = ({ label, children, className = "" }) => (
    <div className={className}>
      <label className="block text-sm font-medium mb-2">{label}</label>
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-2">
        <label className="block text-sm font-medium mb-2">Search</label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search businesses..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none"
        />
      </div>

      <Field label="Category">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Min Rating">
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none"
        >
          {ratingOptions.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Sort By" className="lg:col-span-2">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none"
        >
          {sortOptions.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </Field>
    </div>
  );
};

export default Form;
