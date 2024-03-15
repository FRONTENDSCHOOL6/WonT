import { useRef, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pocketbase from '@/api/pocketbase';
import SignInButton from '@/components/Sign/SignInButton';
import BackButton from '@/components/Sign/BackButton';
import Logo from '@/components/Logo';
import SignPart from '@/components/Sign/SignPart';
import { useAuth } from '@/contexts/Auth';
import { Helmet } from 'react-helmet-async';

export default function SignInPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await signIn(email, password);
      navigate('/main');
    } catch (error) {
      toast.error('회원 정보를 다시 확인해주세요.');
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center px-5">
      <Helmet>
        <title className="sr-only">SignIn - WonT</title>
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
            <span className="text-2xl font-bold">이메일로 로그인</span>
          </p>
          <form
            onSubmit={handleSignIn}
            className="flex flex-col items-center gap-10"
          >
            <SignPart
              information="이메일 주소"
              placeholder="이메일 주소 입력"
              type="email"
              inputRef={emailRef}
              name="email"
            />
            <SignPart
              information="비밀번호"
              placeholder="비밀번호 입력"
              type="password"
              inputRef={passwordRef}
              name="password"
            />
            <SignInButton type="submit">로그인</SignInButton>
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
