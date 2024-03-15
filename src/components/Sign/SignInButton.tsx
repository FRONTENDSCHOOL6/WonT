import React from 'react';

interface SignInButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const SignInButton: React.FC<SignInButtonProps> = ({
  type = 'button',
  children,
  ...restProps
}) => {
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
};

export default SignInButton;
