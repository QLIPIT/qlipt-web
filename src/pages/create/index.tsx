import NotificationFlag from '@/components/NotificationFlag';
import FrontLayout from '@/layout/FrontLayout';
import Link from 'next/link';
import React from 'react';

const Create = () => {
  return (
    <FrontLayout>
      <section className='lg:p-32 p-6'>
        <div className='lg:text-center'>
          <h1 className='heading lg:text-5xl text-3xl font-bold'>Create your QLIP Collectibles</h1>
          <p className='lg:w-1/2 sm:text-xs mx-auto my-3'>Choose <strong>“Single”</strong> if you want your collectible to be one of a kind or <strong>“Multiple”</strong> if you want to sell one collectible multiple times</p>
        </div>
        <div className='lg:flex justify-evenly my-16'>
          <div className='border border-[#16161E] p-10 lg:w-[40%]'>
            <div className='w-40 mx-auto h-40 eclipse p-6 rounded-full'>
              <img src="/assets/single.png" className='mx-auto h-auto' alt="" />
            </div>
            <div className='text-center'>
              <h1 className='heading font-bold text-2xl'>Single</h1>
              <p className='my-4 text-xs text-[#BEC2CA]'>Create a one of kind collectible</p>
              <Link href={'/create/single'}>
                <button className='bg-[#4B23CC] p-4 rounded-full w-52'>Create Single</button>
              </Link>
            </div>
          </div>
          <div className='border border-[#16161E] p-10 lg:w-[40%]'>
            <div className='w-40 mx-auto h-40 eclipse p-6 rounded-full'>
              <img src="/assets/multi.png" className='mx-auto h-auto' alt="" />
            </div>
            <div className='text-center'>
              <h1 className='heading font-bold text-2xl'>Multiple</h1>
              <p className='my-4 text-xs text-[#BEC2CA]'>Sell one collectible multiple times</p>
              <button className='bg-transparent border border-white p-4 rounded-full w-52'>Create Multiple</button>
            </div>
          </div>
        </div>
      </section>
      <NotificationFlag />
    </FrontLayout>
  );
};

export default Create;