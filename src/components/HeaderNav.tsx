import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
  return (
    <div className=''>
      <div className='px-32 nav p-8 fixed top-0 w-screen lg:block z-10 sm:hidden md:hidden'>
        <div className='flex justify-between'>
          <Link href={"/"}>
            <img src="/assets/logo.png" alt="" />
          </Link>
          <div className='flex w-[60%] justify-between text-sm'>
            <p className='my-auto'>Marketplace</p>
            <p className='my-auto'>Live Auctions</p>
            <p className='my-auto'>QLIP NFTs</p>
            <p className='my-auto'>Community</p>
            <p className='my-auto'>Mint Store</p>
            <button className='border border-[#5127DA] px-6 rounded-full'>Connect Wallet</button>
          </div>
        </div>
      </div>
      <div className='lg:hidden flex p-4 justify-between'>
        <Link href={"/"}>
          <img src="/assets/logo.png" className='w-20 h-8 my-auto' alt="" />
        </Link>
        <img src="/assets/bars.png" className='w-10 h-8 cursor-pointer' alt="" />
      </div>
    </div>
  );
};

export default HeaderNav;