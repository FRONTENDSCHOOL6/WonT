import { useEffect, useState } from 'react';
import { MapStore } from '@/store/mapStore';
import { debounce } from '@/utils/debounce';

interface MapHotelProps {
  localName?: string;
  width?: string;
  height?: string;
  latitude?: number;
  longitude?: number;
  level?: number;
  restProps?: string;
}

const { kakao } = window;

function MapHotel({
  localName,
  width = 'w-full',
  height = 'min-h-[18.75rem] sm:h-[22rem] md:h-[26rem] lg:h-[30rem]',
  latitude = 37.4812845080678, // 위도
  longitude = 126.952713197762, // 경도
  level = 6, // 지도 확대 레벨
  restProps,
}: MapHotelProps) {
  const [center] = useState(new kakao.maps.LatLng(latitude, longitude));

  const hotelCategory = 'AD5'; // 숙소 카테고리

  let markers: any = []; //$ 마커, Type 수정 예정
  const { setHotelList } = MapStore(); // 숙소 목록

  useEffect(() => {
    const container = document.getElementById('mapHotel');
    const options = {
      center: center, // 지도의 중심좌표. 33.450701, 126.570667
      level: level, // 지도의 확대 레벨. 3
    };

    // 지도 생성하기
    const map = new kakao.maps.Map(container, options);

    // 주소 - 좌표 변환 객체
    const geocoder = new kakao.maps.services.Geocoder();

    // 장소 검색 객체 - 카테고리 및 키워드 검색
    const places = new kakao.maps.services.Places(map);

    // 인포 윈도우 - 마커 클릭, hover 시 장소명을 표출
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 지도 줌 컨트롤, 스크롤 이벤트, 커서 스타일 관리하기
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // map.setZoomable(false); // 지도 스크롤 이벤트 - 확대, 축소 막기
    map.setCursor('move'); // 커서 스타일을 'move'로 변경

    //# 카테고리 삭제 함수
    function removeMarker() {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    //# 카테고리 검색 완료 시 호출되는 콜백함수
    function categorySearchCB(data: any, status: any) {
      //$ any Type 수정 예정
      //* pagination
      removeMarker();
      setHotelList(data);

      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('해당 지역에는 원하는 숙소가 없습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('숙소 검색 중 오류가 발생했습니다.');
        return;
      }
    }

    //# 지도에 마커를 표시하는 함수
    function displayMarker(place: any) {
      //$ any Type 수정 예정
      // 마커를 생성하고 지도에 표시합니다
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        // image
      });

      markers.push(marker);

      const info = `<div style="margin:0.3125rem;font-size:0.75rem;background:#C9ECFF;color:#152644;">
      <dl>
      <div style="display:flex;gap:0.25rem;"><dt>숙소명</dt><dd>${place.place_name}</dd></div>
      <div style="display:flex;gap:0.25rem;"><dt>주소</dt><dd}>${place.road_address_name}</dd></div>
        </dl>
        <div style="display:flex;gap:0.25rem;"><span>URL: </span><a target="_blank" rel="noopener noreferrer" href=${place.place_url} style="color:#F97660">${place.place_url}</a></div></div>`;

      // 마커에 이벤트를 등록합니다.
      //- mouseover
      kakao.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.setContent(info);
        infowindow.open(map, marker);
      });

      //- click
      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(info);
        infowindow.open(map, marker);
      });

      //- mouseout
      kakao.maps.event.addListener(
        marker,
        'mouseout',
        debounce(function () {
          infowindow.close();
        }, 4000)
      );
    }

    //# 1. 현재 선택한 지역으로 좌표를 검색합니다
    geocoder.addressSearch(localName, function (result: any, status: any) {
      //$ any Type 수정 예정
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);

        // 카테고리 - 숙박(숙소) 검색
        const categoryOptions = {
          location: coords,
          radius: 10000,
        };
        places.categorySearch(hotelCategory, categorySearchCB, categoryOptions);
      }
    });

    //# 2. 지도 이동 이벤트를 감지하여 중심 좌표를 업데이트합니다.
    kakao.maps.event.addListener(
      map,
      'idle',
      debounce(function () {
        const newCenter = map.getCenter();
        places.categorySearch(hotelCategory, categorySearchCB, {
          location: newCenter,
          radius: 10000,
        });
      })
    );
  }, [center, level, setHotelList]);

  return (
    <div
      id="mapHotel"
      className={`${height} ${width} modal mx-auto mt-6 ${restProps}`}
    ></div>
  );
}

export default MapHotel;
