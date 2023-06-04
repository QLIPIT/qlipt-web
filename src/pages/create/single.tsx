import NotificationFlag from '@/components/NotificationFlag';
import FrontLayout from '@/layout/FrontLayout';
import React, { useRef, useState } from 'react';

const Single = () => {
  const [step, setStep] = useState(1)
  const uploadRef = useRef<HTMLInputElement>(null)
  const [image, setFilePreview] = useState({
    type: "",
    file: "",
    name: "",
  })

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()

    if (files && files.length > 0) {
      reader.readAsDataURL(files[0])
      reader.onloadend = () => {
        if (reader.result) {
          const type = files[0].name.substr(files[0].name.length - 3)
          setFilePreview({
            type: type === "mp4" ? "video" : "image",
            file: reader.result as string,
            name: files[0].name,
          })
        }
      }
    }
  }

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <FrontLayout>
      {step === 1 ? <section className='lg:p-32 p-6'>
        <div className='mb-10'>
          <h1 className='heading lg:text-5xl text-3xl font-bold'>Create Single Collectible</h1>
          <p className='my-3 sm:text-xs text-[#BEC2CA]'>Switch to Multiple Collectible</p>
        </div>
        <div className='border border-[#16161E] text-center p-8'>
          <h3 className='text-xl font-bold'>Upload File in Any Format</h3>
          <p className='text-sm my-4 text-[#BEC2CA]'>PNG, GIF, JPG, WMV, MP4, MP3, OBJ, 3DS</p>
          <button onClick={() => uploadRef.current?.click()} className='p-3 rounded-full w-44 border border-[#4B23CC]'>Browse Files</button>
          <input ref={uploadRef} id='file' type="file" onChange={handleImage} className='hidden' />
        </div>
        <div className='text-[#BEC2CA]'>
          <p className='font-bold my-3 text-white'>NFT Details</p>
          <div className='my-2'>
            <label className='text-sm'>Item Name</label> <br />
            <input type="text" placeholder='e. g. "Redeemable Bitcoin Card with logo"' className='p-3 border border-[#16161E] bg-transparent w-full' />
          </div>
          <div className='my-2'>
            <label className='text-sm'>Description</label> <br />
            <input type="text" placeholder='e. g. “After purchasing you will able to recived the logo...”' className='p-3 border border-[#16161E] bg-transparent w-full' />
          </div>
          <div className='my-2'>
            <label className='text-sm'>Price in Venom</label> <br />
            <input type="number" placeholder='100' className='p-3 border border-[#16161E] bg-transparent w-full' />
          </div>
          <div className='my-2'>
            <label className='text-sm'>Choose NFT Category</label> <br />
            <select className='p-3 border border-[#16161E] bg-transparent w-full'>
              <option value="e.g Photography" className='hidden'>e.g Photography</option>
            </select>
          </div>
          <div className='my-2'>
            <label className='text-sm'>Royalties</label> <br />
            <input type="number" placeholder='10%' className='p-3 border border-[#16161E] bg-transparent w-full' />
            <p className='text-xs'>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</p>
          </div>
        </div>
        <div className='my-10'>
          <div className='flex my-8 justify-between'>
            <div>
              <p className='text-base font-bold'>Put on sale</p>
              <p className='text-xs  text-[#BEC2CA]'>You’ll receive bids on this item</p>
            </div>
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" />
          </div>
          <div className='flex my-8 justify-between'>
            <div>
              <p className='text-base font-bold'>Instant sale price</p>
              <p className='text-xs  text-[#BEC2CA]'>Enter the price for which the item will be instantly sold</p>
            </div>
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" />
          </div>
          <div className='flex my-8 justify-between'>
            <div>
              <p className='text-base font-bold'>Unlock once purchased</p>
              <p className='text-xs  text-[#BEC2CA]'>Content will be unlocked after successful transaction</p>
            </div>
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-green-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" />
          </div>
          <div className='my-2'>
            <label className='text-sm'>Digital key/Code/Redeem link to NFT file</label> <br />
            <input type="text" placeholder='e. g. https://drive.google.com/e9e9ewjx,ks' className='p-3 border border-[#16161E] bg-transparent w-full' />
          </div>
          {/* <div className='my-2'>
            <label className='text-sm'>Choose collection</label> <br />
            <p className='text-xs text-[#777E90]'>Choose an exiting collection or create a new one</p>
          </div> */}
          <button onClick={() => setStep(2)} className='p-3 bg-[#4B23CC] rounded-full my-20 w-44 text-xs'>Create item</button>
        </div>
      </section> : step === 2 ? <div>
        <section className='lg:p-32 p-6 flex justify-between'>
          <div className=''>
            <h1 className='heading lg:text-5xl text-3xl font-bold'>Add Sound Effect to NFT</h1>
            <p className='my-3 sm:text-xs text-[#BEC2CA]'>Choose from our audio presets and make your NFT come alive</p>
            <button className='p-2 rounded-full w-32 my-4 lg:float-right bg-[#4B23CC]'>Add Sound</button>
            <div className='my-4'>
              <audio controls className='w-full'>
                <source src="" type="audio/mpeg" />
              </audio>
            </div>
            <div className="relative my-3 sm:my-6">
              <input type="text" className="p-3 pl-10 border border-[#16161E] rounded-md bg-transparent color-[#16161E] w-full" placeholder="Search for sound effects" />
              <img src="/assets/Shape.png" className="absolute top-4 left-3" alt="" />
            </div>
            <div className='flex flex-wrap'>
              <div className='w-[30%] my-3 border border-[#16161E] rounded-sm lg:p-6 p-3 text-center'>
                <img src="/assets/TWT.png" className='mx-auto' alt="" />
                <p className='my-4 text-sm'>Steel Clash</p>
              </div>
            </div>
          </div>
          <div className='exclusive lg:w-[40%] md:w-[49%] sm:hidden sm:my-6 md:my-4'>
            <img src="/assets/art2.png" className='w-full' alt="" />
            <div className='text-center p-6'>
              <h1 className='font-bold lg:text-xl text-lg title'>OSHUN</h1>
              <p className='text-xs text-[#FFF9DF] my-3'>Oshun is considered one of the most powerful of all orishas, her temple is filled with treasures and water rune magic.</p>

              <h3 className='text-[#878787] mt-6 title font-bold lg:text-xl text-lg'>40,000 QLIP</h3>
            </div>
          </div>
        </section>
        <NotificationFlag />
      </div> : null}
    </FrontLayout>
  );
};

export default Single;