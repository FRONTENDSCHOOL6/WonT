import BookmarkIcon from '@/assets/landing/landing-bookmark.webp';

function LandingPagePartThree() {
  return (
    <div>
      <div className="flex h-[5.625rem] justify-around bg-gray-100/30 lg:w-[38.75rem] 2xl:w-[46.125rem]">
        <div className="relative flex flex-col justify-center py-[1.6875rem]  pl-[1.723125rem] font-semibold text-contentsPrimary">
          <p>가고싶은 곳 어디든</p>
          <p>저장하세요!</p>
          <div
            className="absolute
bottom-6  h-2 w-[4.8375rem] bg-custom-color/40"
          ></div>
        </div>
        <img
          src={BookmarkIcon}
          alt="plane"
          className="h-[5.625rem] w-[5.625rem]"
        />
      </div>
    </div>
  );
}

export default LandingPagePartThree;
