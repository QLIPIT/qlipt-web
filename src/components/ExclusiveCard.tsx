import React from 'react';

const ExclusiveCard = () => {
  return (
    <div className='exclusive lg:w-[30%] md:w-[49%] sm:my-6 md:my-4'>
      <img src="/assets/art.png" className='w-full' alt="" />
      <div className='text-center p-6'>
        <h1 className='font-bold lg:text-xl text-lg title'>RUIN OF OSHUN</h1>
        <p className='text-xs text-[#FFF9DF] my-3'>Oshun is considered one of the most powerful of all orishas, her temple is filled with treasures and water rune magic.</p>

        <h3 className='text-[#878787] mt-6 title font-bold lg:text-xl text-lg'>40,000 QLIP</h3>
      </div>
    </div>
  );
};

export default ExclusiveCard;