import React from 'react';
import Logo from '@/components/Logo';
import Sns from '@/components/Landing/Sns';

interface FooterProps {
  color?: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-3 bg-gray-100/50">
      <Logo
        colors={['#5A80A9', '#5A80A9']}
        width={'2.75rem'}
        height={'1rem'}
        id="logo3"
      />
      <Sns />
      <span className="text-gray-2">
        &copy;2023 멋쟁이 10조. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
