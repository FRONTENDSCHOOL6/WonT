import { Link } from 'react-router-dom';
import TripPlanEditButton from '@/components/TripPlanEditButton';
import { getTripDate, getTripDateUTC } from '@/utils';
import { DateStore } from '@/store/dateStore';

function TripPlan({ data, background = 'bg-secondary/50' }: any) {
  // 임시로 타입지정
  const selectDate = DateStore((set) => set.tripDate);
  return (
    <div className={`${background} px-6 py-[1.125rem] md:px-10 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-2">
          <dl>
            <dt className="sr-only">장소</dt>
            <dd className="text-base text-contentsPrimary">{data?.title}</dd>
          </dl>
          <Link to="/triplocal">
            <TripPlanEditButton />
          </Link>
        </div>
        <div className="flex gap-2">
          <dl>
            <dt className="sr-only">여행 기간</dt>
            <dd className="text-base font-light text-contentsSecondary">
              {getTripDate(getTripDateUTC(selectDate[0]))} -
              {getTripDate(getTripDateUTC(selectDate[1]))}
            </dd>
          </dl>
          <Link to="/tripcalendar">
            <TripPlanEditButton />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TripPlan;
