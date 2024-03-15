import TripPlaceImage from '@/components/TripSelect/TripPlaceImage';
import TripPlaceInfo from '@/components/TripSelect/TripPlaceInfo';
import AddButton from '@/components/TripSelect/AddButton';
import { MapStore } from '@/store/mapStore';
import { ScheduleStore } from '@/store/scheduleStore';

interface TripPlaceItemProps {
  placeName: string;
  address: string;
  count: number;
  index?: number;
}

function TripPlaceItem({
  placeName,
  address,
  count,
  index,
}: TripPlaceItemProps) {
  const { placeList } = MapStore(); // 장소 목록
  const { placePositions, addPlacePositions, deletePlacePositions } =
    ScheduleStore(); // 추가한 장소

  // 버튼 선택 여부
  //$ any 사용
  const isPlace =
    index &&
    placePositions[index]?.filter(
      (place: any) => place.place_name == placeName
    );

  // 버튼 삭제 여부
  //$ any 사용
  const isSelected =
    index &&
    placePositions[index]?.some((place: any) => place.place_name === placeName);

  // 버튼 클릭시
  const handleClick = () => {
    if (!isSelected) {
      index && addPlacePositions(placeList[count], index);
    } else {
      deletePlacePositions(index, placeName);
    }
  };

  return (
    <li className="h-[5.375rem] bg-background py-[0.8125rem] pl-[0.8125rem] pr-[1.625rem]">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-[0.625rem]">
          <TripPlaceImage />
          <TripPlaceInfo placeName={placeName} address={address} />
        </div>
        <AddButton onClick={handleClick} isSelect={isPlace} />
      </div>
    </li>
  );
}

export default TripPlaceItem;
