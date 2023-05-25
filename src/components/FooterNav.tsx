import React from 'react';

const FooterNav = () => {
  return (
    <div className='flex flex-wrap lg:justify-evenly sm:justify-between md:justify-between sm:px-10 md:px-10'>
      <div className='sm:w-full'>
        <img className='w-32 h-12 sm:mx-auto' src="/assets/logo.png" alt="" />
      </div>
      <div>
        <p className='my-3'>Marketplace</p>
        <p className='my-3'>Live Auctions</p>
        <p className='my-3'>QLIP NFTs</p>
        <p className='my-3'>Community</p>
        <p className='my-3'>Mint Store</p>
      </div>
      <div>
        <p className='my-3'>Twitter</p>
        <p className='my-3'>Telegram</p>
        <p className='my-3'>Youtube</p>
        <p className='my-3'>Medium</p>
      </div>
    </div>
  );
};

export default FooterNav;