'use client'
import React from 'react';
import  Typewriter  from 'typewriter-effect';

const VissionWriter = () => {
  return (
   <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Highness Vision'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        Our strategy is all about focusing on meeting the client's trading demands and simplifying the trading process. We strive to provide a one-of-a-kind and excellent gateway that offers secure and transparent access to financial markets. We continually provide instructional materials and resources, supported by unflinching support for our customers and a persistent commitment to improve our services to maintain our image as a trustworthy broker.
</p>
       </div> 
  );
}

export default VissionWriter;
