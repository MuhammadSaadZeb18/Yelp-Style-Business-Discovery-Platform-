import { create } from "zustand";

// Load recents from sessionStorage if available
const getInitialRecents = () => {
  const stored = sessionStorage.getItem("recents");
  return stored ? JSON.parse(stored) : [];
};

const useRecentStore = create((set) => ({
  recents: getInitialRecents(),
  addRecent: (business) =>
    set((state) => {
      // Prevent duplicates
      const exists = state.recents.find((b) => b.id === business.id);
      const updated = exists
        ? state.recents
        : [business, ...state.recents].slice(0, 4); // max 4 items

      // Save to sessionStorage
      sessionStorage.setItem("recents", JSON.stringify(updated));
      return { recents: updated };
    }),
  clearRecents: () => {
    sessionStorage.removeItem("recents");
    set({ recents: [] });
  },
}));

export default useRecentStore;
