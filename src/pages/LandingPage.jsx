import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import LandingPagePartThree from '@/components/Landing/LandingPagePartThree';
import LandingPagePartTwo from '@/components/Landing/LandingPagePartTwo.jsx';
import LandingPagePartOne from '@/components/Landing/LandingPagePartOne';
import SignInButton from '@/components/Sign/SignInButton';
import SignUpButton from '@/components/Sign/SignUpButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPagePartFour from '@/components/Landing/LandingPagePartFour';

// 렌딩

// framer-motion 함수
function LandingPage() {
  const MotionDiv = ({ children, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="mx-auto flex min-h-[50rem] max-w-[80rem] flex-col items-center">
      <h1 className="sr-only">LandingPage</h1>

      <MotionDiv delay={0.8}>
        <div className="w-full bg-LandingPage bg-center bg-no-repeat">
          <div className="flex flex-col items-center pt-[10.625rem]">
            <MotionDiv delay={1.5}>
              <Logo
                width={'11.375rem'}
                height={'4.1688rem'}
                colors={['#fff', '#fff']}
              />
            </MotionDiv>

            <MotionDiv delay={6}>
              <div className="flex flex-col gap-[0.9375rem] px-5 pb-[2.625rem] pt-[4.143125rem]">
                <Link to="/SignInPage">
                  <SignInButton text="로그인" />
                </Link>
                <Link to="/SignUpPage">
                  <SignUpButton text="회원가입" />
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>

      <div className="flex h-screen flex-col gap-5 px-5 pt-[3.125rem]">
        <MotionDiv delay={2}>
          <LandingPagePartOne />
        </MotionDiv>
        <MotionDiv delay={3}>
          <LandingPagePartTwo />
        </MotionDiv>
        <MotionDiv delay={4}>
          <LandingPagePartThree />
        </MotionDiv>
        <MotionDiv delay={5}>
          <LandingPagePartFour />
        </MotionDiv>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
