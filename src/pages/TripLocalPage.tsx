import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from '@tanstack/react-query';

import pocketbase from '@/api/pocketbase';
import ButtonLarge from '@/components/ButtonLarge';
import TripHeader from '@/components/Header/TripHeader';
import LocalItem from '@/components/TripLocal/LocalItem';
import TripTitle from '@/components/TripTitle';
import Spinner from '@/components/Spinner/Spinner';
import { LocalStore } from '@/store/localStore';
import { createRecord, getPocketHostImageURL, getPocketHostURL } from '@/utils';
import { LocalItem as LocalData } from '@/types/Locals';

async function fetchLocals() {
  const response = await fetch(`${getPocketHostURL('locals')}`);
  return await response.json();
}

/* async function createLocalRecord(title: string, userId: string) {
  createRecord('mySchedule', {
    title: title,
    username: userId.toString(), //* 숫자 -> 문자
  });
} */

function TripLocalPage() {
  // const user = pocketbase.authStore.model; // 로그인 유저 정보
  const { data, isLoading, error } = useQuery(['locals'], fetchLocals, {
    retry: 2,
  });

  const { selectName, selectIndex, setSelectName } = LocalStore();
  const isSelect = selectIndex !== null;

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
        <title>TripLocal - WonT</title>
      </Helmet>
      <section className="container mx-auto flex min-h-[50rem] flex-col items-center  bg-background pb-[2.3125rem]">
        <TripHeader isBack={false} />
        <h1 className="sr-only">여행 지역 선택 페이지</h1>
        <TripTitle
          question={'어디로 떠나시나요?'}
          guide={'여행할 지역을 선택하세요.'}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ul className="mb-9 flex w-full flex-col gap-[0.625rem] md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {data?.items?.map((item: LocalData) => (
                <LocalItem
                  key={item.id}
                  image={getPocketHostImageURL(item)}
                  name={item.name}
                  index={item.id}
                />
              ))}
            </ul>
            {isSelect ? (
              <Link to="/tripcalendar">
                {selectName && (
                  <ButtonLarge
                    onClick={
                      () => setSelectName(selectName)
                      //user && createLocalRecord(selectName, user.id)
                    }
                  >
                    선택 완료
                  </ButtonLarge>
                )}
              </Link>
            ) : (
              <>
                <ButtonLarge
                  onClick={() => toast.error('회원 정보를 다시 확인해주세요.')}
                >
                  선택 완료
                </ButtonLarge>
                <ToastContainer
                  position="top-center"
                  autoClose={500}
                  hideProgressBar
                  theme="colored"
                />
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default TripLocalPage;
