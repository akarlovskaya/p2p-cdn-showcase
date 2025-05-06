"use client";

//import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

export const useSidebar = () => {
  alert("boo");
};

// export const useSidebar = create<SidebarStore>((set) => ({
//
//   isOpen: false,
//   toggle: () => set((state) => ({ isOpen: !state.isOpen })),
//   open: () => set({ isOpen: true }),
//   close: () => set({ isOpen: false }),
// }));
