import checkImg from '@/assets/trip/check.svg';
import plusImg from '@/assets/trip/check.svg';

interface AddButtonProps {
  onClick?: () => void;
  isSelect: any;
}

function AddButton({ onClick, isSelect }: AddButtonProps) {
  return (
    <button
      type="button"
      aria-label="장소 선택"
      onClick={onClick}
      className={`flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-md ${
        isSelect && isSelect?.length > 0 ? 'bg-point' : 'bg-secondary'
      }`}
    >
      {isSelect && isSelect?.length > 0 ? (
        <img src={checkImg} alt="CheckIcon" />
      ) : (
        <img src={plusImg} alt="PlusIcon" />
      )}
    </button>
  );
}

export default AddButton;
