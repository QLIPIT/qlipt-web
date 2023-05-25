import React from 'react';

const NotificationFlag = () => {
  return (
    <div className='bg-[#16161E] my-20 p-6 flex justify-center'>
      <img src="/assets/secure.png" className='mr-4 w-12 my-auto h-12' alt="" />
      <div>
        <p className='font-bold text-sm'>Private Key Security</p>
        <p className='text-sm'>We do not own your private keys and cannot access your funds without your confirmation.</p>
      </div>
    </div>
  );
};

export default NotificationFlag;