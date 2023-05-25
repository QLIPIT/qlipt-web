import React from 'react';

const Hero = () => {
  return (
    <div className='hero lg:h-screen'>
      <div className='relative lg:top-[40%] sm:py-20 md:py-20 lg:w-1/2 lg:mx-32 mx-4'>
        <h1 className='heading lg:text-7xl text-4xl font-bold '>
          NFT Martkeplace for African Creators
        </h1>
        <p className='text-base my-6 lg:w-[60%]'>Create, explore and trade in the first-ever African owned  NFT Markeplace.</p>
        <div className='flex lg:w-[60%] justify-between'>
          <button className='btn lg:p-5 p-3 rounded-full lg:w-52 w-[48%]'>Create</button>
          <button className='bg-white text-black lg:p-5 p-3 rounded-full w-[48%] lg:w-52'>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;