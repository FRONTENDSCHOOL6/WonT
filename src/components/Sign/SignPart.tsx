import { useId } from 'react';
import React, { HTMLProps } from 'react';

interface SignPartProps extends Omit<HTMLProps<HTMLDivElement>, 'label'> {
  information?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email'; // 추가 가능한 다른 input type들도 여기에 정의하세요
  label?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const SignPart: React.FC<SignPartProps> = ({
  information = '',
  placeholder = '',
  type = 'text',
  label,
  inputRef,
  ...restProps
}) => {
  const id = useId();

  return (
    <div className="pl-[0.625rem]" {...restProps}>
      <div className="">
        <p>{information}</p>
      </div>

      <label htmlFor={id}>
        {label}
        <input
          className="w-[320px] border-b-2 border-b-secondary py-3 placeholder-secondary"
          id={id}
          type={type}
          placeholder={placeholder}
          ref={inputRef}
        />
      </label>
    </div>
  );
};

export default SignPart;
