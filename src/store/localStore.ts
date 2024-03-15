import { create } from 'zustand';
//$ import { devtools } from 'zustand/middleware';

type State = {
  selectName: string | null;
  selectIndex: string | null;
  setSelectIndex: (index: string | null) => void;
  setSelectName: (name: string | null) => void;
};

export const LocalStore = create<State>((set) => ({
  selectName: null, // 선택된 LocalItem 이름를 저장하는 변수
  selectIndex: null, // 선택된 LocalItem 인덱스를 저장하는 변수
  setSelectIndex: (index: string | null) => set(() => ({ selectIndex: index })),
  setSelectName: (name: string | null) => set(() => ({ selectName: name })),
}));
