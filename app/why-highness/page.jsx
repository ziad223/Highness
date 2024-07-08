import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Steps from '../_components/Steps';
import Payment from '../_components/Payment';
import WhyWriter from '../../typewriterC/WhyWriter';

const whyHighness = () => {
  return (
    <div className='why-highness'>
      <div className="why-highness-hero">
        <WhyWriter/> 
      
      </div>
      <div className='container'>
        <h2 className='text-2xl font-bold text-[#2b61ac] mb-3'>Why Should You Trade with Highness ?</h2>
        <p className='w-[80%] leading-[1.6]'>
        The Highness team is always at the forefront, striving to serve our client's needs at the highest level, surpassing all expectations. We emphasize professional ethics and utmost integrity.
        </p>
       </div>
       <div className='container'>
        <h2 className='text-2xl font-bold text-[#2b61ac] mb-3'>Trading with Highness Investment LLC</h2>
        <p className='w-[80%] leading-[1.6]'>
        Being a global trader is uncomplicated with the Highness's guidance and services. Diversify your investments across currencies, commodities, stocks, and contracts, ensuring you don't rely on a single source for trading. Experience unparalleled trading with Highness.
        </p>
       </div>
       <div className='container'>
        <h2 className='text-2xl font-bold text-[#2b61ac] mb-3'>What differentiates Highness Investment LLC?</h2>
         <div className='flex items-center gap-2 mb-6 mt-7'>
         <FaArrowRight/>
         <span className='font-bold'>Licensed & Regulated Broker</span>
         </div>
         <div className='flex items-center gap-2 mb-6 '>
         <FaArrowRight/>
         <span className='font-bold'>0.2 Spread</span>
         </div>
         <div className='flex items-center gap-2 mb-6'>
         <FaArrowRight/>
         <span className='font-bold'>Instant Execution</span>
         </div>
         <div className='flex items-center gap-2 mb-6'>
         <FaArrowRight/>
         <span className='font-bold'>Withdrawal & Deposit Within 60 minutes</span>
         </div>
         <div className='flex items-center gap-2 mb-6'>
         <FaArrowRight/>
         <span className='font-bold'>13 years in the markets</span>
         </div>
         <div className='flex items-center gap-2 mb-6'>
         <FaArrowRight/>
         <span className='font-bold'>470 Trading Tools</span>
         </div>
         <div className='flex items-center gap-2 mb-6'>
         <FaArrowRight/>
         <span className='font-bold'>No Hidden Commissions</span>
         </div>
         <div className='flex items-center gap-2 mb-6'>
         <FaArrowRight/>
         <span className='font-bold'>24/7 Customer Service in Multiple Languages</span>
         </div>

       </div>
       <Steps/>
       <Payment/>
    </div>
  )
}

export default whyHighness
