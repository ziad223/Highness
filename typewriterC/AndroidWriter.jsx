'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
const AndroidWriter = () => {
  return (
     <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Highness Android'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Highness Android is a flexible trading platform that provides real-time market data, customizable trading preferences, and push notifications for important market events. It is a convenient option for traders who want to access the markets from a wide range of Android devices. It offers a secure trading environment and is suitable for both novice and experienced traders.
        </p>
       </div> 
  );
}

export default AndroidWriter;
