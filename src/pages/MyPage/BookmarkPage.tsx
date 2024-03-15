import MyPageTab from '@/components/MyPage/MyPageTab';
import BookmarkList from '@/components/MyPage/BookmarkList';
import Profile from '@/components/MyPage/Profile';
import MyPageHeader from '@/components/PageHeader';
import {
  ItemType,
  getPocketHostImageURL,
  getPocketHostProfileURL,
} from '@/utils';
import pocketbase from '@/api/pocketbase';
import MyPageTabInfo from '@/components/MyPage/MyPageTabInfo';
import { Helmet } from 'react-helmet-async';
import { AdminModel, RecordModel } from 'pocketbase';

function BookmarkPage() {
  const user = pocketbase.authStore.model as RecordModel;

  if (user) {
    return (
      <div className="mx-auto w-screen bg-background ">
        <Helmet>
          <title className="sr-only">MySchedule - WonT</title>
        </Helmet>
        <MyPageHeader page="mypage" />
        <div className="container mx-auto flex min-h-screen min-w-[22.5rem] flex-col items-center  bg-background pb-14">
          <div className="flex flex-col items-center pb-11 pt-7">
            <span className="mb-[1.375rem] text-[1.5rem] font-extrabold leading-normal text-contentsPrimary">
              마이 페이지
            </span>
            {user.profile ? (
              <img
                src={getPocketHostProfileURL(user)}
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
          <div className="mx-auto ">
            <MyPageTab positionText="right" />
            <div className="flex max-w-[1268px]   flex-col justify-center px-3 md:px-4">
              <MyPageTabInfo tab="북마크" />
              <BookmarkList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookmarkPage;
