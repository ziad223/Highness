'use client'
import React from 'react';
import  Typewriter  from 'typewriter-effect';

const ProfrssionalAccount = () => {
  return (
         <div className='text-center pt-[50px]'>
           <Typewriter
          className = 'Typewriter'
          options={{
          strings: ['Professional Account'],
          autoStart: true,
          loop: true,
    
          }}
         />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
A professional trading account is the highest level of accounts provided by Highness Investment LLC. This type requires a larger initial deposit, and it offers the most advanced trading tools and features available. Premium account typically offers personalized customer support, access to expert trading strategies, advanced charting capabilities, and the fastest trade execution. Premium account also usually offer the lowest trading costs, making them suitable for professional traders who are looking to maximize their profits and minimize their costs.
    </p>
       </div>
  );
}

export default ProfrssionalAccount;
