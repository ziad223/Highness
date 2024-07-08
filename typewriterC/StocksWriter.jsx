'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const StocksWriter = () => {
  return (
  <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Higness Stocks'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Considered ownership stakes in companies, they are a means of investment and profit-making through the appreciation of the company's value and dividend distributions. Investors can buy and sell shares in the stock market, and it is a common way to diversify investments.
       </p>
       </div>
  );
}

export default StocksWriter;
