'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const MetalWriter = () => {
  return (
    <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Highness Metals'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Include gold, silver, and platinum, which are important commodities in financial markets. Investors turn to them as a safe haven during times of economic and political instability, and they are seen as a means to preserve wealth value.
        </p>
       </div>
  );
}

export default MetalWriter;
