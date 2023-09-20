import MyPageTab from '@/components/MyPage/MyPageTab';
import BookmarkList from '@/components/MyPage/BookmarkList';
import Profile from '@/components/MyPage/Profile';
import MyPageHeader from '@/components/PageHeader';
import { getPocketHostImageURL } from '@/utils/index.js';
import pb from '@/api/pocketbase';

export default function BookmarkPage() {
  const user = pb.authStore.model;
  // console.log(user);

  if (user) {
    return (
      <div className="mx-auto w-screen bg-background ">
        <div className="container mx-auto flex min-h-screen min-w-[22.5rem] flex-col items-center  bg-background pb-14">
          <h1 className="sr-only">MySchedule</h1>
          <MyPageHeader page="mypage" />
          <div className="flex flex-col items-center pb-11 pt-7">
            <span className="mb-[1.375rem] text-[1.5rem] font-extrabold leading-normal text-contentsPrimary">
              마이 페이지
            </span>
            {user.profile ? (
              <img
                src={getPocketHostImageURL(user, 'profile')}
                alt={`${user.username}의 프로필`}
                className="h-[4.375rem] w-[4.375rem] rounded-full border-[0.0938rem] border-contentsSecondary"
              />
            ) : (
              <Profile />
            )}
            <span className="text-[1.125rem] text-contentsSecondary">
              {user.username}
            </span>
          </div>
          <div className="mx-auto">
            <MyPageTab position="right" tab="bookmark" menu="북마크" />
            <div className="flex max-w-[1268px] justify-center  sm:px-0 md:px-4">
              <BookmarkList user={user} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
