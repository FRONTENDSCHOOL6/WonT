interface TripPlaceInfoProps {
  placeName?: string;
  address?: string;
}

function TripPlaceInfo({
  placeName = '장소명',
  address = '상세주소',
}: TripPlaceInfoProps) {
  return (
    <dl className="flex flex-col">
      <dt className="sr-only">장소명</dt>
      <dd className="text-sm font-light text-contentsPrimary">{placeName}</dd>
      <dt className="sr-only">상세주소</dt>
      <dd className="text-xs font-light text-contentsSecondary">{address}</dd>
    </dl>
  );
}

export default TripPlaceInfo;
