'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
const AboutWriter = () => {
  return (
     <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Welcome To Highness Investment LLC'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        Welcome to Highness Investment LLC, the pioneer in the fintech industry, having multiple branches across the United States, the United Kingdom, the UAE, Turkey, and Malaysia. We have our legal standing, as we’re licensed and regulated by 'The Act' for International Financial Services under license number 1465 2021 LLC as a global investment institution. And being under financial surveillance in Mauritius, ensuring you're in safe hands.
        </p>
       </div> 
  );
}

export default AboutWriter;
