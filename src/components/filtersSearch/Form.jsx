import useSearchStore from "../../store/useSearchStore";
import businesses from "../../data/data.json";
const Form = () => {
  const search = useSearchStore((s) => s.search);
  const setSearch = useSearchStore((s) => s.setSearch);

  const category = useSearchStore((s) => s.category);
  const setCategory = useSearchStore((s) => s.setCategory);

  const minRating = useSearchStore((s) => s.minRating);
  const setMinRating = useSearchStore((s) => s.setMinRating);

  const sortBy = useSearchStore((s) => s.sortBy);
  const setSortBy = useSearchStore((s) => s.setSortBy);
const categoriesS = ["All", ...Array.from(new Set(businesses.map((item) => item.category).filter(Boolean)))];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* SEARCH */}
      <div className="lg:col-span-2">
        <label className="block text-sm font-medium mb-2">Search</label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search businesses..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none  "
        />
      </div>

      {/* CATEGORY */}
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none"
        >
          {categoriesS.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* MIN RATING */}
      <div>
        <label className="block text-sm font-medium mb-2">Min Rating</label>
        <select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none"
        >
          <option value="0">Any Rating</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.7">4.7+ Stars</option>
        </select>
      </div>

      {/* SORT */}
      <div className="lg:col-span-2">
        <label className="block text-sm font-medium mb-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-2.5  border border-gray-300 rounded-lg outline-none"
        >
          <option value="name">Name (A-Z)</option>
          <option value="rating">Highest Rated</option>
          <option value="price-low">Price (Low → High)</option>
          <option value="price-high">Price (High → Low)</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
