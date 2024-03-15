import { useEffect, useState } from 'react';
import { MapStore, MapStoreState } from '@/store/mapStore';
import { debounce } from '@/utils/debounce';
import { MapProps } from '@/types/TripEdit';

const kakao = window.kakao;

function Map({
  width = 'w-full',
  height = 'h-[25rem]',
  latitude = 37.4812845080678,
  longitude = 126.952713197762,
  level = 3,
  restProps,
}: MapProps) {
  const [center, setCenter] = useState(
    new kakao.maps.LatLng(latitude, longitude)
  );
  // const { hotelList, setHotelList } = MapStore();
  const { hotelList, setHotelList }: MapStoreState = MapStore.getState();
  console.log(hotelList);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: center, // 지도의 중심좌표. 37.4812845080678, 126.952713197762
      level: level, // 지도의 확대 레벨. 3
    };

    // 지도 생성하기
    const map = new kakao.maps.Map(container, options);

    // 마커를 표시할 위치와 title 객체 배열입니다
    //* TODO: position 타입 재정의 필요
    let positions: any[] = [];

    // hotelList 배열을 순회하면서 positions 배열에 데이터를 추가
    hotelList?.forEach((item: { place_name: string; x: number; y: number }) => {
      positions.push({
        title: item.place_name,
        latlng: new kakao.maps.LatLng(item.x, item.y),
      });
    });

    for (var i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });
    }

    // console.log(marker);
    console.log(positions[0]);

    const updateCenter = debounce((latitude, longitude) => {
      map.panTo(new kakao.maps.LatLng(latitude, longitude));
    }, 300);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성하기
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    map.setZoomable(true); // 지도 스크롤 이벤트 - 확대, 축소 막기
    map.setCursor('move'); // 커서 스타일을 변경

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        console.log(
          `현재 위치는 위도 ${lat}, 경도 ${lon}이고 지도 확대 레벨은 ${level}입니다.`
        );
        updateCenter(lat, lon);
      });
    } else {
      const defaultPosition = new kakao.maps.LatLng(latitude, longitude);
      setCenter(defaultPosition);
    }
  }, []);

  return <div id="map" className={`${height} ${width} ${restProps}`}></div>;
}

export default Map;
