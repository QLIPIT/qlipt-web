import Card from '@/components/Card';
import FrontLayout from '@/layout/FrontLayout';
import React from 'react';

const Profile = () => {
  return (
    <FrontLayout>
      <main className='lg:mt-28'>
        <img src="/assets/cover-img.png" className='w-full sm:h-52' alt="" />
        <div className='lg:flex lg:mx-20 mx-6 justify-between'>
          <div className='lg:w-[25%] bg-[#16161E] p-8 relative lg:-top-40 -top-10 h-1/2'>
            <img src="/assets/user-img.png" className='w-20 h-20 mx-auto' alt="" />
            <div className='text-center my-3'>
              <h2 className='heading font-bold text-xl'>Karla Gyan</h2>
              <p className='text-xs my-2 text-[#BEC2CA]'>0x495f947245....cb7b5eby</p>
              <p className='text-xs my-2 text-[#BEC2CA] text-left'>A 2D hyper-realist artist with 10 years experience designing portraits for influential celebrities and government officials.</p>
              <div className='flex justify-between my-6'>
                <div>
                  <h4 className='text-base font-bold'>2,000</h4>
                  <p className='text-xs'>NFTs Created</p>
                </div>
                <div>
                  <h4 className='text-base font-bold'>45</h4>
                  <p className='text-xs'>NFTs Sold</p>
                </div>
                <div>
                  <h4 className='text-base font-bold'>24</h4>
                  <p className='text-xs'>NFTs Bought</p>
                </div>
              </div>
              <button className='bg-[#4B23CC] p-4 rounded-full px-20 my-6'>Follow Karla</button>
            </div>
          </div>
          <div className='lg:w-[70%] lg:p-6'>
            <h1 className='heading text-4xl font-bold'>NFTs</h1>
            <div className="lg:flex justify-between sm:hidden md:hidden text-sm mt-10">
              <button className="rounded-full px-10 p-2 text-black bg-white">On Sale</button>
              <button className="rounded-full px-10 p-2 bg-transparent text-[#777E90]">Created</button>
              <button className="rounded-full px-10 p-2 bg-transparent text-[#777E90]">Collections</button>
              <button className="rounded-full px-10 p-2 bg-transparent text-[#777E90]">Bought</button>
              <button className="rounded-full px-10 p-2 bg-transparent text-[#777E90]">Following</button>
              <button className="rounded-full px-10 p-2 bg-transparent text-[#777E90]">Created</button>
            </div>
            <div className='flex flex-wrap justify-between'>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </main>
    </FrontLayout>
  );
};

export default Profile;