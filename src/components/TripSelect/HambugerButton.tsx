import HambugerIcon from '@/components/TripSelect/HambugerIcon';
import { ToggleTripMenuStore } from '@/store/toggleTripMenuStore';

interface HambugerButtonProps {
  onClick: () => void;
}

function HambugerButton({ onClick }: HambugerButtonProps) {
  const {
    displayPlaceTripPlan,
    displayPlaceList,
    displayHotelTripPlan,
    displayHotelList,
  } = ToggleTripMenuStore();

  return (
    <div className="flex justify-center">
      <button
        type="button"
        aria-label={
          displayPlaceTripPlan &&
          displayPlaceList &&
          displayHotelTripPlan &&
          displayHotelList
            ? '목록 닫기'
            : '목록 펼치기'
        }
        onClick={onClick}
        className="px-36 pb-1"
      >
        <HambugerIcon
          width={'1.875rem'}
          heigth={'1.125rem'}
          color={'#5A80A9'}
        />
      </button>
    </div>
  );
}

export default HambugerButton;
