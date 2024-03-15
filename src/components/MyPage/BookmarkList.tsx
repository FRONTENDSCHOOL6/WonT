import pocketbase from '@/api/pocketbase';
import { getPocketHostImageURL } from '@/utils';
import BookMark from '@/components/BookMark';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import MemosStore from '@/store/memoStore';

// 전선용이 피드백 받고 추가한 코드
import { BookmarkStore } from '@/store/bookmarkStore';
import { RecordModel } from 'pocketbase';

// 데이터 요청 함수 (query function)
const getRecommends = async (userId: string) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

// 데이터의 userEmail 필드에서 삭제 요청 함수 (mutation function)

const removeRecommend = async (variables: {
  recommendId: string;
  userId: string;
}) => {
  const { recommendId, userId } = variables;
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail-': userId,
  });
};

/* -------------------------------------------------------------------------- */
function BookmarkList() {
  // 전선용이 피드백 받고 추가한 코드
  const deleteBookmarkList = BookmarkStore((state) => state.deleteBookmarkList);

  const user = pocketbase.authStore.model as RecordModel;

  // 쿼리 클라이언트 인스턴스 가져오기
  const queryClient = useQueryClient();

  // 쿼리 키
  const queryKey = ['recommends', user?.id];

  // React Query를 사용한 데이터 쿼리(query) 요청
  const {
    isFetching,
    isLoading,
    error,
    data: bookmarkItems,
  } = useQuery({
    queryKey: queryKey,
    queryFn: () => (user?.id ? getRecommends(user?.id) : undefined),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  // React Query를 사용한 데이터 수정(mutation) 요청
  const mutation = useMutation({
    mutationFn: removeRecommend,
    onMutate: async ({ recommendId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousList = queryClient.getQueryData(queryKey);

      // * TODO: list 타입 재정의 필요
      queryClient.setQueryData(queryKey, (list: any) => {
        return list.filter((item: { id: string }) => item.id !== recommendId);
      });
      return { previousList };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onError: (error, removedBookmark, context) => {
      queryClient.setQueryData(queryKey, context?.previousList);
    },
  });

  const handleRemoveBookmark =
    (recommendId: string, userId: string) => async () => {
      mutation.mutate({
        recommendId,
        userId,
      });
      // 전선용이 피드백받고 추가한 코드
      deleteBookmarkList(recommendId);
    };

  if (isLoading) {
    return <div className=" flex justify-center ">로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">{error.toString()}</div>;
  }

  if (bookmarkItems?.length === 0) {
    return <div className=" flex justify-center ">북마크가 비어있습니다.</div>;
  }

  return (
    <ul className="sm:gird-cols-2 mx-auto grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
      {bookmarkItems?.map?.((item) => (
        <li
          key={item.id}
          className=" relative mx-auto w-auto  min-w-[360px] opacity-80 transition duration-300 ease-in-out hover:opacity-100 hover:contrast-125 sm:min-w-min lg:min-w-min "
        >
          <button
            type="button"
            className="absolute right-4 top-4 cursor-pointer"
            onClick={handleRemoveBookmark(item.id, user.id)}
            // onClick={() => {
            //   if (item.id !== undefined && user.id !== undefined) {
            //     handleRemoveBookmark(item.id, user.id);
            //   }
            // }}
          >
            <BookMark color="#C9ECFF" />
          </button>
          <Link to={`/bookmark/${item.id}`}>
            <img
              src={getPocketHostImageURL(item).split(',')[0]}
              alt=""
              className="aspect-square overflow-x-hidden rounded-lg border-[1px] border-gray-2 object-cover sm:h-[300px] md:h-auto lg:h-[320px] xl:h-[401px]"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default BookmarkList;
