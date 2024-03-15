export interface PlacePlanProps {
  select: string;
  count?: number;
  placeList?: {
    place_name: string;
    category_group_name: string;
    address_name: string;
  }[];
  hotelList?: {
    place_name: string;
    category_group_name: string;
    address_name: string;
  }[];
  index?: number;
  resetHotelPositions?: string[];
  resetPlacePositions?: string[];
}

function PlacePlan({
  select,
  placeList,
  hotelList,
  index,
  resetHotelPositions,
  resetPlacePositions,
}: PlacePlanProps) {
  return (
    <div className="mx-5 mt-4 flex flex-col gap-[10px]">
      {select === '숙소'
        ? hotelList?.map((item, index) => (
            <div
              key={index}
              className="flex h-[3.875rem] items-center gap-2 bg-white px-[0.625rem]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-semibold text-white">
                  {index + 1}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-contentsPrimary">
                  {item.place_name}
                </p>
                <p className="text-sm font-light text-contentsSecondary">
                  <span className="font-medium text-primary">
                    {item.category_group_name}
                  </span>{' '}
                  {item.address_name}
                </p>
              </div>
            </div>
          ))
        : placeList?.map((item, index) => (
            <div
              key={index}
              className="flex h-[3.875rem] items-center gap-2 bg-white px-[0.625rem]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-point">
                <span className="text-sm font-semibold text-white">
                  {index + 1}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-contentsPrimary">
                  {item.place_name}
                </p>
                <p className="text-sm font-light text-contentsSecondary">
                  <span className="font-medium text-point">
                    {item.category_group_name}
                  </span>{' '}
                  {item.address_name}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
}

export default PlacePlan;
