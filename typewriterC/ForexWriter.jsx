'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const ForexWriter = () => {
  return (
     <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Trade Forex CFDs Online'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Forex is the foreign currency exchange market, where traders can buy and sell global currencies. This market is characterized by its high liquidity and availability around the clock during weekdays, making it a significant hub for investors looking to profit from exchange rate fluctuations.

       </p>
       </div>
  );
}

export default ForexWriter;
