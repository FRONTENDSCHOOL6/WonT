import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DateStoreState {
  tripDate: Date[];
  setDate: (e: Date[]) => void;
}

// # Type 이슈로 인한 devtools 제거
export const DateStore = create<DateStoreState>((set) => ({
  tripDate: [new Date()],
  setDate: (e: Date[]) => set({ tripDate: e }),
}));
