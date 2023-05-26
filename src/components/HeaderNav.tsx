import Link from 'next/link';
import React, { useState } from 'react';

const HeaderNav = () => {
  const [toggle, setToggle] = useState(false)

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
            <Link href={"/wallet-connect"}>
              <button className='border border-[#5127DA] p-2 px-6 rounded-full'>Connect Wallet</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='lg:hidden flex p-4 justify-between'>
        <Link href={"/"}>
          <img src="/assets/logo.png" className='w-20 h-8 my-auto' alt="" />
        </Link>
        <img onClick={() => setToggle(!toggle)} src="/assets/bars.png" className='w-10 h-8 cursor-pointer' alt="" />
      </div>
      {
        toggle === true ? <div className='p-4 bg-[#16161E] text-sm'>
          <p className='my-3'>Marketplace</p>
          <p className='my-3'>Live Auctions</p>
          <p className='my-3'>QLIP NFTs</p>
          <p className='my-3'>Community</p>
          <p className='my-3'>Mint Store</p>
          <Link href={"/wallet-connect"} className='my-3'>
            <button className='border border-[#5127DA] w-full p-2 px-6 rounded-full'>Connect Wallet</button>
          </Link>
        </div> : null
      }
    </div>
  );
};

export default HeaderNav;