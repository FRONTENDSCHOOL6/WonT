const dayText = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

export function getTripDate(date: string) {
  return date.slice(0, 10);
}

export function getTripDateKo(dates: Date) {
  const month = dates?.getMonth() + 1;
  const date = dates?.getDate();
  const day = dayText[dates?.getDay()];
  return `${month}월 ${date}일 ${day}`;
}

// export function getTripDateUTC(dates: Date) {
//   let dateUTC = new Date(
//     `${String(dates).slice(0, 15)} 12:00:00`
//   ).toISOString();
//   return `${dateUTC.slice(0, 10)} 12:00:00.123Z`;
// }

export function getTripDateUTC(dates: Date | undefined) {
  // 1. 날짜가 유효한지 확인
  if (!dates || isNaN(dates.getTime())) {
    // 유효하지 않은 경우 에러 처리 또는 기본 값 반환
    return '1970-01-01T00:00:00.123Z';
  }

  // 2. 표준 포맷 사용
  const dateUTC = new Date(dates).toISOString();
  return dateUTC;
}

export function getTripDateDot(dates: Date) {
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const date = dates.getDate();
  return `${year}.${month}.${date}`;
}

export const getTripDates = (startDay: string, endDay: string) => {
  return `${startDay} - ${endDay}`;
};
