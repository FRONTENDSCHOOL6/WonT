interface ButtonSmallProps {
  color?: string;
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ButtonSmall({
  color = 'bg-primary',
  children,
  onClick,
}: ButtonSmallProps) {
  return (
    <>
      <button
        type="button"
        className={`${color} h-[1.875rem] w-[4.375rem] rounded-full text-base font-bold text-white`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default ButtonSmall;
