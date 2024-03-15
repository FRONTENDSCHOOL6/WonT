import CalendarIcon from '@/assets/common/common-calendar.webp';
import { getLocalName, getTripDates } from '@/utils';
import DefaultImage from '@/components/DefaultImage';
import { TotalScheduleSummaryProps } from '@/types/Travels';

function TotalScheduleSummary({
  imageURL,
  localName = '지역명',
  startDay,
  endDay,
}: TotalScheduleSummaryProps) {
  return (
    <>
      {imageURL ? (
        <img
          src={imageURL}
          alt={localName}
          className="h-full w-[43.75%] bg-background"
        />
      ) : (
        <div className="flex h-full w-[43.77%] items-center justify-center bg-[#EFF2F6]">
          <DefaultImage />
        </div>
      )}
      <div className="absolute right-0 top-0 flex h-full w-[56.23%] flex-col justify-center gap-3 pl-[1.25rem] lg:justify-evenly">
        <span className="font-semibold text-contentsPrimary md:text-2xl">
          {getLocalName(localName)}
        </span>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center">
            <img src={CalendarIcon} />
            <span className="text-sm text-contentsPrimary md:text-base">
              여행기간
            </span>
          </div>
          <span className="pl-1 text-xs font-light text-contentsSecondary md:text-base">
            {getTripDates(startDay, endDay)}
          </span>
        </div>
      </div>
    </>
  );
}
export default TotalScheduleSummary;
