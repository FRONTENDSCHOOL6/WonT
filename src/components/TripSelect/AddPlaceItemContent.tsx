interface AddPlaceItemContentItem {
  count?: number;
  placeName?: string;
  divSize?: string;
  countBold?: string;
  placeNameFont?: string;
}

function AddPlaceItemContent({
  count = 1,
  placeName = '장소명',
  divSize = 'h-[1.0625rem] w-[1.0625rem]',
  divColor = 'bg-primary',
  countBold = 'font-semibold',
  placeNameFont = 'text-sm font-light',
}) {
  return (
    <>
      <div
        className={`flex ${divSize} items-center justify-center rounded-full ${divColor}`}
      >
        <span className={`text-[0.625rem] ${countBold} text-white`}>
          {count}
        </span>
      </div>
      <dl className="flex h-[2.75rem] items-center">
        <dt className="sr-only">추가한 장소명</dt>
        <dd className={`${placeNameFont} text-contentsPrimary`}>{placeName}</dd>
      </dl>
    </>
  );
}

export default AddPlaceItemContent;
