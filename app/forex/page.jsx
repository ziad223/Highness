import React from 'react';
import ForexWriter from '../../typewriterC/ForexWriter';
import Image from 'next/image';
import img1 from '../../assests/FOREX.png';
import img2 from '../../assests/INDICES.png';
import img3 from '../../assests/COMMODITIES.png';
import img4 from '../../assests/METALS.png';
import img5 from '../../assests/ENERGIES.png';
import img7 from '../../assests/CRYPTOCURRENCIES.png';
import img8 from '../../assests/SHARES.png';
import img9 from '../../assests/TREASURIES.png';
import ForexAccording from '../../typewriterC/ForexAccording';
const page = () => {
  return (
    <div className='forex'>
       <div className="forex-hero">
        <ForexWriter/>
       </div>
       <div className="forex-content px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-64 my-20 flex justify-around gap-3">
         <div className='flex forex-div  flex-col items-center gap-2 hover:scale-110 cursor-pointer transition duration-300'>
           <Image src={img1} alt='forex-img' width={50} height={50} />
           <h3 className='font-bold text-[18px]'>Forex</h3>
         </div>
          <div className='flex forex-div flex-col items-center gap-2 hover:scale-110 cursor-pointer transition duration-300'>
           <Image src={img2} alt='forex-img' width={50} height={50} />
           <h3 className='font-bold text-[18px]'>Indices</h3>
         </div>
          <div className='flex forex-div flex-col items-center gap-2 hover:scale-110 cursor-pointer transition duration-300 '>
           <Image src={img3} alt='forex-img' width={50} height={50} />
           <h3 className='font-bold text-[18px]'>Commodities</h3>
         </div>
          <div className='flex forex-div flex-col items-center gap-2 hover:scale-110 cursor-pointer transition duration-300 '>
           <Image src={img4} alt='forex-img' width={50} height={50} />
           <h3 className='font-bold text-[18px]'>ETFS</h3>
         </div>
          <div className='flex forex-div flex-col items-center gap-2 hover:scale-110 cursor-pointer transition duration-300 '>
           <Image src={img5} alt='forex-img' width={50} height={50} />
           <h3 className='font-bold text-[18px]'>Energy</h3>
         </div>
          <div className='flex forex-div flex-col items-center gap-2 hover:scale-110 cursor-pointer transition duration-300'>
           <Image src={img7} alt='forex-img' width={50} height={50} />
           <h3 className='font-bold text-[18px]'>Stocks</h3>
         </div>
          <div className='flex forex-div flex-col items-center gap-2 hover:scale-110 cursor-pointer transition duration-300'>
           <Image src={img8} alt='forex-img' width={50} height={50} />
           <h3 className='font-bold text-[18px]'>Metals</h3>
         </div>
         <div className='flex forex-div flex-col items-center gap-2 hover:scale-110 cursor-pointer transition duration-300'>
           <Image src={img9} alt='forex-img' width={50} height={50} />
           <h3 className='font-bold text-[18px]'>Cryptocurrencies</h3>
         </div>
       </div>
    <div className="flex flex-col px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-64 my-20">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table
          className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead   className="border border-neutral-200 font-medium  ">
            <tr className='bg-primary text-gray-100 text-center'>
              <th scope="col" className="px-4 py-4 text-[16px]">Instrument</th>
              <th scope="col" className="px-4 py-4 text-[16px]">Minimum Spread	</th>
              <th scope="col" className="px-4 py-4 text-[16px]">Current spread	</th>
              <th scope="col" className="px-4 py-4 text-[16px]">Long swap	</th>
              <th scope="col" className="px-4 py-4 text-[16px]">Short swap	</th>
              <th scope="col" className="px-4 py-4 text-[16px]">Ret. margin %		</th>
              <th scope="col" className="px-4 py-4 text-[16px]">Prof. margin %</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-neutral-200  bg-blue-950 text-gray-100 text-center">
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">AUDCAD <br />Australian Dollar vs Canadian Dollar	</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.1</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.0</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-4.13	</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-1.3</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
            <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">AUDCHF <br />Australian Dollar vs Swiss Franc</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.7</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.0</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.0</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.0</td>
            </tr>
            <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">AUDJPY <br />Australian Dollar vs Japanese Yen	</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.7</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-14.92</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
              <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">AUDNZD <br />Australian Dollar vs New Zealand Dollar	</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.7</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.7</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-7.22</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.02</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
                  <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">AUDUSD <br />Australian Dollar vs US Dollar</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.0</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-5.77</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-1.72</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
                  <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">CADCHF <br />Canadian Dollar vs Swiss Franc</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.0 </td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.3</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.05</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-12</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">3.33</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
     <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  my-20'>
      <div className='text-center'>
      <h2 className='font-bold text-2xl text-[#2b61ac]'>Frequently Asked Questions</h2>
      <h4 className='text-gray-500 text-lg mt-2'>Here are our most frequently asked questions about trading forex with Highness Investment LLC.</h4>
      </div>
         <ForexAccording/>
     </div>
    </div>
  );
}

export default page;
