import detailInfo from '@/assets/detail/detail-info.webp';
import detailCalendar from '@/assets/detail/detail-calendar.webp';
import detailTicket from '@/assets/detail/detail-ticket.webp';
import detailClock from '@/assets/detail/detail-clock.webp';
import detailHomepage from '@/assets/detail/detail-homepage.webp';
import { detailPlaceItems } from '@/types/DetailPage';
import { RecordModel } from 'pocketbase';

interface FilterDetailPlaceProps {
  info: string;
  rest: string;
  active: string;
  time: string;
  url: string;
}

// * TODO: detailplace 타입 재정의 필요
export default function DetailInfo({
  detailPlace,
}: {
  detailPlace: detailPlaceItems;
}) {
  const filterDetailPlace: FilterDetailPlaceProps = {
    info: detailPlace.info ? detailPlace.info : '-',
    rest: detailPlace.rest ? detailPlace.rest : '-',
    active: detailPlace.active ? detailPlace.active : '-',
    time: detailPlace.time ? detailPlace.time : '-',
    url: detailPlace.url ? detailPlace.url : '-',
  };

  console.log(detailPlace);

  return (
    <>
      <dl className="mx-auto grid max-w-[1236px] grid-cols-3 gap-3 px-4">
        <span className="col-span-3 text-xl font-medium text-contentsPrimary">
          이용안내
        </span>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 self-center">
          <img src={detailInfo} alt="안내 아이콘" className="h-4 w-4" />
          <span className="leading-normal text-gray-1">문의 및 안내</span>
        </dt>

        <dd className="leading-normal text-contentsPrimary">
          {filterDetailPlace.info}
        </dd>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 ">
          <img src={detailCalendar} alt="달력 아이콘" className="h-5 w-5" />
          <span className="leading-normal text-gray-1">쉬는날</span>
        </dt>
        <dd className="leading-normal text-contentsPrimary">
          {filterDetailPlace.rest}
        </dd>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 ">
          <img src={detailTicket} alt="티켓 아이콘" className="h-5 w-5" />
          <span className="leading-normal text-gray-1">체험 안내</span>
        </dt>
        <dd className="leading-normal text-contentsPrimary">
          {filterDetailPlace.active}
        </dd>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 ">
          <img src={detailClock} alt="시계 아이콘" className="h-5 w-5" />
          <span className="leading-normal text-gray-1">이용시간</span>
        </dt>
        <dd className="leading-normal text-contentsPrimary">
          {filterDetailPlace.time}
        </dd>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 ">
          <img src={detailHomepage} alt="홈페이지 아이콘" className="h-5 w-5" />
          <span className="leading-normal text-gray-1">홈페이지</span>
        </dt>
        <dd className=" leading-normal text-contentsPrimary">
          <a
            href={filterDetailPlace.url}
            className="break-words"
            target="_blank"
            rel="noopener noreferer"
          >
            {filterDetailPlace.url}
          </a>
        </dd>
        <hr className="col-span-3" />
      </dl>
    </>
  );
}
