function HambugerIcon({
  width = '1.5rem',
  heigth = '1.5rem',
  color = 'black',
}) {
  return (
    <svg width={width} height={heigth} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 9H19M5 15H19"
        stroke={color}
        strokeOpacity="50%"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HambugerIcon;
