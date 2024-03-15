import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

import pocketbase from '@/api/pocketbase';
import ButtonLarge from '@/components/ButtonLarge';
import TripHeader from '@/components/Header/TripHeader';
import TripCalendar from '@/components/TripCalendar/TripCalendar';
import TripTitle from '@/components/TripTitle';
import useFetchMySchedule from '@/hooks/useFetchMySchedule';
import { DateStore } from '@/store/dateStore';
import { updateRecord, getTripDateUTC, createRecord } from '@/utils';
import { LocalStore } from '@/store/localStore';

/* async function updateMyScheduleTitle(recordId: string, date: Date[]) {
  updateRecord('mySchedule', recordId, {
    start_date: getTripDateUTC(date[0]),
    end_date: getTripDateUTC(date[1]),
  });
} */

async function createMyScheduleRecord(
  title: string,
  date: Date[],
  userId: string
) {
  createRecord('mySchedule', {
    title: title,
    username: userId.toString(),
    start_date: getTripDateUTC(date[0]),
    end_date: getTripDateUTC(date[1]),
  });
}

export default function TripCalendarPage() {
  const user = pocketbase.authStore.model;
  const { selectName } = LocalStore();
  const { tripDate, setDate } = DateStore();

  const { data, error } = useQuery(
    ['mySchedule', user?.id],
    () => user && useFetchMySchedule(user.id),
    { refetchOnWindowFocus: false }
  );

  console.log(data);

  if (error instanceof Error) {
    return (
      <div role="alert">
        <h2>{error.name}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>TripCalendar - WonT</title>
        </Helmet>
        <section className="mx-auto flex min-h-[50rem] min-w-[22.5rem] flex-col items-center pb-[2.3125rem]">
          <TripHeader isBack={false} isLogo={false} />
          <h1 className="sr-only">여행 날짜 선택 페이지</h1>
          <TripTitle
            question={'언제 떠나시나요?'}
            guide={'여행 일자를 선택하세요.'}
          />
          <TripCalendar />
          {Array.isArray(tripDate) ? (
            <Link to={`/tripedit/${data.id}`}>
              <ButtonLarge
                onClick={
                  () => createMyScheduleRecord(selectName!, tripDate, user!.id)
                  //updateMyScheduleTitle(data.id, tripDate)
                }
              >
                선택 완료
              </ButtonLarge>
            </Link>
          ) : (
            <ButtonLarge>선택 완료</ButtonLarge>
          )}
        </section>
      </>
    );
  }
}
