import { Link } from 'react-router-dom';
import BookMark from '@/components/BookMark';
import Logout from '@/components/MyPage/Logout';
import Logo from '@/components/Logo';
import BackIcon from '@/components/Header/BackIcon';

// 임시로 any 설정
function MyPageHeader({ page }: any) {
  return (
    <div className="h-[64px] w-full bg-white px-2 md:px-10">
      <div className=" mx-auto flex h-[64px] max-w-7xl items-center  justify-between px-[1.0625rem] py-[1.125rem]">
        {page === 'mypage' ? (
          <Logo width={74} height={28} />
        ) : (
          <BackIcon width={'1rem'} height={'1rem'} color={'#4EC3F9'} />
        )}
        <div className="flex flex-row items-center gap-6">
          <Link to="/bookmark">
            <BookMark />
          </Link>

          <Logout />
        </div>
      </div>
    </div>
  );
}

export default MyPageHeader;
