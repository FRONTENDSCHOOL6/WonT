import { LocalItem } from '@/types/Locals';
import { MyScheduleItem } from '@/types/MySchedule';
import { RecommendItem } from '@/types/Recommends';
import { TravelItem, TravelsData, UserItems } from '@/types/Travels';
import { RecordModel } from 'pocketbase';

// #타입 정의
export type ItemType =
  | LocalItem
  | MyScheduleItem
  | RecommendItem
  | TravelItem
  | RecordModel
  | UserItems
  | TravelsData
  | MyScheduleItem;

export const getPocketHostImageURL = <key extends keyof ItemType>(
  item: ItemType,
  image: key = 'image' as key,
  place: key = 'place' as key
) => {
  let target = item[image] ? item[image] : item[place];
  return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${
    item.id
  }/${target}`;
};
export const getPocketHostProfileURL = <key extends keyof ItemType>(
  item: ItemType,
  profile: key = 'profile' as key
) =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[profile]
  }`;

export const getImageArrayURL = <key extends keyof ItemType>(
  item: ItemType,
  image: string
) =>
  `${getPocketHostImageURL(item, 'image' as key).replace(
    'undefined',
    ''
  )}/${image}`;
