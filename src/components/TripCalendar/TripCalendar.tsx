import Calendar from 'react-calendar';

import '@/styles/calendar.css';
import { DateStore } from '@/store/dateStore';
import { getTripDateKo } from '@/utils';

function TripCalendar() {
  const { tripDate, setDate } = DateStore();

  console.log(tripDate);

  return (
    <>
      <Calendar
        locale="ko"
        onChange={(value) => setDate(value)} // 포커스 변경 시 현재 날짜로 설정
        selectRange={true} // 기간 설정
        formatMonthYear={(locale, date) =>
          `${date.getFullYear()}.${date.getMonth() + 1}`
        } // 달력 네비게이션 메뉴 형식
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        } // day 표현 형식 지정
        minDetail="year" // 상단 네비게이션 최상위 단위 '년도'
        maxDetail="month" // 하단 선택 세부 단위 '월'
        next2Label={null} // 토글: '년' 단위 이동 버튼 해제
        prev2Label={null}
        prevAriaLabel={'전 달로 이동'} // aria-label 설정
        nextAriaLabel={'다음 달로 이동'}
        tileDisabled={({ date }) =>
          date < new Date(new Date().setDate(new Date().getDate() - 1))
        } // 오늘 기준 과거 선택 불가
        className={
          'h-[19.875rem w-[19.875rem] p-[1.3475rem] text-contentsPrimary'
        }
      />
      <p className="mb-10 mt-2 text-center text-contentsPrimary">
        {tripDate.length > 1 ? (
          <>
            <span className="font-bold">
              선택한 여행 기간
              <span className="aria-hidden font-bold">: </span>
            </span>
            {getTripDateKo(tripDate[0])}
            <span className="aria-hidden"> - </span>
            {getTripDateKo(tripDate[1])}
          </>
        ) : (
          <>
            <span className="font-bold">
              오늘 날짜
              <span className="aria-hidden font-bold">: </span>
            </span>
            {getTripDateKo(tripDate[0])}
          </>
        )}
      </p>
    </>
  );
}
export default TripCalendar;
