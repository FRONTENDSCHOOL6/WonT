export interface DisplayMarkerPlace {
  x: number;
  y: number;
  place_name: string;
}

export interface MapProps {
  width?: string;
  height?: string;
  latitude?: number;
  longitude?: number;
  level?: number;
  [key: string]: any;
}

export interface AddressSearchResult {
  y: number;
  x: number;
  [key: string]: any;
}

export interface PlanDateProps {
  toggleButton: () => void;
  toggleSchedule: boolean;
  // setToggleSchedule: React.Dispatch<React.SetStateAction<boolean>>;
  //* TODO:: 타입 재지정 필요
  setToggleSchedule: any;
  index: number;
  //* TODO: 타입 재지정 필요
  item: any;
  handleResetButtonClick?: () => void;
}

export interface SelectHotelMapProps {
  width?: string;
  height?: string;
  latitude?: number;
  longitude?: number;
  level?: number;
  index?: number;
  [key: string]: any;
}

export type PlaceListData = {
  place_name: string;
  category_group_name: string;
  address_name: string;
}[];

export type hotelListData = {
  place_name: string;
  category_group_name: string;
  address_name: string;
}[];
