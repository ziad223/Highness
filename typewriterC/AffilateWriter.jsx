'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
const AffilateWriter = () => {
  return (
     <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Highness Affiliate Program'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Welcome to the Highness Affiliate Program, a unique opportunity for you to join a dynamic and rewarding partnership. As a Highness Affiliate, you have the potential to earn up to $1200 for each qualified trader you bring to our platform.
        </p>
       </div> 
  );
}

export default AffilateWriter;
