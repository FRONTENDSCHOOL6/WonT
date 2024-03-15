import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Header: React.FC = () => {
  return (
    <div className="flex justify-center px-[1.0625rem] py-[1.125rem]">
      <Link to="/main">
        <Logo width={74} height={28} />
      </Link>
    </div>
  );
};

export default Header;
