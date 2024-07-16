'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const IosWriter = () => {
  return (
  <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Higness ios'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Highness iOS is a user-friendly trading platform that provides real-time market data and customizable trading preferences. It offers push notifications for important market events, a secure trading environment, and the flexibility to access the markets from anywhere at any time. It is an ideal option for busy traders who are looking for a reliable and feature-rich trading platform.
       </p>
       </div>
  );
}

export default IosWriter;
