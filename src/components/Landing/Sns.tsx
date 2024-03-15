import Twitter from '@/assets/common/common-twitter.webp';
import Facebook from '@/assets/common/common-facebook.webp';
import Instagram from '@/assets/common/common-instagram.webp';
import { Link } from 'react-router-dom';

function Sns() {
  return (
    <div className="flex gap-3">
      <Link to="/" aria-label="트위터사진">
        <img
          src={Twitter}
          alt="트위터사진"
          className="h-[1.25rem] w-[1.25rem]"
        />
      </Link>
      <Link to="/" aria-label="페이스북사진">
        <img
          src={Facebook}
          alt="페이스북사진"
          className="h-[1.25rem] w-[1.25rem]"
        />
      </Link>

      <Link to="/" aria-label="인스타그램사진">
        <img
          src={Instagram}
          alt="인스타그램사진"
          className="h-[1.25rem] w-[1.25rem]"
        />
      </Link>
    </div>
  );
}

export default Sns;
