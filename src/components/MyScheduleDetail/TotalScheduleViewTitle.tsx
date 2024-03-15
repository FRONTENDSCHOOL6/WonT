import { TotalScheduleTitleProps } from '@/types/MyScheduleDetailPage';
import { getLocalName, getTripDates } from '@/utils';

function TotalScheduleTitle({
  localName = '지역명',
  startDay,
  endDay,
}: TotalScheduleTitleProps) {
  return (
    <dl>
      <dt className="sr-only">장소</dt>
      <dd className="text-sm font-bold text-contentsPrimary md:text-base">
        {getLocalName(localName)}
      </dd>
      <dt className="sr-only">여행기간</dt>
      <dd className="text-xs font-medium text-contentsSecondary md:text-sm">
        {getTripDates(startDay, endDay)}
      </dd>
    </dl>
  );
}

export default TotalScheduleTitle;
