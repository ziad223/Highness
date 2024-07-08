'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const SafetyWriter = () => {
  return (
   <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Safety Of Your Funds'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        At Highness Investment LLC, we prioritize the safety of our clients' funds. We utilize state-of-the-art security measures and work with reputable financial institutions to ensure that your investments are protected. Your peace of mind is our top priority.
</p>
       </div> 
  );
}

export default SafetyWriter;
