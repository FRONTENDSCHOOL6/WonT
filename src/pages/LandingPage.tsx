import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselOne from '@/assets/landing/landing-carousel-one.webp';
import CarouselTwo from '@/assets/landing/landing-carousel-two.webp';
import CarouselThree from '@/assets/landing/landing-carousel-three.webp';
import CarouselFour from '@/assets/landing/landing-carousel-four.webp';
import CarouselFive from '@/assets/landing/landing-carousel-five.webp';
import CarouselSix from '@/assets/landing/landing-carousel-six.webp';
import Logo from '@/components/Logo';
import SignInButton from '@/components/Sign/SignInButton';
import SignUpButton from '@/components/Sign/SignUpButton';
import LandingSectionOne from '@/components/Landing/LandingSectionOne';
import LandingSectionTwo from '@/components/Landing/LandingSectionTwo';
import LandingSectionThree from '@/components/Landing/LandingSectionThree';
import LandingSectionFour from '@/components/Landing/LandingSectionFour';
import Footer from '@/components/Footer';
import CarouselDiv from '@/components/Landing/CarouselDiv';
import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react';

interface MotionDivProps {
  children: ReactNode;
  delay: number;
}
function LandingPage() {
  const MotionDiv: React.FC<MotionDivProps> = ({ children, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay }}
      >
        {children}
      </motion.div>
    );
  };

  const images = [
    CarouselOne,
    CarouselTwo,
    CarouselThree,
    CarouselFour,
    CarouselFive,
    CarouselSix,
  ];

  return (
    <div className="container mx-auto flex min-h-[50rem] flex-col">
      <Helmet>
        <title className="sr-only">Landing - WonT</title>
      </Helmet>

      <CarouselDiv images={images}>
        <div className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center pt-[10.625rem]">
          <MotionDiv delay={0.4}>
            <div>
              <Logo
                width={'11.375rem'}
                height={'4.1688rem'}
                colors={['#fff', '#fff']}
                isLogo={false}
              />
            </div>
          </MotionDiv>
          <MotionDiv delay={0.8}>
            <div className="flex flex-col gap-[0.9375rem] px-5 pb-[2.625rem] pt-[4.143125rem]">
              <Link to="/signin">
                <SignInButton>로그인</SignInButton>
              </Link>
              <Link to="/signup">
                <SignUpButton text="회원가입" />
              </Link>
            </div>
          </MotionDiv>
        </div>
      </CarouselDiv>

      <div className="flex flex-col gap-5 px-5 pt-[3.125rem]">
        <div className="lg:flex lg:gap-5">
          <MotionDiv delay={2.5}>
            <LandingSectionOne />
          </MotionDiv>
          <MotionDiv delay={2.5}>
            <LandingSectionTwo />
          </MotionDiv>
        </div>
        <div className="lg:flex lg:gap-5">
          <MotionDiv delay={2.5}>
            <LandingSectionThree />
          </MotionDiv>
          <MotionDiv delay={2.5}>
            <LandingSectionFour />
          </MotionDiv>
        </div>
        <div className="lg:w-[80rem] 2xl:w-[96rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
