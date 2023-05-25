import FooterNav from '@/components/FooterNav';
import HeaderNav from '@/components/HeaderNav';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode,
};
const FrontLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderNav />
      <main>
        {children}
      </main>
      <FooterNav />
    </>
  );
};

export default FrontLayout;