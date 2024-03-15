import { create } from 'zustand';
//$ import { devtools } from 'zustand/middleware';

interface DateStoreState {
  tripDate: Date[];
  setDate: (e: any) => void;
}

export const DateStore = create<DateStoreState>((set) => ({
  tripDate: [new Date()],
  setDate: (e: Date[]) => set({ tripDate: e }),
}));
