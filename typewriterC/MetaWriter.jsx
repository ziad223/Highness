'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const MetaWriter = () => {
  return (
    <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['MT5 for your PC'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
MetaTrader 5 is a comprehensive trading platform suitable for both novice and experienced traders. It offers advanced analytics, automated trading capabilities, and the ability to trade through multiple asset classes. The platform also provides real-time market data, customizable trading preferences, and a community of traders to share ideas with.
        </p>
       </div>
  );
}

export default MetaWriter;
