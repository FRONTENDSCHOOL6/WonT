import { useState, useId } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

import pocketbase from '@/api/pocketbase';
import Header from '@/components/Header/Header';
import TripPlan from '@/components/TripPlan';
import AddPlan from '@/components/TripEdit/AddPlan';
import ButtonMedium from '@/components/TripEdit/ButtonMedium';
import PlanDate from '@/components/TripEdit/PlanDate';
import { getRangeDay } from '@/utils/getRangeDay';
import SelectHotelMap from '@/components/TripEdit/SelectHotelMap';
import { DateStore } from '@/store/dateStore';
import PlacePlan from '@/components/TripEdit/PlacePlan';
import { useScheduleStore } from '@/store/scheduleStore';
import { RecordModel } from 'pocketbase';
import { PlaceListData, hotelListData } from '@/types/TripEdit';

/* -------------------------------------------------------------------------- */

const fetchMySchedule = async (userId: string) => {
  const response = await pocketbase.collection('mySchedule').getFullList({
    filter: `(username?~'${userId}')`,
    expand: 'users',
    sort: '-updated',
  });
  return response[0];
};
const getRecommends = async (userId: string) => {
  return await pocketbase.collection('recommends').getFullList();
};

/* -------------------------------------------------------------------------- */

function TripEditPage() {
  const user = pocketbase.authStore.model as RecordModel;

  const currentPath = useParams();
  const [toggleSchedule, setToggleSchedule]: [
    boolean,
    (value: boolean) => void,
  ] = useState(false);

  const handleToggle: () => void = () => {
    setToggleSchedule(!toggleSchedule);
  };

  // Tanstack Query
  const { data, error, isLoading } = useQuery(
    ['mySchedule', user.id],
    () => fetchMySchedule(user.id),
    { refetchOnWindowFocus: false }
  );

  const selectDate = DateStore((state) => state.tripDate);
  const selectRangeDate = getRangeDay(selectDate[0], selectDate[1]);

  const {
    hotelPositions,
    placePositions,
    resetHotelPositions,
    resetPlacePositions,
  } = useScheduleStore();
  const hotelList: hotelListData[] = Object.values(hotelPositions);
  const placeList: PlaceListData[] = Object.values(placePositions);
  // const removeSchedule = TripScheduleStore((state) => state.reset);
  const id = useId();

  const handleResetButtonClick: () => void = () => {
    resetHotelPositions();
    resetPlacePositions();
  };

  return (
    <div className="bg-background">
      <Helmet>
        <title className="sr-only">TripEdit - Wont</title>
      </Helmet>
      <Header />
      <div className="w-auto ">{<TripPlan data={data} />}</div>
      <div className="container mx-auto min-w-[22.5rem] bg-background pb-14">
        <div className={`mx-auto mt-[10px] max-w-7xl`}>
          <SelectHotelMap
            height={'h-[31.25rem]'}
            hotelList={hotelList}
            placeList={placeList}
          />

          {hotelList.length >= 0
            ? selectRangeDate?.map((item, index) => (
                <div key={index}>
                  <PlanDate
                    toggleButton={handleToggle}
                    toggleSchedule={toggleSchedule}
                    setToggleSchedule={setToggleSchedule}
                    item={item}
                    index={index}
                  />

                  <div className={`${toggleSchedule ? 'hidden' : ''}`}>
                    <PlacePlan
                      select="장소"
                      placeList={placeList[index]}
                      count={index}
                    />
                    <Link to={`/tripplace/${data?.id}/${index + 1}`}>
                      <ButtonMedium fill={false} text="일정 추가" />
                    </Link>

                    <PlacePlan
                      select="숙소"
                      hotelList={hotelList[index]}
                      index={index}
                    />

                    <Link to={`/triphotel/${data?.id}/${index + 1}`}>
                      <ButtonMedium fill={false} text="숙소 추가" />
                    </Link>
                  </div>
                </div>
              ))
            : selectRangeDate?.map((item, index) => (
                <div key={index}>
                  <PlanDate
                    toggleButton={handleToggle}
                    toggleSchedule={toggleSchedule}
                    setToggleSchedule={setToggleSchedule}
                    item={item}
                    index={index}
                  />

                  <div className={`${toggleSchedule ? 'hidden' : ''}`}>
                    <AddPlan text="장소" />

                    <Link to={`/tripplace/${data?.id}/${index + 1}`}>
                      <ButtonMedium fill={false} text="일정 추가" />
                    </Link>

                    <AddPlan text="숙소" />

                    <Link to={`/triphotel/${data?.id}/${index + 1}`}>
                      <ButtonMedium fill={false} text="숙소 추가" />
                    </Link>
                  </div>
                </div>
              ))}

          <div className={toggleSchedule ? 'pt-0' : 'py-10'}>
            <ButtonMedium menu="저장" fill={true} text="저장" />
            <ButtonMedium
              menu="저장"
              color="bg-[#F97660]"
              text="취소"
              onClick={handleResetButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripEditPage;
