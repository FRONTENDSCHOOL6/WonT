import { useId } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import MyPageHeader from '@/components/PageHeader';
import Map from '@/components/Map';
import ToggleTotalSchedule from '@/components/MyScheduleDetail/ToggleTotalSchedule';
import DayScheduleItem from '@/components/MyScheduleDetail/DayScheduleItem';
import {
  getPocketHostImageURL,
  getPocketHostProfileURL,
  getPocketHostURL,
} from '@/utils';
import { ToggleTripMenuStore } from '@/store/toggleTripMenuStore';
import { TravelsData, UserItems } from '@/types/Travels';
import { useParams } from 'react-router-dom';

const getTravels = () =>
  fetch(`${getPocketHostURL('travels')}`).then((res) => res.json());
const getUser = () =>
  fetch(`${getPocketHostURL('users')}`).then((res) => res.json());
// 여행기 페이지
function TravelsPage() {
  const { displayDaySchedule, toggleDaySchedule } = ToggleTripMenuStore();
  const { data: travelsData } = useQuery(['travels'], getTravels);
  const { data: userData } = useQuery(['users'], getUser);

  const currentPath = window.location.pathname.replace('/travels/', '');

  const detailTravels: TravelsData = travelsData?.items?.find(
    (item: TravelsData) => item.id === currentPath
  );

  const user: UserItems = userData?.items?.find(
    (item: { id: string }) => item.id === detailTravels?.userEmail
  );
  // console.log(detailTravels.image.map((item) => item));
  // console.log(getPocketHostImageURL(user));

  // console.log(detailTravels);
  // console.log(user);

  const id = useId();
  if (detailTravels && user) {
    return (
      <div className="mx-auto min-h-screen w-screen min-w-[22.5rem] bg-background pb-10">
        <Helmet>
          <title className="sr-only">Travels - WonT</title>
        </Helmet>
        <div>
          <MyPageHeader page="detail" />
          <div className="container flex flex-col items-center justify-center">
            <section className="px-3">
              <div className=" px-6">
                <h2 className="my-4 ml-2 text-2xl font-bold text-contentsPrimary">
                  여행기록
                </h2>
                <hr className="aria-hidden" />
                <div className="my-5 flex items-center gap-3">
                  <img
                    src={getPocketHostProfileURL(user)}
                    alt={`${user.username}님의 프로필`}
                    className=" h-16 w-16 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-contentsPrimary">
                      {detailTravels.title}
                    </p>
                    <p className="font-light text-gray-1">
                      {user.username}님의 일정
                    </p>
                  </div>
                </div>
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showThumbs={false}
                  showIndicators={false}
                  className="mx-auto flex min-w-[90%] items-center justify-center overflow-hidden rounded-xl sm:w-[40rem] md:h-[25rem] md:w-[48rem] lg:h-[31.25rem] lg:w-[64rem] xl:w-[77.25rem]"
                >
                  {detailTravels.image.map((image: string, index: number) => (
                    <div key={index}>
                      <img
                        src={`${import.meta.env.VITE_PB_API}/files/${
                          detailTravels.collectionId
                        }/${detailTravels.id}/${image}`}
                        alt={`이미지 ${index + 1}`}
                        className="my-1 h-full items-center object-fill"
                      />
                    </div>
                  ))}
                </Carousel>
                <p className="my-5 leading-normal text-contentsPrimary">
                  {detailTravels.text}
                </p>
              </div>
            </section>
          </div>
          <section className="container flex w-[90%] flex-col items-center">
            <h2 className="sr-only">날짜별 일정 보기</h2>
            <div className="my-8 flex w-[90%] max-w-7xl border-b-[0.0625rem] border-gray-3"></div>
            <Map
              width="min-w-[90%] sm:w-[37.5rem] md:w-[45.5rem] lg:w-[60rem] xl:w-[77.25rem] "
              height="lg:h-[31.25rem] min-h-[22rem]"
            />
            <div className="w-full xl:w-[90%] ">
              <ToggleTotalSchedule
                state={displayDaySchedule}
                action={toggleDaySchedule}
              >
                Day 1
              </ToggleTotalSchedule>
              {displayDaySchedule && (
                <>
                  <ul className="mx-7 mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    <DayScheduleItem />
                    <DayScheduleItem />
                    <DayScheduleItem />
                  </ul>
                  <ul className="mx-7 mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    <DayScheduleItem
                      placeName="숙소명"
                      placeType="숙소 분류"
                      backgroundColor="bg-point"
                      textColor="text-point"
                    />
                  </ul>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default TravelsPage;
