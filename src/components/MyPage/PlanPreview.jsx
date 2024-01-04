import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '@/assets/common-trip-default.webp';

import useScheduleList from '@/hooks/useScheduleList';
import { getDDay, getPocketHostImageURL } from '@/utils/index.js';

export default function PlanPreview({ userSchedule }) {
  const { data, isLoading } = useScheduleList();
  const [trip, setTrip] = useState();

  useEffect(() => {
    if (data) {
      setTrip(data?.items?.filter((item) => item.username === userSchedule.id));
    }
  }, []);

  if (isLoading) {
    return <div className=" flex justify-center ">로딩 중...</div>;
  }

  if (data?.items?.length === 0) {
    return <div className="flex justify-center">나의 일정이 비어있습니다.</div>;
  }

  if (userSchedule) {
    return (
      <div className="container mx-auto flex w-auto flex-col  gap-4 xl:w-[1236px]">
        {userSchedule?.map((item) => (
          <Link to={`/myschedule/${item.id}`} key={item.id}>
            <div
              className="  container relative mx-auto  flex cursor-pointer 
            justify-center  rounded-xl 
            border-2 bg-[hsl(0,0%,90%,0.6)] bg-fixed opacity-80 transition duration-300 ease-in-out hover:opacity-100 hover:contrast-125"
            >
              <div className=" rounded-xl bg-gradient-to-t from-slate-800/40 via-white/10">
                <img
                  src={
                    item.place[0]
                      ? getPocketHostImageURL(item, 'main').split(',')[0]
                      : defaultImage
                  }
                  alt={`${item.title} 이미지`}
                  className="h-[360px] min-h-[360px]  w-[1236px] min-w-[320px]  rounded-xl object-cover mix-blend-multiply "
                />
              </div>

              <div className="absolute bottom-4 left-3 flex flex-col ">
                <span className="text-xl font-semibold text-white">
                  {item.title}
                </span>
                <span className="text-sm font-light text-background">
                  {`${item.start_date
                    .toString()
                    .substr(0, 10)} - ${item.end_date
                    .toString()
                    .substr(0, 10)}`}
                </span>
              </div>
              <span className="absolute bottom-6 right-3 text-xl font-bold text-white">
                {getDDay(item.start_date)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
