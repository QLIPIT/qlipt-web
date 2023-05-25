import React from 'react';

const ExclusiveCard = () => {
  return (
    <div className='exclusive w-[30%]'>
      <img src="/assets/art.png" className='w-full' alt="" />
      <div className='text-center p-6'>
        <h1 className='font-bold text-xl title'>RUIN OF OSHUN</h1>
        <p className='text-xs text-[#FFF9DF] my-3'>Oshun is considered one of the most powerful of all orishas, her temple is filled with treasures and water rune magic.</p>

        <h3 className='text-[#878787] mt-6 title font-bold text-xl'>40,000 QLIP</h3>
      </div>
    </div>
  );
};

export default ExclusiveCard;