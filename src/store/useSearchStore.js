import { create } from "zustand";

let debounceTimer;

const useSearchStore = create((set) => ({
  // SEARCH
  search: "",
  debouncedSearch: "",

  // FILTERS
  category: "All",
  minRating: 0,
  sortBy: "name",

  // ACTIONS
  setSearch: (value) => {
    set({ search: value });

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      set({ debouncedSearch: value });
    }, 300);
  },

  setCategory: (value) => set({ category: value }),
  setMinRating: (value) => set({ minRating: Number(value) }),
  setSortBy: (value) => set({ sortBy: value }),

  clearAll: () => {
    clearTimeout(debounceTimer);
    set({
      search: "",
      debouncedSearch: "",
      category: "All",
      minRating: 0,
      sortBy: "name",
    });
  },
}));

export default useSearchStore;
