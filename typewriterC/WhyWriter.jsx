'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const WhyWriter = () => {
  return (
   <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Why Highness Investment LLC ?'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        We at Highness, are dedicated to providing you with the best possible trading experience, and helping you achieve your financial goals.</p>
       </div>  
  );
}

export default WhyWriter;
