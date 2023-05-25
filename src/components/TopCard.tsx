import React from 'react';

const TopCard = () => {
  return (
    <div className='p-12 bg-[#141416] rounded-lg'>
      <div className='rounded-full flex justify-center bg-[#6C42F5] p-1'>
        <img src="/assets/Line.png" className='mx-2' alt="" />
        <p className='text-xs'>#1 Ranked Seller</p>
      </div>
      <img src="/assets/user.png" className='mx-auto my-4' alt="" />
      <div className='text-center'>
        <h4 className='heading font-bold'>Karla Gyan</h4>
        <p>200 <span className='text-xs text-[#777E90]'>ETH</span></p>
      </div>
    </div>
  );
};

export default TopCard;