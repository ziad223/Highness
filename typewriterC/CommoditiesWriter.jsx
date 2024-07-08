'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const CommoditiesWriter = () => {
  return (
   <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Higness Commodities'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Are natural resources or agricultural products that are traded in financial markets. Common commodities include oil, gold, silver, and agricultural crops like wheat and corn. Trading in commodities is considered a way to hedge against inflation and market changes.
       </p>
       </div>
  );
}

export default CommoditiesWriter;
