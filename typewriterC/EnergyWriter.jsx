'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const EnergyWriter = () => {
  return (
    <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Highness Energy Commodities'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Including oil and natural gas, play a vital role in the global economy. The prices of these commodities are influenced by multiple factors such as global politics, environmental laws, and technological changes.
       </p>
       </div>
  );
}

export default EnergyWriter;
