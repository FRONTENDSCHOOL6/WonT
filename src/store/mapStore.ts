import { create } from 'zustand';

export interface MapStoreState {
  placeList: [];
  hotelList: [];
  setPlaceList: (data: string[]) => void;
  setHotelList: (data: string[]) => void;
}

const initialState: MapStoreState = {
  placeList: [],
  hotelList: [],
  setPlaceList: (data: string[]) => {},
  setHotelList: (data: string[]) => {},
};

export const MapStore = create<MapStoreState>((set) => initialState);
