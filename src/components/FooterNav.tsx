import React from 'react';

const FooterNav = () => {
  return (
    <div className='flex justify-evenly'>
      <img className='w-32 h-12' src="/assets/logo.png" alt="" />
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