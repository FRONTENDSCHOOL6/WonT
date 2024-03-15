import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

import pocketbase from '@/api/pocketbase';
import TripHeader from '@/components/Header/TripHeader';
import HambugerButton from '@/components/TripSelect/HambugerButton';
import MapPlace from '@/components/TripSelect/MapPlace';
import TripPlaceItem from '@/components/TripSelect/TripPlaceItem';
import TripPlanMenu from '@/components/TripSelect/TripPlanMenu';
import AddPlaceItem from '@/components/TripSelect/AddPlaceItem';
import useFetchMySchedule from '@/hooks/useFetchMySchedule';
import { MapStore } from '@/store/mapStore';
import { ToggleTripMenuStore } from '@/store/toggleTripMenuStore';
import { ScheduleStore } from '@/store/scheduleStore';

function TripPlacePage() {
  const {
    displayPlaceTripPlan,
    displayPlaceList,
    togglePlaceTripPlan,
    togglePlaceList,
  } = ToggleTripMenuStore(); // 토글 메뉴

  const { placeList } = MapStore(); // 지도에 표시되는 숙소 목록

  const { placePositions } = ScheduleStore(); // 추가한 장소 목록
  // console.log(placePositions);

  const currentIndex = Number(useParams().indexId); // 현재 경로

  const user = pocketbase.authStore.model; // 로그인 유저 정보

  // 현재 선택한 schedule 데이터
  const { data } = useQuery(
    ['mySchedule', user?.id],
    () => (user ? useFetchMySchedule(user.id) : null),
    { refetchOnWindowFocus: false }
  );

  return (
    <>
      <Helmet>
        <title>TripPlace - WonT</title>
      </Helmet>
      <section className="container relative mx-auto min-h-[50rem]">
        <h1 className="sr-only">여행 장소 선택 페이지</h1>
        <TripHeader />
        <TripPlanMenu
          state={displayPlaceTripPlan}
          action={togglePlaceTripPlan}
          data={data}
        />
        <div className="map_wrap relative">
          <MapPlace placeName={data?.title} />
        </div>

        <ul
          id="placesList"
          className="mx-7 my-7 flex h-[23.1875rem] flex-col gap-[0.5625rem] overflow-y-scroll sm:h-[28.5625rem] md:grid md:grid-cols-2 lg:grid-cols-3 xl:h-[34.5rem]"
        >
          {placeList?.map((place: any, index: number) => (
            <TripPlaceItem
              key={place.id}
              placeName={place.place_name}
              address={place.address_name}
              count={index}
              index={currentIndex}
            />
          ))}
        </ul>
        <div className="modal absolute bottom-0 z-10 w-full rounded-t-3xl bg-[#E4F5FF]">
          <HambugerButton onClick={togglePlaceList} />
          {displayPlaceList && (
            <div className="mx-[1.8125rem] mt-[0.5rem] min-h-[7.125rem]">
              <h2 className="mb-[0.625rem] text-base font-light text-contentsPrimary">
                장소
              </h2>
              {Array.isArray(placePositions[currentIndex]) &&
              placePositions[currentIndex].length > 0 ? (
                <ul className="mb-[0.625rem] flex max-h-[9.5rem] flex-col gap-[0.625rem] overflow-y-scroll md:grid md:grid-cols-2 lg:grid-cols-4">
                  {placePositions[currentIndex]?.map(
                    (item: any, index: number) => (
                      <AddPlaceItem
                        key={item.id + index}
                        placeName={item.place_name}
                        count={index + 1}
                      />
                    )
                  )}
                </ul>
              ) : (
                <span className="absolute left-1/2 top-1/2 -translate-x-[4.5rem] text-lg font-medium text-[#5A80A9]/50">
                  장소를 추가해주세요.
                </span>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default TripPlacePage;
