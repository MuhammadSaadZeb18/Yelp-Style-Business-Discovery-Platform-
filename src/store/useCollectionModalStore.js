import { create } from "zustand";

const useCollectionModalStore = create((set) => ({
  fav: false,
  openModal: () => set({ fav: true }),
  closeModal: () => set({ fav: false }),
}));

export default useCollectionModalStore;
