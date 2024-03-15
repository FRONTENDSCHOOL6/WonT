import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPocketHostImageURL } from '@/utils';
import pocketbase from '@/api/pocketbase';
import BookMark from '@/components/BookMark';
import MyPageHeader from '@/components/PageHeader';
import DetailInfo from '@/components/Detail/DetailInfo';
import { Helmet } from 'react-helmet-async';

// 전선용이 피드백받고 추가한 함수
import { BookmarkStore } from '@/store/bookmarkStore';
import { detailPlaceItems } from '@/types/DetailPage';
import { RecordModel } from 'pocketbase';

interface MutationContext {
  // previousData: any;
  previousData:
    | {
        userEmail: string[];
      }
    | undefined;
}

/* -------------------------------------------------------------------------- */
// 데이터 요청 함수 (query function)

const getRecommend = async (recommendId: string) => {
  return await pocketbase.collection('recommends').getOne(recommendId, {
    // fields: 'collectionId,id,image,userEmail',
  });
};

// 데이터의 userEmail 필드에서 삭제 요청 함수 (mutation function)
const addBookmark = async (variables: {
  recommendId: string;
  userId: string;
}) => {
  const { recommendId, userId } = variables;
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail+': userId,
  });
};
const removeBookmark = async (variables: {
  recommendId: string;
  userId: string;
}) => {
  const { recommendId, userId } = variables;
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail-': userId,
  });
};

/* -------------------------------------------------------------------------- */
// *상세페이지

function DetailPage({}) {
  // 전선용이 피드백받고 추가한 함수
  const { setBookmarkList, deleteBookmarkList } = BookmarkStore((state) => ({
    setBookmarkList: state.setBookmarkList,
    deleteBookmarkList: state.deleteBookmarkList,
  }));

  // 루트에서 추천 장소 ID 읽기
  const { recommendId } = useParams();

  // 로그인 사용자 정보 가져오기
  const user: { id: string | null } = pocketbase.authStore.model as {
    id: string | null;
  };

  // 쿼리 클라이언트 인스턴스 가져오기
  const queryClient = useQueryClient();

  // 쿼리 키
  const queryKey = ['recommends', recommendId];

  // 데이터 쿼리
  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: () => (recommendId ? getRecommend(recommendId) : undefined),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  // 데이터 뮤테이션 (추가)
  const addMutation = useMutation({
    mutationFn: addBookmark,
    onMutate: async ({ recommendId, userId }): Promise<MutationContext> => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousData = queryClient.getQueryData<{ userEmail: string[] }>(
        queryKey
      );
      console.log(previousData);

      queryClient.setQueryData(queryKey, (recommendData) => {
        const typedRecommendData = recommendData as { userEmail: string[] };

        return {
          ...typedRecommendData,
          userEmail: [...typedRecommendData.userEmail, userId],
        };
      });

      return { previousData };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onError: (context: MutationContext) => {
      queryClient.setQueryData(queryKey, context.previousData);
    },
  });

  // 데이터 뮤테이션 (삭제)
  const removeMutation = useMutation({
    mutationFn: removeBookmark,
    onMutate: async ({ recommendId, userId }): Promise<MutationContext> => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousData = queryClient.getQueryData<{ userEmail: string[] }>(
        queryKey
      );

      if (!previousData) {
        throw new Error('Previous data is undefined');
      }

      queryClient.setQueryData<{ userEmail: string[] }>(
        queryKey,
        (recommendData) => {
          if (!recommendData) {
            return;
          }

          return {
            ...recommendData,
            userEmail: recommendData.userEmail.filter(
              (email) => email !== userId.toString()
            ),
          };
        }
      );

      return { previousData };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onError: (context: MutationContext) => {
      queryClient.setQueryData(queryKey, context.previousData);
    },
  });

  if (data) {
    // 추천 장소 (질문 코드에서 detailPlace를 사용하므로 할당한 것)
    const detailPlace: detailPlaceItems = data;

    // 로그인 사용자 북마크 여부
    const isBookmark = detailPlace?.userEmail?.includes(user.id || '');

    // 북마크 토글 함수
    const handleToggleBookmark =
      (recommendId: string, userId: string | null) => async () => {
        if (userId === null) {
          alert('북마크 요청에 실패했습니다.');
          return;
        }

        const userIdAsString = userId?.toString();

        if (isBookmark) {
          await removeMutation.mutate({ recommendId, userId: userIdAsString });
          deleteBookmarkList(recommendId);
        } else {
          await addMutation.mutate({ recommendId, userId: userIdAsString });
          setBookmarkList(recommendId);
        }
      };

    return (
      <div className="   mx-auto min-h-screen min-w-[22.5rem] bg-background pb-10">
        <Helmet>
          <title className="sr-only">Detail - WonT</title>
        </Helmet>
        <div className=" flex h-[64px] flex-col items-center justify-center gap-10">
          <MyPageHeader page="detail" />
        </div>
        <div className="container">
          <section className="animate-fade-animate px-6">
            <img
              src={getPocketHostImageURL(detailPlace)}
              alt={`${detailPlace.place} 이미지`}
              className="  mx-auto my-10 h-[31.25rem] min-h-[22.5rem] w-[77.25rem] min-w-[20rem] rounded-xl object-cover "
            />
            <div className="mx-auto  my-5 max-w-[77.25rem] px-4">
              <span className=" h-4 rounded-full bg-secondary px-2 py-1 text-[0.875rem]">
                {detailPlace.localMain}
              </span>
              <div className="mb-1  mt-3 flex items-center">
                <h2 className=" text-2xl font-bold text-contentsPrimary">
                  {detailPlace.place}
                </h2>
                <button
                  type="button"
                  // onClick={handleToggleBookmark(detailPlace.id, user.id)}
                  onClick={() => {
                    if (detailPlace.id !== undefined && user.id !== undefined) {
                      handleToggleBookmark(detailPlace.id, user.id)();
                    }
                  }}
                  className="m-2"
                >
                  <BookMark color={isBookmark ? '#C9ECFF' : ''} />
                </button>
              </div>
              <p className="mb-3 text-[0.875rem] font-light text-gray-1">
                {detailPlace.address}
              </p>
              <div className="border-b-[0.0625rem] border-contentsPrimary"></div>
            </div>
            <DetailInfo detailPlace={detailPlace} />
          </section>
        </div>
      </div>
    );
  }
}

export default DetailPage;
