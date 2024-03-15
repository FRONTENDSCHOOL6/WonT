import { create } from 'zustand';

const MemosStore = create((set) => ({
  memo: '',
  setMemo: (text: string) => set({ memo: text }),
}));

export default MemosStore;
