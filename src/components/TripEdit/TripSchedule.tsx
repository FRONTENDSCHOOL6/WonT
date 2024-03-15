import { Link } from 'react-router-dom';
import { PlanDateProps } from '@/types/TripEdit';
import ButtonMedium from '@/components/TripEdit/ButtonMedium';
import AddPlan from '@/components/TripEdit/AddPlan';
import PlanDate from '@/components/TripEdit/PlanDate';
import { SetStateAction, useState } from 'react';

function TripSchedule() {
  const [toggleSchedule, setToggleSchedule]: [
    boolean,
    (value: boolean) => void,
  ] = useState(false);

  const handleToggle: () => void = () => {
    setToggleSchedule(!toggleSchedule);
  };

  return (
    <>
      <PlanDate
        toggleButton={handleToggle}
        toggleSchedule={toggleSchedule}
        setToggleSchedule={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        }}
        index={0}
        item={undefined}
      />
      <div className={`${toggleSchedule ? 'hidden' : ''}`}>
        <AddPlan text="장소" />
        <Link to="/tripplace">
          <ButtonMedium fill={false} text="일정 추가" />
        </Link>
        <AddPlan text="숙소" />
        <Link to="/triphotel">
          <ButtonMedium fill={false} text="숙소 추가" />
        </Link>
      </div>
      <div className={toggleSchedule ? 'pt-0' : 'py-10'}>
        <ButtonMedium fill={true} text="저장" />
      </div>
    </>
  );
}

export default TripSchedule;
