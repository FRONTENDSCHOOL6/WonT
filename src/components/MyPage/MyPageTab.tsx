import { MyPageTabProps } from '@/types/BookmarkPage';
import { Link } from 'react-router-dom';

function MyPageTab({ positionText }: MyPageTabProps) {
  return (
    <nav className="container mx-auto w-screen  pb-6 xl:w-[1268px]">
      <div className="mb-3 flex justify-around ">
        <Link to="/myschedule">
          <button type="button">나의 일정</button>
        </Link>
        <Link to="/bookmark">
          <button type="button">북마크</button>
        </Link>
      </div>
      <div
        className={`relative flex w-full max-w-7xl border-b-[0.0625rem] border-contentsPrimary ${
          positionText === 'left' ? 'justify-start' : 'justify-end'
        } `}
      >
        <div className="h-1 w-[50%] bg-point"></div>
      </div>
    </nav>
  );
}
export default MyPageTab;
