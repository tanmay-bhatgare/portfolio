import { create } from "zustand";

interface AnimationState {
  animateFrontend: boolean;
  animateBackend: boolean;
  triggerFrontend: () => void;
  triggerBackend: () => void;

  resetFrontend: () => void;
  resetBackend: () => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  animateFrontend: false,
  animateBackend: false,

  triggerFrontend: () => set({ animateFrontend: true }),
  triggerBackend: () => set({ animateBackend: true }),

  resetFrontend: () => set({ animateFrontend: false }),
  resetBackend: () => set({ animateBackend: false }),
}));
