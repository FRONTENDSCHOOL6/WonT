# [멋사 6기🦁 | 멋쟁이 🔟조 | React 프로젝트 리팩토링]

![readme-logo](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/dcc77ab4-96b6-4329-92bb-fcc80a3e079d)

## 📋목차

0. [🎮 프로젝트 사용법](#-프로젝트-사용법)
1. [✈️ 프로젝트 소개](#-프로젝트-소개)
2. [🏠 팀 소개](#-팀-소개)
3. [📖 담당페이지](#-담당페이지)
4. [📅 프로젝트 일정](#-프로젝트-일정)
5. [📝 기술스택](#-기술스택)
6. [🔪 컨벤션](#-컨벤션)
7. [📂 폴더구성](#-폴더구성)
8. [🌈 유저 플로우](#-유저플로우)
9. [🎥 화면구성](#-화면구성)
10. [😋 프로젝트 소감](#-프로젝트-소감)

<br>
<br>
<br>

## 🎮 프로젝트 사용법

##### 패키지 설치

```
pnpm i / pnpm install
```

##### 클라이언트 실행

```
pnpm dev
```

<br>
<br>
<br>

## ✈️ 프로젝트 소개

- 프로젝트 이름 : WonT ( We on Trip )
- 프로젝트 목적 : 여행 일정 관리 구현 및 리팩토링
- 리팩토링 기간 : 240103 ~ 240131
- 배포주소 : [WonT](https://weontrip.vercel.app/)

![readme-main](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/907787e3-e95f-4794-b278-e18bb3be214e)

<br>
<br>
<br>

## 🏠 팀 소개

| ![image](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/c97eeb1a-7293-4c13-97d0-dccd22a88dd5) | ![image](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/562e595f-b12f-49f2-bfb3-87ba2201ab4b) | ![image](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/33d929a1-9386-4935-8dd6-4bef0bb185fb) |
| :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
|                                                       전선용                                                        |                                                       장현주                                                        |                                                       정소이                                                        |
|                                      [Github 주소](https://github.com/sy0725)                                       |                                     [Github 주소](https://github.com/hyeonjuuu)                                     |                                       [Github 주소](https://github.com/uniS2)                                       |

<br>
<br>
<br>

## 📖 담당페이지

#### 📌전선용

- **랜딩페이지 (LandingPage)**

  - Carousel 라이브러리 활용한 랜딩 화면 구현
  - Framer Motion 라이브러리 활용한 전환 효과 구현
  - 반응형 페이지 구현

- **메인페이지 (MainPage)**

  - 데이터 Read, Update (GET, PUT)
  - useBookmarkStore() 이용한 상태 관리
  - 북마크 토글시 마이페이지/북마크 추가 및 삭제 기능 구현
  - 추천 여행지 리스트 렌더링
  - 여행기 리스트 렌더링
  - 반응형 페이지 구현

- **회원가입 / 로그인 (SignUp / SignInPage)**

  - 회원가입 데이터 Create (POST)
  - Auth() context 생성 및 <AuthProvider> 제공 통한 로그인, 회원가입 관련 인증 관리 기능 구현
  - useRef() 훅 활용한 로그인 정보 관리
  - react-toastify 라이브러리 활용한 경고/알림창 구현

#### 📌장현주

- **마이페이지 (나의 일정, 북마크. MyPage: Bookmark, MySchedule)**

  - user 데이터 렌더링
  - 북마크 기능 구현
  - 마우스 hover 효과
  - 일정 / 북마크 데이터 렌더링
  - D-day 날짜 계산

- **국내 추천 여행지 상세페이지 (DetailPage)**

  - 북마크 기능 구현(React-Query : useMutation)
  - fade-in 애니메이션 기능 구현
  - 여행지 데이터 렌더링
  - 링크 페이지로 이동(\_blank, noopener, norefferer)

- **여행기 상세페이지 (TravelsPage)**

  - 여행 데이터 렌더링
  - 이미지 캐러셀 기능
  - 지도뷰 (구현 미완료)

- **일정편집 (TripEditPage)**

  - 일정 데이터 렌더링
  - 추가된 데이터 지도에 마커로 표기
  - 추가된 데이터 일정 칸에 렌더링
  - 저장 기능
  - toggle 버튼 구현
  - 버튼 hover 효과

#### 📌정소이

- **전체 페이지**

  - Zustand 및 TanStack Query 라이브러리 사용
  - `usdNavigate()` 또는 `<Link />` 를 이용한 경로 이동

- **지역 선택 페이지 (TripLocalPage)**

  - 데이터 Read, Create (GET, POST)
  - localStore() 이용한 상태 관리

- **날짜 선택 페이지 (TripCalendarPage)**

  - 데이터 Update (PUT)
  - useDateStore() 이용한 상태 관리
  - 로그인 유저 정보를 이용한 TanStack Query 활용
  - react-calendar 활용한 달력 커스텀 및 접근성 개선

- **장소 및 숙소 선택 페이지 (TripPlacePage, MyHotelPage)**

  - 로그인 유저 정보 활용한 TanStack Query 활용
  - useToggleTripMenuStore(), MapStore(), ScheduleStore() 이용한 상태관리
  - kakao Map API 활용한 선택 지역 실시간 정보 렌더링 기능 구현
    - 현재 선택한 지역으로 중심 좌표 검색 및 설정 (지도 기본값)
    - 장소/숙소 카테고리 검색결과 마커로 표시 (최대 15개)
    - 마커로 표시된 장소목록 렌더링 및 선택 버튼 구현
    - 지도 이동시 중심 좌표 업데이트 및 리렌더링

- **나의 일정 상세 페이지 (MyScheduleDetailPage)**

  - 데이터 Read, Delete (GET, DELETE)
  - useButtonStore(), useToggleTripMenuStore() 이용한 상태관리

<br>
<br>
<br>

## [📅 프로젝트 일정](https://www.notion.so/10-abb34133d4cd4826b9533369f20ce9e7)

![readme-calender](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/7d7ccc5f-0af9-4762-8d1d-d2dfde6c64af)

<br>
<br>
<br>

## 📝 기술스택

![readme-stack](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/f5424f3a-9727-4e74-8336-b621c44004df)

<br>
<br>
<br>

## 🔪 컨벤션

### [Commit Convention ⚡](https://github.com/FRONTENDSCHOOL6/react-project-10/wiki/Commit-Convention-%E2%9A%A1)

### [Coding Convention ⚡](https://github.com/FRONTENDSCHOOL6/react-project-10/wiki/Coding-Convention-%E2%9A%A1)

### [MileStone ⚡](https://github.com/orgs/FRONTENDSCHOOL6/projects/29/views/1)

<br>
<br>
<br>

## 📂 폴더구성

<details>
<summary>폴더구성</summary>
<div markdown="1">
  
```
📦src
 ┣ 📂api
 ┃ ┗ 📜pocketbase.js
 ┣ 📂components
 ┃ ┣ 📂Detail
 ┃ ┃ ┗ 📜DetailInfo.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜BackIcon.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜TripHeader.jsx
 ┃ ┃ ┗ 📜UserIcon.jsx
 ┃ ┣ 📂Landing
 ┃ ┃ ┣ 📜CarouselDiv.jsx
 ┃ ┃ ┣ 📜LandingPagePartFour.jsx
 ┃ ┃ ┣ 📜LandingPagePartOne.jsx
 ┃ ┃ ┣ 📜LandingPagePartThree.jsx
 ┃ ┃ ┣ 📜LandingPagePartTwo.jsx
 ┃ ┃ ┗ 📜Sns.jsx
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜MainHeader.jsx
 ┃ ┃ ┣ 📜MainMakePlan.jsx
 ┃ ┃ ┣ 📜MainMoreButton.jsx
 ┃ ┃ ┣ 📜MainPlace.jsx
 ┃ ┃ ┣ 📜MainTitle.jsx
 ┃ ┃ ┗ 📜MainTravels.jsx
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📜BookmarkList.jsx
 ┃ ┃ ┣ 📜Logout.jsx
 ┃ ┃ ┣ 📜MyPageTab.jsx
 ┃ ┃ ┣ 📜MyPageTabInfo.jsx
 ┃ ┃ ┣ 📜PlanPreview.jsx
 ┃ ┃ ┗ 📜Profile.jsx
 ┃ ┣ 📂MyScheduleDetail
 ┃ ┃ ┣ 📜DayScheduleItem.jsx
 ┃ ┃ ┣ 📜ToggleTotalSchedule.jsx
 ┃ ┃ ┣ 📜TotalScheduleSummary.jsx
 ┃ ┃ ┣ 📜TotalScheduleView.jsx
 ┃ ┃ ┣ 📜TotalScheduleViewHotelDay.jsx
 ┃ ┃ ┣ 📜TotalScheduleViewImageList.jsx
 ┃ ┃ ┣ 📜TotalScheduleViewTitle.jsx
 ┃ ┃ ┗ 📜TotalScheduleViewTopic.jsx
 ┃ ┣ 📂Sign
 ┃ ┃ ┣ 📜BackButton.jsx
 ┃ ┃ ┣ 📜SignInButton.jsx
 ┃ ┃ ┣ 📜SignPart.jsx
 ┃ ┃ ┗ 📜SignUpButton.jsx
 ┃ ┣ 📂Spinner
 ┃ ┃ ┣ 📜spinner.css
 ┃ ┃ ┗ 📜Spinner.jsx
 ┃ ┣ 📂TripCalendar
 ┃ ┃ ┗ 📜TripCalendar.jsx
 ┃ ┣ 📂TripEdit
 ┃ ┃ ┣ 📜AddPlan.jsx
 ┃ ┃ ┣ 📜ButtonMedium.jsx
 ┃ ┃ ┣ 📜PlacePlan.jsx
 ┃ ┃ ┣ 📜PlanDate.jsx
 ┃ ┃ ┣ 📜ScheduleMap.jsx
 ┃ ┃ ┣ 📜SelectHotelMap.jsx
 ┃ ┃ ┣ 📜TripPlaneIcon.jsx
 ┃ ┃ ┗ 📜TripSchedule.jsx
 ┃ ┣ 📂TripLocal
 ┃ ┃ ┣ 📜ButtonSmall.jsx
 ┃ ┃ ┣ 📜LocalImage.jsx
 ┃ ┃ ┣ 📜LocalItem.jsx
 ┃ ┃ ┗ 📜LocalName.jsx
 ┃ ┣ 📂TripSelect
 ┃ ┃ ┣ 📜AddButton.jsx
 ┃ ┃ ┣ 📜AddPlaceItem.jsx
 ┃ ┃ ┣ 📜AddPlaceItemContent.jsx
 ┃ ┃ ┣ 📜CheckIcon.jsx
 ┃ ┃ ┣ 📜HambugerButton.jsx
 ┃ ┃ ┣ 📜HambugerIcon.jsx
 ┃ ┃ ┣ 📜MapHotel.jsx
 ┃ ┃ ┣ 📜MapPlace.jsx
 ┃ ┃ ┣ 📜PlusIcon.jsx
 ┃ ┃ ┣ 📜TripHotelItem.jsx
 ┃ ┃ ┣ 📜TripPlaceImage.jsx
 ┃ ┃ ┣ 📜TripPlaceInfo.jsx
 ┃ ┃ ┣ 📜TripPlaceItem.jsx
 ┃ ┃ ┗ 📜TripPlanMenu.jsx
 ┃ ┣ 📜BookMark.jsx
 ┃ ┣ 📜ButtonLarge.jsx
 ┃ ┣ 📜CloseIcon.jsx
 ┃ ┣ 📜DefaultImage.jsx
 ┃ ┣ 📜DeleteButton.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜LocationIcon.jsx
 ┃ ┣ 📜Logo.jsx
 ┃ ┣ 📜Map.jsx
 ┃ ┣ 📜Modal.jsx
 ┃ ┣ 📜PageHeader.jsx
 ┃ ┣ 📜ProtectRoute..jsx
 ┃ ┣ 📜ToggleDownIcon.jsx
 ┃ ┣ 📜ToggleUpIcon.jsx
 ┃ ┣ 📜TripPlan.jsx
 ┃ ┣ 📜TripPlanEditButton.jsx
 ┃ ┗ 📜TripTitle.jsx
 ┣ 📂contexts
 ┃ ┗ 📜Auth.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useFetchData.js
 ┃ ┣ 📜useFetchMySchedule.js
 ┃ ┣ 📜useRecommendsList.js
 ┃ ┣ 📜useScheduleList.js
 ┃ ┣ 📜useStorage.js
 ┃ ┗ 📜useTravlesList.js
 ┣ 📂pages
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📜BookmarkPage.jsx
 ┃ ┃ ┗ 📜MySchedule.jsx
 ┃ ┣ 📜DetailPage.jsx
 ┃ ┣ 📜LandingPage.jsx
 ┃ ┣ 📜MainPage.jsx
 ┃ ┣ 📜MyScheduleDetailPage.jsx
 ┃ ┣ 📜RootLayout.jsx
 ┃ ┣ 📜SignInPage.jsx
 ┃ ┣ 📜SignUpPage.jsx
 ┃ ┣ 📜TravelsPage.jsx
 ┃ ┣ 📜TripCalendarPage.jsx
 ┃ ┣ 📜TripEditPage.jsx
 ┃ ┣ 📜TripHotelPage.jsx
 ┃ ┣ 📜TripLocalPage.jsx
 ┃ ┗ 📜TripPlacePage.jsx
 ┣ 📂store
 ┃ ┣ 📜bookmarkStore.js
 ┃ ┣ 📜buttonStore.js
 ┃ ┣ 📜createStore.js
 ┃ ┣ 📜dateStore.js
 ┃ ┣ 📜localStore.js
 ┃ ┣ 📜mapStore.js
 ┃ ┣ 📜markerStore.js
 ┃ ┣ 📜memoStore.js
 ┃ ┣ 📜scheduleStore.js
 ┃ ┣ 📜selectRangeStore.js
 ┃ ┗ 📜toggleTripMenuStore.js
 ┣ 📂styles
 ┃ ┣ 📜calendar.css
 ┃ ┗ 📜tailwind.css
 ┣ 📂utils
 ┃ ┣ 📜createRecord.js
 ┃ ┣ 📜debounce.js
 ┃ ┣ 📜encoding.js
 ┃ ┣ 📜getDDay.js
 ┃ ┣ 📜getLocalName.js
 ┃ ┣ 📜getNode.js
 ┃ ┣ 📜getPocketHostImageURL.js
 ┃ ┣ 📜getPocketHostURL.js
 ┃ ┣ 📜getRangeDay.js
 ┃ ┣ 📜getTripDate.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜propTypes.js
 ┃ ┗ 📜updateRecord.js
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜routes.jsx
```
  
</div>
</details>

<br>
<br>
<br>

## 🌈 유저플로우

![readme-Wont Diagram](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/10dbbc8e-f3c0-46a4-8c71-ec53accc3609)

<br>
<br>
<br>

## 🎥 화면구성

- 유저플로우 순서로 구성하였습니다.

| LandingPage                                                                                                                             | SignUpPage                                                                                                                  | SignInPage                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![readme-landingpage-mobile](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/c0b564c7-6abc-41af-baa1-949b32f962fa) | ![readme-signup](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/2380e9ac-c99a-411b-ba8f-5548fb05929f) | ![readme-signin](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/18402940-40a4-4f8b-8a49-f71c6c4d81ba) |

| MainPage                                                                                                                      | TripLocalPage                                                                                                                    | TripCalendarPage                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ![readme-mainpage](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/570ea4fb-2118-48bf-b927-1e726058bdf4) | ![1 TripLocal_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/e5c4b8d6-9193-4e4d-801b-0a6b9b084dbd) | ![2 TripCalendar_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/12d7b483-cb8a-4f2b-ac74-19f67c9fbbe9) |

| TripEditPage                                                                                                           | TripPlacePage                                                                                                                    | MyHotelPage                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ![TripEdit](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/45c43401-3fbf-4a53-aff4-a756d0045974) | ![3 TripPlace_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/4be89a77-b194-4ff8-aea9-8e331a4e86f1) | ![4 TripHotel_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/3cc4dfa2-411c-484e-ad2f-47ec2d469369) |

| MyScheduleDetailPage                                                                                                                     | MyPage(BookMark)                                                                                                       | MyPage(MySchedule)                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![5 MySchedule_Detail_-_WonT](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/64658438-a428-4261-98db-f8477a04343e) | ![Bookmark](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/d35ac53c-e120-40b5-aa5c-5d214524c4f5) | ![MySchedule](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/50e4b019-4484-4e1b-9375-6603959d3d6a) |

| DetailPage                                                                                                           | TravelsPage                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![Detail](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/6b4fa551-e499-4da4-a1bc-2a8f26de337e) | ![Travels](https://github.com/FRONTENDSCHOOL6/react-project-10/assets/125878245/06d8e596-94ea-4b4b-80b5-d0d26026a407) |

<br>
<br>
<br>

## 😋 프로젝트 소감

#### 😝전선용

```txt
첫 장기프로젝트를 통해서 혼자 하는것보다는 함께 하는거에 대한 경험을 쌓으면서 많은 것을 배웠고,
규모가 커지면서 협업과 컴포넌트 분리의 중요성을 깨달았습니다.
그리고 아직은 많이 부족하지만 처음의 나보단 많이 성장한 나를 발견할 수 있게되는 좋은 경험이였고,
앞으로 더 성장할 수있다고 생각한 경험이었습니다.
마지막으로 부족하고 장난기만 많은 조장인 저와 함께해준 현주님 소이님 정말 진심으로 감사드립니다.
앞으로도 잘 부탁드립니다😝
```

#### 😜장현주

```txt
기획부터 디자인, 개발까지 직접 기획하고 서비스를 개발하면서 많이 배우고, 기술 스택을 익힐 수 있던 좋은 경험이었습니다.
사소한 기능도 시간이 오래 걸리고, 로직 자체도 감이 오지 않아서 많이 찾아가면서 진행되어 시간도 지체되고 힘들었지만,
그래도 직접 코드를 구성하면서 정말 많이 배우고 낯설었던 언어, 라이브러리에 익숙해지게 되었던 프로젝트였습니다.
또한 이런 어려움에 부딪혔을 때, 같이 고민하고 해결해준 팀원분들께 감사드립니다!! 🙂
```

#### 😛정소이

```txt
장기간 프로젝트를 진행하며 어렵게만 느껴지던 리액트에 익숙해지고,
프로젝트 환경부터 전체 구성을 공부하며 사용자의 관점에서 고민하던 시간이었습니다.
스스로의 한계가 느껴져 힘든 점도 많았지만 git과 API를 다뤄보고 상태 관리 라이브러리를 사용해 보며 깊게 코드를 작성할 수 있었습니다.
부족한 부분은 둥글게, 잘한 부분은 최고로 만들어주는 조원들 덕분에 즐겁게, 더 많은 것을 할 수 있었다 생각합니다. 정말 감사합니다 :9
```

**[⬆ back to top](#📋목차)**
