import { useRef, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pocketbase from '@/api/pocketbase';
import Logo from '@/components/Logo';
import BackButton from '@/components/Sign/BackButton';
import SignPart from '@/components/Sign/SignPart';
import SignInButton from '@/components/Sign/SignInButton';
import { Helmet } from 'react-helmet-async';

export default function SignUpPage() {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !passwordConfirmRef.current
    )
      return; // null 체크

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    const userInfo = {
      email,
      password,
      passwordConfirm,
    };

    if (password !== passwordConfirm) {
      toast.warning('비밀번호가 일치하지 않습니다');
      return;
    }

    try {
      await pocketbase.collection('users').create(userInfo);

      toast.success('회원가입이 완료되었습니다', {});

      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigate('/signin');
    } catch (error) {
      toast.warning('비밀번호가 일치하지 않습니다');
    }
  };
  return (
    <div className="container mx-auto flex  flex-col items-center px-5">
      <Helmet>
        <title className="sr-only">SignUp - WonT</title>
      </Helmet>

      <div className="h-[8.125rem] w-[20rem] pt-[2.125rem]">
        <Link to="/">
          <BackButton />
        </Link>
      </div>
      <div className="mx-auto flex min-h-[50rem] max-w-[80rem] flex-col items-center px-5">
        <Logo width={'10.161rem'} height={'2.625rem'} isLogo={false} />

        <div className="flex flex-col items-center gap-[1.688rem] pt-3">
          <p>
            <span className="text-2xl font-bold">이메일로 가입하기</span>
          </p>
          <form
            className="flex flex-col items-center gap-10"
            onSubmit={handleRegister}
          >
            <SignPart
              inputRef={emailRef}
              information="이메일 주소"
              placeholder="이메일 주소 입력"
              type="email"
              name="email"
            />
            <SignPart
              inputRef={passwordRef}
              information="비밀번호"
              placeholder="비밀번호 입력"
              type="password"
              name="password"
            />
            <SignPart
              inputRef={passwordConfirmRef}
              information="비밀번호 확인"
              placeholder="비밀번호 확인"
              type="password"
              name="passwordConfirm"
            />
            <SignInButton type="submit">회원가입</SignInButton>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
