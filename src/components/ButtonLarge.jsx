// color(primary, secondary, point), size, radiuse, icon -> 따로 처리 ...
// secondary = Boolean(), children, ...restProps
// type: oneOf(['submit', 'reset', 'button'])

export default function ButtonLarge({
  color = 'bg-primary',
  height = 'h-[3.875rem]',
  textColor = 'text-white',
  children,
  onClick,
  ...restProps
}) {
  return (
    <button
      type="button"
      className={`mx-5 ${height} w-80 rounded-md ${color} text-base font-bold ${textColor}`}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
}
