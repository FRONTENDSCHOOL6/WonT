import create from 'zustand';

export const useMarkerStore = create((set) => ({
  markers: [],

  addMarker: (marker: any) => {
    set((state: any) => ({
      markers: [...state.markers, marker],
    }));
  },
}));
