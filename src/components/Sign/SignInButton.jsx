import { oneOf } from 'prop-types';

export default function SignInButton({
  type = 'button',
  children,
  ...restProps
}) {
  return (
    <div>
      <button
        type={type}
        className="text-color-white h-[3.125rem] w-80 rounded-md bg-primary text-white"
        {...restProps}
      >
        {children}
      </button>
    </div>
  );
}

SignInButton.propTypes = {
  type: oneOf(['button', 'submit', 'reset']),
};
