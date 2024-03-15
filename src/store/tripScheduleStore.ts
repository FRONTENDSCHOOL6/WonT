import { create } from 'zustand';

// * TODO: 사용하지 않는 store로 예상되나, 우선적으로 type:any로 지정해두었음. 사용 시, 타입 재지정 필요

export const TripScheduleStore = create((set) => ({
  data: null,
  past: [],
  future: [],

  updateData: (newData: any) =>
    set((state: { past: any; data: any }) => ({
      data: newData,
      past: [...state.past, state.data],
      future: [],
    })),

  undo: () =>
    set((state: { past: any[]; data: any; future: any }) => ({
      data: state.past.pop(),
      past: state.past,
      future: [state.data, ...state.future],
    })),

  redo: () =>
    set((state: { future: string | any[]; past: any; data: any }) => ({
      data: state.future[0],
      past: [...state.past, state.data],
      future: state.future.slice(1),
    })),

  reset: () => {
    set((state: any) => ({
      ...state,
      hotelList: [],
    }));
  },
}));
