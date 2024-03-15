import { SelectHotelMapProps } from '@/types/TripEdit';
import { useEffect, useState } from 'react';

const { kakao } = window;

function SelectHotelMap({
  hotelList,
  placeList,
  width = 'w-full',
  height = 'h-[25rem]',
  latitude = 37.4812845080678,
  longitude = 126.952713197762,
  level = 3,
  index,
  restProps,
}: SelectHotelMapProps) {
  useEffect(() => {
    // 지도를 표시할 div 요소를 가져옵니다.
    const container = document.getElementById('map');

    // 지도의 중심좌표와 확대 레벨을 설정합니다.
    const options = {
      center: new kakao.maps.LatLng(37.5662952, 126.9779451), // 중심 좌표 (서울)
      level: 5, // 지도 확대 레벨
    };

    // 지도 객체를 생성합니다.
    const map = new kakao.maps.Map(container, options);

    // 마커를 클릭하면 나타날 인포윈도우를 생성합니다.
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1, content: '' });

    // 주소 - 좌표 변환 객체
    const geocoder = new kakao.maps.services.Geocoder();

    const tripList = [...placeList, ...hotelList];

    // hotelData를 반복하여 각 위치에 마커 표시
    tripList.forEach((locations, index) => {
      locations.forEach(
        (item: { y: number; x: number; place_name: string }) => {
          // 마커의 위치를 설정합니다.
          const markerPosition = new kakao.maps.LatLng(item.y, item.x);

          // 마커를 생성합니다.
          const marker = new kakao.maps.Marker({
            position: markerPosition,
          });

          // 마커를 지도에 추가합니다.
          marker.setMap(map);
          let center = map.getCenter();
          // console.log(center);

          kakao.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(
              `<div style="padding:5px;font-size:12px;">${item.place_name}</div>`
            );
            infowindow.open(map, marker);
          });
          // 마커가 찍힌 위치로 지도 중심 이동
          map.setCenter(markerPosition);
        }
      );
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}
export default SelectHotelMap;
