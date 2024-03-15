import AddPlaceItemContent from '@/components/TripSelect/AddPlaceItemContent';
import { DayScheduleItemProps } from '@/types/Travels';

function DayScheduleItem({
  count,
  placeName = '장소명',
  placeType = '장소 분류',
  address = '상세 주소',
  backgroundColor = 'bg-primary',
  textColor = 'text-primary',
}: DayScheduleItemProps) {
  return (
    <li className="flex flex-col gap-[0.125rem] bg-white py-[0.625rem] pl-1">
      <div className="flex items-center gap-[0.3125rem] rounded-md bg-white pl-[0.5625rem]">
        <AddPlaceItemContent
          count={count}
          placeName={placeName}
          divSize={'h-[1.1875rem] w-[1.1875rem]'}
          divColor={backgroundColor}
          countBold={'font-bold'}
          placeNameFont={'font-bold text-sm'}
        />
      </div>
      <dl className="flex items-center gap-1 pl-[1.5625rem] text-xs">
        <dt className={`font-bold ${textColor}`}>{placeType}</dt>
        <dd className="font-light text-gray-1">{address}</dd>
      </dl>
    </li>
  );
}

export default DayScheduleItem;
