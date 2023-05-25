import React from 'react';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='relative top-[50%] w-1/2 mx-32'>
        <h1 className='heading text-7xl font-bold '>
          NFT Martkeplace for African Creators
        </h1>
        <p className='text-base my-6 w-[60%]'>Create, explore and trade in the first-ever African owned  NFT Markeplace.</p>
        <div className='flex w-[60%] justify-between'>
          <button className='btn p-5 rounded-full w-52'>Create</button>
          <button className='bg-white text-black p-5 rounded-full w-52'>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;