import ExclusiveCard from '@/components/ExclusiveCard';
import FrontLayout from '@/layout/FrontLayout';
import React from 'react';

const Exhibit = () => {
  return (
    <FrontLayout>
      <section className='lg:p-40 p-6'>
        <div className='lg:flex justify-evenly'>
          <div className='exclusive lg:w-[40%] md:w-[49%] sm:my-6 md:my-4'>
            <img src="/assets/art.png" className='w-full' alt="" />
            <div className='text-center p-6'>
              <h1 className='font-bold lg:text-xl text-lg title'>RUIN OF OSHUN</h1>
              <p className='text-xs text-[#FFF9DF] my-3'>Oshun is considered one of the most powerful of all orishas, her temple is filled with treasures and water rune magic.</p>

              <h3 className='text-[#878787] mt-6 title font-bold lg:text-xl text-lg'>40,000 QLIP</h3>
            </div>
          </div>
          <div className='lg:w-[40%]'>
            <div className='border border-[#16161E] p-8 my-4'>
              <h1 className='heading font-bold lg:text-4xl text-2xl'>OSHUN</h1>
              <div className='flex my-4 text-sm'>
                <img src="/assets/user-img.png" alt="" />
                <p className='my-auto ml-2'>Owned by Karla</p>
                <p className='ml-6 my-auto'><span className='text-[#BEC2CA]'>Available:</span> 20 in Stock</p>
              </div>
              <p className='text-[#BEC2CA] text-sm py-3'>Current Price</p>
              <div className='flex w-52 ml-2 justify-between'>
                <img src="/assets/icon.png" alt="" />
                <h2 className='heading text-xl'>100,000</h2>
                <p className='text-xs text-[#BEC2CA] my-auto'>($27,929)</p>
              </div>
              <button className='btn p-4 rounded-full lg:w-52 w-full mt-10'>Buy Now</button>
            </div>
            <div className='border border-[#16161E] p-8 my-4'>
              <p className='text-[#BEC2CA] text-sm py-3'>Contract Address</p>
              <p className='text-[#B49DFF] text-clip overflow-hidden'>0x495f947276749ce646f68ac8c248420045cb7b5e</p>
              <p className='text-[#BEC2CA] text-sm py-3'>Token ID</p>
              <p className='text-[#B49DFF]'>282222222222222</p>
              <p className='text-[#BEC2CA] text-sm py-3'>Creator</p>
              <p className='text-[#B49DFF]'>Chijamz</p>
            </div>
          </div>
        </div>
      </section>
    </FrontLayout>
  );
};

export default Exhibit;