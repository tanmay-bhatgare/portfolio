import { create } from "zustand";

interface EditorState {
  currentLine: number; // Which code line is active / typed
  totalLines: number; // How many lines exist in the sequence
  setCurrentLine: (line: number) => void;
  setTotalLines: (count: number) => void;
  reset: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  currentLine: -1, // -1 means "nothing typed yet"
  totalLines: 0,
  setCurrentLine: (line: number) => set({ currentLine: line }),
  setTotalLines: (count: number) => set({ totalLines: count }),
  reset: () => set({ currentLine: -1 }),
}));
