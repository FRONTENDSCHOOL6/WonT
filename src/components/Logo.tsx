import { Link } from 'react-router-dom';

interface LogoProps {
  width?: string | number;
  height?: string | number;
  colors?: string[];
  id?: string;
  isLogo?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  width = '8.5rem',
  height = '3.125rem',
  colors = ['#4EC3F9', '#50D4E5'],
  id,
  isLogo = true,
  ...restProps
}) => {
  return (
    <>
      {isLogo ? (
        <Link to="/main" aria-label="WonTLogoButton">
          <svg
            width={width}
            height={height}
            viewBox="0 0 136 50"
            {...restProps}
          >
            <path
              d="M29.66 49.8398L29.17 48.5998L24.81 36.2998L19.76 48.7098L19.42 49.8398H14.63L14.16 48.6198L0 12.8398H5.61L16.97 41.7198L22.19 28.8198L16.55 12.8398H22.13L32.15 41.2298L43.49 12.8398H49.05L34.76 48.7398L34.39 49.8398H29.66Z"
              fill={`url(#paint0_linear_104_6694_${id})`}
            />
            <path
              d="M57.1201 49.84C49.6001 49.84 44.3501 44.32 44.3501 36.42C44.3501 28.52 49.7201 23 57.1201 23C64.5201 23 69.7101 28.65 69.7101 36.42C69.7101 44.19 64.6501 49.84 57.1201 49.84ZM57.1201 28.14C52.7601 28.14 49.5901 31.62 49.5901 36.41C49.5901 41.2 52.6201 44.64 57.1201 44.64C61.6201 44.64 64.4301 41.41 64.4301 36.41C64.4301 31.41 61.4201 28.14 57.1201 28.14Z"
              fill={`url(#paint1_linear_104_6694_${id})`}
            />
            <path
              d="M91.18 49.8401V36.9801C91.18 33.8101 90.33 28.4901 84.61 28.4901C80.71 28.4901 78.48 31.8101 78.48 37.6001V49.8401H73.2V23.7801H78.48V26.3901C80.24 24.4701 82.67 23.3901 85.4 23.3901C92.33 23.3901 96.46 28.4701 96.46 36.9901V49.8501H91.18V49.8401Z"
              fill={`url(#paint2_linear_104_6694_${id})`}
            />
            <path
              d="M102.15 49.8398V17.8198H91.1299V12.8398H118.5V17.8198H107.43V49.8398H102.15Z"
              fill={`url(#paint3_linear_104_6694_${id})`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M133.274 2.49627L123.328 9.02119V11.0907L124.338 9.89302C124.561 9.62873 125.016 9.57397 125.325 9.77422L127.081 10.9132L133.274 2.49627ZM134.782 0.260956C135.37 -0.125096 136.181 0.440011 135.793 0.966335L127.805 11.8223C127.594 12.1088 127.118 12.1784 126.796 11.9696L125.012 10.8124L123.37 12.7594C122.994 13.2053 122.13 12.9904 122.13 12.4509V8.82169C122.13 8.65663 122.222 8.50036 122.381 8.39628L134.782 0.260956Z"
              fill={`url(#paint4_linear_104_6694_${id})`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M131.956 2.27965L120.619 6.55143L122.971 8.21589L131.956 2.27965ZM123.889 8.85861L127.354 11.2613L133.273 2.65982L123.889 8.85861ZM135.538 0.930298C135.537 0.930495 135.536 0.930693 135.536 0.930889ZM135.031 0.0537663C135.627 -0.170919 136.231 0.352182 135.911 0.816659L128.092 12.1807C127.883 12.4849 127.38 12.5567 127.054 12.3287L126.976 12.2741L126.974 12.2727L122.562 9.2133L119.231 6.85534C118.863 6.59445 118.948 6.11385 119.392 5.9465L135.031 0.0537663Z"
              fill={`url(#paint5_linear_104_6694_${id})`}
            />
            <defs>
              <linearGradient
                id={`paint0_linear_104_6694_${id}`}
                x1="14"
                y1="13"
                x2="32.5"
                y2="47.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.779514" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint1_linear_104_6694_${id}`}
                x1="47.5"
                y1="26"
                x2="63"
                y2="47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.748264" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint2_linear_104_6694_${id}`}
                x1="76"
                y1="19"
                x2="96"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.685764" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint3_linear_104_6694_${id}`}
                x1="98"
                y1="13"
                x2="114"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.706597" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint4_linear_104_6694_${id}`}
                x1="129.012"
                y1="0.133484"
                x2="129.012"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.753472" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint5_linear_104_6694_${id}`}
                x1="127.5"
                y1="0"
                x2="127.5"
                y2="12.4627"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.753472" stopColor={colors[1]} />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      ) : (
        <button type="button" aria-label="WonTLogoButton">
          <svg
            width={width}
            height={height}
            viewBox="0 0 136 50"
            {...restProps}
          >
            <path
              d="M29.66 49.8398L29.17 48.5998L24.81 36.2998L19.76 48.7098L19.42 49.8398H14.63L14.16 48.6198L0 12.8398H5.61L16.97 41.7198L22.19 28.8198L16.55 12.8398H22.13L32.15 41.2298L43.49 12.8398H49.05L34.76 48.7398L34.39 49.8398H29.66Z"
              fill={`url(#paint0_linear_104_6694_${id})`}
            />
            <path
              d="M57.1201 49.84C49.6001 49.84 44.3501 44.32 44.3501 36.42C44.3501 28.52 49.7201 23 57.1201 23C64.5201 23 69.7101 28.65 69.7101 36.42C69.7101 44.19 64.6501 49.84 57.1201 49.84ZM57.1201 28.14C52.7601 28.14 49.5901 31.62 49.5901 36.41C49.5901 41.2 52.6201 44.64 57.1201 44.64C61.6201 44.64 64.4301 41.41 64.4301 36.41C64.4301 31.41 61.4201 28.14 57.1201 28.14Z"
              fill={`url(#paint1_linear_104_6694_${id})`}
            />
            <path
              d="M91.18 49.8401V36.9801C91.18 33.8101 90.33 28.4901 84.61 28.4901C80.71 28.4901 78.48 31.8101 78.48 37.6001V49.8401H73.2V23.7801H78.48V26.3901C80.24 24.4701 82.67 23.3901 85.4 23.3901C92.33 23.3901 96.46 28.4701 96.46 36.9901V49.8501H91.18V49.8401Z"
              fill={`url(#paint2_linear_104_6694_${id})`}
            />
            <path
              d="M102.15 49.8398V17.8198H91.1299V12.8398H118.5V17.8198H107.43V49.8398H102.15Z"
              fill={`url(#paint3_linear_104_6694_${id})`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M133.274 2.49627L123.328 9.02119V11.0907L124.338 9.89302C124.561 9.62873 125.016 9.57397 125.325 9.77422L127.081 10.9132L133.274 2.49627ZM134.782 0.260956C135.37 -0.125096 136.181 0.440011 135.793 0.966335L127.805 11.8223C127.594 12.1088 127.118 12.1784 126.796 11.9696L125.012 10.8124L123.37 12.7594C122.994 13.2053 122.13 12.9904 122.13 12.4509V8.82169C122.13 8.65663 122.222 8.50036 122.381 8.39628L134.782 0.260956Z"
              fill={`url(#paint4_linear_104_6694_${id})`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M131.956 2.27965L120.619 6.55143L122.971 8.21589L131.956 2.27965ZM123.889 8.85861L127.354 11.2613L133.273 2.65982L123.889 8.85861ZM135.538 0.930298C135.537 0.930495 135.536 0.930693 135.536 0.930889ZM135.031 0.0537663C135.627 -0.170919 136.231 0.352182 135.911 0.816659L128.092 12.1807C127.883 12.4849 127.38 12.5567 127.054 12.3287L126.976 12.2741L126.974 12.2727L122.562 9.2133L119.231 6.85534C118.863 6.59445 118.948 6.11385 119.392 5.9465L135.031 0.0537663Z"
              fill={`url(#paint5_linear_104_6694_${id})`}
            />
            <defs>
              <linearGradient
                id={`paint0_linear_104_6694_${id}`}
                x1="14"
                y1="13"
                x2="32.5"
                y2="47.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.779514" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint1_linear_104_6694_${id}`}
                x1="47.5"
                y1="26"
                x2="63"
                y2="47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.748264" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint2_linear_104_6694_${id}`}
                x1="76"
                y1="19"
                x2="96"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.685764" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint3_linear_104_6694_${id}`}
                x1="98"
                y1="13"
                x2="114"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.706597" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint4_linear_104_6694_${id}`}
                x1="129.012"
                y1="0.133484"
                x2="129.012"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.753472" stopColor={colors[1]} />
              </linearGradient>
              <linearGradient
                id={`paint5_linear_104_6694_${id}`}
                x1="127.5"
                y1="0"
                x2="127.5"
                y2="12.4627"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={colors[0]} />
                <stop offset="0.753472" stopColor={colors[1]} />
              </linearGradient>
            </defs>
          </svg>
        </button>
      )}
    </>
  );
};

export default Logo;
