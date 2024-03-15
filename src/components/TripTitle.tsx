function TripTitle({ question = '여행을 떠나시나요?', guide = '선택하세요.' }) {
  return (
    <div className="flex w-full flex-col items-center bg-background py-[1.875rem]">
      <h2 className="text-2xl font-bold text-contentsPrimary">{question}</h2>
      <h3 className="text-sm font-light text-gray-1">{guide}</h3>
    </div>
  );
}

export default TripTitle;
