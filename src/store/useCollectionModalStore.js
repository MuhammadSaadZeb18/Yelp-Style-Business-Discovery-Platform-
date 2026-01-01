import { create } from "zustand";

const useCollectionModalStore = create((set) => ({
  fav: false,
  selectedBusiness: null,

  openModal: (business) =>
    set({ fav: true, selectedBusiness: business }),

  closeModal: () =>
    set({ fav: false, selectedBusiness: null }),
}));

export default useCollectionModalStore;
