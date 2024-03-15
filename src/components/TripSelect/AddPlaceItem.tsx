import AddPlaceItemContent from '@/components/TripSelect/AddPlaceItemContent';

interface AddPlaceItemProps {
  placeName: string;
  count: number;
}

function AddPlaceItem({ placeName, count }: AddPlaceItemProps) {
  return (
    <li className="flex h-[2.75rem] items-center gap-[0.3125rem] rounded-md bg-white pl-[0.5625rem]">
      <AddPlaceItemContent
        countBold={'bold'}
        placeName={placeName}
        count={count}
      />
    </li>
  );
}

export default AddPlaceItem;
