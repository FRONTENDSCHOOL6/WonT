import { create } from 'zustand';
//$ import { devtools } from 'zustand/middleware';

//$ 추후 타입 지정 필요
type Position = {
  id: number;
  place_name: string;
  [key: string]: unknown;
};

type ScheduleState = {
  // placePositions: Position[][];
  placePositions: any;
  hotelPositions: any;
  resetHotelPositions: () => void;
  resetPlacePositions: () => void;
  addPlacePositions: (placePosition: Position, index: number) => void;
  deletePlacePositions: (index: number, placeName: string) => void;
  addHotelPositions: (hotelPosition: Position, index: number) => void;
  deleteHotelPositions: (index: number, hotelName: string) => void;
  scheduleDetail: any[];
  setScheduleDetail: (data: any) => void;
};

export const ScheduleStore = create<ScheduleState>((set) => ({
  // TripPlace/Hotel 페이지
  // 추가한 장소 목록
  placePositions: [],
  // 추가한 숙소 목록
  hotelPositions: [],
  // 추가 장소 초기화
  resetHotelPositions: () => {
    set({ hotelPositions: [] });
  },
  resetPlacePositions: () => {
    set({ placePositions: [] });
  },
  // 장소 추가하기
  addPlacePositions: (placePosition: any, index: number) =>
    set((state: any) => {
      const updatedPlacePositions = { ...state.placePositions };
      if (updatedPlacePositions[index]) {
        updatedPlacePositions[index].push({
          id: placePosition.id,
          ...placePosition,
        });
      } else {
        updatedPlacePositions[index] = [
          {
            id: placePosition.id,
            ...placePosition,
          },
        ];
      }
      return { placePositions: updatedPlacePositions };
    }),
  // 장소 삭제하기
  deletePlacePositions: (index: number, placeName: string) =>
    set((state: any) => {
      const updatedPlacePositions = { ...state.placePositions };
      if (updatedPlacePositions[index]) {
        updatedPlacePositions[index] = updatedPlacePositions[index].filter(
          (place: any) => place.place_name !== placeName
        );
      }
      return { placePositions: updatedPlacePositions };
    }),
  // 숙소 추가하기
  addHotelPositions: (hotelPosition: any, index: number) =>
    set((state: any) => {
      const updatedHotelPositions = { ...state.hotelPositions };
      if (updatedHotelPositions[index]) {
        updatedHotelPositions[index].push({
          id: hotelPosition.id,
          ...hotelPosition,
        });
      } else {
        updatedHotelPositions[index] = [
          {
            id: hotelPosition.id,
            ...hotelPosition,
          },
        ];
      }
      return { hotelPositions: updatedHotelPositions };
    }),
  // 숙소 삭제하기
  deleteHotelPositions: (index: number, hotelName: string) =>
    set((state: any) => {
      const updatedHotelPositions = { ...state.hotelPositions };
      if (updatedHotelPositions[index]) {
        updatedHotelPositions[index] = updatedHotelPositions[index].filter(
          (hotel: any) => hotel.place_name !== hotelName
        );
      }
      return { hotelPositions: updatedHotelPositions };
    }),

  // MySchedule/detail 페이지
  scheduleDetail: [],
  setScheduleDetail: (data: any) =>
    set(() => ({
      scheduleDetail: data, //$ bookmarkList
    })),
}));
