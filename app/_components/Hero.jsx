'use client'
import React from 'react'
import check from '../../assests/check.svg';
import Image from 'next/image';
import { FaLaptop  , FaMobileAlt} from "react-icons/fa";


const Hero = () => {


  return (
    <section className='hero h-[max-content] text-gray-100'>
       <div className='md:pt-[35px] md:ml-[200px] mb-[20px] hero-one'>
        <h1 className='text-4xl'>Highness <span className='text-primary'>Investment LLC</span></h1>
        <h2 className='text-2xl text-[#cfcfcf] mt-8 font-bold'>Higher Trading Ambitions!</h2>
        <div className='flex flex-col gap-6 mt-7'>
          <div className='flex items-center gap-4'>
          <Image src={check} alt='check-img' className='w-[30px]'/>
          <span>Instant Deposit & Withdrawal</span>
          </div>
          <div className='flex items-center gap-4'>
          <Image src={check} alt='check-img' className='w-[30px]'/>
          <span>14 Years Experience</span>
          </div>
          <div className='flex items-center gap-4'>
          <Image src={check} alt='check-img' className='w-[30px]'/>
          <span>No Hidden Commissions</span>
          </div>
        </div>
        <button class="bg-[#065fb3] hover:bg-primary text-white font-bold py-2 px-4 rounded mt-7">Open Account</button>
       </div>
       <div className='mt-[60px] hero-two'>
        <h2 className='text-center text-[40px] hero-why'>Why <span className='text-primary'>Highness</span> different from others ?</h2>
        <div className='mx-auto mt-[30px] flex flex-wrap justify-center gap-5 '>
        <div className='text-center border-r-2 p-3 md:w-[29%] hero-two-div'>
          <h4 className='text-[18px] font-bold'>Diverse set of instruments</h4>
          <h5 className='text-gray-300 text-[14px] mt-[10px]'>We use a wide range of effective trading instruments, including CDFs</h5>
        </div>
        <div className='text-center border-r-2 p-3 md:w-[29%] hero-two-div'>
          <h4 className='text-[18px] font-bold'>Smooth and flexible leverage</h4>
          <h5 className='text-gray-300 text-[14px] mt-[10px]'>We offer leverage options up to 1:1000* for trading volumes as low as 0.01 units</h5>
        </div>
        <div className='text-center  p-3 md:w-[29%] hero-two-div'>
          <h4 className='text-[18px] font-bold'>Dynamic Trading Environment</h4>
          <h5 className='text-gray-300 text-[14px] mt-[10px]'>We offer advanced technology connectivity via our data centers</h5>
        </div>
        <div className='text-center border-r-2 p-3 md:w-[29%] hero-two-div mt-8'>
          <h4 className='text-[18px] font-bold'>Experience exceeds 14 years</h4>
          <h5 className='text-gray-300 text-[14px] mt-[10px]'>Committed to achieving and maintaining higher levels of expertise since 2009</h5>
        </div>
        <div className='text-center border-r-2 p-3 md:w-[29%] hero-two-div mt-8'>
          <h4 className='text-[18px] font-bold'>Strict fund protection</h4>
          <h5 className='text-gray-300 text-[14px] mt-[10px]'>Financial regulations ensure fund separation for secure trading protection</h5>
        </div>
        <div className='text-center  p-3 md:w-[29%] hero-two-div mt-8'>
          <h4 className='text-[18px] font-bold'>+470 trading instruments</h4>
          <h5 className='text-gray-300 text-[14px] mt-[10px]'>Our platform provides more than 470 instruments to make your trading easier</h5>
        </div>
        </div>
       </div>
       <div className='flex justify-center gap-4 py-10 my-8 hero-three'>
       <button className="bg-[#065fb3] hover:bg-primary text-white font-bold py-2 px-4 rounded flex items-center gap-4">
        <FaLaptop className='text-2xl'/>
        <div>
          <h5 className='text-[15px]'>Download</h5>
          <h3>Desktop Version</h3>
        </div>
       </button>
       <button className="bg-[#065fb3] hover:bg-primary text-white font-bold py-2 px-4 rounded flex items-center gap-4">
        <FaMobileAlt className='text-2xl'  />
        <div>
          <h5 className='text-[15px]'>Download</h5>
          <h3>Mobile Version</h3>
        </div>
       </button>
       </div>
       <div className='bg-[#112646] flex gap-5 justify-around p-5 w-[80%] mx-auto hero-four '>
      <div className='text-center hero-four-div'>
        <h3 className='text-3xl'>0</h3>
        <h2 className='text-[16px] mt-[5px] text-gray-200'>Commission</h2>
      </div>
      <div className='text-center hero-four-div'>
        <h3 className='text-3xl'>0.0</h3>
        <h2 className='text-[16px] mt-[5px] text-gray-200'>Pips From</h2>
      </div>
      <div className='text-center hero-four-div'>
        <h3 className='text-3xl'>$20</h3>
        <h2 className='text-[16px] mt-[5px] text-gray-200'>Min Deposit</h2>
      </div>
      <div className='text-center hero-four-div'>
        <h3 className='text-3xl'>6+</h3>
        <h2 className='text-[16px] mt-[5px] text-gray-200'>Funding Methods</h2>
      </div>
      <div className='text-center hero-four-div'>
        <h3 className='text-3xl'>470+</h3>
        <h2 className='text-[16px] mt-[5px] text-gray-200'>Tradable Instruments</h2>
      </div>
      <div className='text-center hero-four-div'>
        <h3 className='text-3xl'>1:400</h3>
        <h2 className='text-[16px] mt-[5px] text-gray-200'>FX Leverage Up to</h2>
      </div>
       </div>
    </section>
  )
}

export default Hero
