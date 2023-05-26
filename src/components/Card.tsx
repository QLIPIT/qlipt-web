import Link from 'next/link';
import React from 'react';

const Card = () => {
  return (
    <div className='lg:w-[30%] md:w-[49%] md:my-6 sm:my-6 lg:p-8 p-4 bg-[#141416] border rounded-sm border-[#353945]'>
      <img src="/assets/product.png" className='w-full' alt="" />
      <div className='mt-6'>
        <h1 className='heading font-bold text-xl'>African Mask</h1>
        <div className='flex my-4 justify-between'>
          <h5 className=''>20,000 QLIP</h5>
          <p className='text-sm'>1 of 1</p>
        </div>
        <div className='flex my-4 justify-between'>
          <h5 className=''><span className='text-sm text-[#BEC2CA]'>Highest bid</span> 0.001 ETH</h5>
          <p className='text-sm'>New bid  🔥</p>
        </div>
        <Link href={"/exhibit"}>
          <button className='p-3 bg-[#4B23CC] rounded-sm w-full'>Buy NFT</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;