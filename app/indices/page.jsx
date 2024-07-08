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
import IndicesWriter from '../../typewriterC/IndicesWriter';
const page = () => {
  return (
    <div className='indices'>
       <div className="indices-hero">
        <IndicesWriter/>
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
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">AUS200. <br />S&P/ASX 200</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.10	</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.10	</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-163	</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-0.9</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
            <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">DAX <br />DAX 40</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.5</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.5</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-28</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-31</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
            <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">ES35 <br />IBEX 35 Index Cas</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">6.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">6.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-16</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-1.8</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">10.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
              <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">EUR50<br />EURO STOXX50 Index Cash</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.1</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-7.7</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-0.9</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
                  <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">FRA40 <br />CAC40 Index Cash</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.8</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0.8</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-13</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-15</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">5.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.00</td>
            </tr>
                  <tr className="border border-neutral-200 bg-blue-950 text-gray-100 text-center">
             <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">HK50 <br />Hang Seng 50 Index Cash</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">7.0 </td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">7.0</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">-39</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">0</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">10.00</td>
              <td className="whitespace-nowrap px-6 py-4 font-semibold text-[16px]">1.50</td>
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
      <h4 className='text-gray-500 text-lg mt-2'>Here are our most frequently asked questions about trading indices with Highness Investment LLC.</h4>
      </div>
            <div className='indices-questions mt-10'>
         <div className="indices-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What are Indices, and how can I trade them ?</h2>
           <h3 className='mt-3 p-5'>Indices are a type of financial instrument that represents the value of a package of stocks. Traders can trade indices using derivatives such as contracts for difference (CFDs), which allow them to gain profit from changes in the value of the underlying index. To trade indices, you will need to open a trading account with a reputable broker, to deposit funds, and then start placing trades.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What are the risks of Indices trading ?</h2>
           <h3 className='mt-3 p-5'>Indices trading can be highly risky, as it involves trading on leverage, which means you can potentially lose more than your initial investment. Further, the value of indices is affected by various factors, such as economic indicators, political events, and global news.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What strategies can I use for Indices trading ?</h2>
           <h3 className='mt-3 p-5'>There are various strategies that traders use for Indices trading, such as following a trend, which means reversion, and breakout trading. Each strategy has its own pros and cons, and it is important to choose a strategy that fits your trading tactics and risk tolerance.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What is the margin requirement for Indices trading ?</h2>
           <h3 className='mt-3 p-5'>The margin requirement for Indices trading varies depending on the broker and the specific index you are trading. Margin requirements can range from 1% to 20% or more, depending on the volatility of the index and the broker's risk management policies.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What are the best indices to trade in ?</h2>
           <h3 className='mt-3 p-5'>The best indices to trade in depend on your trading tactics and preferences. Some popular indices include the S&P 500, Dow Jones Industrial Average, NASDAQ Composite, FTSE 100, and DAX 30. It is important to conduct your own research and analysis before deciding which indices to trade in.
            </h3>
         </div>

    </div>
     </div>
    </div>
  );
}

export default page;
