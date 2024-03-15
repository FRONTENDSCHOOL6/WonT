import CloseIcon from '@/components/CloseIcon';

function DeleteButton({
  onClick,
  position = 'absolute right-0 top-0 mr-[0.625rem] mt-[0.625rem]',
  size = '1rem',
}: any) {
  return (
    <button type="button" onClick={onClick} className={position}>
      <CloseIcon size={size} color="#828282" />
    </button>
  );
}

export default DeleteButton;
