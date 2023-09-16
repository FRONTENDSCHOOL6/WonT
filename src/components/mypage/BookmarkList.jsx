import { getPocketHostImageURL } from '@/utils';
import BookMark from '../BookMark';
import useRecommendsList from '@/hooks/useRecommendsList';
import { useRef } from 'react';

const getRecommends = async (userId) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

const removeRecommend = async ({ recommendId, userId }) => {
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail-': userId,
  });
};

export default function BookmarkList() {
  const bookmarkList = useRef([]);
  const { data } = useRecommendsList();

  const handleBookmark = (id) => {
    const isBookmark = bookmarkList.current.includes(id);

    if (isBookmark) {
      bookmarkList.current = bookmarkList.current.filter(
        (itemId) => itemId !== id
      );
      console.log(bookmarkList);
    } else {
      bookmarkList.current = [...bookmarkList.current, id];
      console.log(bookmarkList);
    }
  };

  return (
    <ul className="mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data?.items.map((item) => (
        <li
          key={item.id}
          className="relative min-w-[360px] hover:-translate-y-1 hover:scale-x-[1.01] hover:scale-y-[1.01] hover:transition-all  hover:duration-200 hover:ease-in"
        >
          <button
            className="absolute right-4 top-4 cursor-pointer "
            onClick={() => handleBookmark(item.id)}
          >
            <BookMark color="#C9ECFF" />
          </button>
          <a href="/main">
            <img
              src={getPocketHostImageURL(item).split(',')[0]}
              alt=""
              className="box-content aspect-square  rounded-lg border-[1px] border-gray-2 object-cover md:h-[380px] lg:h-[420px] xl:h-[400px]"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
