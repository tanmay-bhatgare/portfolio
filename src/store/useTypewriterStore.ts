// stores/typeWriterStore.ts
import { create } from "zustand";

interface TypeWriterState {
  restartCount: number;
  restart: () => void;
}

export const useTypeWriterStore = create<TypeWriterState>((set) => ({
  restartCount: 0,

  restart: () =>
    set((state) => ({
      restartCount: state.restartCount + 1,
    })),
}));
