import create, { State } from 'zustand';

type ToggleTripMenuStore = {
  displayPlaceTripPlan: boolean;
  displayPlaceList: boolean;
  displayHotelTripPlan: boolean;
  displayHotelList: boolean;
  displayTotalschedule: boolean;
  displayDeleteModal: boolean;
  displayDaySchedule: boolean;
  togglePlaceTripPlan: () => void;
  togglePlaceList: () => void;
  toggleHotelTripPlan: () => void;
  toggleHotelList: () => void;
  toggleTotalschedule: () => void;
  toggleDeleteModal: () => void;
  toggleDaySchedule: () => void;
};

export const ToggleTripMenuStore = create<ToggleTripMenuStore>((set) => ({
  // state
  // 여행 장소선택 페이지
  displayPlaceTripPlan: true,
  displayPlaceList: true,
  // 여행 숙소선택 페이지
  displayHotelTripPlan: true,
  displayHotelList: true,
  // 나의 일정상세 페이지
  displayTotalschedule: true,
  displayDeleteModal: false,
  displayDaySchedule: true,

  // action
  // 여행 장소선택 페이지
  togglePlaceTripPlan: () =>
    set((state) => ({ displayPlaceTripPlan: !state.displayPlaceTripPlan })),
  togglePlaceList: () =>
    set((state) => ({ displayPlaceList: !state.displayPlaceList })),
  // 여행 숙소선택 페이지
  toggleHotelTripPlan: () =>
    set((state) => ({ displayHotelTripPlan: !state.displayHotelTripPlan })),
  toggleHotelList: () =>
    set((state) => ({ displayHotelList: !state.displayHotelList })),
  // 나의 일정상세 페이지
  toggleTotalschedule: () =>
    set((state) => ({ displayTotalschedule: !state.displayTotalschedule })),
  toggleDeleteModal: () =>
    set((state) => ({ displayDeleteModal: !state.displayDeleteModal })),
  toggleDaySchedule: () =>
    set((state) => ({ displayDaySchedule: !state.displayDaySchedule })),
}));
