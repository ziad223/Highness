import React from 'react';
import Image from 'next/image';
import img1 from '../../assests/FOREX.png';
import img2 from '../../assests/INDICES.png';
import img3 from '../../assests/COMMODITIES.png';
import img4 from '../../assests/METALS.png';
import img5 from '../../assests/ENERGIES.png';
import img7 from '../../assests/CRYPTOCURRENCIES.png';
import img8 from '../../assests/SHARES.png';
import img9 from '../../assests/TREASURIES.png';
import MetalWriter from '../../typewriterC/MetalWriter';
const page = () => {
  return (
    <div className='indices'>
       <div className="indices-hero">
        <MetalWriter/>
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
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">COCOA.. <br />US Cocoa (ICE)</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.00	</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.50	</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-2.6	</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-2.6</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">10.00</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
            </tr>
            <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">COFFEE. <br />Coffee C Arabica (ICE)</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.02</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-0.2</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-0.2</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">10.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
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
      <h4 className='text-gray-500 text-lg mt-2'>Here are our most frequently asked questions about trading metals with Highness Investment LLC.
</h4>
      </div>
            <div className='indices-questions mt-10'>
         <div className="indices-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What are commodities, and how can I trade in them ?</h2>
           <h3 className='mt-3 p-5'>Commodities are raw materials or primary agricultural products that can be bought and sold, such as gold, silver, oil, wheat, and corn. To trade in commodities, you will need to open a trading account with a reputable broker, to deposit funds, and then start placing trades using derivatives such as contracts for difference (CFDs).
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What are the risks of commodities trading ?</h2>
           <h3 className='mt-3 p-5'>Commodities trading can be highly risky, as it involves trading on leverage, which means you can potentially lose more than your initial investment. Further, the value of commodities is affected by various factors, such as supply and demand, geopolitical events, and weather conditions.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What strategies can I use for commodities trading ?</h2>
           <h3 className='mt-3 p-5'>There are various strategies that traders use for commodities trading, such as following a trend, mean reversion, and fundamental analysis. Each strategy has its own pros and cons, and it is important to choose a strategy that fits your trading tactics and risk tolerance.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What is the margin requirement for commodities trading ?</h2>
           <h3 className='mt-3 p-5'>The margin requirement for commodities trading varies depending on the broker and the specific commodity you are trading in. Margin requirements can range from 1% to 20% or more, depending on the volatility of the commodity and the broker's risk management policies.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What are the best commodities to trade ?</h2>
           <h3 className='mt-3 p-5'>The best commodities to trade in depend on your trading tactics and preferences. Some popular commodities include gold, silver, crude oil, natural gas, and agricultural products such as corn, wheat, and soybeans. It is important to conduct your own research and analysis before deciding which commodities to trade in.
            </h3>
         </div>

    </div>
     </div>
    </div>
  );
}

export default page;
