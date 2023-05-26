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
        <div className='flex justify-between flex-wrap'>
          <div className='lg:w-[31%] w-[48%] lg:p-10 p-4 lg:my-6 my-2 border border-[#16161E] text-center rounded-sm'>
            <img src="/assets/wallets/connect.png" className='mx-auto sm:w-20 sm:h-20' alt="" />
            <p className='font-bold lg:text-lg text-xs'>Wallet Connect</p>
          </div>
          <div className='lg:w-[31%] w-[48%] lg:p-10 p-4 lg:my-6 my-2 border border-[#16161E] text-center rounded-sm'>
            <img src="/assets/wallets/metamask.png" className='mx-auto sm:w-20 sm:h-20' alt="" />
            <p className='font-bold lg:text-lg text-xs'>MetaMask</p>
          </div>
          <div className='lg:w-[31%] w-[48%] lg:p-10 p-4 lg:my-6 my-2 border border-[#16161E] text-center rounded-sm'>
            <img src="/assets/wallets/coinbase.png" className='mx-auto sm:w-20 sm:h-20' alt="" />
            <p className='font-bold lg:text-lg text-xs'>Coinbase</p>
          </div>
          <div className='lg:w-[31%] w-[48%] lg:p-10 p-4 lg:my-6 my-2 border border-[#16161E] text-center rounded-sm'>
            <img src="/assets/wallets/formatic.png" className='mx-auto sm:w-20 sm:h-20' alt="" />
            <p className='font-bold lg:text-lg text-xs'>Formatic</p>
          </div>
          <div className='lg:w-[31%] w-[48%] lg:p-10 p-4 lg:my-6 my-2 border border-[#16161E] text-center rounded-sm'>
            <img src="/assets/wallets/myeth.png" className='mx-auto sm:w-20 sm:h-20' alt="" />
            <p className='font-bold lg:text-lg text-xs'>MyEther Wallet</p>
          </div>
          <div className='lg:w-[31%] w-[48%] lg:p-10 p-4  lg:my-6 my-2 border border-[#16161E] text-center rounded-sm'>
            <img src="/assets/wallets/trustwallet.png" className='mx-auto sm:w-20 sm:h-20' alt="" />
            <p className='font-bold lg:text-lg text-xs'>TrustWallet</p>
          </div>
        </div>
      </section>
      <NotificationFlag />
    </FrontLayout>
  );
};

export default Wallet;