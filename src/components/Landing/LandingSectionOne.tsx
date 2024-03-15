import PlaneIcon from '@/assets/landing/landing-plane.webp';

function LandingPagePartOne() {
  return (
    <div className="flex h-[5.625rem] justify-around bg-gray-100/30 lg:w-[38.75rem] 2xl:w-[46.125rem]">
      <div className="relative flex flex-col justify-center py-[1.6875rem]  pl-[1.723125rem] font-semibold text-contentsPrimary">
        <p>WonT에서</p>
        <p>여행을 준비 해보세요!</p>
        <div
          className="absolute
bottom-6  h-2 w-[8.775rem] bg-custom-color/40"
        ></div>
      </div>
      <img src={PlaneIcon} alt="plane" className="h-[5.625rem] w-[5.625rem]" />
    </div>
  );
}

export default LandingPagePartOne;
