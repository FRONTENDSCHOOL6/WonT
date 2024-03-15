import ButtonSmall from '@/components/TripLocal/ButtonSmall';
import LocalImage from '@/components/TripLocal/LocalImage';
import LocalName from '@/components/TripLocal/LocalName';
import { LocalStore } from '@/store/localStore';

interface LocalItemProps {
  image?: string;
  name?: string;
  index: string;
}

function LocalItem({ image, name = '지역명', index }: LocalItemProps) {
  const { selectIndex, setSelectIndex, setSelectName } = LocalStore();
  const isSelect = selectIndex === index;

  return (
    <li className="flex items-center justify-between bg-white px-5 py-[0.9375rem]">
      <div className="flex items-center gap-5">
        <LocalImage image={image} alt={name} />
        <LocalName>{name}</LocalName>
      </div>
      <ButtonSmall
        onClick={
          isSelect
            ? () => {
                setSelectIndex(null);
                setSelectName(null);
              }
            : () => {
                setSelectIndex(index);
                setSelectName(name);
              }
        }
        color={isSelect ? 'bg-point' : 'bg-primary'}
      >
        {isSelect ? '취소' : '선택'}
      </ButtonSmall>
    </li>
  );
}

export default LocalItem;
