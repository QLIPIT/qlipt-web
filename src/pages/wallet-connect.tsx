import NotificationFlag from '@/components/NotificationFlag';
import FrontLayout from '@/layout/FrontLayout';
import React from 'react';

const Wallet = () => {
  return (
    <FrontLayout>
      <section className='lg:p-32 p-6'>
        <div className='mb-10'>
          <h1 className='heading lg:text-5xl text-3xl font-bold'>Connect your Wallet</h1>
            <p className='my-3 text-[#BEC2CA]'>Connect with one of available wallet providers or create a new wallet. <br /> <a href="">What is a wallet?</a></p>
        </div>

      </section>
      <NotificationFlag />
    </FrontLayout>
  );
};

export default Wallet;