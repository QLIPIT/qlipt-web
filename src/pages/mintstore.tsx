import NotificationFlag from '@/components/NotificationFlag';
import FrontLayout from '@/layout/FrontLayout';
import React from 'react';

const mintstore = () => {
  return (
    <FrontLayout>
      <section className='lg:p-32 p-6'>
        <div className='mb-10'>
          <h1 className='heading lg:text-5xl text-3xl font-bold'>QLIP Mintstore</h1>
          <p className='my-3 text-[#BEC2CA]'>Mint token in 3 easy steps</p>
        </div>
        <div className='border border-[#0EAD6F] my-6 lg:flex justify-between p-6 rounded-sm'>
          <div className='lg:flex'>
            <img src="/assets/upload.png" className='sm:w-10 sm:h-10' alt="" />
            <div className='my-auto lg:ml-10'>
              <h1 className='heading lg:text-2xl text-lg font-bold'>Upload Files and Mint Token</h1>
              <p className='text-sm text-[#BEC2CA] sm:mb-2'>Call contract method</p>
            </div>
          </div>
          <button className='p-2 bg-[#4B23CC] w-40 h-10 my-auto rounded-full px-10'>
            Start
          </button>
        </div>
        <div className='border border-[#16161E] my-6 lg:flex justify-between p-6 rounded-sm'>
          <div className='lg:flex'>
            <img src="/assets/sign.png" className='sm:w-10 sm:h-10' alt="" />
            <div className='my-auto lg:ml-10'>
              <h1 className='heading lg:text-2xl text-lg: font-bold'>Sign Sell Order</h1>
              <p className='text-sm sm:mb-2 text-[#BEC2CA]'>Sign sell order using your wallet</p>
            </div>
          </div>
          <button className='p-2 bg-[#1C1C1E] w-40 h-10 my-auto rounded-full px-10'>
            Start
          </button>
        </div>
        <div className='border border-[#16161E] my-6 lg:flex justify-between p-6 rounded-sm'>
          <div className='lg:flex'>
            <img src="/assets/lock.png" className='sm:w-10 sm:h-10' alt="" />
            <div className='my-auto lg:ml-10'>
              <h1 className='heading text-2xl font-bold'>Sign Lock Order</h1>
              <p className='text-sm text-[#BEC2CA] sm:mb-2'>Sign lock order using your wallet</p>
            </div>
          </div>
          <button className='p-2 bg-[#1C1C1E] w-40 h-10 my-auto rounded-full px-10'>
            Start
          </button>
        </div>
      </section>
      <NotificationFlag />
    </FrontLayout>
  );
};

export default mintstore;