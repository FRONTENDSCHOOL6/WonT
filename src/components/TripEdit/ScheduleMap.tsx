import { useEffect, useState } from 'react';

import { debounce } from '@/utils/debounce';
import {
  AddressSearchResult,
  DisplayMarkerPlace,
  MapProps,
} from '@/types/TripEdit';

const kakao = window.kakao;

function Map({
  width = 'w-full',
  height = 'h-[25rem]',
  latitude = 37.4812845080678,
  longitude = 126.952713197762,
  level = 3,
  restProps,
}: MapProps) {
  // const kakao = window.kakao;
  const [center, setCenter] = useState(
    new kakao.maps.LatLng(latitude, longitude)
  );

  const container = document.getElementById('map');
  const options = {
    center: new window.kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };
  const map = new window.kakao.maps.Map(container, options);
  // const map = new kakao.maps.Map(container, options);
  const places = new kakao.maps.services.Places();

  useEffect(() => {
    const container = document.getElementById('mapHotel');
    const options = {
      level: level, // 지도의 확대 레벨. 3
      center: center,
    };

    //* TODO: data, status, pagination 타입 재지정 필요
    function categorySearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          // data[i]를 활용하는 코드를 작성합니다.
        }
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        // 검색 결과가 없는 경우, 필요한 처리를 합니다.
      } else if (status === kakao.maps.services.Status.ERROR) {
        // 검색 중 에러가 발생한 경우, 에러를 처리하는 코드를 작성합니다.
      }
    }

    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: level,
      };
      const map = new kakao.maps.Map(container, options);
      const updateCenter = debounce((latitude, longitude) => {
        map.panTo(new kakao.maps.LatLng(latitude, longitude));
      }, 300);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log(
            `현재 위치는 위도 ${latitude}, 경도 ${longitude}이고 지도 확대 레벨은 ${level}입니다.`
          );
          updateCenter(latitude, longitude);
        });
      } else {
        const defaultPosition = new kakao.maps.LatLng(latitude, longitude);
        setCenter(defaultPosition);
      }

      const geocoder = new kakao.maps.services.Geocoder();

      //# 1. 현재 선택한 지역으로 좌표를 검색합니다
      //* TODO: status 타입 재지정 필요
      geocoder.addressSearch(
        '부산',
        function (result: AddressSearchResult[], status: any) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);

            //^ 카테고리 검색 (SW8)
            const categoryOptions = {
              location: coords,
              radius: 10000,
            };
            const hotelCategory = '';
            places.categorySearch(
              hotelCategory,
              categorySearchCB,
              categoryOptions
            );
          }
        }
      );

      // 장소 검색 객체를 생성합니다
      var ps = new kakao.maps.services.Places(map);

      ps.categorySearch('BK9', placesSearchCB, { useMapBounds: true });

      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      //* TODO: data, status, pagination 타입 재지정 필요
      function placesSearchCB(data: any, status: any, pagination: any) {
        if (status === kakao.maps.services.Status.OK) {
          for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
          }
        }
      }

      function displayMarker(place: DisplayMarkerPlace) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              '</div>'
          );
          infowindow.open(map, marker);
        });
      }
    });
  }, []);

  return <div id="map" className={`${height} ${width} ${restProps}`}></div>;
}

export default Map;
