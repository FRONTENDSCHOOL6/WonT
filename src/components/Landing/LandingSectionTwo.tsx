import CalenderIcon from '@/assets/landing/landing-calender.webp';

function LandingPagePartTwo() {
  return (
    <div>
      <div className="flex h-[5.625rem] justify-around bg-gray-100/30 lg:w-[38.75rem] 2xl:w-[46.125rem]">
        <img
          src={CalenderIcon}
          alt="plane"
          className="h-[5.625rem] w-[5.625rem]"
        />

        <div className="relative flex flex-col justify-center py-[1.6875rem]  pl-[1.723125rem] font-semibold text-contentsPrimary">
          <p>리뷰를 확인하고</p>
          <p>일정을 조율해 보세요!</p>
          <div
            className="absolute
bottom-6  h-2 w-[8.775rem] bg-custom-color/40"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPagePartTwo;
