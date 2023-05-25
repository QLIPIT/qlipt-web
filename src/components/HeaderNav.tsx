import React from 'react';

const HeaderNav = () => {
  return (
    <div className='px-32 p-8 fixed top-0 w-screen z-10'>
      <div className='flex justify-between'>
        <img src="/assets/logo.png" alt="" />
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
  );
};

export default HeaderNav;