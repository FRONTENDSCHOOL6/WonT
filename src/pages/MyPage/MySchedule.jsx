import { useQuery } from '@tanstack/react-query';
import pocketbase from '@/api/pocketbase';
import MyPageHeader from '@/components/PageHeader';
import MyPageTab from '@/components/MyPage/MyPageTab';
import PlanPreview from '@/components/MyPage/PlanPreview';
import Profile from '@/components/MyPage/Profile';
import { getPocketHostImageURL, getPocketHostURL } from '@/utils/index.js';
import MyPageTabInfo from '@/components/MyPage/MyPageTabInfo';
import { Helmet } from 'react-helmet-async';

const getUser = () =>
  fetch(`${getPocketHostURL('users')}`).then((response) => response.json());
const getMyschedule = () =>
  fetch(`${getPocketHostURL('mySchedule')}`).then((response) =>
    response.json()
  );

export default function MySchedule() {
  const { data: userData } = useQuery(['users'], getUser);
  const { data: myschedule } = useQuery(['mySchedule'], getMyschedule);
  // console.log(myschedule);

  let userId = pocketbase.authStore.model;

  const userSchedule = myschedule?.items?.filter(
    (item) => item.username === userId.id
  );

  if ((userId, userSchedule)) {
    return (
      <div className="mx-auto w-screen min-w-[22.5rem]  ">
        <Helmet>
          <title className="sr-only">MySchedule - WonT</title>
        </Helmet>
        <div className="flex  min-h-screen flex-col items-center bg-background pb-14">
          <MyPageHeader page="mypage" />
          <div className="flex flex-col items-center pb-11 pt-7">
            <span className="mb-[1.375rem] text-[1.5rem] font-extrabold leading-normal text-contentsPrimary ">
              마이 페이지
            </span>
            {userId.profile ? (
              <img
                src={getPocketHostImageURL(userId, 'profile')}
                alt={`${userId.username}의 프로필`}
                className=" h-[70px] w-[70px] rounded-full border-[0.0938rem] border-contentsSecondary "
              />
            ) : (
              <Profile />
            )}
            <span className="text-[1.125rem] text-contentsSecondary">
              {userId.username}
            </span>
          </div>

          <div className="container mx-auto flex flex-col justify-center">
            <MyPageTab position="left" tab="myschedule" menu="나의 일정" />
            <div className=" max-w-[1280px] self-center  px-3 md:px-4">
              <MyPageTabInfo tab="나의 일정" />
              <PlanPreview userSchedule={userSchedule} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
