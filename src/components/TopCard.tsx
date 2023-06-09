import Link from 'next/link';
import React from 'react';

const TopCard = () => {
  return (
    <div className='p-12 bg-[#141416] rounded-lg'>
      <div className='rounded-full flex justify-center bg-[#6C42F5] p-1'>
        <img src="/assets/Line.png" className='mx-1' alt="" />
        <p className='text-xs'>#1 Ranked Seller</p>
      </div>
      <div>
        <Link href={"/profile"}>
          <img src="/assets/user.png" className='mx-auto w-10 my-4' alt="" />
        </Link>
      </div>
      <div className='text-center'>
        <h4 className='heading font-bold'>Karla Gyan</h4>
        <p>200 <span className='text-xs text-[#777E90]'>ETH</span></p>
      </div>
    </div>
  );
};

export default TopCard;