import { create } from 'zustand';

interface ButtonStoreState {
  editBackgroundColor: string;
  editTextColor: string;
  editMouseOver: () => void;
  editMouseOut: () => void;
}

const initialState: ButtonStoreState = {
  editBackgroundColor: 'bg-transparent',
  editTextColor: 'text-contentsSecondary',
  editMouseOver: () => {},
  editMouseOut: () => {},
};

export const ButtonStore = create<ButtonStoreState>((set) => initialState);
