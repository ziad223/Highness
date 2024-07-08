'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const EtfsWriter = () => {
  return (
    <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Highness ETFs'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
These are investment funds that track the performance of a certain group of assets, such as stocks, commodities, or bonds. They provide an effective way to diversify and reduce risk in an investment portfolio, with the ease of buying and selling like stocks.
       </p>
       </div>
  );
}

export default EtfsWriter;
