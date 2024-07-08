import Image from 'next/image'
import React from 'react'
import platform1 from  '../../assests/platform1.png';
import platform2 from  '../../assests/platform2.png';
import platform3 from  '../../assests/platform3.png';
import { FaCheckCircle } from "react-icons/fa";

const Platforms = () => {
  return (
    <div className='platforms container'>
      <h1 className='text-primary text-4xl text-center font-bold'>Choose from various <span>Trade Platforms</span></h1>
     <div className='mt-[40px] flex justify-center gap-4 platform-content'>
     <div className="platform-div border border-gray-300 p-5 w-[32%]   ">
        <Image src={platform1} alt="platform1-img" className='block mx-auto' />
        <h2 className='my-4 font-bold text-xl'>Desktop trading platform</h2>
        <div className='flex flex-col gap-3  justify-between  '>
            <div className='flex  gap-4 items-center '>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span>Tight Fixed Spread.</span>
            </div>
            <div className='flex  gap-4 items-center'>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span className='md:text-[16px]'>no commissions or concealed fees.</span>
            </div>
            <div className='flex  gap-4 items-center'>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span>There is no slippage.</span>
            </div>
        </div>
<button className="bg-[#2b61ac] hover:bg-blue-800 text-gray-100 font-bold py-2 px-4 rounded  items-center my-4 mt-6  text-center w-[70%] flex justify-center mx-auto ">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
      </div>
      <div className="platform-div border border-gray-300 p-5 w-[32%]   ">
        <Image src={platform2} alt="platform1-img" className='block mx-auto' />
        <h2 className='my-4 font-bold  text-xl'>Web Trading Platform</h2>
        <div className='flex flex-col gap-3  justify-between  '>
            <div className='flex  gap-4 items-center '>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span>Tight Fixed Spread.</span>
            </div>
            <div className='flex  gap-4 items-center'>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span>Free stop loss guarantee.</span>
            </div>
            <div className='flex  gap-4 items-center'>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span>Advanced chart tools.</span>
            </div>
        </div>
<button className                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ="bg-[#2b61ac] hover:bg-blue-800 text-gray-100 font-bold py-2 px-4 rounded  items-center my-4 text-center w-[70%] flex justify-center mt-6  mx-auto ">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
      </div>
      <div className="platform-div border border-gray-300 p-5 w-[32%]   ">
        <Image src={platform3} alt="platform1-img" className='block mx-auto' />
        <h2 className='my-4 font-bold  text-xl'>Mobile Trading APPS</h2>
        <div className='flex flex-col gap-3  justify-between  '>
            <div className='flex  gap-3 items-center '>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span>Tight Fixed Spread.</span>
            </div>
            <div className='flex  gap-3 items-center'>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span>Accessible on Android and iOS.</span>
            </div>
            <div className='flex  gap-3 items-center'>
             <FaCheckCircle className=' text-xl text-primary'/>
             <span>Easy to use.</span>
            </div>
        </div>
<button className="bg-[#2b61ac] hover:bg-blue-800 text-gray-100 font-bold py-2 px-4 rounded  items-center my-4 text-center w-[70%] flex justify-center mt-6 mx-auto ">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
      </div>
     </div>
    </div>
  )
}

export default Platforms
