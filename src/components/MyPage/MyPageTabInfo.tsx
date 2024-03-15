import useRecommendsList from '@/hooks/useRecommendsList';
import useScheduleList from '@/hooks/useScheduleList';
import { useQuery } from '@tanstack/react-query';
import pocketbase from '@/api/pocketbase';
import { RecordModel } from 'pocketbase';
import { MyPageTabInfoProps } from '@/types/BookmarkPage';

const getRecommends = async (userId: string) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

function MyPageTabInfo({ tab }: MyPageTabInfoProps) {
  const user = pocketbase.authStore.model as RecordModel;

  const { data } =
    tab === '나의 일정' ? useScheduleList() : useRecommendsList();
  const queryKey = ['recommends', user.id];
  const { data: bookmarkList } = useQuery({
    queryKey: queryKey,
    queryFn: () => getRecommends(user.id),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  const scheduleList = data?.items?.filter(
    (item: { username: string }) => item.username === user.id
  )?.length;

  if (data) {
    return (
      <div className=" mx-8 mb-4  flex h-6 items-center justify-start gap-[10px] ">
        <div className="w-auto">
          <span className=" flex font-medium text-contentsPrimary">
            {tab === '나의 일정' ? '나의 일정' : '북마크'}
          </span>
        </div>

        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            className="relative"
          >
            <circle cx="9.5" cy="9.5" r="9.5" fill="#50D4E5" />
          </svg>
          <span className="absolute text-[0.875rem] font-medium text-white">
            {tab === '나의 일정' ? scheduleList : bookmarkList?.length}
          </span>
        </div>
      </div>
    );
  }
}
export default MyPageTabInfo;
