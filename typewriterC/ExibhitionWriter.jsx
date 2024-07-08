'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const ExibhitionWriter = () => {
  return (
    <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Highness Investment LLC'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        We understand the fast-paced Forex market and the significance of staying on top of industry innovations and networking. Our dedication to quality and development extends over our direct client services and into the core of the market's most powerful meetings.
       </p>
       </div>
  );
}

export default ExibhitionWriter;
