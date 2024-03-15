import TotalScheduleViewHotelDay from '@/components/MyScheduleDetail/TotalScheduleViewHotelDay';
import TotalScheduleViewImageList from '@/components/MyScheduleDetail/TotalScheduleViewImageList';
import TotalScheduleViewTitle from '@/components/MyScheduleDetail/TotalScheduleViewTitle';
import TotalScheduleViewTopic from '@/components/MyScheduleDetail/TotalScheduleViewTopic';
// import { TotalScheduleViewProps } from '@/types/MyScheduleDetailPage';
import { getImageArrayURL, getTripDate, setLocalName } from '@/utils';

function TotalScheduleView({ selectBookmark }: any) {
  return (
    <div className="modal relative mx-[1.25rem] flex min-h-[20.4375rem] flex-col justify-center gap-[1.25rem] overflow-hidden rounded-md bg-white pl-[1.25rem] pr-[0.625rem] md:min-h-[22.9375rem]">
      {selectBookmark?.map((item: any) => (
        <TotalScheduleViewTitle
          key={item.id}
          localName={setLocalName(item.title)}
          startDay={getTripDate(item.start_date)}
          endDay={getTripDate(item.end_date)}
        />
      ))}
      <div className="flex flex-col gap-[0.625rem]">
        <TotalScheduleViewTopic count={selectBookmark[0].place.length}>
          선택한 장소
        </TotalScheduleViewTopic>
        <div className="flex gap-3">
          {selectBookmark[0]?.place?.map((image: string) => (
            <TotalScheduleViewImageList
              key={image}
              imageURL={getImageArrayURL(selectBookmark[0], image)}
              className={'ml-1'}
              localName={''}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[0.625rem]">
        <TotalScheduleViewTopic count={selectBookmark[0].hotel.length}>
          설정한 숙소
        </TotalScheduleViewTopic>
        <div className="ml-1 flex w-fit flex-col items-center gap-[0.3125rem]">
          <TotalScheduleViewHotelDay />
          <div className="flex gap-3">
            {selectBookmark[0]?.hotel?.map((image: string) => (
              <TotalScheduleViewImageList
                key={image}
                imageURL={getImageArrayURL(selectBookmark[0], image)}
                className={'ml-1'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalScheduleView;
