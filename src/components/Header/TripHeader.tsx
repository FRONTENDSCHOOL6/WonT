import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import BackIcon from '@/components/Header/BackIcon';
import UserIcon from '@/components/Header/UserIcon';
import CloseIcon from '@/components/CloseIcon';

interface TripHeaderProps {
  isBack?: boolean;
  isLogo?: boolean;
  isUserIcon?: boolean;
  restProps?: string;
}

const TripHeader: React.FC<TripHeaderProps> = ({
  isBack = true,
  isLogo = true,
  isUserIcon = true,
  restProps,
}: TripHeaderProps) => {
  return (
    <nav className="w-full bg-white">
      <ul className="mx-auto flex justify-between px-6 py-[1.0625rem]">
        <li>
          {isBack ? (
            <BackIcon width={'1rem'} height={'1rem'} color={'#4EC3F9'} />
          ) : (
            <Link to="/main" aria-label="현재 페이지 닫음">
              <CloseIcon size={'1.25rem'} color={'#4EC3F9'} />
            </Link>
          )}
        </li>
        {isLogo && (
          <li className={`ml-[0.4375rem] ${restProps}`}>
            <Logo width={'3.75rem'} height={'1.375rem'} />
          </li>
        )}
        {isUserIcon && (
          <li>
            <Link to="/myschedule" aria-label="나의 일정 페이지로 이동">
              <UserIcon />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default TripHeader;
