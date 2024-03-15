import toggleDown from '@/assets/common/common-toogle-down.webp';
import toggleUp from '@/assets/common/common-toogle-up.webp';
import { ScheduleStore } from '@/store/scheduleStore';
import { PlanDateProps } from '@/types/TripEdit';
import { getTripDate, getTripDateUTC } from '@/utils';
import { useId } from 'react';

function PlanDate({
  toggleButton,
  toggleSchedule,
  item,
  index,
  setToggleSchedule,
  handleResetButtonClick,
}: PlanDateProps) {
  const { resetHotelPositions, resetPlacePositions } = ScheduleStore();

  const id = useId();
  return (
    <>
      <div key={id} className="mx-5 my-4 flex items-center gap-[10px] py-3 ">
        <span key={index} className="font-bold">
          Day {index + 1}
        </span>
        <span className="aria-hidden:">|</span>
        <span className="text-[14px] text-contentsSecondary">
          {getTripDate(getTripDateUTC(item))}
        </span>
        <button key={index + 1} type="button" onClick={handleResetButtonClick}>
          <img src={toggleSchedule ? toggleDown : toggleUp} alt="일정 펼치기" />
        </button>
      </div>
      <hr />
    </>
  );
}

export default PlanDate;
