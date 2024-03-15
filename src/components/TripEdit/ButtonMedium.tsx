interface ButtonMediumProps {
  fill?: boolean;
  text: string;
  color?: string;
  menu?: string;
  onClick?: () => void;
}

function ButtonMedium({ menu, fill, text, color }: ButtonMediumProps) {
  return (
    <div
      className={`mx-5 mt-4 flex flex-col gap-[10px] font-bold text-primary ${
        menu === '저장'
          ? 'text-white'
          : 'hover:rounded-md hover:bg-point hover:text-white'
      }`}
    >
      <button
        className={`h-[52px] rounded-md border ${color} ${
          fill ? 'bg-primary' : 'border-primary'
        }`}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonMedium;
