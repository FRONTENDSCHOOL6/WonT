import { useNavigate } from 'react-router-dom';

function BackIcon({
  width = '0.9375rem',
  height = '0.625rem',
  color = '#0D0D0D',
}) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <button type="button" onClick={handleBack} aria-label="뒤로가기">
      <svg width={width} height={height} viewBox="0 0 15 13" fill="none">
        <path
          d="M-2.69982e-07 6.17656C-2.27619e-07 5.94254 0.0929617 5.71811 0.258435 5.55264L5.55255 0.258522C5.89713 -0.086059 6.45581 -0.086059 6.80039 0.258522C7.14497 0.603102 7.14497 1.16178 6.80039 1.50636L3.01254 5.2942L13.2353 5.2942C13.7226 5.2942 14.1176 5.68925 14.1176 6.17656C14.1176 6.66387 13.7226 7.05891 13.2353 7.05891L3.01254 7.05891L6.80039 10.8468C7.14497 11.1913 7.14497 11.75 6.80039 12.0946C6.45581 12.4392 5.89713 12.4392 5.55255 12.0946L0.258435 6.80047C0.0929616 6.635 -2.59753e-07 6.41057 -2.69982e-07 6.17656Z"
          fill={color}
        />
      </svg>
    </button>
  );
}

export default BackIcon;
