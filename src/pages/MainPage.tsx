import MainHeader from '@/components/Main/MainHeader';
import MainMakePlan from '@/components/Main/MainMakePlan';
import MainTitle from '@/components/Main/MainTitle';
import MainPlace from '@/components/Main/MainPlace';
import MainTravels from '@/components/Main/MainTravels';
import { Helmet } from 'react-helmet-async';

function MainPage() {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title className="sr-only">Main - WonT</title>
      </Helmet>

      <MainHeader />
      <div className="container mx-auto flex flex-col items-center bg-gray-100/30">
        <MainMakePlan />
        <div>
          <MainTitle text="국내 추천 여행지" />
          <MainPlace />
        </div>
        <div>
          <MainTitle text="Best 여행기" />
          <MainTravels />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
