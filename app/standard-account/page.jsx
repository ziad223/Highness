import React from 'react';
import StandardWriter from '../../typewriterC/StandardWriter';
import Image from 'next/image';
import standard1 from '../../assests/standard1.png';
import standard2 from '../../assests/standard2.png';
import standard3 from '../../assests/standard3.png';
const page = () => {
  return (
    <div className='standard'>
       <div className="standard-hero">
        <StandardWriter/>
       </div>
       <div className="standard-table md:w-[60%] my-20 mx-auto">
        <h1 className=' text-center font-bold text-2xl text-[#2b61ac]'>Choose from a variety of trading accounts</h1>
        <div>
            <h2 className='text-center mt-10 text-xl bg-[#2b61ac] p-3 text-gray-100 font-bold'>Standard Account</h2>
            <div className='stabdard-parent'>
                <div className='standard-ac flex justify-between  border border-1  border-b-0 border-gray-300  '>
                    <h2 className='pl-10 my-4 font-bold text-md'>Minium Deposit</h2>
                    <h2 className='pr-10 my-4'>10,000 USD</h2>
                </div>
                   <div className='standard-ac flex justify-between  border border-1 border-b-0 border-gray-300   '>
                    <h2 className='pl-10 my-4 font-bold text-md'>Spreads From</h2>
                    <h2 className='pr-10 my-4'>1.2 Pips</h2>
                </div>
                  <div className='standard-ac flex justify-between  border border-1 border-b-0 border-gray-300   '>
                    <h2 className='pl-10 my-4 font-bold text-md'>Minimum Lot Size</h2>
                    <h2 className='pr-10 my-4'>0.01</h2>
                </div>
                  <div className='standard-ac flex justify-between  border border-1 border-b-0 border-gray-300  '>
                    <h2 className='pl-10 my-4 font-bold text-md'>Leverage Up to</h2>
                    <h2 className='pr-10 my-4'>1:400</h2>
                </div>
                  <div className='standard-ac flex justify-between  border border-1 border-b-0 border-gray-300   '>
                    <h2 className='pl-10 my-4 font-bold text-md'>Commission</h2>
                    <h2 className='pr-10 my-4'>$0.00</h2>
                </div>
                   <div className='standard-ac flex justify-between  border border-1 border-b-0 border-gray-300   '>
                    <h2 className='pl-10 my-4 font-bold text-md'>Instruments</h2>
                    <h2 className='pr-10 my-4'>28 currency pairs, Metals, CFD</h2>
                </div>
                   <div className='standard-ac flex justify-between  border border-1 border-b-0 border-gray-300   '>
                    <h2 className='pl-10 my-4 font-bold text-md'>Platforms</h2>
                    <h2 className='pr-10 my-4'>MT5 | Highness trader</h2>
                </div>
                   <div className='standard-ac flex justify-between  border border-1 border-gray-300  '>
                    <h2 className='pl-10 my-4 font-bold text-md'>Stop out</h2>
                    <h2 className='pr-10 my-4'>10%</h2>
                </div>
            </div>
        </div>
       </div>
          <div className='my-20 md:w-[85%] mx-auto'>
            <h2 className='text-[#2b61ac] text-center text-2xl font-bold'>Switch to Highness</h2>
            <div className='standard-flex mt-20 flex justify-center gap-4'>
                <div className='standard-div text-center w-[32%]'>
                    <Image src={standard1} className='mx-auto' alt='standard-img' width={100} height={60}/>
                    <h2 className='my-4 text-xl font-medium '>Over 14 years of experience</h2>
                    <p className='w-full'> Highness is among the most significant foreign exchange and CFD brokers worldwide, and it is listed on the stock exchange.</p>
                </div>
                   <div className='standard-div text-center w-[32%]'>
                    <Image src={standard2} className='mx-auto' alt='standard-img' width={100} height={60}/>
                    <h2 className='my-4 text-xl font-medium '>Customer support 24/5</h2>
                    <p  className='w-full'>We provide customer support round the clock on official working days, we committed to respond to all your queries and resolving any issues you may encounter. Our utmost priority is to ensure your satisfaction.</p>
                </div>
                   <div className='standard-div text-center w-[32%]'>
                    <Image src={standard3} className='mx-auto' alt='standard-img' width={100} height={60}/>
                    <h2 className='my-4 text-xl font-medium '>Secure and regulated brokerage</h2>
                    <p  className='w-full'>We are a regulated Forex company incorporated under the Limited Liability Companies Act in St. Vincent & the Grenadines, providing a secure and transparent trading environment for our clients.</p>
                </div>
                
            </div>
        </div>

        <div className=' md:w-[60%] mx-auto my-20 text-center'>
            <h2 className='standard-title text-blue-700 text-2xl font-bold'>How to open a trading account</h2>
            <p className='mt-3 standard-p'>Follow this step-by-step guide to learn how to open your trading account.</p>
            <iframe className='mt-5 mx-auto rounded-lg standard-video' width="660" height="450" src="https://www.youtube.com/embed/z7538iNe2Pw" title="Forex Trading for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button type="button" className="mt-10 w-[200px] text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2   focus:outline-none  text-lg">Start Trading</button>

        </div>
        
    </div>
  );
}

export default page;
