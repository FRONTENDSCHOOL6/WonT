import { Key, SetStateAction, useEffect, useId, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

import pocketbase from '@/api/pocketbase';
import TripHeader from '@/components/Header/TripHeader';
import Modal from '@/components/Modal';
import ToggleTotalSchedule from '@/components/MyScheduleDetail/ToggleTotalSchedule';
import Map from '@/components/Map';
import ButtonLarge from '@/components/ButtonLarge';
import DeleteButton from '@/components/DeleteButton';
import TotalScheduleSummary from '@/components/MyScheduleDetail/TotalScheduleSummary';
import DayScheduleItem from '@/components/MyScheduleDetail/DayScheduleItem';
import TotalScheduleView from '@/components/MyScheduleDetail/TotalScheduleView';
import Spinner from '@/components/Spinner/Spinner';
import { ButtonStore } from '@/store/buttonStore';
import { ToggleTripMenuStore } from '@/store/toggleTripMenuStore';
import { getPocketHostImageURL, setLocalName, getTripDate } from '@/utils';
import { ErrorType, RecordModel, SelectBookmarkItem } from '@/types/Travels';

// 데이터 요청 함수 (query function)
const fetchScheduleDetail = async (userId: number | string) => {
  const response = await pocketbase.collection('mySchedule').getFullList({
    filter: `(username?~'${userId}')`,
    expand: 'users',
  });
  return response;
};

function MyScheduleDetailPage() {
  // 경로 지정
  const navigate = useNavigate();

  // 키 지정
  const ID = useId();

  // 아이디 일치여부
  // let userId = pocketbase.authStore.model;
  const userId: { id: string } = pocketbase.authStore.model as {
    id: string;
  };

  // Tanstack Query
  const { data, isLoading, error } = useQuery(
    ['myScheduleDetail', userId.id],
    () => fetchScheduleDetail(userId.id),
    { refetchOnWindowFocus: false }
  );

  // 선택한 북마크 아이디 및 store 저장
  // const [bookmarkId, setBookmarkId] = useState([]);
  const [bookmarkId, setBookmarkId] = useState<string | undefined>(undefined);

  const params = useParams();

  useEffect(() => {
    if (params.detailId !== undefined) {
      setBookmarkId(params.detailId);
    }
  }, [params.detailId]);

  // const selectBookmark = data?.filter((item) => item.id === bookmarkId);
  const selectBookmark: SelectBookmarkItem | undefined = data?.find(
    (item) => item.id === bookmarkId
  ) as SelectBookmarkItem | undefined;
  // const selectBookmark: SelectBookmarkItem | undefined = data
  //   ?.filter(
  //     (item) =>
  //       item.item && item.item.id === (bookmarkId ? bookmarkId[0] : undefined)
  //   )
  //   .map((item) => item.item)[0];
  // const selectBookmark: SelectBookmarkItem | undefined = data
  //   ?.filter(
  //     (item) =>
  //       item.item && item.item.id === (bookmarkId ? bookmarkId[0] : undefined)
  //   )
  //   .map((item) => item.item)[0];

  const {
    displayTotalschedule,
    displayDeleteModal,
    displayDaySchedule,
    toggleTotalschedule,
    toggleDeleteModal,
    toggleDaySchedule,
  } = ToggleTripMenuStore();

  // 편집버튼 'hover'시
  const { editBackgroundColor, editTextColor, editMouseOver, editMouseOut } =
    ButtonStore();

  // 모달창 '예' 클릭시
  const handleYes = () => {
    toggleDeleteModal;
    navigate('/myschedule');
  };

  // 오류가 발생한 경우 화면
  if (error instanceof Error) {
    return (
      <div role="alert">
        <h2>{error.name}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>MySchedule/Detail - WonT</title>
      </Helmet>
      <section className="container relative mx-auto flex min-h-screen max-w-7xl flex-col gap-[1.875rem] bg-background">
        <h1 className="sr-only">나의 일정 상세 페이지</h1>
        <TripHeader
          isUserIcon={false}
          restProps={'absolute left-1/2 -translate-x-[1.6875rem]'}
        />
        <ToggleTotalSchedule
          state={displayTotalschedule}
          action={toggleTotalschedule}
        >
          나의 일정
        </ToggleTotalSchedule>
        {displayTotalschedule && (
          <section className="flex flex-col gap-[1.875rem]">
            <h2 className="sr-only">전체 일정 한눈에 보기</h2>
            <div className="modal relative mx-[1.25rem] h-[8.125rem] overflow-hidden rounded-md bg-white sm:h-44 md:h-64 md:max-w-[46.875rem]">
              {/*  {isLoading ? (
                <Spinner />
              ) : (
                selectBookmark?.items?.map((item) => (
                  <TotalScheduleSummary
                    key={item.id}
                    imageURL={item.main ? getPocketHostImageURL(item) : null}
                    localName={setLocalName(item.title)}
                    startDay={getTripDate(item.start_date)}
                    endDay={getTripDate(item.end_date)}
                  />
                ))
              )} */}
              <DeleteButton onClick={toggleDeleteModal} />
            </div>
            {displayDeleteModal && (
              <Modal handleYes={handleYes} handleNo={toggleDeleteModal}>
                정말 삭제하시겠습니까?
              </Modal>
            )}
            {selectBookmark && (
              <TotalScheduleView selectBookmark={[selectBookmark]} />
            )}
          </section>
        )}
        <hr className="aria-hidden mx-5" />
        <Map
          width="w-[85%]"
          height="h-[18rem] sm:h-[22rem] md:h-[26rem] lg:h-[30rem]"
          restProps={'mx-auto modal'}
        />
        <section className="mb-28">
          <h2 className="sr-only">날짜별 일정 보기</h2>

          <ToggleTotalSchedule
            state={displayDaySchedule}
            action={toggleDaySchedule}
          >
            Day 1
          </ToggleTotalSchedule>
          {displayDaySchedule && (
            <>
              <ul className="mx-7 mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {/* {selectBookmark ? (
                  selectBookmark.place[1]?.map((item, index) => (
                    <DayScheduleItem
                      key={item.id}
                      placeName={item.place_name}
                      placeType={item.category_name.slice(13)}
                      address={item.address_name}
                      count={index + 1}
                    />
                  ))
                ) : ( */}
                <DayScheduleItem />
                {/* )} */}
              </ul>
              <ul className="mx-7 mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {selectBookmark ? (
                  selectBookmark.hotel[1]?.map((item, index) => (
                    <DayScheduleItem
                      key={item.id}
                      placeName={item.place_name}
                      placeType={item.category_name}
                      address={item.address_name}
                      count={index + 1}
                    />
                  ))
                ) : (
                  <DayScheduleItem
                    placeName="숙소명"
                    placeType="숙소 분류"
                    backgroundColor="bg-point"
                    textColor="text-point"
                  />
                )}
              </ul>
            </>
          )}
        </section>
        <Link to={`/tripedit/${params.detailId}`}>
          <ButtonLarge
            onMouseOver={editMouseOver}
            onMouseOut={editMouseOut}
            textColor={editTextColor}
            color={editBackgroundColor}
            restProps="border border-contentsSecondary absolute left-1/2 -translate-x-[11.25rem] bottom-10"
          >
            일정편집
          </ButtonLarge>
        </Link>
      </section>
    </>
  );
}
export default MyScheduleDetailPage;
