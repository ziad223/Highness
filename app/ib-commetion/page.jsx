import React from 'react';
import Image from 'next/image';
import img1 from '../../assests/meta1.png';
import img2 from '../../assests/meta2.png';
import img3 from '../../assests/meta3.png';
import img4 from '../../assests/meta4.png';
import img5 from '../../assests/meta5.png';
import img6 from '../../assests/meta6.png';
import IbWriter from '@/typewriterC/IbWriter';
import ForexAccording from '@/typewriterC/ForexAccording';
const page = () => {
  return (
    <div className='ib bg-[#333]'>
       <div className="ib-hero">
        <IbWriter/>
       </div>
        <div className='py-10'>
         <h2 className='ib-title text-gray-100 text-3xl text-center font-bold'>How much you can earn</h2>
         <div className="bg-[#111] mt-10 lg:w-[50%] w-[90%] mx-auto p-5 rounded-md text-gray-100">
          <div className='ib-one flex justify-around text-2xl mt-5 '>
            <h2 className='ib-one-div bg-[#222] p-3 rounded-md'>EURUSD</h2>
            <h2 className='ib-one-div bg-[#222] p-3 rounded-md'>DE40</h2>
            <h2 className='ib-one-div bg-[#222] p-3 rounded-md'>USTech</h2>
            <h2 className='ib-one-div bg-[#222] p-3 rounded-md'>XAUUSD</h2>
          </div>
          <div className='ib-two flex justify-around rounded-md bg-[#000] w-[90%] mx-auto my-10 p-5'>
          <div className='ib-two-div flex flex-col gap-2 text-center'>
            <h4>Payout per lot</h4>
            <h2>8.8 USD</h2>
          </div>
          <div className='ib-two-div flex flex-col gap-2 text-center'>
            <h4>Average spread</h4>
            <h2>1.3 pips</h2>
          </div>
          <div className='ib-two-div flex flex-col gap-2 text-center'>
            <h4>Swap Long</h4>
            <h2>-0.96 pips</h2>
          </div>
          <div className='ib-two-div flex flex-col gap-2 text-center'>
            <h4>Swap Short</h4>
            <h2>0.1 pips</h2>
          </div>
          </div>
          <div className='ib-three flex justify-around '>
         <div className=' flex flex-col gap-2 text-center '>
          <h2 className='text-xl'>Closed positions, lots</h2>
          
<form className="max-w-xs my-3 mx-auto block text-center ">
  <div className="relative flex items-center  justify-center mx-auto max-w-[10rem]">
    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-800 text-gray-100 dark:bg-gray-700 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
      <svg className="w-3 h-3 text-gray-100 text-xl dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
      </svg>
    </button>
    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-900 border-x-0 text-lg h-11 text-center text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={999} required />
    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-100 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
      <svg className="w-3 h-3 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
      </svg>
    </button>
  </div>
</form>

         </div>
         <div className='ib-three flex flex-col gap-2 text-center '>
          <h2 className='text-xl'>Open overnight, lots</h2>
                    
              <form className="max-w-xs my-3 mx-auto block text-center ">
  <div className="relative flex items-center  justify-center mx-auto max-w-[10rem]">
    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-800 text-gray-100 dark:bg-gray-700 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
      <svg className="w-3 h-3 text-gray-100 text-xl dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
      </svg>
    </button>
    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-900 border-x-0 text-lg h-11 text-center text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={999} required />
    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-100 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
      <svg className="w-3 h-3 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
      </svg>
    </button>
  </div>
              </form>
         </div>
          </div>
            <div className="py-10 text-center text-5xl  font-bold text-gray-400">
              <h2 className='overall'>Overall income per day</h2>
              <h2 className='mt-10 overall'>10 720 USD</h2>
            </div>
            <div className='ib-four flex justify-around mb-10'>
            <div className='flex flex-col gap-2 font-bold text-lg text-center'>
              <h2>Commission from spread</h2>
              <h2>8 800USD</h2>
            </div>
             <div className='flex flex-col gap-2 font-bold text-lg text-center'>
              <h2>Commission from swap long</h2>
              <h2>1 920 USD</h2>
            </div>
            </div>
         </div>
        </div>
          <div className='steps p-1 bg-[#e9e9e9]'>
      <div className="steps-content container">
      <h2 className='step-title text-center text-3xl font-bold text-[#2b61ac]  '>GET STARTED NOW</h2>
      <p className='mt-3 text-center text-xl'>Grow your business with Highness Partners' Affiliate Program</p>
      <div className="steps-flex items-center mt-[50px] flex justify-around">
        <div className='step-item text-center'>
        <div className='step-num'>1</div>
        <div>
            <h2 className='my-4 text-[28px] text-[#2b61ac] font-bold'>Apply Online</h2>
            <h3 className='text-[18px]'>
           Fill out our affiliate application form today
            </h3>
        </div>
        </div>
        <div className='step-item text-center'>
        <div className='step-num'>2</div>
        <div>
            <h2 className='my-4  text-[28px] text-[#2b61ac] font-bold'>Place ads</h2>
            <h3 className='text-[18px]'>
            Head over to the Marketing Tools section and get 
            <span className='block'>your banners, links, and widgets.</span>
            </h3>
        </div>
        </div>
        <div className='step-item text-center'>
        <div className='step-num'>3</div>
        <div>
            <h2 className='my-4  text-[28px] text-[#2b61ac] font-bold'>Get Paid</h2>
            <h3 className='text-[18px]'>
          Earn high CPAs from your clients' 
            <span className='block'>trading</span>
            </h3>
        </div>
        </div>
      </div>
      <button className="bg-[#2b61ac] block mx-auto hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-[50px]">
        Become an Affiliate today
        </button>
      </div>
    </div>

         <div className='px-4 md:px-8 bg-gray-100 lg:px-16 xl:px-32 2xl:px-64  py-20'>
      <div className='text-center'>
      <h2 className='font-bold text-2xl text-[#2b61ac]'>Frequently asked questions</h2>
      <h4 className='text-gray-500 text-lg mt-2'>
        Here are our most frequently asked questions about trading forex with Highness.
        </h4>
   </div>
            <div className='indices-questions mt-10'>
         <div className="indices-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What is Forex Trading ?</h2>
           <h3 className='mt-3 p-5'>

Forex trading, also known by the name of currency trading or FX trading, refers to buying a particular currency while selling another in exchange. Trading currencies always involves exchanging one currency for another.

The ultimate aim can vary and can be any of the below but not limited to the below:

1. Exchanging currency A (e.g. USD) to currency B (e.g. EUR) for travelling purposes;
2. Exchanging currency A (e.g. USD) to currency B (e.g. EUR) for trading purposes;
3. Exchanging currency A (e.g. USD) to currency B (e.g. EUR) for speculative purposes, with the goal to make a profit.
Due to all the above, and not limited to the above, the forex trading market is today the world’s most liquid and most volatile market, with over $5 trillion traded daily.
          </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What Influences Prices in Forex Trading ?</h2>
           <h3 className='mt-3 p-5'>
            There is an endless number of factors that all contribute and influence the prices in forex trading (i.e. currency rates) daily, but it could be safe to say that there are 6 major factors which contribute the most and are more or less the main driving forces for forex trading price fluctuation:

1. Differentials in inflation
2. Differentials in interest rates
3. Current account deficits
4. Public debt
5. Terms of trade
6. Political and economic stability
In order to best comprehend the above 6 factors, you will have to keep in mind that currencies are traded against one another. So when one falls, another one rises as the price denomination of any currency is always stated against another currency.
            </h3>
         </div>
           <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What Influences Prices in Forex Trading ?</h2>
           <h3 className='mt-3 p-5'>
            There is an endless number of factors that all contribute and influence the prices in forex trading (i.e. currency rates) daily, but it could be safe to say that there are 6 major factors which contribute the most and are more or less the main driving forces for forex trading price fluctuation:

1. Differentials in inflation
2. Differentials in interest rates
3. Current account deficits
4. Public debt
5. Terms of trade
6. Political and economic stability
In order to best comprehend the above 6 factors, you will have to keep in mind that currencies are traded against one another. So when one falls, another one rises as the price denomination of any currency is always stated against another currency.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What is Forex Trading Software ?</h2>
           <h3 className='mt-3 p-5'>
Forex trading software is an online trading platform provided to each Highness client, which allows them to view, analyze and trade currencies, or other asset classes

In simple terms, each Highness client is provided access to a trading platform (i.e. software) which is directly connected to the global market price feed and allows them to perform transactions without the help of a third party.            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>Who are Forex Trading Market Participants ?</h2>
           <h3 className='mt-3 p-5'>
Forex trading market participants can fall in any of the following categories:

1. Travellers or overseas consumers who exchange money to travel overseas or purchase goods from overseas.
2. Businesses that purchase raw materials or goods from overseas and need to exchange their local currency to the currency of the country of the seller.
3. Investors or speculators who exchange currencies, which either require a foreign currency, to perform trading in equities or other asset classes from overseas or either are trading currencies with the aim of making a profit from market changes.
4. Banking institutions that exchange money to service their clients or to lend money to overseas clients.
5. Governments or central banks that either buy or sell currencies and try to adjust financial imbalances, or adjust economic conditions.            </h3>
         </div>
        

    </div>
     </div>
    </div>
  );
}

export default page;
