import { create } from "zustand";

const getInitialFavs = () => {
  const stored = sessionStorage.getItem("favs");
  return stored ? JSON.parse(stored) : [];
};

const useFavStore = create((set) => ({
  favs: getInitialFavs(),
  addFavs: (business) =>
    set((state) => {
      // Prevent duplicates
      const exists = state.favs.find((b) => b.id === business.id);
      const updated = exists ? state.favs : [business, ...state.favs];

      // Save to sessionStorage
      sessionStorage.setItem("favs", JSON.stringify(updated));
      return { favs: updated };
    }),
  clearFavs: () => {
    sessionStorage.removeItem("favs");
    set({ favs: [] });
  },
}));

export default useFavStore;
