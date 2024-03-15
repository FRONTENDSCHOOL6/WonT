interface TotalScheduleHotelDayProps {
  day?: number;
}

function TotalScheduleHotelDay({ day }: TotalScheduleHotelDayProps) {
  return (
    <div className="w-fit rounded-full bg-point px-4 py-[0.375rem] text-xs font-medium text-background md:text-sm">
      All Day
      <span>{day}</span>
    </div>
  );
}

export default TotalScheduleHotelDay;
