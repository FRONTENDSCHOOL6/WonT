import { getLocalName, getTripDates } from '@/utils/index.js';
import CalendarIcon from '@/assets/common-calendar.svg';

export default function TotalScheduleSummary({
  imageURL = '#',
  localName = '지역명',
  startDay,
  endDay,
}) {
  return (
    <>
      <img
        src={imageURL}
        alt={localName}
        className="h-full w-[43.75%] bg-background"
      />
      <div className="absolute right-0 top-0 flex h-full w-[56.23%] flex-col justify-center gap-3 pl-[1.25rem]">
        <span className="font-semibold text-contentsPrimary">
          {getLocalName(localName)}
        </span>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center">
            <img src={CalendarIcon} />
            <span className="text-sm text-contentsPrimary">여행기간</span>
          </div>
          <span className="pl-1 text-xs font-light text-contentsSecondary">
            {getTripDates(startDay, endDay)}
          </span>
        </div>
      </div>
    </>
  );
}